import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

function MessagePreviewItem() {

  const loadDivider = true;

    return (
          <div>
            <Grid item xs={12}>
              <ListItem secondaryaction="true" >          
                  <ListItemAvatar p={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 </ListItemAvatar>
                
                <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        color="primary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
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
                
                    11:15
                </Typography>
                }
                />
                </Box>

                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" p={2}>
                   <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>

            </ListItem>    

      
       { loadDivider ? <Divider variant="middle" /> 
                     : <React.Fragment></React.Fragment>
                     }
             
          </Grid>
          </div>     
    )    
      }

export default MessagePreviewItem
