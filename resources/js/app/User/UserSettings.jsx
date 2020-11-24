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
import InputError from "../common/InputError/InputError";
import { useHistory } from "react-router-dom";

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
    const history = useHistory();
    const classes = useStyles();

    const [errors, setErrors] = useState({});

    let { id } = useParams();
    const [user, setUser] = useState("");
    const [loading, setLoading] = React.useState(true);

    const [userValues, setUserValues] = useState({
        name: "",
    });

    const [passwordValues, setPasswordValues] = useState({
        current_password: "",
        password: "",
        password_confirmation: ""
    });

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

    const handleUserSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`/user/settings/${user.id}`, {
            method: 'post',
            body: JSON.stringify(userValues),
            headers: {
                'Accept' : 'application/json', // tell Laravel (backend) what we want in response
                'Content-type' : 'application/json', // tell backend what we are sending
                'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
            }
        })

        const response_data = await response.json();
        console.log(response);

        //The user is authenticated, 
        if (response.status === 200) {
            history.push(`/user/profile/${id}`);
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }

    }

    const handlePasswordSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`/user/settings/${id}/pwdchange`, {
            method: 'post',
            body: JSON.stringify(passwordValues),
            headers: {
                'Accept' : 'application/json', // tell Laravel (backend) what we want in response
                'Content-type' : 'application/json', // tell backend what we are sending
                'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
            }
        })

        const response_data = await response.json();
        console.log(response);

        if (response.status === 200) {
            history.push(`/user/profile/${id}`);
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }

    }

    const handleUserChange = (event) => {
        const allowed_names = ['name'],
            name  = event.target.name,
            userValues = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setUserValues(prev_values => {
                return (
                    {
                        ...prev_values,
                        [name]: userValues
                    }
                );
            });
        }
    }

    const handlePasswordChange = (event) => {
        const allowed_names = ['current_password', "password", "password_confirmation"],
            name  = event.target.name,
            userValues = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setPasswordValues(prev_values => {
                return (
                    {
                        ...prev_values,
                        [name]: userValues
                    }
                );
            });
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
            <div className="main__container__shadow main__container__shadow--auth">
            <form onSubmit={handleUserSubmit}> 
                <Grid
                container
                direction="column" 
                justify="center" 
                alignItems="center" 
                spacing={4}
                >
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
                    name="name"
                    value={ userValues.name || "" } 
                    onChange={ handleUserChange }
                    error={errors.name ? true : false}
                    helperText={<InputError errors={errors.name}/>}
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
                    type="submit"
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
            </form>
            </div>
            
            <Grid item>
                <Box mt={5} mb={2}>
                <Typography variant="h6" color="primary" gutterBottom>
                    Change password
                </Typography>
                </Box>
            </Grid> 
            <div className="main__container__shadow main__container__shadow--auth">
            <form onSubmit={handlePasswordSubmit}> 
            <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                <Grid item >
                <TextField
                    color="primary"
                    label="Current password"
                    variant="filled"
                    type="password"
                    name="current_password"
                    autoComplete="current-password"
                    value={ passwordValues.current_password} 
                    onChange={ handlePasswordChange }
                    error={errors.current_password ? true : false}
                    helperText={<InputError errors={errors.current_password}
                    />}
                    />
                </Grid>
                <Grid item>
                    <TextField
                    color="primary"
                    label="New password"
                    variant="filled"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={ passwordValues.password } 
                    onChange={ handlePasswordChange }
                    error={errors.password ? true : false}
                    helperText={<InputError errors={errors.password}/>}
                    />
                </Grid>
                <Grid item>
                <TextField
                    color="primary"
                    label="Confirm password"
                    variant="filled"
                    type="password"
                    name="password_confirmation"
                    autoComplete="new-password"
                    value={ passwordValues.password_confirmation } 
                    onChange={ handlePasswordChange }
                    error={errors.password_confirmation ? true : false}
                    helperText={<InputError errors={errors.password_confirmation}/>}
                    />
                </Grid>
                <Grid item>
                    <Button
                    className="button"
                    color="primary"
                    variant="contained"
                    type="submit"
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
            </form>
            </div>

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
