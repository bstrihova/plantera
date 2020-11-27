import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';
import {useHistory} from "react-router-dom";
import { useGlobalContext } from "../context";

function MessagePreviewItem({thread}) {

    let history = useHistory();
    const { user } = useGlobalContext();

    let username = "";
    let avatar = "";

    if (user && thread && thread.buyer && thread.buyer.name && user.id == thread.buyer_id ) {
      avatar =  ( <Avatar alt={thread.seller.name} src={thread.seller.name} />                                 
      ) }  

  else if (user && thread && thread.buyer && thread.buyer.name && user.id != thread.buyer_id){    
      avatar =  (  <Avatar alt={thread.buyer.name} src={thread.buyer.name} />                      
      )}
    
    if (user && thread && thread.buyer && thread.buyer.name && user.id == thread.buyer_id ) {
      username =  (<Typography
                     component="span"
                     variant="body2"
                     color="primary"
                     align='center'
                                  >                      
                          {thread.seller.name}
                      </Typography>               
      ) }  

  else if (user && thread && thread.buyer && thread.buyer.name && user.id != thread.buyer_id){    
      username =  ( <Typography
        component="span"
        variant="body2"
        color="primary"               
        align='center'
                                >                      
        {thread.buyer.name}
     </Typography>               
      )}

    return (
          <div>
            <Grid item xs={12}>
            <Link href="#" onClick={() => {
                  history.push(`/messages/${thread.id}`)
                } }> 

              <ListItem /* secondaryaction="true" */ >          
                  <ListItemAvatar p={2}>
                  {/*   avatar for user with last message in the conversation
                    <Avatar alt={thread.messages[0].user.name} src={thread.messages[0].user.profile_photo_url} /> */}
                    {avatar}
                 </ListItemAvatar>
                
                <ListItemText
                primary=
                {<Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                    align="center">
                    
                    {thread.post.name}
                    
                    </Typography>
                    }

                // {Object.keys(thread).map(function(post) {
                //     return <div>Key: {name}, Value: {post[name]}</div>;
                //   })}

                secondary={
                <React.Fragment>
                
                        {/* {thread.messages[0].user.name} showing author of the last message */}
                        {username}
                    
                        {/* showing last message in the conversation  */}
                        <Box>
                        {thread.messages[thread.messages.length-1].body}
                        </Box>
                     </React.Fragment>
                }
                />
                <Box p={2}>
                <ListItemText 
                primary={<Typography
                component="span"
                variant="body2"
                color="textPrimary"
                align="center">
                
                <Moment fromNow>{thread.created_at}</Moment>
                
                </Typography>
                }
                />
                </Box>

{/*           THIS IS A DELETE ICON - not implemented
                <ListItemSecondaryAction >
                  <IconButton   edge="end" aria-label="delete" p={2}>
                   <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction> */}

            </ListItem>    

            
          </Link>   
          </Grid>
          </div>     
    )    
      }

export default MessagePreviewItem

/*  for testing connection with Laravel blades
    if (document.getElementById('MessagePreviewItem')) {
    ReactDOM.render(<MessagePreviewItem />, document.getElementById('MessagePreviewItem'));
} */