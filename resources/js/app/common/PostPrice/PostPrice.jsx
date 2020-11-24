import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LoopIcon from "@material-ui/icons/Loop";

function PostPrice({ post, isPostDescription }) {
    let postTransaction = "";
    let swapContent = "";

    if (isPostDescription) {
        swapContent = (
            <Box display="flex" alignItems="center" justifyContent="flex-start">
                <LoopIcon color="primary" style={{ fontSize: "150%" }} />
                <Typography variant="h5" color="primary" gutterBottom>
                    <Box fontSize="h2.fontSize" fontWeight="fontWeightMedium">
                        Swap
                    </Box>
                </Typography>
            </Box>
        );
    } else {
        swapContent = (
            <Box display="flex" alignItems="center" justifyContent="flex-start">
                <LoopIcon color="primary" style={{ fontSize: "150%" }} />
                SWAP
            </Box>
        );
    }

    if (post.transaction === "sell") {
        postTransaction = `${post.price} ${post.currency}`;
    } else if (post.transaction === "swap") {
        postTransaction = swapContent;
    } else if (post.transaction === "donate") {
        postTransaction = "FREE";
    }
    return <div>{postTransaction}</div>;
}

export default PostPrice;
