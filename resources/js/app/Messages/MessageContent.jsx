import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useGlobalContext } from "../context";


function MessageContent({message, seller}) {

      
      const { user } = useGlobalContext();
      let role = "";

      if (message.user.id != user.id) {
        role = "message--sender"
      } else {
        role = "message--reciever"
      }
      

      return (
 <div>
     <ListItem 
        className={role}
        alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={message.user.name} src={message.user.profile_photo_url} />
            </ListItemAvatar>
            <ListItemText className="message--sender message__text"
                primary={
                <React.Fragment>
                    
                    <Typography
                        component="span"
                        variant="body2">
              {message.body} 
              </Typography>
              </React.Fragment>}>
          
                </ListItemText>
      </ListItem>
     
      {/* <ListItem className="message--local" alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText className="message--local message__text"
           primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                
              >
              {"I am a reciver / I have flower to sell"} 
              </Typography>
            </React.Fragment>
          }
          />
      </ListItem>   */}  
 </div>

   /*     <ListItem className={specificRole} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            </ListItemAvatar>

            <ListItemText className="message__text" >                
                <Typography
                        component="span"
                        variant="body2"
                        
                    >
                    {"I am a sender / I want your plant"} 
                </Typography>
            </ListItemText>


        </ListItem>  */

    
)
} 
export default MessageContent