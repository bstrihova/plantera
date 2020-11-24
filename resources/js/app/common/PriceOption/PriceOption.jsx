import React from "react";
import TextField from "@material-ui/core/TextField";
import InputError from "../InputError/InputError";
import InputAdornment from "@material-ui/core/InputAdornment";

function PriceOption({ transaction, price, errors }) {
    let priceContainer = "";
    console.log(transaction);
    if (transaction === "sell") {
        priceContainer = (
            <TextField
                // fullWidth
                color="primary"
                label="Price"
                variant="filled"
                // style={{ width: "30%" }}
                value={price || ""}
                name="price"
                error={errors ? true : false}
                helperText={<InputError errors={errors} />}
                type="number"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">Kč</InputAdornment>
                    )
                }}
            />
        );
    }
    return <div>{priceContainer}</div>;
}

export default PriceOption;
