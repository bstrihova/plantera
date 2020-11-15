import React from 'react'
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import 'fontsource-roboto';
import PostGrid from '../components/PostGrid/PostGrid';

function Home() {
    return (
        <div>
            <main>
                <section className="banner">
                <Box component="div" whiteSpace="normal" className="banner__headings">
                    <Typography variant="h3" color="primary" gutterBottom>
                        Sell, buy, swap, donate
                    </Typography>
                    <Typography variant="h5" color="primary">
                    Give your plants a second life
                    </Typography>
                    <Box mt={5}> 
                        <Button color="primary" variant="contained" size="large">Get Started</Button>
                    </Box>
                </Box>
                </section>

                <section className="content content--home">

                    <PostGrid/>


                </section>
            </main>

        </div>
    )
}

export default Home
