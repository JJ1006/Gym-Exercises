import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import { fetchData, exerciseOptions } from '../utils/fetchData';

import Detail from '../components/Detail.js';
import ExerciseVideos from '../components/ExerciseVideos.js';
import SimilarExercises from '../components/SimilarExercises.js';

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail