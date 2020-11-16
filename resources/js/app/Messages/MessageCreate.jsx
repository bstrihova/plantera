import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
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
  
function MessageCreate() {
    return (
        <div className="main__container">        
       
    {/* Heading */}
       <Box display="flex" alignItems="center">
                      
          <Avatar alt="username" src="/storage/profile-photos/08d0IhlaomLIg3XBk0XDZ7ahfMgmTB5zEs82m6Un.jpeg" variant="circle"/>
                        
          <Typography variant="h3" color="primary">
              Username
          </Typography>
        </Box>
    

   <div className="main__container__shadow--messages main__container__shadow">

   
    
        <img className="imagePost" src="https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

        <Box display="flex" flexDirection="column" p={2} mr={2}>
    
        <Typography variant="h6" >
            Snake plant little baby
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
                    <Box component="h3" variant="body1" fontWeight={700} color="primary.main">
                150 Kč
            </Box>
        </Box>

      <FormControl>
        <InputLabel id="status">Status</InputLabel>
        <MuiSelect labelId="status">
            <MuiMenuItem value="1">Available</MuiMenuItem>
            <MuiMenuItem value="2">Sold</MuiMenuItem>
        </MuiSelect>
      </FormControl> 
    </Box>

    </div>

  

   <List className="chat">
   <ListItem className="message--remote" alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
        </List>

   <section className="create-message">
   <FormControl fullWidth  variant="filled">
          
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
     </section>

  
   </div>
    )
}

export default MessageCreate


