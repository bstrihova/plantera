import React from 'react'
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import PostPrice from "../PostPrice/PostPrice"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

function PostPreview({post}) {
    const postUrl = `/posts/${post.id}`
    const history = useHistory();
    return (
        
            <figure className="postgrid__figure">
                <Link to={postUrl}>
                    <img src={post.photo} className="postgrid__img"/>
                </Link>
                <figcaption>
                    <Box px={2} mt={0.2}>
                        <Typography variant="h6" >
                            {post.name}
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="space-between" mt={-1}>
                                    <Box display="flex" alignItems="center" onClick={()=> {history.push(`/user/profile/${post.user_id}`)}} style={{cursor:"pointer"}}>
                                        <Box mr={0.6}>
                                            <Avatar alt="username" src={post.user.profile_photo_url} variant="circular"/>
                                        </Box>
                                        <Typography variant="body2" >
                                            {post.user.name}
                                        </Typography>
                                    </Box>
                            <Box component="h1" fontWeight={900} whiteSpace="nowrap">
                            <PostPrice post={post}/>
                            </Box>
                        </Box>
                    </Box>
                </figcaption>
            </figure>
    )
}

export default PostPreview
