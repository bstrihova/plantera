import React from 'react';
import Box from '@material-ui/core/Box';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import Previews from './Previews';

const FadedShadow = () => {
  const styles = useFadedShadowStyles();
  return <Box width={'80%'} borderRadius={24} height={160} classes={styles} >
       <Previews />
       </Box>;
};


export default FadedShadow;