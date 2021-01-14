import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputError from "../common/InputError/InputError";
import CookieCsrf from "../csrf"

function PasswordChange() {
    const [errors, setErrors] = useState({});

    const [passwordValues, setPasswordValues] = useState({
        current_password: "",
        new_password: "",
        new_confirm_password: ""
    });

    const handlePasswordSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/change-password", {
            method: 'post',
            body: JSON.stringify(passwordValues),
            headers: {
                'Accept': 'application/json', // tell Laravel (backend) what we want in response
                'Content-type': 'application/json', // tell backend what we are sending
                // 'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
                'X-XSRF-TOKEN': CookieCsrf()
            }
        })

        const response_data = await response.json();

        if (response.status === 200) {
            window.location.reload();
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }

    }

    const handlePasswordChange = (event) => {
        const allowed_names = ['current_password', "new_password", "new_confirm_password"],
            name = event.target.name,
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
        <form onSubmit={handlePasswordSubmit}>
            <Grid
                container
                className="
                    main__container__shadow 
                    paddingContainer
                    "
                justify="center"
                align="center"
                spacing={3}
            >
                <Grid item xs={12} md={8}>
                    <Grid
                        container
                        justify="center"
                        align="center"
                        spacing={3}
                    >
                        <Grid item xs={12}>
                            <TextField
                                color="primary"
                                label="Aktuální heslo"
                                variant="filled"
                                type="password"
                                name="current_password"
                                autoComplete="current-password"
                                value={passwordValues.current_password}
                                onChange={handlePasswordChange}
                                error={errors.current_password ? true : false}
                                helperText={<InputError errors={errors.current_password}
                                />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                color="primary"
                                label="Nové heslo"
                                variant="filled"
                                type="password"
                                name="new_password"
                                autoComplete="new-password"
                                value={passwordValues.new_password}
                                onChange={handlePasswordChange}
                                error={errors.new_password ? true : false}
                                helperText={<InputError errors={errors.new_password} />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                color="primary"
                                label="Znovu nové heslo"
                                variant="filled"
                                type="password"
                                name="new_confirm_password"
                                autoComplete="new-password"
                                value={passwordValues.new_confirm_password}
                                onChange={handlePasswordChange}
                                error={errors.new_confirm_password ? true : false}
                                helperText={<InputError errors={errors.new_confirm_password} />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
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
    )
}

export default PasswordChange
