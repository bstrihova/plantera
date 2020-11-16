import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles =() => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: 0,
    },
    withoutLabel: {
      marginTop: 5,
    },
   
  });

const classes = useStyles();
  
function MessageCreate() {
    return (
        <div>            
            <main>

     {/* // <ExampleComponent/> */}

           
    
    <section className="chat">
    <Box component="div" whiteSpace="normal">
    <Box display="flex" alignItems="center">
                        <Box mr={0.6}>
                            <Avatar alt="username" src="/storage/profile-photos/08d0IhlaomLIg3XBk0XDZ7ahfMgmTB5zEs82m6Un.jpeg" variant="circle"/>
                        </Box>
                        <Typography variant="body2" >
                            bramborienka
                        </Typography>
                    </Box>
     {/*  <Typography variant="h3" color="primary" gutterBottom>
          Username (sender)
      </Typography> */}
     </Box> 
   </section>

   <div className="chat">

    <Box
        display="flex" 
        alignItems="center"
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '25rem', height: 'auto' }}
      >
      <Box width="25%">     
      <img src={"https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}/>
      </Box>
                <Typography variant="h6" >
                    Snake plant little baby
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between" mt={-1}>
                  
                        <Box component="h3" variant="body1" fontWeight={700} color="primary.main">
                            150 Kč
                        </Box>
                </Box>
            
        
    </Box>
    </div>

   <div className="chat">

   <List>
   <ListItem className="message--remote" alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText className="message--remote message__text"
           primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                
              >
              {"I am a sender / I want your plant"} 
              </Typography>
            </React.Fragment>
          }
          />
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
                className={classes.inline}
                
              >
              {"I am a reciver / I have flower to sell"} 
              </Typography>
            </React.Fragment>
          }
          />
      </ListItem>
        </List>

   <section className="create-message">
   <FormControl fullWidth className={classes.textField} variant="filled">
          <InputLabel htmlFor="create-message">Write a message</InputLabel>
          <FilledInput
            id="create-message"
            type= "text"
            value=""
           

           // sending icon 
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="action send message"
                  // onClick={handleSendMessege}
                  edge="end"
                >
                <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
     </section>
      
     </div>


   </main>
   </div>
    )
}

export default MessageCreate


