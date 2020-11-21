import React, {useState, useEffect} from 'react'
import PostPreview from './PostPreview'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import GoogleLocation from "../GoogleLocation/GoogleLocation"



function PostGrid({searchValue, setSearchValue, specificUser, specificPost}) {

    const [posts, setPosts] = useState("");
    const [loading, setLoading] = React.useState(true);

    const loadPosts = async () => {
        setLoading(true);
        const response = await fetch("/api/posts/");
        const data = await response.json();
        data && setPosts(data);
        setLoading(false);
    }

    // this function takes an array as argument and returns all available Posts and passes it down as prop to PostPreview (and if there something in the search input, it returns just the ones with searched name)
    const filterForSpecificArray = (array) => {
        array.filter((post) => (post.name.toLowerCase().includes(searchValue.toLowerCase())))
                        .filter((post)=>post.available)
                        .map((post, index) => (
                        <div key={index}>
                            <PostPreview post={post}/>
                        </div>
                    ))
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
            let postsOfSpecificUser = posts.filter((post) => post.user_id === specificUser);
            let specificPostNotUsed = posts.filter((post) => post.id !== specificPost);
            if (specificUser) {
                gridContent = (
                    <>
                    {postsOfSpecificUser.filter((post) => (post.name.toLowerCase().includes(searchValue.toLowerCase())))
                        .filter((post)=>post.available)
                        .map((post, index) => (
                        <div key={index}>
                            <PostPreview post={post}/>
                        </div>
                    ))}
                    </>
                )
            } else if (specificPost) {
                gridContent = (
                    <>
                    {specificPostNotUsed.filter((post) => (post.name.toLowerCase().includes(searchValue.toLowerCase())))
                        .filter((post)=>post.available)
                        .map((post, index) => (
                        <div key={index}>
                            <PostPreview post={post}/>
                        </div>
                    ))}
                    </>
                )
            } else {
                gridContent = (
                    <>
                    {posts.filter((post) => (post.name.toLowerCase().includes(searchValue.toLowerCase())))
                            .filter((post)=>post.available)
                            .map((post, index) => (
                            <div key={index}>
                                <PostPreview post={post}/>
                            </div>
                    ))}
                    </>
                );
            }
        } else {
            
            gridContent = "No posts.";
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
