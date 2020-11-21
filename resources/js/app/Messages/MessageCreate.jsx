import React, { useState, useEffect } from 'react';
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
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import MessageContent from './MessageContent';
import PostBox from './PostBox';

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

//  const [thread, setThread] = useState("");
//  const [loading, setLoading] = React.useState(true);
 
//  const loadThread = async () => {
//      setLoading(true);
//      const response = await fetch("/api/thread/${id}");
//      const data = await response.json();
//      data && setThread(data);
//      setLoading(false);
//  }
 
//  useEffect(() => {
//      loadThread();
//  }, [])
 


export default function MessageCreate() {
  const classes = useStyles();

  const [threads, setThreads] = useState([]);
  // const [posts, setPosts] = useState("");
  const [loading, setLoading] = React.useState(true);
  // const [currentPostId, setCurrentPostId] = useState("");

  const loadThreads = async () => {
      setLoading(true);
      const response = await fetch("/api/threads/");
      const data = await response.json();
      data && setThreads(data);
      setLoading(false);
  }

  useEffect(() => {
      loadThreads();
  }, [])

  return (
    <div>
      <Container maxWidth={false}>
        <Grid  container 
               direction="column"
               alignContent="center"
               p={3}
               >

              <Grid item xs={12} lg={6}>
              <Box p={5}>                                
                  <Typography variant="h3" 
                              color="primary"
                              align='center'
                              >                      
                      Username
                  </Typography>               
              </Box>
            </Grid>

          <Grid item xs={12} lg={6} > 
           <PostBox />
          </Grid>

            <Grid item xs={12} lg={6}> {/* here messages */}
                <List p={5}>
                      <MessageContent role={"local"} />
                      <MessageContent role={"remote"} />
                                           
                </List> 
              </Grid>

            <Grid item xs={12} lg={6}> 

     {/* here is write message box */}
                                 
                <FormControl fullWidth hiddenLabel variant="filled">
                
                <FilledInput
                  id="create-message"
                  type= "text"
                  placeholder="Write a message"
                  
                  // sending icon 
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="action send message"
                          // onClick={handleSendMessege}
                          edge="end"
                          color="primary"
                        >
                        <SendIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                />
              </FormControl>
            
          </Grid>





              
        </Grid>
      </Container>
    </div>
  );
}