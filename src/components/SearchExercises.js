import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  // const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])


  const handleSearch = async () => {
    if (search) {
      // Fetch exercise data from API
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
  
      // Filter exercise data based on search query
      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      )
  
      // Log exercise data and searched exercises to console
      console.log("I am before");
      console.log(exerciseData);
      console.log(searchedExercises);
  
      // Clear search input and update exercises state variable with searched exercises
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box
        position="relative"
        mb="72px">

        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: "absolute",
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>

      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>

    </Stack>
  )
}

export default SearchExercises