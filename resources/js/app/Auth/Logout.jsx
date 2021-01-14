import React from 'react';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";
import { useHistory } from "react-router-dom";


function Logout({ version }) {

    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();
        await axios.post("/logout");
        history.push("/");
        window.location.reload()
    };

    let content = "";

    if (version === "desktop") {
        content = (
            <IconButton onClick={handleSubmit}>
                <LogoutIcon aria-label="logout" color="secondary" />
            </IconButton>
        )
    } else if (version === "mobile") {
        content = (
            <MenuItem onClick={handleSubmit}>
                <IconButton>
                    <LogoutIcon color="primary" />
                </IconButton>
                <p>Odhlásit se</p>
            </MenuItem>
        )
    }

    return content
}

export default Logout
