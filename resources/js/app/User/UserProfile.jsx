import React, {useState, useEffect} from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import PostGrid from "../common/PostGrid/PostGrid"
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

function UserProfile({searchValue, setSearchValue}) {

    const classes = useStyles();

    let { id } = useParams();
    const [user, setUser] = useState("");
    const [loading, setLoading] = React.useState(true);

    const loadUser = async () => {
        setLoading(true);
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        data && setUser(data);
        setLoading(false);
    };

    useEffect(() => {
        loadUser();
    }, [id]);

    let userContent = "";

    if (loading) {
        userContent = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png" />
            </div>
        );
    } else {
        if (user) {
            userContent = (
            <Container maxWidth={false}>
                <Box mt={4}>
                    <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    spacing={2}
                    >
                        <Grid item>
                            <Avatar alt={user.name} src={user.profile_photo_url} variant="circular" className={classes.large}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3" color="primary" gutterBottom>
                                {user.name}
                            </Typography>
                            <Typography variant="body1"  gutterBottom>
                                {user.location}
                            </Typography>
                        </Grid>
                        <Grid item>
                        <Button variant="contained" color="primary">Add Plant</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
               
            );
        }
    }


    return (
        <div>
            {userContent}

            <PostGrid searchValue={searchValue} setSearchValue={setSearchValue} specificUser={user.id}/>

        </div>
    )
}

export default UserProfile
