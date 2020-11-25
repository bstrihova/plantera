import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputError from "../common/InputError/InputError";
import Grid from "@material-ui/core/Grid";
import PriceOption from "../common/PriceOption/PriceOption";
import { Link } from "react-router-dom";
import CookieCsrf from "../csrf";

function PostCreate() {
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        status: "",
        transaction: "sell"
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async event => {
        event.preventDefault();

        const response = await fetch("/api/posts", {
            method: "post",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json", // tell Laravel (backend) what we want in response
                "Content-type": "application/json", // tell backend what we are sending
                // "X-CSRF-TOKEN": document
                //     .querySelector('meta[name="csrf-token"]')
                //     .getAttribute("content") // prove to backend that this is authorized
                "X-XSRF-TOKEN": CookieCsrf()
            }
        });

        const response_data = await response.json();

        //The user is authenticated,
        if (response.status === 201) {
            history.push("/");
        }

        if (response_data.errors) {
            setErrors(response_data.errors);
        }
    };

    const handleChange = event => {
        const allowed_names = [
                "name",
                "transaction",
                "price",
                "description"
                // "image"
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return {
                    ...prev_values,
                    [name]: value
                };
            });
        }
    };

    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Post new plant
                </Typography>
            </Box>
            <div className="main__container__shadow main__container__shadow--auth">
                <form action="/create" method="post" onSubmit={handleSubmit}>
                    <Grid
                        container
                        spacing={4}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <label htmlFor="upload-photo">
                                <input
                                    style={{ display: "none" }}
                                    id="upload-photo"
                                    name="upload-photo"
                                    type="file"
                                />
                                <Button
                                    color="primary"
                                    variant="contained"
                                    component="span"
                                    type="submit"
                                >
                                    + Add new picture
                                </Button>{" "}
                            </label>
                        </Grid>
                        <Grid item>
                            <TextField
                                color="primary"
                                label="Name of the plant"
                                variant="filled"
                                name="name"
                                value={values.name || ""}
                                onChange={handleChange}
                                error={errors.name ? true : false}
                                helperText={<InputError errors={errors.name} />}
                            />
                        </Grid>
                        <Grid container direction="column" spacing={3}>
                            <Grid item>
                                <FormControl
                                    variant="filled"
                                    // style={{ width: "30%" }}
                                    fullWidth
                                >
                                    <InputLabel>Selling?</InputLabel>
                                    <MuiSelect
                                        variant="filled"
                                        name="transaction"
                                        value={values.transaction || ""}
                                        onChange={handleChange}
                                    >
                                        <MuiMenuItem value="swap">
                                            Swap
                                        </MuiMenuItem>
                                        <MuiMenuItem value="sell">
                                            Sell
                                        </MuiMenuItem>
                                        <MuiMenuItem value="donate">
                                            Donate
                                        </MuiMenuItem>
                                    </MuiSelect>
                                </FormControl>
                            </Grid>

                            <Grid item>
                                {/* Component to have Price option available */}
                                <PriceOption
                                    transaction={values.transaction}
                                    price={values.price}
                                    errors={errors.price}
                                    handleChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Description"
                                name="description"
                                onChange={handleChange}
                                value={values.description}
                                multiline
                                rows={4}
                                columns={50}
                                variant="filled"
                                // style={{ width: "100%" }}
                                error={errors.description ? true : false}
                                helperText={
                                    <InputError errors={errors.description} />
                                }
                            />
                        </Grid>
                        {/* <Link to="/messages/create">  */}
                        <Box mb={2}>
                            <Button
                                // className="button--post"
                                color="primary"
                                variant="contained"
                                type="submit"
                                size="large"
                                disableRipple
                                style={{ textTransform: "none" }}
                                style={{ width: "100%" }}
                            >
                                Post new plant
                            </Button>
                        </Box>

                        {/* </Link> */}
                    </Grid>
                </form>
            </div>
        </div>
    );
}

export default PostCreate;
