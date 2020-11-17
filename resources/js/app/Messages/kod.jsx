import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import MessagePreviewItem from './MessagePreviewItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      },
}));

export default function Messages() {
  const classes = useStyles();

  return (
      <div className="main__container"> 
     
        <Box >
            <Typography variant="h3" color="primary" gutterBottom>
                Messages
            </Typography>
        </Box> 
      

        <Box className="main__container__shadow main__container__shadow--messages">
       <List className={classes.root}>
         <MessagePreviewItem />

            <Divider variant="middle" component="li" />

            <MessagePreviewItem />

            <Divider variant="middle" component="li" />

            <MessagePreviewItem />

       </List>
                    
          </Box>
                 
       
    </div>
  );
}
