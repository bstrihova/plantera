import React, {useState, useEffect} from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import GoogleLocation from "../common/GoogleLocation/GoogleLocation"
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },

    root: {
        backgroundColor: "#FF0000",
    }
}));

function UserSettings() {
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
    }, []);

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
                <Grid item>
                    <Avatar alt={user.name} src={user.profile_photo_url} variant="circle" className={classes.large}/>
                </Grid>
               
            );
        }
    }


    return (
        <div>
        <Container maxWidth={false}>
        <Box mt={4}>
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
            >
                {userContent}
                <Grid item>
                    <Typography variant="h3" color="primary" gutterBottom>
                        Account Settings
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Box mt={5} mb={2}>
                    <Typography variant="h6" color="primary" gutterBottom>
                        Profile Information
                    </Typography>
                </Box>
            </Grid> 
            <Grid container className="main__container__shadow--userSettings" direction="column" justify="center" alignItems="center" spacing={4}>
                <Grid item >
                    <Button
                    className="button"
                    color="primary"
                    variant="contained"
                    >
                        Upload new profile picture
                    </Button>
                </Grid>
                <Grid item>
                    <TextField
                    color="primary"
                    label="Username"
                    variant="filled"
                    value={user.name || ''}
                    />
                </Grid>
                <Grid item>
                    <GoogleLocation/>
                </Grid>
                <Grid item>
                    <Button
                    className="button"
                    color="primary"
                    variant="contained"
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
            
            <Grid item>
                <Box mt={5} mb={2}>
                <Typography variant="h6" color="primary" gutterBottom>
                    Change password
                </Typography>
                </Box>
            </Grid> 
            <Grid container className="main__container__shadow--userSettings" direction="column" justify="center" alignItems="center" spacing={4}>
                <Grid item >
                <TextField
                    color="primary"
                    label="Current password"
                    variant="filled"
                    />
                </Grid>
                <Grid item>
                    <TextField
                    color="primary"
                    label="New password"
                    variant="filled"
                    />
                </Grid>
                <Grid item>
                <TextField
                    color="primary"
                    label="Confirm password"
                    variant="filled"
                    />
                </Grid>
                <Grid item>
                    <Button
                    className="button"
                    color="primary"
                    variant="contained"
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>

            <Grid item>
                <Box mt={5}>
                <Typography variant="h6" color="primary" gutterBottom>
                    Delete Account
                </Typography>
                </Box>
            </Grid> 
            <Grid container className="main__container__shadow--userSettings" direction="row" justify="center" alignItems="center" spacing={2}>
                <Grid item >
                <Typography variant="body1" color="primary" gutterBottom>
                    Once your account is deleted, all of its resourced and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
                </Typography>
                </Grid>
                <Grid item>
                    <Button
                    className={classes.root}
                    color="primary"
                    variant="contained"
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>

            
                </Grid>
                </Box>
        </Container>
        </div>
    )
}

export default UserSettings
