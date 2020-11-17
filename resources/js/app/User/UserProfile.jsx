import React from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import PostGrid from "../common/PostGrid/PostGrid"

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

function UserProfile() {

    const classes = useStyles();
    return (
        <div>
            <Box mt={4}>
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={"auto"}
                >
                    <Grid item>
                        <Avatar alt="username" src="/storage/profile-photos/08d0IhlaomLIg3XBk0XDZ7ahfMgmTB5zEs82m6Un.jpeg" variant="circle" className={classes.large}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="primary" gutterBottom>
                            Bramborienka
                        </Typography>
                        <Typography variant="body1"  gutterBottom>
                            Prague, Czech Republic
                        </Typography>
                    </Grid>
                    <Grid item>
                       <Button variant="contained" color="primary">Add Plant</Button>
                    </Grid>
                </Grid>
            </Box>

            <section className="content">

                    <PostGrid/>


            </section>
        </div>
    )
}

export default UserProfile
