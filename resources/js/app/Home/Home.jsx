import React from 'react'
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import 'fontsource-roboto';
import PostGrid from '../common/PostGrid/PostGrid';
import { useHistory } from "react-router-dom";

function Home({searchValue, setSearchValue}) {
    const history = useHistory();
    return (
        <>
            <section className="banner">
            <Box component="div" whiteSpace="normal" className="banner__headings">
                <Typography variant="h3" color="primary" gutterBottom>
                    Sell, buy, swap, donate
                </Typography>
                <Typography variant="h5" color="primary">
                    Give your houseplants a second life
                </Typography>
                <Box mt={5}>
                        <Button color="primary" variant="contained" size="large" onClick={()=> (history.push("/posts/create"))}>Get Started</Button>
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
