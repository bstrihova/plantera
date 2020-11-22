import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";

function PostDelete() {
    let { id } = useParams();
    const [post, setPost] = useState("");
    const [loading, setLoading] = React.useState(true);

    const loadPost = async () => {
        setLoading(true);
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();
        data && setPost(data);
        setLoading(false);
    };

    useEffect(() => {
        loadPost();
    }, []);
    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Delete your post
                </Typography>
            </Box>
            <section className="main__container__shadow--delete main__container__shadow">
                <Box mt={4}>
                    <Typography variant="h4" gutterBottom>
                        Are you sure you want to delete this post?
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Typography fontWeight={900} variant="h3" color="primary">
                        {post.name}
                    </Typography>
                </Box>
                <img src={post.photo} alt={post.name} />
                <div className="button--deleteGroup">
                    <Button
                        className="button"
                        color="primary"
                        variant="contained"
                        size="large"
                        disableRipple
                        style={{ textTransform: "none" }}
                    >
                        Delete
                    </Button>
                    <Button
                        className="button"
                        color="primary"
                        variant="outlined"
                        size="small"
                        disableRipple
                        style={{ textTransform: "none" }}
                    >
                        No
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default PostDelete;
