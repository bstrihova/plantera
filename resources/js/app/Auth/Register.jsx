import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GoogleLocation from "../common/GoogleLocation/GoogleLocation";
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import InputError from "../common/InputError/InputError";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";
import CookieCsrf from "../csrf"

function Register() {

    const { fetchUser } = useGlobalContext();

    const history = useHistory();

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/register', {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept' : 'application/json', // tell Laravel (backend) what we want in response
                'Content-type' : 'application/json', // tell backend what we are sending
                // 'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
                'X-XSRF-TOKEN': CookieCsrf()
            }
        })

        const response_data = await response.json();

        //The user is authenticated, 
        if (response.status === 201) {
            // fetch authenticated user data
            const response_user = await fetch(`/api/authuser`);
            const data = await response_user.json();
            // setUser to authenticated user
            fetchUser(data);
            history.push("/");
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }

    }

    // copy this whole function and only modify const allowed_names, nothing else
    const handleChange = (event) => {
        const allowed_names = ['name', 'email', 'password', 'password_confirmation'],
            name  = event.target.name,
            value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return (
                    {
                        ...prev_values,
                        [name]: value
                    }
                );
            });
        }
    }


    return (

        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Register
                </Typography>
            </Box>
            <div className="main__container__shadow main__container__shadow--auth">
            <form action="/register" method="post" onSubmit={ handleSubmit }> 
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
                            autoComplete="email"
                            // here starts the important part for every input to have in order to be sent by POST to db
                            name="email"
                            value={ values.email } 
                            onChange={ handleChange }
                            error={errors.email ? true : false}
                            helperText={<InputError errors={errors.email}/>}
                        />
                        {values.email}
                    </Grid>
                    <Grid item>
                        <TextField
                            color="primary"
                            label="Username"
                            variant="filled"
                            name="name" 
                            autoComplete="username"
                            value={ values.name } 
                            onChange={ handleChange }
                            error={errors.name ? true : false}
                            helperText={<InputError errors={errors.name}/>}

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Password"
                            type="password"
                            variant="filled"
                            name="password" 
                            autoComplete="new-password"
                            value={ values.password } 
                            onChange={ handleChange }
                            error={errors.password ? true : false}
                            helperText={<InputError errors={errors.password}/>}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Confirm password"
                            type="password"
                            variant="filled"
                            name="password_confirmation" 
                            autoComplete="new-password"
                            value={ values.password_confirmation } 
                            onChange={ handleChange }
                            error={errors.password_confirmation ? true : false}
                            helperText={<InputError errors={errors.password_confirmation}/>}
                        />
                    </Grid>
                    <Grid item>
                        {/* location is not posted yet */}
                        <GoogleLocation/>
                    </Grid>
                    <Grid item>
                        <Button
                            className="button"
                            color="primary"
                            variant="contained"
                            size="large"
                            type="submit"
                        >
                            Register
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to="/login">Already registered?</Link>
                    </Grid>
            </Grid>
            </form> 
            </div>
        </div>
    );
}

export default Register;
