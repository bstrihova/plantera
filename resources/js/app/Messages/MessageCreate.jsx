import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";

/* createBreakpoints
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px */


function MessageCreate() {

  let { id } = useParams();
  const [thread, setThread] = useState("hovno");
  const [loading, setLoading] = React.useState(true);

  const loadThread = async () => {
      setLoading(true);
      const response = await fetch(`/api/threads/${id}`);
      const data = await response.json();
      // console.log(data.thread)
      // data && data.thread && setThread(data.thread.buyer);
      setThread(data);
      console.log(thread)
      setLoading(false);
  };
  
  useEffect(() => {
    loadThread();
  }, [])

  let messageContent = "";

  
  if (loading) {
    /* thread content - username, box, message - from component */
    messageContent = (
        <div className="logo--pulsating">
            <img src="/heart_plantera_inversed.png"/>
        </div>)
   
} else {
    // if (thread.length) {


    //     messageContent = (
    //         <>
    //         {/* {thread.messages.map((message, index) => (
    //           <div key={index}>
    //             <MessageContent thread={thread} />
    //           </div>
    //         ))} */}
    //         hello
    //         </>
    //   );
    // } else {
        
        messageContent = "No messages found.";
    
  }

  return (
    <div className="main__container">
      {/* {messageContent} */}
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
          <Box className="boxshadow">   

            <Grid  container 
                direction="row"
                justify='center'
                alignItems='center'
                >                                 
                <Grid item xs={12} lg={5}>    
                {/* conditional rendering on image class for desktop */}
                    <img className="imageMessage" src="https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

                </Grid>  

                <Grid item xs={7} >                        
                    <Box p={3}> 
                    <Box p={1}>             
                    <Typography variant="h6"  align="center">
                            Snake plant little baby
                            {/* {thread.post.name} */}
                    </Typography>
                    </Box>
                    <Box p={1}> 
                    <Typography variant="h6"  color="primary" align='center'>
                            150 Kč
                    </Typography>
                    </Box>
                    <Box>   
                        <FormControl fullWidth >
                        <InputLabel id="status">Status</InputLabel>
                            <MuiSelect labelId="status">
                            <MuiMenuItem /* value={`Available`} */>Available</MuiMenuItem>
                            <MuiMenuItem /* value={'Sold'} */>Sold</MuiMenuItem>
                        </MuiSelect>
                        </FormControl> 
                    </Box>   
                    </Box>
                </Grid>

            </Grid>
            </Box> 
          </Grid>

            <Grid item xs={12} lg={6}> {/* here messages */}
                <List p={5}>
                      <MessageContent role={"local"} />
                      <MessageContent role={"remote"} />
                                           
                </List> 
              </Grid>

              {/* here is write message box */}

            <Grid item xs={12} lg={6}> 

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

export default MessageCreate