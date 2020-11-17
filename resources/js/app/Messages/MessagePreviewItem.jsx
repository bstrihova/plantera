import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


function MessagePreviewItem() {
    return (
          <div>
            <Grid item xs={12}>
              <ListItem >          
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 </ListItemAvatar>
                
                <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
                />

                <ListItemText 
                primary={<Typography
                component="span"
                variant="body2"
                color="textPrimary">
                    11:15
                </Typography>
                }
                />

                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                   <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
            </ListItem>                  
          </Grid>
          </div>     
    )


       {/* <ListItem >          
         <ListItemAvatar>
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         </ListItemAvatar>
         <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
                />
          <ListItemText 
                primary={<Typography
                component="span"
                variant="body2"
                color="textPrimary"
            >
               11:15
            </Typography>}
          
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
            </ListItem>
            </Box>
      
       */}
      }


export default MessagePreviewItem
