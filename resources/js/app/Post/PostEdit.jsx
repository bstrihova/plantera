import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";

function PostEdit()  
const transactionType = (props) => {
    const { handleTransaction, transactionType } = props;

const [transactionType, setTransactionType] = useState("")

  const handleTransaction = (e) => {
    setTransactionType(e.target.value);
    setSearchResults([]);
  };

  function changeTransaction(value) {
    if (value === 'swap') {
    //   setTransactionType((prevState) => prevState + 1);
    // }
    else if (value === 'donate') {
      setMyState((prevState) => prevState - 1);
    }
    else if (value === 'sell') {
        return //price
    }
  }

  const []

{
    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Edit your post
                </Typography>
            </Box>
            <Box className="main__container__shadow">
                <div className="main__container">
                    <figure className="myPictures">
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
                        + Add plant picture
                    </Button>
                    <div className="texField--postName">
                        <TextField
                            color="primary"
                            label="Name of the plant"
                            placeholder="Add the name of your plant"
                            variant="filled"
                        />
                    </div>
                    <div className="texField--postName">
                        <FormControl variant="filled" style={{ width: "30%" }}>
                            <InputLabel id="status">Status</InputLabel>
                            <MuiSelect labelId="status">
                                <MuiMenuItem value="available">
                                    Available
                                </MuiMenuItem>
                                <MuiMenuItem value="sold">Sold</MuiMenuItem>
                            </MuiSelect>
                        </FormControl>
                    </div>
                    <div className="input__group--post">
                        <Box>
                            <FormControl style={{ width: "200%" }}>
                                <InputLabel id="status">Selling?</InputLabel>
                                <MuiSelect
                                    labelId="status"
                                    variant="filled"
                                    onChange={handleTransaction}
                                    value={transactionType}
                                >
                                    <MuiMenuItem value="donate">
                                        Donate
                                    </MuiMenuItem>
                                    <MuiMenuItem value="sell">Sell</MuiMenuItem>
                                    <MuiMenuItem value="swap">Swap</MuiMenuItem>
                                </MuiSelect>
                            </FormControl>
                        </Box>

                        <TextField
                            color="primary"
                            label="Price"
                            placeholder="Add your price"
                            variant="filled"
                            style={{ width: "30%" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        Kč
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>

                    <div className="texField--postDescription">
                        <Box>
                            <TextField
                                id="filled-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                columns={50}
                                placeholder="Add your description"
                                variant="filled"
                                style={{ width: "100%" }}
                            />
                        </Box>
                    </div>
                    <Box mb={2}>
                        {/* <Link to="/messages/create">  */}
                        <Button
                            className="button--post"
                            color="primary"
                            variant="contained"
                            size="small"
                            disableRipple
                            style={{ textTransform: "none" }}
                            style={{ width: "100%" }}
                        >
                            Confirm changes
                        </Button>
                    </Box>
                    {/* </Link> */}
                </div>
            </Box>
        </div>
    );
}

}

export default PostEdit;
