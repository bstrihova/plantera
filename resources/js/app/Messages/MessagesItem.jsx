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
import Moment from 'react-moment';
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

function MessagesItem({ thread }) {

  let history = useHistory();
  const { user } = useGlobalContext();

  let username = "";
  let avatar = "";

  // show avatar and username of the other person you are writing with
  if (user && thread && thread.buyer && thread.buyer.name && user.id == thread.buyer_id) {
    avatar = (
      <Avatar
        alt={thread.seller.name}
        src={thread.seller.name}
      />
    )
    username = thread.seller.name
  } else {
    avatar = (
      <Avatar
        alt={thread.buyer.name}
        src={thread.buyer.name}
      />
    )
    username = thread.buyer.name
  }

  // show latest message
  let latestMessage = thread.messages[thread.messages.length - 1];
  let showMessage = "";

  // if message has more than 10 words, show only 10 words and three dots...
  if (latestMessage.body.split(" ").length > 10) {
    showMessage = (
      `${latestMessage.body.split(" ").splice(0, 10).join(" ")}...`
    )
  } else {
    showMessage = latestMessage.body
  }



  return (
    <Grid
      item
      onClick={() => {
        history.push(`/messages/${thread.id}`)
      }}
      style={{ cursor: "pointer" }}
    >
      <ListItem /* secondaryaction="true" */ >
        <ListItemAvatar p={2}>
          {avatar}
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component="span"
              variant="body2"
              color="textPrimary"
              align="center"
            >
              {thread.post.name}
            </Typography>
          }
          secondary={
            <>
              <Typography
                variant="body2"
                color="primary"
              >
                {username}
              </Typography>

              {/* if you are author of the message, specify it's you who wrote it */}
              {latestMessage.user_id == user.id ? "Ty: " : ""}

              {/* show last message in conversation  */}
              {showMessage}
            </>
          }
        />
        <Box p={2}>
          <ListItemText
            primary={
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
                align="center"
              >
                <Moment fromNow locale="cs">
                  {thread.messages[thread.messages.length - 1].created_at}
                </Moment>
              </Typography>
            }
          />
        </Box>

        {/* delete icon */}
        {/* <ListItemSecondaryAction >
          <IconButton
            edge="end"
            aria-label="delete" 
            p={2}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction> */}

      </ListItem>
    </Grid>
  )
}

export default MessagesItem