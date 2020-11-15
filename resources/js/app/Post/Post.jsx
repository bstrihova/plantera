import React from "react";
import Box from "@material-ui/core/Box";
import ExampleComponent from "../ExampleComponent/ExampleComponent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import PostGrid from "../components/PostGrid/PostGrid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PostDescription from "../components/PostDescription/PostDescription";

function Post() {
    return (
        <main>
            <section className="container">
                <figure>
                    <img
                        className="imagePost"
                        alt="Snake plant"
                        src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                    />
                </figure>
                <section className="containerRight">
                    <div className="postPrice">
                        <Typography variant="h2" color="primary">
                            150 Kč
                        </Typography>
                        <Avatar
                            className="userAvatar"
                            alt="user"
                            src="https://i1.wp.com/nutrikiran.com/wp-content/uploads/2019/09/my_image.png?w=451&ssl=1"
                            variant="circle"
                        />
                    </div>
                    <div className="description">
                        <PostDescription />
                    </div>
                </section>

                {/* <Box
                        className="description"
                        display="flex"
                        flexDirection="column"
                    >
                        <PostDescription />
                    </Box> */}
            </section>
            <PostGrid />
        </main>
    );
}

export default Post;
