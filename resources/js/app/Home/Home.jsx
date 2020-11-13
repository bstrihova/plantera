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

                <section className="content">

                    {/* <GridList className={classes.gridList} cols={2} spacing={12}>
                        <GridListTile>
                        <img src="https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="monstera"/>
                        </GridListTile>
                        <GridListTile>
                        <img src="https://images.unsplash.com/photo-1591958911259-bee2173bdccc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="pothos lime"/>
                        </GridListTile>
                        <GridListTile>
                        <img src="https://images.unsplash.com/photo-1602491674275-316d95560fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="syngonium"/>
                        </GridListTile>
                    
                    </GridList> */}

                    <PostGrid/>


                     </section>
            </main>

        </div>
    )
}

export default Home
