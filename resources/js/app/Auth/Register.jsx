import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GoogleLocation from "../common/GoogleLocation/GoogleLocation";
import Grid from "@material-ui/core/Grid";

function Register() {
    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Register
                </Typography>
            </Box>
            <div className="main__container__shadow main__container__shadow--auth">
                <Grid
                    container
                    spacing={4}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <TextField
                            label="Email"
                            type="email"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            color="primary"
                            label="Username"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Password"
                            type="password"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Confirm password"
                            type="password"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item>
                        <GoogleLocation />
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Button
                                className="button"
                                color="primary"
                                variant="contained"
                                size="large"
                            >
                                Register
                            </Button>
                            <Grid item>
                                <a href="#">Already registered?</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Register;
