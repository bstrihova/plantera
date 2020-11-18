import React, {useState, useEffect} from 'react'
import PostPreview from './PostPreview'


function PostGrid() {

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
        gridContent = "loading....";
      } else {
        if (posts.length) {
            gridContent = (
                posts.map((post, index) => (
                    <PostPreview key={index} post={post}/>
                ))
          );
        } else {
            
            gridContent = "No posts found.";
        }
      }



    return (
        <section>
            <div id="columns">

               {gridContent}

        </div>
    </section>
    )
}

export default PostGrid
