import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function PostImageUpload() {
    // const [images, setImages] = useState({
    //     image: ""
    // });

    // const handleSubmit = async event => {
    //     event.preventDefault();
    // };

    // const handleChange = event => {
    //     const allowed_names = ["image"],
    //         name = event.target.name,
    //         value = event.target.value;

    //     if (-1 !== allowed_names.indexOf(name)) {
    //         setValues(prev_values => {
    //             return {
    //                 ...prev_values,
    //                 [name]: value
    //             };
    //         });
    //     }
    // };

    return (
        <form
            action="/api/posts/picture"
            method="post"
            // onSubmit={handleSubmit}
            encType="multipart/form-data"
        >
            <input type="file" name="image" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostImageUpload;
