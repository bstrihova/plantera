import React from 'react'
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import { Link } from 'react-router-dom'

function PostPreview({post, updatePost, update}) {
    const postUrl = `/posts/${post.id}`
    const profileUrl = `/user/profile/${post.user.id}`
    return (
        
            <figure className="postgrid__figure">
                <Link to={postUrl} onClick={()=>updatePost(true)}>
                    <img src={post.photo} className="postgrid__img"/>
                </Link>
                <figcaption>
                    <Box px={3} mt={0.2}>
                        <Typography variant="h6" >
                            {post.name}
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="space-between" mt={-1}>
                                <Link to={profileUrl}>
                                    <Box display="flex" alignItems="center">
                                        <Box mr={0.6}>
                                            <Avatar alt="username" src={post.user.profile_photo_url} variant="circle"/>
                                        </Box>
                                        <Typography variant="body2" >
                                            {post.user.name}
                                        </Typography>
                                    </Box>
                                </Link>
                            <Box component="h1" fontWeight={900} whiteSpace="nowrap">
                            {post.price} {post.currency}
                            </Box>
                        </Box>
                    </Box>
                </figcaption>
            </figure>
    )
}

export default PostPreview
