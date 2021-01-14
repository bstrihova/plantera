import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ArchiveIcon from '@material-ui/icons/Archive';
import { useGlobalContext } from "../context";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PostPrice from "../common/PostPrice/PostPrice";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CookieCsrf from "../csrf"
import MessageIcon from '@material-ui/icons/Email';
import { useHistory } from "react-router-dom";

import Carousel from 'react-material-ui-carousel'


function PostDescription({ post, threads }) {
  const history = useHistory();
  const urlArchive = `/posts/${post.id}/archive`;
  const urlEdit = `/posts/${post.id}/edit`;
  const { user } = useGlobalContext();
  let editArchiveButtons = "";

  const images = [
    {
      src: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      alt: "sansevieria"
    },
    {
      src: "https://images.unsplash.com/photo-1600958568384-51f4289e943a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      alt: "lady hugging sansevieria"
    }
  ]

  if (user && user.id === post.user.id) {
    editArchiveButtons = (
      <Grid item xs={12}>
        <Link to={urlEdit}>
          <EditIcon fontSize="large" color="primary" />
        </Link>
        <Link to={urlArchive}>
          <ArchiveIcon fontSize="large" color="primary" />
        </Link>
      </Grid>
    )

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/newthread/${post.id}/${post.user_id}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json', // tell Laravel (backend) what we want in response
        'Content-type': 'application/json', // tell backend what we are sending
        // 'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
        'X-XSRF-TOKEN': CookieCsrf()
      }

    })

    const response_data = await response.json();

    if (response.status === 200) {
      history.push(`/messages/${response_data.thread}`);
    }

    if (response_data.errors) {
      setErrors(response_data.errors);
    }
  }



  // returns true if a thread about this post between signed-in user and seller already exists
  const threadExists = (thread) => (
    thread.post_id == post.id
    && thread.seller_id == post.user_id
    && thread.buyer_id == user.id
  );

  // THIS IS NOT WORKING SO I AM OMITTING IT FOR NOW

  // returns index number of the existing thread
  // const existingThreadId = threads.findIndex(threadExists);
  // console.log('existingThreadId', existingThreadId)
  // console.log('user.id', user.id)

  return (
    <Grid
      container
      className="main__container__shadow marginTopContainer"
      justify="center"
      align="center"
    >
      <Grid item xs={12} sm={5} style={{ fontSize: "0" }}>
        {/* <Carousel
            autoPlay={false}
            animation="slide"
            fullHeightHover={true}
            className="carousel"
          >
            {
                images.map((image, i) => {
                  return (
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        key={i} 
                        className="imagePost"
                    />
                  ) 
                } 
                )
            }
          </Carousel> */}
        <img
          src={post.photo}
          alt={post.name}
          className="imagePost"
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Grid
          container
          spacing={3}
          align="center"
          className="paddingContainer"
          justify="center"
        >
          {editArchiveButtons}
          <Grid item xs={12}>
            <Typography variant="h3">
              <Box
                fontWeight="fontWeightMedium"
                color="primary.main"
                whiteSpace="normal"
              >
                {post.name}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6}>
                <Box component="h1" fontWeight={900} whiteSpace="nowrap">
                  <PostPrice post={post} isPost={true} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => {
                    history.push(`/user/profile/${post.user.id}`)
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Avatar
                    alt={post.user.name}
                    src={post.user.profile_photo_url}
                    variant="circular"
                    children={post.user.name}
                  />
                  {post.user.name}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
            >
              Popis:
              </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              component="h2"
              color="primary"
              className="description__text"
            >
              {post.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            Oblast: Prague, Czech Rebublic
            </Grid>
          {/* do not display a button for messaging at all if you are the seller of this post */}
          {post.user_id != user.id ? (
            <Grid item xs={12} lg={6}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                disableRipple
                // if thread already exists, redirect to messages, or submit the form to create a new message
                onClick={threads && threads.some(threadExists) ? () => {
                  history.push(`/messages/`)
                } : handleSubmit}
                startIcon={<MessageIcon />}
              >
                {threads && threads.some(threadExists) ? "Zprávy" : "Napsat zprávu"}
              </Button>
            </Grid>
          ) : ""}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PostDescription;