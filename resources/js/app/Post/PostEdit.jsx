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

    return (
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
                        alignSelf="center"
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
                            placeholder="Add the name of your plant"
                            variant="filled"
                        />
                    </div>
                    <div className="texField--postName">
                        <FormControl variant="filled" style={{ width: "30%" }}>
                            <InputLabel id="status">Status</InputLabel>
                            <MuiSelect labelId="status">
                                <MuiMenuItem value="available">
                                    Available
                                </MuiMenuItem>
                                <MuiMenuItem value="sold">Sold</MuiMenuItem>
                            </MuiSelect>
                        </FormControl>
                    </div>
                    <div className="input__group--post">
                        <Box>
                            <FormControl style={{ width: "200%" }}>
                                <InputLabel id="status">Selling?</InputLabel>
                                <MuiSelect
                                    labelId="status"
                                    variant="filled"
                                    // onChange={handleTransaction}
                                    // value={transactionType}
                                >
                                    <MuiMenuItem value="donate">
                                        Donate
                                    </MuiMenuItem>
                                    <MuiMenuItem value="sell">Sell</MuiMenuItem>
                                    <MuiMenuItem value="swap">Swap</MuiMenuItem>
                                </MuiSelect>
                            </FormControl>
                        </Box>

                        <TextField
                            color="primary"
                            label="Price"
                            placeholder="Add your price"
                            variant="filled"
                            style={{ width: "30%" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        Kč
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>

                    <div className="texField--postDescription">
                        <Box>
                            <TextField
                                id="filled-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                columns={50}
                                placeholder="Add your description"
                                variant="filled"
                                style={{ width: "100%" }}
                            />
                        </Box>
                    </div>
                    <Box mb={2}>
                        {/* <Link to="/messages/create">  */}
                        <Button
                            className="button--post"
                            color="primary"
                            variant="contained"
                            size="small"
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

export default PostEdit;
