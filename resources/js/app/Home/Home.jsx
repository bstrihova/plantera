import React from 'react'
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Search from "../common/Search/Search"
import 'fontsource-roboto';
import PostGrid from '../common/PostGrid/PostGrid';
import { Link } from 'react-router-dom';

function Home({searchValue, setSearchValue}) {
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

            <section className="main__container">
                <PostGrid searchValue={searchValue} setSearchValue={setSearchValue}/>
            </section>

                
        </>
    )
}

export default Home
