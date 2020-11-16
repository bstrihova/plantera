import React from 'react'
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import { Link } from 'react-router-dom'

function PostPreview({postImg}) {
    return (
        <Link to="/posts">
            <figure>
                <img src={postImg}/>
                <figcaption>
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
                            <Box component="h3" variant="body1" fontWeight={700} color="primary.main">
                                150 Kč
                            </Box>
                    </Box>
                </figcaption>
            </figure>
        </Link>
    )
}

export default PostPreview
