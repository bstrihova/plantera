import React, { useState, useEffect } from 'react'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
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

function UserProfile({ searchValue, setSearchValue }) {

    const classes = useStyles();
    const { user } = useGlobalContext();
    const history = useHistory();

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

    let content = "";

    if (loading) {
        content = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png" />
            </div>
        );
    } else if (displayedUser) {
        content = (
            <>
                <Grid item xs={10}>
                    <Grid
                        container
                        justify="center"
                        align="center"
                        className="alignItemsCenter"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={6}>
                            <Avatar
                                alt={displayedUser.name}
                                src={displayedUser.profile_photo_url} variant="circular"
                                className={classes.large}
                            />
                            <Typography
                                variant="h3"
                                color="primary"
                                gutterBottom
                            >
                                {displayedUser.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid
                                container
                                justify="center"
                                align="center"
                                spacing={2}
                            >
                                <Grid item>
                                    <Typography
                                        variant="h5"
                                        color="primary"
                                        gutterBottom
                                    >
                                        Oblast:
                                </Typography>
                                    <Typography
                                        variant="body1"
                                        gutterBottom
                                    >
                                        {/* {displayedUser.location}
                                    */}
                                    Prague, Czech Republic
                                </Typography>
                                </Grid>
                                {user.id == id ? (
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            onClick={() => history.push("/user/settings")}
                                            color="primary"
                                            size="small"
                                            startIcon={<EditIcon />}
                                        >
                                            Upravit profil
                                    </Button>
                                    </Grid>
                                ) : ""}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <PostGrid
                        searchValue={searchValue}
                        setSearchValue={setSearchValue} specificUser={displayedUser.id}
                    />
                </Grid>
            </>
        );
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="marginTopContainer"
        >
            {content}
        </Grid>
    )

}

export default UserProfile
