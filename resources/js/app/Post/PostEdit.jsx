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
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function PostEdit() {
    let { id } = useParams();

    const [post, setPost] = useState("");
    const [loading, setLoading] = React.useState(true);

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

    let priceContainer = "";
    if (post.transaction === "sell") {
        priceContainer = (
            <TextField
                color="primary"
                label="Price"
                variant="filled"
                style={{ width: "30%" }}
                value={post.price || ""}
                type="number"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">Kč</InputAdornment>
                    )
                }}
            />
        );
    }

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
                    <div className="main__container">
                        <figure className="myPictures">
                            <img src={post.photo} alt={post.name} />
                        </figure>
                        <Button
                            className="button"
                            color="primary"
                            variant="contained"
                            size="large"
                        >
                            + Add plant picture
                        </Button>
                        <div className="texField--postName">
                            <TextField
                                color="primary"
                                label="Name of the plant"
                                variant="filled"
                                value={post.name || ""}
                            />
                        </div>
                        <div className="texField--postName">
                            <FormControl
                                variant="filled"
                                style={{ width: "30%" }}
                            >
                                <InputLabel>Status</InputLabel>
                                <MuiSelect value={post.available}>
                                    <MuiMenuItem value="1">
                                        Available
                                    </MuiMenuItem>
                                    <MuiMenuItem value="0">Sold</MuiMenuItem>
                                </MuiSelect>
                            </FormControl>
                        </div>
                        <div className="input__group--post">
                            <Box>
                                <FormControl style={{ width: "150%" }}>
                                    <InputLabel>Selling?</InputLabel>
                                    <MuiSelect
                                        variant="filled"
                                        value={post.transaction || ""}

                                        // onChange={handleTransaction}
                                    >
                                        <MuiMenuItem value="donate">
                                            Donate
                                        </MuiMenuItem>
                                        <MuiMenuItem value="sell">
                                            Sell
                                        </MuiMenuItem>
                                        <MuiMenuItem value="swap">
                                            Swap
                                        </MuiMenuItem>
                                    </MuiSelect>
                                </FormControl>
                            </Box>

                            {/* TextField with Price */}
                            {priceContainer}
                        </div>
                        <div className="texField--postDescription">
                            <Box>
                                <TextField
                                    id="filled-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    columns={50}
                                    value={post.description || ""}
                                    variant="filled"
                                    style={{ width: "100%" }}
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
                                style={{ textTransform: "none" }}
                                style={{ width: "100%" }}
                            >
                                Confirm changes
                            </Button>
                        </Box>
                        {/* </Link> */}
                    </div>
                </Box>
            </div>
        );
    }

    return content;
}

export default PostEdit;
