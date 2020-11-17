import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from '@material-ui/core/InputBase';
import MessageContent from './MessageContent';
import MessagePreviewItem from './MessagePreviewItem';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    },

 
}));

/* createBreakpoints
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px */


export default function Messages() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid  container 
               direction="column"
               justify='center'
               mx="auto">

            <Grid item xs={12}>
              <Box mx="auto" p={5}>                                
                  <Typography variant="h3" 
                              color="primary"
                              align='center'
                              >                      
                      Messages
                  </Typography>               
              </Box>
            </Grid>

           
          <Grid item xs={12}> 
            <Box className="boxshadow">                             
               <List>
                  <MessagePreviewItem />

                    <Divider variant="middle" component="li" />

                  <MessagePreviewItem />

                    <Divider variant="middle" component="li" />

                  <MessagePreviewItem />

                </List>
                </Box> 
                </Grid>
                            
              
           </Grid>
      </Container>
    </div>
    )}



