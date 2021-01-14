import React, { useState, useEffect } from "react";
import PostGrid from "../common/PostGrid/PostGrid";
import PostDescription from "./PostDescription"

import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

function Post ({ searchValue, setSearchValue }) {
    let { id } = useParams();
    const [post, setPost] = useState("");
    const [threads, setThreads] = useState([]);
    const [loading, setLoading] = React.useState(true);


    const loadPost = async () => {
        setLoading(true);
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();
        data && setPost(data);
        setLoading(false);
    };

    const loadThreads = async () => {
        const response = await fetch(`/api/threads`);
        const data = await response.json();
        data && setThreads(data);
    };


    useEffect(() => {
        loadPost();
        loadThreads();
        window.scrollTo(0, 0);
    }, [ id ]);

    let postContent = "";

    if (loading) {
        postContent = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png" />
            </div>
        );
    } else if (post) {
        postContent = (
            <>
                <PostDescription post={post} threads={threads} />
            </>
        );
    }
    return (
        <Grid  
            container 
            direction="column"
            justify="center"
            alignItems="center"
        > 
            <Grid item xs={10} sm={7}>
                {postContent}
            </Grid>
            <Grid item>
                <PostGrid
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    specificPost={post.id}
                />
            </Grid>
        </Grid>
    );
}

export default Post;
