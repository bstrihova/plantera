import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import GoogleLocation from "../common/GoogleLocation/GoogleLocation"
import InputError from "../common/InputError/InputError";
import { useHistory } from "react-router-dom";
import CookieCsrf from "../csrf"
import { useGlobalContext } from "../context";
import PasswordChange from './PasswordChange';


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

function UserSettings() {
    const history = useHistory();
    const classes = useStyles();

    const [errors, setErrors] = useState({});

    const { user } = useGlobalContext();

    const [userValues, setUserValues] = useState({
        name: user.name,
    });

    const handleUserSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`/user/settings/${user.id}`, {
            method: 'post',
            body: JSON.stringify(userValues),
            headers: {
                'Accept': 'application/json', // tell Laravel (backend) what we want in response
                'Content-type': 'application/json', // tell backend what we are sending
                // 'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
                'X-XSRF-TOKEN': CookieCsrf()
            }
        })

        const response_data = await response.json();

        //The user is authenticated, 
        if (response.status === 200) {
            history.push(`/user/profile/${user.id}`);
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }

    }

    const handleUserChange = (event) => {
        const allowed_names = ['name'],
            name = event.target.name,
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



    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="marginTopContainer"
        >
            <Grid item xs={10}>
                <Grid
                    container
                    justify="center"
                    align="center"
                    className="alignItemsCenter"
                    spacing={5}
                >
                    {/* profile picture & heading */}
                    <Grid item xs={12} sm={9}>
                        <Grid
                            container
                            justify="center"
                            align="center"
                            className="
                            alignItemsCenter 
                            "
                            spacing={3}
                        >
                            {user ? (
                                <Grid item xs={12} sm={6}>
                                    <Avatar
                                        alt={user.name}
                                        src={user.profile_photo_url}
                                        variant="circular"
                                        className={classes.large} />
                                </Grid>)
                                : ""}
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h3" color="primary" gutterBottom>
                                    Nastavení účtu
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* change username */}
                    <Grid item xs={12}>
                        <Grid
                            container
                            justify="center"
                            align="center"
                            className="alignItemsCenter"
                            spacing={3}
                        >
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" color="primary" gutterBottom>
                                    Změnit uživatelské jméno
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <form onSubmit={handleUserSubmit}>
                                    <Grid
                                        container
                                        className="
                                            main__container__shadow 
                                            paddingContainer
                                            "
                                        justify="center"
                                        align="center"
                                        spacing={2}
                                    >
                                        {/* <Grid item >
                                            <Button
                                            className="button"
                                            color="primary"
                                            variant="contained"
                                            >
                                                Upload new profile picture
                                            </Button>
                                        </Grid> */}
                                        <Grid item xs={12} md={8}>
                                            {userValues ? (
                                                <TextField
                                                    color="primary"
                                                    label="Uživatelské jméno"
                                                    variant="filled"
                                                    name="name"
                                                    value={userValues.name || ""}
                                                    onChange={handleUserChange}
                                                    error={errors.name ? true : false}
                                                    helperText={<InputError errors={errors.name} />}
                                                />
                                            ) : ""
                                            }
                                        </Grid>
                                        {/* <Grid item>
                                            <GoogleLocation/>
                                        </Grid> */}
                                        <Grid item xs={12} md={4}>
                                            <Button
                                                className="button"
                                                color="primary"
                                                variant="contained"
                                                type="submit"
                                            >
                                                Uložit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* change password */}
                    <Grid item xs={12}>
                        <Grid
                            container
                            justify="center"
                            align="center"
                            className="alignItemsCenter"
                            spacing={3}
                        >
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" color="primary" gutterBottom>
                                    Změnit heslo
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <PasswordChange />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UserSettings
