import React from "react";
import Box from "@material-ui/core/Box";
import ExampleComponent from "../ExampleComponent/ExampleComponent";
import Typography from "@material-ui/core/Typography";
import PostGrid from "../components/PostGrid/PostGrid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

function PostCreate() {
    return (
        <div>
            <Box textAlign="center" mt={4}>
                <Typography variant="h1" color="primary" fontSize="bold">
                    Post new plant
                </Typography>
            </Box>
            <Box>
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
                    + Post new picture
                </Button>
            </Box>
        </div>
    );
}

export default PostCreate;
