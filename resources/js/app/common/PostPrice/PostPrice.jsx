import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LoopIcon from "@material-ui/icons/Loop";

function PostPrice({ post }) {
    let postTransaction = "";

    if (post.transaction === "sell") {
        postTransaction = `${post.price} ${post.currency}`;
    } else if (post.transaction === "swap") {
        postTransaction = (
            <Box display="flex" alignItems="center" justifyContent="flex-start">
                <LoopIcon style={{ fontSize: "150%" }} />
                <Typography variant="h5" color="primary" gutterBottom>
                    Swap
                </Typography>
            </Box>
        );
    } else if (post.transaction === "donate") {
        postTransaction = "FREE";
    }
    return <div>{postTransaction}</div>;
}

export default PostPrice;
