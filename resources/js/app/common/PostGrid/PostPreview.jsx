import React from 'react'
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import { Link } from 'react-router-dom'

function PostPreview({post}) {
    const url = `/posts/${post.id}`
    return (
        <Link to={url}>
            <figure className="postgrid__figure">
                <img src={post.photo} className="postgrid__img"/>
                <figcaption>
                    <Box px={3} mt={0.2}>
                        <Typography variant="h6" >
                            {post.name}
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="space-between" mt={-1}>
                                <Box display="flex" alignItems="center">
                                    <Box mr={0.6}>
                                        <Avatar alt="username" src={post.user.profile_photo_url} variant="circle"/>
                                    </Box>
                                    <Typography variant="body2" >
                                        {post.user.name}
                                    </Typography>
                                </Box>
                            <Box component="h1" fontWeight={900} whiteSpace="nowrap">
                            {post.price} {post.currency}
                            </Box>
                        </Box>
                    </Box>
                </figcaption>
            </figure>
        </Link>
    )
}

export default PostPreview
