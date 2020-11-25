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

function PostDescription({ post }) {
    const urlDelete = `/posts/${post.id}/delete`;
    const urlEdit = `/posts/${post.id}/edit`;

    const [values, setValues] = useState({
        body: '',
    });


    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(post)

        const response = await fetch(`/api/threads/${post.id}`, {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept' : 'application/json', // tell Laravel (backend) what we want in response
                'Content-type' : 'application/json', // tell backend what we are sending
                // 'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
                'X-XSRF-TOKEN': CookieCsrf()
            }
            
        })
        
        const response_data = await response.json();
      
        if (response.status === 200) {
            window.location.reload();
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
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
                <Box display="flex" alignSelf="flex-end">
                    <Link to={urlEdit}>
                        <EditIcon fontSize="large" color="primary" />
                    </Link>
                    <Link to={urlDelete}>
                        <DeleteIcon fontSize="large" color="primary" />{" "}
                    </Link>
                </Box>
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
                    >
                        <Avatar
                            alt={post.user.name}
                            src={post.user.profile_photo_url}
                            variant="circle"
                        />
                        <Typography variant="body1">
                            {post.user.name}
                        </Typography>
                    </Box>
                </Box>
            </div>
            <div className="description">
                <Typography variant="h4" component="h2">
                    Description:
                </Typography>
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
            <Box className="button--post">
                {/* <Link to="/messages/create"> */}
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        disableRipple
                        style={{ textTransform: "none" }}
                        onClick={handleSubmit}
                    >
                        Contact seller hovno
                    </Button>
                {/* </Link> */}
            </Box>
        </section>
    );
}
export default PostDescription;
