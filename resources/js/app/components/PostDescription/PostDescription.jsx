import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

function PostDescription() {
    return (
        <section className="containerRight">
            <div className="containerRight__upperPart">
                <Box variant="h3" fontWeight={900} color="primary.main">
                    <Typography variant="h3">150 Kč</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box mr={0.6}>
                        <Avatar
                            alt="username"
                            src="/storage/profile-photos/08d0IhlaomLIg3XBk0XDZ7ahfMgmTB5zEs82m6Un.jpeg"
                            variant="circle"
                        />
                    </Box>
                    <Typography variant="body2">bramborienka</Typography>
                </Box>
            </div>
            <div className="description">
                <Typography variant="h4" component="h2">
                    Description:{" "}
                </Typography>
                <Typography variant="subtitle1" component="h2" color="primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    tempore quo impedit unde optio repellat et incidunt
                    doloremque sunt quaerat, quas sit autem, itaque pariatur
                    sapiente cum ipsum natus. Tempora cum amet distinctio iure,
                    dolores magnam commodi possimus, tempore recusandae minima
                    corporis minus similique. Delectus, ipsam illo. Fugit sunt
                    aliquid cumque commodi explicabo debitis, voluptatibus unde
                    nisi quo rem, sit ad facilis quae placeat, dolor dignissimos
                </Typography>
                <Box>
                    <Typography variant="h5" component="h2">
                        Location:{" "}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="h2"
                        color="primary"
                    >
                        Prague, CZ
                    </Typography>
                </Box>

                <Button
                    className="button--post"
                    color="primary"
                    variant="contained"
                    size="medium"
                    disableRipple
                >
                    Contact seller
                </Button>
            </div>
        </section>
    );
}

export default PostDescription;
