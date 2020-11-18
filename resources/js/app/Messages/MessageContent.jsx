import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

function MessageContent({role}) {

    const specificRole = `message--${role}`

    return (
/* <div>
       /* <ListItem className="message--remote" alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className="message--remote message__text"
                primary={
                <React.Fragment>
                    
                    <Typography
                        component="span"
                        variant="body2">
              {"I am a sender / I want your plant"} 
              </Typography>
              </React.Fragment>}>
          
                </ListItemText>

      </ListItem>

      <ListItem className="message--local" alignItems="flex-start">
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
      </ListItem>    
 */

       <ListItem className={specificRole} alignItems="flex-start">
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


        </ListItem> 

    
)
} 
export default MessageContent
