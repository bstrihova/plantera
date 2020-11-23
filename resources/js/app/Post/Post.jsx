import React, { useState, useEffect } from "react";
import PostGrid from "../common/PostGrid/PostGrid";
import PostDescription from "./PostDescription/PostDescription";
import { useParams } from "react-router-dom";

function Post({ searchValue, setSearchValue }) {
    let { id } = useParams();
    const [post, setPost] = useState("");
    const [loading, setLoading] = React.useState(true);
    const [update, setUpdate] = useState(false);

    const loadPost = async () => {
        setLoading(true);
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();
        data && setPost(data);
        setLoading(false);
        setUpdate(false);
        console.log("update set to false", update)
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
    } else {
        if (post) {
            postContent = (
                <>
                    <img
                        className="imagePost"
                        alt={post.name}
                        src={post.photo}
                    />
                    <PostDescription post={post} />
                </>
            );
        }
    }
    return (
        <div className="main__container">
            <section className="main__container__shadow main__container__shadow--post">
                {postContent}
            </section>
            <PostGrid
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                specificPost={post.id}
            />
        </div>
    );
}

export default Post;
