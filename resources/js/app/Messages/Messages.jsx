import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import MessagesItem from './MessagesItem';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import { useGlobalContext } from "../context";

export default function Messages() {
  const history = useHistory();
  const { user } = useGlobalContext();

  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = React.useState(true);

  const loadThreads = async () => {
    setLoading(true);
    const response = await fetch("/api/threads", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    if (data.message) {
      history.push("/login")
    }
    data && setThreads(data);
    setLoading(false);
  }

  useEffect(() => {
    loadThreads();
  }, [])

  let messagesContent = "";

  if (loading) {
    messagesContent = (
      <div className="logo--pulsating">
        <img src="/heart_plantera_inversed.png" />
      </div>
    );
  } else if (threads.length
    && threads[0].messages[0].created_at
  ) {

    const filteredThreadArray =
      threads
        .filter((thread) => (user.id === thread.seller_id || user.id === thread.buyer_id))

    if (filteredThreadArray.length === 0) {
      messagesContent = (
        <Typography>
          Žádné zprávy nenalezeny :(
        </Typography>
      )
    } else {
      messagesContent = (
        <Grid
          container
          className="
                main__container__shadow 
                "
          justify="center"
          align="center"
        >
          <List>
            {filteredThreadArray
              .sort((a, b) =>
                new Date(b.messages[b.messages.length - 1].created_at)
                -
                new Date(a.messages[a.messages.length - 1].created_at)
              )
              .map((thread, index, arr) => (
                <div key={index}>
                  <MessagesItem
                    thread={thread}
                  />
                  {/* insert a Divider after each but not last item of the array */}
                  {index != (arr.length - 1) ? (
                    <Divider
                      variant='middle'
                    />
                  ) : ''}
                </div>
              ))}
          </List>
        </Grid>
      );
    }
  } else {
    messagesContent = "jsi v píči"
  }



  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={10} lg={6}>
        <Box p={4}>
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
          >
            Zprávy
                    </Typography>
        </Box>
      </Grid>
      <Grid item xs={10} lg={6}>
        {messagesContent}
      </Grid>
    </Grid>
  )
}