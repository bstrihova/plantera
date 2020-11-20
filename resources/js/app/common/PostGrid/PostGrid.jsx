import React, {useState, useEffect} from 'react'
import PostPreview from './PostPreview'
import Search from "../Search/Search"
import Box from '@material-ui/core/Box';


function PostGrid({searchValue, setSearchValue, currentPostId}) {

    const [posts, setPosts] = useState("");
    const [loading, setLoading] = React.useState(true);


    const loadPosts = async () => {
        setLoading(true);
        const response = await fetch("/api/posts/");
        const data = await response.json();
        data && setPosts(data);
        setLoading(false);
    }

    useEffect(() => {
        loadPosts();
    }, [])

    let gridContent = "";

    if (loading) {
        gridContent = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png"/>
            </div>
        );
      } else {
        if (posts.length) {
            gridContent = (
                <>
                {posts.filter((post) => (post.name.toLowerCase().includes(searchValue.toLowerCase()))).map((post, index) => (
                    <PostPreview key={index} post={post}/>
                ))}
                </>
          );
        } else {
            
            gridContent = "No posts found.";
        }
      }



    return (
        <Box mt={4}>
            <section className="main__container--postGrid">
                <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                <div id="columns">
                    {gridContent}
                </div>
            </section>
        </Box>
    )
}

export default PostGrid
