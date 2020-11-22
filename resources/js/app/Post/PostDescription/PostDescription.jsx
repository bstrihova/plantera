import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import LoopIcon from "@material-ui/icons/Loop";
import { Link } from "react-router-dom";

function PostDescription({ post }) {
    let postTransaction = "";

    if (post.transaction === "sell") {
        postTransaction = `${post.price} ${post.currency}`;
    } else if (post.transaction === "swap") {
        postTransaction = (
            <Box display="flex" alignItems="center" justifyContent="flex-start">
                <LoopIcon style={{ fontSize: "150%" }} />
                <Typography variant="h5" color="primary" gutterBottom>
                    Swap
                </Typography>
            </Box>
        );
    } else if (post.transaction === "donate") {
        postTransaction = "FREE";
    }

    const urlDelete = `/posts/${post.id}/delete`;
    const urlEdit = `/posts/${post.id}/edit`;

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
                <Typography variant="h2">{post.name}</Typography>
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
                    <Box variant="h3" fontWeight={900} color="primary.main">
                        <Typography variant="h3">{postTransaction}</Typography>
                    </Box>
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
                <Link to="/messages/create">
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        disableRipple
                        style={{ textTransform: "none" }}
                    >
                        Contact seller
                    </Button>
                </Link>
            </Box>
        </section>
    );
}
export default PostDescription;
