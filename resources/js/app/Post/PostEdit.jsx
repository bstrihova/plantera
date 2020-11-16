import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { Link } from "react-router-dom";

function PostEdit() {
    return (
        <div>
            <Box textAlign="center" mt={4}>
                <Typography variant="h1" color="primary" fontSize="bold">
                    Edit your post
                </Typography>
            </Box>
            <Box className="main__container__shadow">
                <div className="main__container">
                    <figure className="myPictures">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                            alt=""
                        />
                        <img
                            src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                            alt=""
                        />
                        <img
                            src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                            alt=""
                        />
                    </figure>
                    <Button
                        className="button"
                        alignSelf="center"
                        color="primary"
                        variant="contained"
                        size="large"
                    >
                        + Add plant picture
                    </Button>
                    <TextField
                        color="primary"
                        label="Name of the plant"
                        placeholder="Add the name of your plant"
                    />
                    <Box display="flex" justifyContent="space-around">
                        <FormControl>
                            <InputLabel id="status">Selling?</InputLabel>
                            <MuiSelect labelId="status">
                                <MuiMenuItem value="1">Donate</MuiMenuItem>
                                <MuiMenuItem value="2">Sell</MuiMenuItem>
                                <MuiMenuItem value="2">Swap</MuiMenuItem>
                            </MuiSelect>
                        </FormControl>
                        <TextField
                            color="primary"
                            label="Price"
                            placeholder="Add your price"
                        />
                    </Box>
                    <FormControl>
                        <InputLabel id="status">Status</InputLabel>
                        <MuiSelect labelId="status">
                            <MuiMenuItem value="1">Available</MuiMenuItem>
                            <MuiMenuItem value="2">Sold</MuiMenuItem>
                        </MuiSelect>
                    </FormControl>
                    <Box display="flex" justifyContent="center">
                        <TextField
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            placeholder="Add your description"
                            variant="filled"
                        />
                    </Box>

                    {/* <Link to="/messages/create">  */}
                    <Button
                        className="button--post"
                        color="primary"
                        variant="contained"
                        size="small"
                        disableRipple
                        style={{ textTransform: "none" }}
                    >
                        Confirm changes
                    </Button>
                    {/* </Link> */}
                </div>
            </Box>
        </div>
    );
}

export default PostEdit;
