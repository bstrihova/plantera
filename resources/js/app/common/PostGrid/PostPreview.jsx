import React from 'react'
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import { Link } from 'react-router-dom'

function PostPreview({postImg}) {
    return (
        <Link to="/posts">
            <figure className="postgrid__figure">
                <img src={postImg} className="postgrid__img"/>
                <figcaption>
                    <Box px={3} mt={0.2}>
                        <Typography variant="h6" >
                            Snake plant little baby
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="space-between" mt={-1}>
                                <Box display="flex" alignItems="center">
                                    <Box mr={0.6}>
                                        <Avatar alt="username" src="/storage/profile-photos/08d0IhlaomLIg3XBk0XDZ7ahfMgmTB5zEs82m6Un.jpeg" variant="circle"/>
                                    </Box>
                                    <Typography variant="body2" >
                                        bramborienka
                                    </Typography>
                                </Box>
                            <Box component="h1" fontWeight={900} whiteSpace="nowrap">
                                150 Kč
                            </Box>
                        </Box>
                    </Box>
                </figcaption>
            </figure>
        </Link>
    )
}

export default PostPreview
