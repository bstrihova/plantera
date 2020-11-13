import React, {useState} from 'react'
import Button from "@material-ui/core/button"
import TextField from "@material-ui/core/TextField"
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";


function ExampleComponent() {
    const [state, setState] = useState(1)

    const handleChange = (evt) => {
        setState(evt.target.value);
      }

    return (
        <div>
            <Button color="primary">Hello btn</Button>
            <TextField color="primary" label="input label" placeholder="put something here"/>
            <FormControl>
                <InputLabel id="age">Age</InputLabel>
                 <MuiSelect
                    onChange={handleChange}
                    labelId="age"
                    value={state}
                    //   style={{width: '13em'}}
                >
                    <MuiMenuItem value="1">amooooremiiiio</MuiMenuItem>
                    <MuiMenuItem value="2">amoooordfdfiio</MuiMenuItem>
                </MuiSelect>
            </FormControl>
            <Button color="primary"><DeleteIcon /></Button>
        

        </div>
    )
}

export default ExampleComponent
