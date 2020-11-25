import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import InputError from "../common/InputError/InputError";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";
import CookieCsrf from "../csrf"

function Login() {
    const [{email, password}, setValues] = useState({
        email: '',
        password: ''
    })
    const { fetchUser} = useGlobalContext();

    const history = useHistory();

    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        let request_data = {email, password};
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(request_data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                'X-XSRF-TOKEN': CookieCsrf()
            }
        });
        const response_data = await response.json();

        // user is authenticated
        if (response.status === 200) {
            // fetch authenticated user data
            const response_user = await fetch(`/api/authuser`);
            const data = await response_user.json();
            // setUser to authenticated user
            fetchUser(data);
            //  redirect to home
            history.push("/");
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }
    }




    const handleChange = (event) => {
        const allowed_names = ['email', 'password'],
            name  = event.target.name,
            value = event.target.value
 
        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return ({...prev_values,
                    [name]: value
                });
            });
        }
    }

    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Login
                </Typography>
            </Box>
            <div className="main__container__shadow main__container__shadow--auth">
                <form action="/login" method="post" onSubmit={ handleSubmit }>
                <Grid
                    container
                    spacing={4}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <TextField
                            color="primary"
                            label="Email"
                            variant="filled"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={ email }
                            onChange={ handleChange }
                            error={errors.email ? true : false}
                            helperText={<InputError errors={errors.email}/>}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Password"
                            type="password"
                            variant="filled"
                            name="password" 
                            autoComplete="current-password"
                            value={ password } 
                            onChange={ handleChange }
                            error={errors.password ? true : false}
                            helperText={<InputError errors={errors.password}/>}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            className="button"
                            color="primary"
                            variant="contained"
                            size="large"
                            type="submit"
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to="/register">Not registered yet?</Link>
                    </Grid>
                </Grid>
            </form>   
            </div>
        </div>
    );
}

export default Login;
