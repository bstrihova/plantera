import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function PostDelete() {
    let { id } = useParams();
    const [post, setPost] = useState("");
    const [loading, setLoading] = React.useState(true);

    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();
        // CHECK IF THE LINK IS CORRECT!
        const response = await fetch(`/api/posts/${id}/delete`, {
            method: "delete",
            headers: {
                Accept: "application/json", // tell Laravel (backend) what we want in response
                "Content-type": "application/json", // tell backend what we are sending
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content") // prove to backend that this is authorized
            }
        });

        const response_data = await response.json();

        //The user is authenticated,
        if (response.status === 200) {
            history.push("/");
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }
    };

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
                    Archive your post
                </Typography>
            </Box>
            <section className="main__container__shadow--delete main__container__shadow">
                <Box mt={4}>
                    <Typography variant="h5" gutterBottom>
                        Are you sure you want to archive this post?
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Typography fontWeight={900} variant="h5" color="primary">
                        {post.name}
                    </Typography>
                </Box>
                <img src={post.photo} alt={post.name} />
                <div className="button--deleteGroup">
                    <Button
                        onClick={handleSubmit}
                        className="button"
                        color="primary"
                        variant="contained"
                        size="large"
                        disableRipple
                        style={{ textTransform: "none" }}
                    >
                        Archive
                    </Button>
                    <Button
                        onClick={() => history.push(`/posts/${id}`)}
                        className="button"
                        color="primary"
                        variant="outlined"
                        size="large"
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
