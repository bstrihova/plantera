import React from 'react'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useGlobalContext } from "../context";
import Tooltip from '@material-ui/core/Tooltip';
import Moment from 'react-moment';


function ThreadShowItem({ message }) {

  const { user } = useGlobalContext();
  const isSender = message.user.id == user.id;

  // define format of time of message
  const calendarStrings = {
    lastDay: 'ddd LT',
    sameDay: 'LT',
    lastWeek: 'ddd LT',
    sameElse: 'D MMM YYYY, HH:mm'
  };

  return (
    <>
      {/* time of message sent */}
      <Grid item xs={12}>
        <Typography
          component="span"
          variant="body2"
          style={{ color: "#8A8D91" }}
        >
          <Moment calendar={calendarStrings} locale="cs">
            {message.created_at}
          </Moment>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {/* <Tooltip
          title={
            <Moment calendar={calendarStrings} locale="cs">
              {message.created_at}
            </Moment>
          }
          placement={!isSender ? "left" : "right"}
        > */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="flex-start"
          // align message to right if you are sending the message
          direction={
            !isSender ?
              "row" :
              "row-reverse"
          }
        >
          {/* display only when is reciever */}
          <Box display={isSender ? "none" : "block"}>
            <Grid item>

              <Avatar
                alt={message.user.name}
                src={message.user.profile_photo_url}
                style={{ margin: "0 0.5rem" }}
              />
            </Grid>
          </Box>
          <Grid
            item
            style={{ maxWidth: "70%" }}
            className={`message__text alignItemsCenter ${!isSender ? "message--sender" : "message--reciever"}`}
          >
            <Typography
              component="span"
              variant="body2"
            >
              {message.body}
            </Typography>
          </Grid>
        </Grid>
        {/* </Tooltip> */}
      </Grid>
    </>
  )
}
export default ThreadShowItem