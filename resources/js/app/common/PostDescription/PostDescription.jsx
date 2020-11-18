import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function PostDescription() {
    const [posts, setPosts] = useState("");
    const [loading, setLoading] = React.useState(true);

    const loadPosts = async () => {
        setLoading(true);
        const response = await fetch("/api/posts/2");
        const data = await response.json();
        data && setPosts(data);
        setLoading(false);
    };

    useEffect(() => {
        loadPosts();
    }, []);
    return (
        <section className="containerRight">
            <div className="containerRight__upperPart">
                <Box variant="h3" fontWeight={900} color="primary.main">
                    <Typography variant="h3">{posts.price} Kč</Typography>
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
                    {posts.description}
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

                <Link to="/messages/create">
                    <Button
                        className="button--post"
                        color="primary"
                        variant="contained"
                        size="medium"
                        disableRipple
                        style={{ textTransform: "none" }}
                    >
                        Contact seller
                    </Button>
                </Link>
            </div>
        </section>
    );
}

export default PostDescription;
