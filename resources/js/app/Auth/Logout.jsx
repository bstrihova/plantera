import React from 'react';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useHistory } from "react-router-dom";


function Logout({version}) {

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
            <Link to="/logout" onClick={handleSubmit}>
                <IconButton>
                    <LogoutIcon aria-label="logout" color="secondary"/>
                </IconButton>
            </Link> )
    } else if (version === "mobile") {
        content = (
            <Link to="/logout" onClick={handleSubmit}>
                <MenuItem>
                    <IconButton>
                        <LogoutIcon color="primary"/>
                    </IconButton>
                    <p>Logout</p>
                </MenuItem>
            </Link> 
            )
    }

    return content
}

export default Logout
