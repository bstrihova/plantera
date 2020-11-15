import React from 'react'
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"

function PostPreview({postImg}) {
    return (
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
                        <Typography variant="body1" >
                            bramborienka
                        </Typography>
                    </Box>
                        {/* <Box component="h3" variant="body1" fontWeight={700}>
                            150 Kč
                        </Box> */}
                        <Typography color="primary" variant="h6">150 Kč</Typography>
                </Box>
            </figcaption>
        </figure>
    )
}

export default PostPreview
