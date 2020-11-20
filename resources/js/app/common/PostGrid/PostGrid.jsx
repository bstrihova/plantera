import React, {useState, useEffect} from 'react'
import PostPreview from './PostPreview'


function PostGrid() {

    const [posts, setPosts] = useState("");
    const [searchValue, setSearchValue] = useState("")
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
    }, [setSearchValue])

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
                {posts.map((post, index) => (
                    <PostPreview key={index} post={post}/>
                ))}

                {console.log(posts.filter((post) => (post.name.toLowerCase().includes(searchValue.toLowerCase()))))}
                </>
          );
        } else {
            
            gridContent = "No posts found.";
        }
      }



    return (
            <section>
                {/* <input type="search" value={searchValue} onChange={(e)=>(setSearchValue(e.target.value))}/> */}
                <div id="columns">
                    {gridContent}
                    {/* {gridContent}
                    {gridContent} */}
                </div>
            </section>
    )
}

export default PostGrid
