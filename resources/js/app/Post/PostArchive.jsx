import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function PostArchive() {
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

    let postContent = "";

    if (loading) {
        postContent = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png" />
            </div>
        );
    } else if (post) {
        postContent = (
            <Grid
                container
                className="
                    main__container__shadow
                    "
                justify="center"
                align="center"
                spacing={4}
            >
                <Grid item>
                    <Typography variant="h5">
                        Opravdu chceš archivovat: <Box
                            fontWeight={900}
                            color="primary.main"
                        >
                            {post.name}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item style={{ fontSize: 0 }}>
                    <img
                        src={post.photo}
                        alt={post.name}
                        className="imagePost--archive"
                    />
                </Grid>
                <Grid item xs={9} sm={6} md={4} lg={3}>
                    <Button
                        fullWidth
                        onClick={handleSubmit}
                        className="button"
                        color="primary"
                        variant="contained"
                        size="large"
                        disableRipple
                    >
                        Archivovat
                    </Button>
                </Grid>
                <Grid item xs={9} sm={6} md={4} lg={3}>
                    <Button
                        fullWidth
                        onClick={() => history.push(`/posts/${id}`)}
                        className="button"
                        color="primary"
                        variant="outlined"
                        size="large"
                        disableRipple
                    >
                        Ne
                    </Button>
                </Grid>
            </Grid>
        );
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={10} md={6}>
                <Box p={4}>
                    <Typography
                        variant="h3"
                        color="primary"
                        gutterBottom
                    >
                        Archivovat nabídku
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={10} md={6}>
                {postContent}
            </Grid>
        </Grid>
    );
}

export default PostArchive;
