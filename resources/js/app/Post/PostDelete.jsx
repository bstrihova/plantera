import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function PostDelete() {
    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Delete your post
                </Typography>
            </Box>
            <section className="main__container__shadow--delete">
                <Box mt={4}>
                    <Typography variant="h4" gutterBottom>
                        Are you sure you want to delete this post?
                    </Typography>
                </Box>
                <div className="imageDelete__container">
                    <img
                        className="imageDelete"
                        alt="Snake plant"
                        src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                    />

                    <div className="imageDelete__text">150 Kč Snake Plant</div>
                </div>
                <div className="button--deleteGroup">
                    <Button
                        className="button"
                        color="primary"
                        variant="contained"
                        size="large"
                        disableRipple
                        style={{ textTransform: "none" }}
                    >
                        Delete
                    </Button>
                    <Button
                        className="button"
                        color="primary"
                        variant="outlined"
                        size="small"
                        disableRipple
                        style={{ textTransform: "none" }}
                    >
                        No
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default PostDelete;
