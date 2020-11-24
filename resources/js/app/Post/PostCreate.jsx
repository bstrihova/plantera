import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";

function PostCreate() {

    const [values, setValues] = useState({
        transaction: 'sell',
        price: '',
    });


    let priceContainer = "";
    if (values.transaction === "sell") {
        priceContainer = (
            <TextField
                color="primary"
                label="Price"
                variant="filled"
                style={{ width: "30%" }}
                value={values.price || ""}
                type="number"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">Kč</InputAdornment>
                    )
                }}
            />
        );
    }

    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Post new plant
                </Typography>
            </Box>
            <Box className="main__container__shadow main__container__shadow--auth">
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
                    >
                        + Add new picture
                    </Button>{" "}
                </label>

                <div className="texField--postName">
                    <TextField
                        color="primary"
                        label="Name of the plant"
                        placeholder="Add the name of your plant"
                        variant="filled"
                    />
                </div>
                <div className="input__group--post">
                                <FormControl
                                    variant="filled"
                                    style={{ width: "50%" }}
                                >
                                    <InputLabel>Selling?</InputLabel>
                                    <MuiSelect value={values.transaction || ""}>
                                        <MuiMenuItem value="swap">
                                            Swap
                                        </MuiMenuItem>
                                        <MuiMenuItem value="sell">Sell</MuiMenuItem>
                                        <MuiMenuItem value="donate">Donate</MuiMenuItem>
                                    </MuiSelect>
                                </FormControl>
                                
                                {priceContainer}
                        </div>
                
                <div className="texField--postDescription">
                    <Box>
                        <TextField
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            rows={6}
                            placeholder="Add your description"
                            variant="filled"
                            style={{ width: "100%" }}
                        />
                    </Box>
                </div>
                {/* <Link to="/messages/create">  */}
                <Box mb={2}>
                    <Button
                        // className="button--post"
                        color="primary"
                        variant="contained"
                        size="large"
                        disableRipple
                        style={{ textTransform: "none" }}
                        style={{ width: "100%" }}
                    >
                        Post new plant
                    </Button>
                </Box>

                {/* </Link> */}
            </Box>
        </div>
    );
}

export default PostCreate;
