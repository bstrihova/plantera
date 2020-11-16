import React from 'react'
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import 'fontsource-roboto';
import PostGrid from '../common/PostGrid/PostGrid';
import { Link } from 'react-router-dom';
// import Grid from "@material-ui/core/Grid"
// import TextField from "@material-ui/core/TextField"
// import IconButton from "@material-ui/core/IconButton"
// import DeleteIcon from "@material-ui/icons/Delete"
// import LocationIcon from "@material-ui/icons/LocationOn"
// import InputAdornment from "@material-ui/core/InputAdornment"

function Home() {
    return (
        <>
                <section className="banner">
                <Box component="div" whiteSpace="normal" className="banner__headings">
                    <Typography variant="h3" color="primary" gutterBottom>
                        Sell, buy, swap, donate
                    </Typography>
                    <Typography variant="h5" color="primary">
                    Give your plants a second life
                    </Typography>
                    <Box mt={5}>
                        <Link to="/posts/create"> 
                            <Button color="primary" variant="contained" size="large">Get Started</Button>
                       </Link> 
                    </Box>
                </Box>
                </section>

                <section className="content content--home">

                    <PostGrid/>


                </section>

                {/* <Box display="flex" border={1} width={300} borderRadius={32} m={4}>
                <TextField label="Location" type="search" startIcon={<LocationIcon/>}/>
                    <TextField label="Search" type="search"/>
            </Box> */}

  

        </>
    )
}

export default Home
