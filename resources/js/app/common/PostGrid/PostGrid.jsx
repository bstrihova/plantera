import React, {useState, useEffect} from 'react'
import PostPreview from './PostPreview'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import GoogleLocation from "../GoogleLocation/GoogleLocation"



function PostGrid({searchValue, setSearchValue}) {

    const [posts, setPosts] = useState("");
    const [loading, setLoading] = React.useState(true);
    // const [currentPostId, setCurrentPostId] = useState("");

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
                    <div key={index}>
                    {console.log(index)}
                    <PostPreview post={post}/>
                    {/* {setCurrentPostId(post.id)} */}
                    </div>
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
                <Box display="flex" bgcolor="white" borderRadius={15} alignItems="center" p={0.3} pr={2}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <GoogleLocation/>  
                        </Grid>
                        <Grid item>
                            <TextField
                            label="Search"
                            color="primary"
                            variant="outlined"
                            value={searchValue}
                            onChange={(e)=>(setSearchValue(e.target.value))}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <SearchIcon color="primary"/>
                                </InputAdornment>
                            ),
                            }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <div id="columns">
                    {gridContent}
                </div>
            </section>
        </Box>
    )
}

export default PostGrid
