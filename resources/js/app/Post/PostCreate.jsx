import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { useHistory } from "react-router-dom";
import InputError from "../common/InputError/InputError";
import Grid from "@material-ui/core/Grid";
import CookieCsrf from "../csrf";
import ImageUpload from "../common/ImageUpload/ImageUpload";
import InputAdornment from "@material-ui/core/InputAdornment";

function PostCreate() {
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        transaction: "sell",
        // image: ""
    });

    const history = useHistory();

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

        //The user is authenticated
        if (response.status === 200) {
            history.push(`/posts/${response_data}`);
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
            "description",
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
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={10} lg={6}>
                <Box p={4}>
                    <Typography
                        variant="h3"
                        color="primary"
                        gutterBottom
                    >
                        Přidat novou kytku
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={10} lg={6}>
                <form action="/create" method="post" onSubmit={handleSubmit}>
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
                        {/* <Grid item> */}
                        {/* <label htmlFor="upload-photo">
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
                            </label> */}
                        {/* <ImageUpload /> */}
                        {/* </Grid> */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                color="primary"
                                label="Název rostliny"
                                variant="filled"
                                name="name"
                                value={values.name || ""}
                                onChange={handleChange}
                                error={errors.name ? true : false}
                                helperText={<InputError errors={errors.name} />}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} lg={3}>
                            <FormControl
                                variant="filled"
                                fullWidth
                            >
                                <InputLabel>Kytku chci:</InputLabel>
                                <MuiSelect
                                    variant="filled"
                                    name="transaction"
                                    value={values.transaction || ""}
                                    onChange={handleChange}
                                >
                                    <MuiMenuItem value="swap">
                                        Vyměnit
                                    </MuiMenuItem>
                                    <MuiMenuItem value="sell">
                                        Prodat
                                    </MuiMenuItem>
                                    <MuiMenuItem value="donate">
                                        Darovat
                                    </MuiMenuItem>
                                </MuiSelect>
                            </FormControl>
                        </Grid>
                        {values.transaction === "sell" ? (
                            <Grid item xs={6} sm={4} lg={3}>
                                <TextField
                                    fullWidth
                                    color="primary"
                                    label="Cena"
                                    variant="filled"
                                    name="price"
                                    type="number"
                                    value={values.price || ""}
                                    onChange={handleChange}
                                    error={errors.price ? true : false}
                                    helperText={<InputError errors={errors.price} />}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">Kč</InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        ) : ""}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Popis"
                                name="description"
                                onChange={handleChange}
                                value={values.description}
                                multiline
                                rows={4}
                                columns={50}
                                variant="filled"
                                error={errors.description ? true : false}
                                helperText={
                                    <InputError
                                        errors={errors.description}
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                size="large"
                            // disableRipple
                            // style={{ width: "100%" }}
                            >
                                Přidat
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default PostCreate;