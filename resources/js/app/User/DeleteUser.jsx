import React, {useState, useEffect} from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#FF0000",
    }
}));

function DeleteUser() {
    const classes = useStyles();

    return (
        <form onSubmit={()=>console.log("submitted delete form")}>
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
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
            </div>
        </form>
    )
}

export default DeleteUser
