import React, {useState, useEffect} from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import PostGrid from "../common/PostGrid/PostGrid"
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

function UserProfile({searchValue, setSearchValue}) {

    const classes = useStyles();
    const { user } = useGlobalContext();

    let { id } = useParams();
    const [displayedUser, setDisplayedUser] = useState("");
    const [loading, setLoading] = React.useState(true);

    const loadDisplayedUser = async () => {
        setLoading(true);
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        data && setDisplayedUser(data);
        setLoading(false);
    };

    useEffect(() => {
        loadDisplayedUser();
    }, [id]);

    let userContent = "";
    let editButton = "";

    if (user.id == id) {
        editButton = (
            <Grid item>
                <EditIcon fontSize="large" color="primary" />
            </Grid>
        )
    }

    if (loading) {
        userContent = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png" />
            </div>
        );
    } else {
        if (displayedUser) {
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
                            <Avatar alt={displayedUser.name} src={displayedUser.profile_photo_url} variant="circular" className={classes.large}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3" color="primary" gutterBottom>
                                {displayedUser.name}
                            </Typography>
                            <Typography variant="body1"  gutterBottom>
                                {displayedUser.location}
                            </Typography>
                        </Grid>
                        {editButton}
                    </Grid>
                </Box>
            </Container>
               
            );
        }
    }


    return (
        <div>
            {userContent}

            <PostGrid searchValue={searchValue} setSearchValue={setSearchValue} specificUser={displayedUser.id}/>

        </div>
    )
}

export default UserProfile
