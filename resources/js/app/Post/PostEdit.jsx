import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import InputError from "../common/InputError/InputError";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function PostEdit() {
    let { id } = useParams();

    const [post, setPost] = useState("");
    const [loading, setLoading] = React.useState(true);
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        transaction: "",
        available: "",
    });

    const images = [
        {
            src: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            alt: "sansevieria"
        },
        {
            src: "https://images.unsplash.com/photo-1600958568384-51f4289e943a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            alt: "lady hugging sansevieria"
        }
    ]

    const history = useHistory();

    const [errors, setErrors] = useState({});

    const handleSubmit = async event => {
        event.preventDefault();

        const response = await fetch(`/api/posts/${id}/edit`, {
            method: "post",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json", // tell Laravel (backend) what we want in response
                "Content-type": "application/json", // tell backend what we are sending
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content") // prove to backend that this is authorized
            }
        });

        const response_data = await response.json();

        // changes in form were successfully saved
        if (response.status === 200) {
            history.push(`/posts/${id}`);
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
            "available"
        ],
            name = event.target.name,
            values = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            if (name === "available") {
                setValues(prev_values => {
                    return {
                        ...prev_values,
                        [name]: event.target.checked
                    };
                });
            } else {
                setValues(prev_values => {
                    return {
                        ...prev_values,
                        [name]: values
                    };
                });
            }
        }
    };

    const loadPost = async () => {
        setLoading(true);
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();
        data && setPost(data);
        // load current from db to the form
        console.log(data)
        data && setValues({
            name: data.name,
            description: data.description,
            price: data.price,
            transaction: data.transaction,
            available: data.available,
        });
        setLoading(false);
    };

    useEffect(() => {
        loadPost();
    }, []);

    let content = "";

    if (loading) {
        content = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png" />
            </div>
        );
    } else if (post, values) {
        content = (
            <form action="/edit" method="post" onSubmit={handleSubmit}>
                <Grid
                    container
                    className="
                        main__container__shadow 
                        "
                    justify="center"
                    align="center"
                >
                    <Grid item md={5} style={{ fontSize: "0" }}>
                        {/* <Carousel
                            autoPlay={false}
                            animation="slide"
                            fullHeightHover={true}
                            className="carousel"
                        >
                            {
                                images.map((image, i) => {
                                return (
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        key={i} 
                                        className="imagePost"
                                    />
                                ) 
                                } 
                                )
                            }
                        </Carousel> */}
                        <img
                            src={post.photo}
                            alt={post.name}
                            className="imagePost"
                        />
                    </Grid>
                    <Grid item md={7}>
                        <Grid
                            container
                            spacing={3}
                            align="center"
                            justify="center"
                            className="paddingContainer"
                        >
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
                            <Grid item xs={12} sm={4}>
                                <FormControl
                                    variant="filled"
                                >
                                    {/* <InputLabel>
                                            Status
                                        </InputLabel>
                                        <MuiSelect
                                            name="available"
                                            value={values.available || ""}
                                            onChange={handleChange}
                                        >
                                            <MuiMenuItem value="1">
                                                Available
                                            </MuiMenuItem>
                                            <MuiMenuItem value="0">
                                                Sold
                                            </MuiMenuItem>
                                        </MuiSelect> */}
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                color="primary"
                                                checked={values.available ? true : false}
                                                name="available"
                                                onChange={handleChange}
                                            />
                                        }
                                        label="K dispozici"
                                        labelPlacement="start"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <FormControl
                                    variant="filled"
                                >
                                    <InputLabel>
                                        Kytku chci:
                                    </InputLabel>
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
                                <Grid item xs={6} sm={4}>
                                    <TextField
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
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            size="large"
                            className="button--archive"
                        >
                            Uložit změny
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }

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
                        Upravit nabídku
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={10} lg={6}>
                {content}
            </Grid>
        </Grid>
    );
}

export default PostEdit;
