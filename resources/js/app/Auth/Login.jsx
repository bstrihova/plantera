import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Login() {
    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Login
                </Typography>
            </Box>
            <div className="container--auth">
                <Grid
                    container
                    spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
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
                        <Button
                            className="button"
                            color="primary"
                            variant="contained"
                            size="large"
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Login;
