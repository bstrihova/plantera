import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";



const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#FF0000",
    }
}));

function DeleteUser() {
    const classes = useStyles();
    const history = useHistory();
    const { user } = useGlobalContext();

    const handleSubmit = async event => {
        event.preventDefault();
        const response = await fetch(`/delete-user/${user.id}`, {
            method: "delete",
            headers: {
                Accept: "application/json", // tell Laravel (backend) what we want in response
                "Content-type": "application/json", // tell backend what we are sending
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content") // prove to backend that this is authorized
            }
        });

        const response_data = await response.json();

        //The user is authenticated,
        if (response.status === 200) {
            history.push("/");
        }

    };

    return (
            <div className="main__container">
        <Grid container direction="row" justify="center" alignItems="center">
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
                    onClick={handleSubmit}
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
            </div>
    )
}

export default DeleteUser
