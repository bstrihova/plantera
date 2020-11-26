import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PostPrice from "../../common/PostPrice/PostPrice";
import { Link } from "react-router-dom";
import CookieCsrf from "../../csrf"
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../context";

function PostDescription({ post }) {
    const urlDelete = `/posts/${post.id}/delete`;
    const urlEdit = `/posts/${post.id}/edit`;

    const history = useHistory();

    let contactSellerButton = "";

    const { user } = useGlobalContext();

    let editDeleteButtons = "";

    if (user && user.id === post.user.id) {
        editDeleteButtons = (
            <Box display="flex" alignSelf="flex-end">
                    <Link to={urlEdit}>
                        <EditIcon fontSize="large" color="primary" />
                    </Link>
                    <Link to={urlDelete}>
                        <DeleteIcon fontSize="large" color="primary" />{" "}
                    </Link>
                </Box>
        )
        
    } else {
        contactSellerButton = (
            <Box className="button--post">
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        disableRipple
                        style={{ textTransform: "none" }}
                        onClick={handleSubmit}
                    >
                        Contact seller
                    </Button>
            </Box>
        )
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.id) {


        const response = await fetch(`/api/newthread/${post.id}/${post.user_id}`, {
            method: 'post',
            // body: JSON.stringify(values),
            headers: {
                'Accept' : 'application/json', // tell Laravel (backend) what we want in response
                'Content-type' : 'application/json', // tell backend what we are sending
                // 'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
                'X-XSRF-TOKEN': CookieCsrf()
            }
            
        })
        
        const response_data = await response.json();
        console.log(response);
        console.log(response_data);
      
        if (response.status === 200) {
            history.push(`/messages/${response_data.thread}`);
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }
    } else {
        history.push(`/login`)
    }

    }

    return (
        <section className="containerRight">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                variant="h2"
                fontWeight={900}
                color="primary.main"
            >
                {editDeleteButtons}
                <Typography variant="h3">
                    <Box fontWeight="fontWeightMedium">{post.name}</Box>
                </Typography>
            </Box>
            ​
            <div className="containerRight__upperPart">
                <Box
                    my={0.6}
                    mb={1}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography>
                        <Box
                            fontSize="h2.fontSize"
                            fontWeight="fontWeightMedium"
                        >
                            <PostPrice isPostDescription={true} post={post} />
                        </Box>
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        onClick={()=> {history.push(`/user/profile/${post.user_id}`)}} style={{cursor:"pointer"}}
                    >
                        <Avatar
                            alt={post.user.name}
                            src={post.user.profile_photo_url}
                            variant="circular"
                        />
                        <Typography variant="body1">
                            {post.user.name}
                        </Typography>
                    </Box>
                </Box>
            </div>
            <div className="description">
                <Box whiteSpace="normal">
                <Typography variant="h4" component="h2" >
                    Description:
                </Typography>
                </Box>
                ​
                <Typography
                    variant="subtitle1"
                    component="h2"
                    color="primary"
                    className="description__text"
                >
                    {post.description}
                </Typography>
                ​
                <Box>
                    <Typography variant="h5" component="h2">
                        Location:{" "}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="h2"
                        color="primary"
                    >
                        {post.user.location}
                    </Typography>
                </Box>
            </div>
            {contactSellerButton}
        </section>
    );
}
export default PostDescription;
