import React from 'react'
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import PostGrid from '../common/PostGrid/PostGrid';
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

function Home({ searchValue, setSearchValue }) {
    let button = "";

    const { user } = useGlobalContext();
    const history = useHistory();

    if (user.id) {
        button = (
            <Button color="primary" variant="contained" size="large" onClick={() => (history.push("/posts/create"))}>Nabídni kytku</Button>
        )
    } else {
        button = (
            <Button color="primary" variant="contained" size="large" onClick={() => (history.push("/register"))}>Nabídnout kytku</Button>
        )
    }


    return (
        <>
            <section className="banner">
                <Box component="div" whiteSpace="normal" className="banner__headings">
                    <Typography variant="h3" color="primary" gutterBottom>
                        Burza pokojových rostlin
                </Typography>
                    <Typography variant="h5" color="primary">
                        Prodej, kup, vyměň nebo daruj pokojovky
                </Typography>
                    <Box mt={5}>
                        {button}
                    </Box>
                </Box>
            </section>

            <section className="main__container">
                <PostGrid searchValue={searchValue} setSearchValue={setSearchValue} />
            </section>


        </>
    )
}

export default Home
