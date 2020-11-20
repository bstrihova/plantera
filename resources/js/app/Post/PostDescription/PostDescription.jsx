import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

function PostDescription({ post }) {
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
                <Box>
                    <Link to="/posts/edit">
                        <EditIcon fontSize="large" color="primary" />
                    </Link>
                    <Link to="/posts/delete">
                        <DeleteIcon fontSize="large" color="primary" />{" "}
                    </Link>
                </Box>
                <Typography variant="h3">
                    <h1>{post.name}</h1>
                </Typography>
            </Box>

            <div className="containerRight__upperPart">
                <Box variant="h3" fontWeight={900} color="primary.main">
                    <Typography variant="h3">{post.price} Kč</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box mr={0.6}>
                        <Avatar
                            alt="username"
                            src="/storage/profile-photos/08d0IhlaomLIg3XBk0XDZ7ahfMgmTB5zEs82m6Un.jpeg"
                            variant="circle"
                        />
                    </Box>
                    <Typography variant="body2">bramborienka</Typography>
                </Box>
            </div>
            <div className="description">
                <Typography variant="h4" component="h2">
                    Description:
                </Typography>

                <Typography
                    variant="subtitle1"
                    component="h2"
                    color="primary"
                    className="description__text"
                >
                    {post.description}
                </Typography>

                <Box>
                    <Typography variant="h5" component="h2">
                        Location:{" "}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="h2"
                        color="primary"
                    >
                        Prague, CZ
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
