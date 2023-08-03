import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// This component renders the left arrow for the horizontal scroll bar
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    // The Typography component is used to create a clickable arrow
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// This component renders the right arrow for the horizontal scroll bar
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    // The Typography component is used to create a clickable arrow
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// This component renders the body parts scroll bar at the top of the page
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  // The ScrollMenu component is used to create a horizontal scroll bar
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {/* Map over the data array to create a Box component for each item */}
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {/* Render the BodyPart component for each item */}
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;

