import React, { useState, useEffect } from "react";
import PostGrid from "../common/PostGrid/PostGrid";
import PostDescription from "../common/PostDescription/PostDescription";
import { Box } from "@material-ui/core";

function Post() {
    const [posts, setPosts] = useState("");
    const [loading, setLoading] = React.useState(true);

    const loadPosts = async () => {
        setLoading(true);
        const response = await fetch("/api/posts/3");
        const data = await response.json();
        data && setPosts(data);
        setLoading(false);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    console.log(posts);

    // let gridContent = "";

    // if (loading) {
    //     gridContent = "loading....";
    // } else {
    //     if (posts.length) {
    //         gridContent = posts.map((post, index) => (
    //             <PostPreview key={index} post={post} />
    //         ));
    //     } else {
    //         gridContent = "No posts found.";
    //     }
    // }
    return (
        <div className="main__container">
            <section className="main__container__shadow">
                <img className="imagePost" alt={posts.name} src={posts.photo} />
                <PostDescription />
            </section>
            <PostGrid />
        </div>
    );
}

export default Post;
