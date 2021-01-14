import React from "react";
import Box from "@material-ui/core/Box";
import LoopIcon from "@material-ui/icons/Loop";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CardGiftcardIcon from '@material-ui/icons/SentimentVerySatisfiedSharp';

function PostPrice({ post, isPost }) {
    let postTransaction = "";

    if (post.transaction === "sell") {
        postTransaction = (
            <>
                {isPost ? <LocalOfferIcon color="primary" style={{ fontSize: "100%" }} /> : ""}
                {post.price} {post.currency}
            </>
        )

            ;
    } else if (post.transaction === "swap") {
        postTransaction = (
            <>
                <LoopIcon color="primary" style={{ fontSize: "150%" }} />
                SWAP
            </>
        )
    } else {
        postTransaction = (
            <>
                {isPost ? <CardGiftcardIcon color="primary" style={{ fontSize: "150%" }} /> : ""}
                0 Kč
            </>
        )
    }
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {postTransaction}
        </Box>
    );
}

export default PostPrice;
