import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import MessagePreviewItem from './MessagePreviewItem';
import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import { useGlobalContext } from "../context";



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


export default function Messages() {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useGlobalContext();

  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = React.useState(true);

 const loadThreads = async () => {
      setLoading(true);
      const response = await fetch("/api/threads/", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      if(data.message) {
        history.push("/login")
      }
      data && setThreads(data);
      setLoading(false);
  }
  
  useEffect(() => {
      loadThreads();
  }, [])
  
  let threadContent = "";

 
  
  if (loading) {
      threadContent = (
          <div className="logo--pulsating">
              <img src="/heart_plantera_inversed.png"/>
          </div>
      );
  } else {
      if (threads.length) {

        const filteredThreadArray = threads
        .filter((thread)=> (user.id === thread.seller_id || user.id === thread.buyer_id))
        
        if (filteredThreadArray.length === 0) {
           
          threadContent = ( <Typography> No messages found :( </Typography>)
      } else {

          threadContent = (

      <Box className="boxshadow">                             
             <List>

             {filteredThreadArray
            .map((thread, index,arr) => 
            <div 
            key={thread.id}
            >
              <MessagePreviewItem 
              thread={thread} 
              /> {index != (arr.length-1) ? <Divider variant='middle'/> : ''}
            </div>)}

            {/* {posts.filter((post) => (post.name.toLowerCase().includes(searchValue.toLowerCase())))
                            .filter((post)=>post.available)
                            .map((post, index) => (
                            <div key={index}>
                                <PostPreview post={post}/>
                            </div>
                    ))} */}
              
               
              </List>
              </Box> 
       
            
        );
      }
      } }
      
  

  return (
    <div>
    <Container>
      <Grid  container 
             direction="column"
             alignItems="center"
             >

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



         
        <Grid item xs={12} lg={6}> 
          {threadContent}
         </Grid>
         </Grid>
    </Container>
  </div>
  )
}