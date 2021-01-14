import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import ThreadShowItem from './ThreadShowItem';
import { useParams } from "react-router-dom";
import CookieCsrf from "../csrf";
import PostPrice from "../common/PostPrice/PostPrice";
import BlockIcon from '@material-ui/icons/Block';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    chip: {
        backgroundColor: "#FF0000",
        color: "white",
        icon: "white",
    },
    root: {
        flexGrow: 1,
    },
}));

function ThreadShow() {

    const { user } = useGlobalContext();
    const classes = useStyles();
    let { id } = useParams();
    const [thread, setThread] = useState("");
    const [loading, setLoading] = React.useState(true);
    let history = useHistory();

    const [values, setValues] = useState({
        body: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();


        const response = await fetch(`/api/threads/${id}`, {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json', // tell Laravel (backend) what we want in response
                'Content-type': 'application/json', // tell backend what we are sending
                'X-XSRF-TOKEN': CookieCsrf()
            }

        })

        if (response.status === 200) {
            window.location.reload();
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['body'],
            name = event.target.name,
            value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return (
                    {
                        ...prev_values,
                        [name]: value
                    }
                );
            });
        }
    }


    const loadThread = async () => {
        setLoading(true);
        const response = await fetch(`/api/threads/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        data && setThread(data.thread);
        setLoading(false);
    };

    useEffect(() => {
        loadThread();
    }, [id]);

    let pageContent = "";

    let messageContent = "";

    let recipient = "";

    if (user && thread && thread.buyer && thread.buyer.name && user.id == thread.buyer_id) {
        recipient = thread.seller.name

    } else if (user && thread && thread.buyer && thread.buyer.name && user.id != thread.buyer_id) {
        recipient = thread.buyer.name
    }

    if (loading) {
        pageContent = (
            <div className="logo--pulsating">
                <img src="/heart_plantera_inversed.png" />
            </div>
        );
    } else {
        pageContent = (
            <>
                {/* heading with recipient */}
                <Grid item xs={10} lg={6}>
                    <Box p={4}>
                        <Typography
                            variant="h3"
                            color="primary"
                            gutterBottom
                        >
                            {recipient}
                        </Typography>
                    </Box>
                </Grid>

                {/* post description */}
                <Grid item xs={11} sm={6} md={5} lg={3}>
                    <Grid
                        container
                        className="
                        main__container__shadow 
                        "
                        justify="center"
                        align="center"
                    >
                        <Grid
                            item xs={5}
                            style={{ fontSize: 0 }}
                        >
                            <img
                                className="imagePost--threadShow"
                                src={thread.post.photo}
                                alt={thread.post.name}
                                onClick={() => {
                                    history.push(`/posts/${thread.post.id}`)
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={7}
                        >
                            <Grid
                                container
                                direction="column"
                                alignItems="center"
                                className="paddingContainer"
                                spacing={2}
                            >
                                <Grid item>
                                    <Typography variant="h5">
                                        <Box
                                            fontWeight={900}
                                        >
                                            {thread.post.name}
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box
                                        fontWeight={400}
                                    >
                                        <PostPrice post={thread.post} isPost={true} />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    {/* show if item is still available */}
                                    {thread.post.available ? (
                                        <Chip
                                            color="primary"
                                            icon={
                                                <LocalFloristIcon />
                                            }
                                            label="Available"
                                        />) : (
                                            <Chip
                                                className={classes.chip}
                                                icon={
                                                    <BlockIcon
                                                        style={{ color: "white" }}
                                                    />
                                                }
                                                label="Not available"
                                            />
                                        )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* messages */}
                <Grid item xs={11} sm={9} md={7} lg={5}>
                    {thread ?
                        <Grid
                            container
                            spacing={3}
                            className="paddingContainer"
                            align="center"
                        >
                            {thread.messages.map((message, index) => (
                                <ThreadShowItem
                                    message={message}
                                    seller={thread.seller_id}
                                    key={index}
                                />
                            ))}
                        </Grid>
                        : ""}

                    {/* form to send new message */}
                    <Grid item xs={12} mb={2}>
                        <FormControl
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: "2rem" }}
                        >
                            <InputLabel htmlFor="body">
                                Your new message
                        </InputLabel>
                            <OutlinedInput
                                value={values.body}
                                type="submit"
                                name="body"
                                multiline
                                autoFocus
                                rows={1}
                                rowsMax={4}
                                // when Enter is pressed, the message is sent, when Shift+Enter is pressed, a new line is made
                                onKeyDown={(e) => {
                                    if (e.which === 13 && e.keyCode === 13 && e.key === "Enter" && e.shiftKey) {
                                        e.stopPropagation()
                                    } else if (e.keyCode == 13 && !e.shiftKey) {
                                        handleSubmit(e);
                                    }
                                }}
                                onChange={handleChange}
                                labelWidth={130}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="action send message"
                                            edge="end"
                                            color="primary"
                                            type="submit"
                                        >
                                            <SendIcon />
                                        </IconButton>
                                    </InputAdornment>}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </>
        );

    }
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            {pageContent}
        </Grid>
    );
}

export default ThreadShow;
