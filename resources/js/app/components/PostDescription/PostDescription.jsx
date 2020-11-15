import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function PostDescription() {
    return (
        <section>
            <Typography variant="h4" component="h2">
                Description:{" "}
            </Typography>
            <Typography variant="subtitle1" component="h2" color="primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                ipsa unde adipisci, rem laborum minima corrupti voluptates
                tempora totam blanditiis praesentium pariatur dignissimos! Sint
                veniam laudantium tempora in, laborum delectus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maiores, quaerat
                totam? Officia excepturi vel dolorem recusandae reprehenderit
                quaerat minus accusamus voluptatibus necessitatibus eos at,
                repudiandae tempore ratione fugiat. Reiciendis, fugit!
            </Typography>
            <Box>
                <Typography variant="h5" component="h2">
                    Location:{" "}
                </Typography>
                <Typography variant="subtitle1" component="h2" color="primary">
                    Prague, CZ
                </Typography>
            </Box>
            <section className="button">
                <Box mt={5}>
                    <Button
                        color="primary"
                        variant="contained"
                        size="medium"
                        disableRipple
                    >
                        <Typography variant="h5">Contact seller</Typography>
                    </Button>
                </Box>
            </section>
        </section>
    );
}

export default PostDescription;
