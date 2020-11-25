import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputError from "../common/InputError/InputError";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PriceOption from "../common/PriceOption/PriceOption";

function PostEdit() {
    let { id } = useParams();

    const [post, setPost] = useState("");
    const [loading, setLoading] = React.useState(true);
    const [values, setValues] = useState({
        name: post.name,
        status: post.status,
        price: 300,
        transaction: "sell",
        description: post.description
    });
    console.log(post);

    const [errors, setErrors] = useState({});

    const handleSubmit = async event => {
        event.preventDefault();

        const response = await fetch("/edit", {
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
                "status",
                "price",
                "transaction",
                "description"
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

    const loadPost = async () => {
        setLoading(true);
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();
        data && setPost(data);
        setLoading(false);
    };

    useEffect(() => {
        loadPost();
    }, []);

    let content = "";

    if (post) {
        content = (
            <div className="main__container">
                <Box mt={4}>
                    <Typography variant="h3" color="primary" gutterBottom>
                        Edit your post
                    </Typography>
                </Box>
                <Box className="main__container__shadow">
                    <form action="/edit" method="post" onSubmit={handleSubmit}>
                        <div className="main__container">
                            <figure className="myPictures">
                                <img src={post.photo} alt={post.name} />
                            </figure>
                            <Button
                                className="button"
                                color="primary"
                                variant="contained"
                                size="large"
                                type="submit"
                            >
                                Modify plant picture
                            </Button>
                            <div className="texField--postName">
                                <TextField
                                    color="primary"
                                    label="Name of the plant"
                                    variant="filled"
                                    name="name"
                                    value={post.name || ""}
                                    onChange={handleChange}
                                    error={errors.name ? true : false}
                                    helperText={
                                        <InputError errors={errors.name} />
                                    }
                                />
                            </div>
                            <div className="texField--postName">
                                <FormControl
                                    variant="filled"
                                    // style={{ width: "30%" }}
                                >
                                    <InputLabel>Status</InputLabel>
                                    <MuiSelect
                                        name="status"
                                        value={post.available}
                                        onChange={handleChange}
                                    >
                                        <MuiMenuItem value="1">
                                            Available
                                        </MuiMenuItem>
                                        <MuiMenuItem value="0">
                                            Sold
                                        </MuiMenuItem>
                                    </MuiSelect>
                                </FormControl>
                            </div>
                            <div className="input__group--post">
                                <FormControl
                                    variant="filled"
                                    style={{ width: "30%" }}
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
                                {/* Component to have Price option available */}
                                <PriceOption
                                    transaction={values.transaction}
                                    price={values.price}
                                    errors={errors.price}
                                    handleChange={handleChange}
                                />
                            </div>
                            <div className="texField--postDescription">
                                <Box>
                                    <TextField
                                        label="Description"
                                        name="description"
                                        onChange={handleChange}
                                        value={post.description || ""}
                                        multiline
                                        rows={4}
                                        columns={50}
                                        variant="filled"
                                        style={{ width: "100%" }}
                                        error={
                                            errors.description ? true : false
                                        }
                                        helperText={
                                            <InputError
                                                errors={errors.description}
                                            />
                                        }
                                    />
                                </Box>
                            </div>
                            <Box mb={2}>
                                {/* <Link to="/messages/create">  */}
                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    disableRipple
                                    type="submit"
                                    style={{ textTransform: "none" }}
                                    style={{ width: "100%" }}
                                >
                                    Confirm changes
                                </Button>
                            </Box>
                            {/* </Link> */}
                        </div>
                    </form>
                </Box>
            </div>
        );
    }

    return content;
}

export default PostEdit;
