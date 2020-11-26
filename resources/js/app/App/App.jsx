import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Post from "../Post/Post";
import PostCreate from "../Post/PostCreate";
import PostEdit from "../Post/PostEdit";
import PostDelete from "../Post/PostDelete";
import UserProfile from "../User/UserProfile";
import UserSettings from "../User/UserSettings";
import Messages from "../Messages/Messages";
import Header from "../Header/Header";
import ThreadShow from "../Messages/ThreadShow";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { useGlobalContext } from "../context";
import PostImageUpload from "../Post/PostImageUpload";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const { fetchUser } = useGlobalContext();

    const loadUser = async () => {
        const response_user = await fetch(`/api/authuser`);
        const data = await response_user.json();
        // setUser to authenticated user
        fetchUser(data);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route
                        exact
                        path="/"
                        children={
                            <Home
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />
                        }
                    />

                    <Route path="/login" children={<Login />} />

                    <Route path="/register" children={<Register />} />

                    <Route path="/posts/create" children={<PostCreate />} />
                    {/* DELETE THE BELOW ROUTE IF IT IS NOT WORKING */}
                    <Route
                        path="/posts/picture"
                        children={<PostImageUpload />}
                    />

                    <Route path="/posts/:id/edit" children={<PostEdit />} />

                    <Route path="/posts/:id/delete" children={<PostDelete />} />

                    <Route
                        path="/posts/:id"
                        children={
                            <Post
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />
                        }
                    />

                    <Route
                        path="/user/profile/:id"
                        children={
                            <UserProfile
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />
                        }
                    />

                    <Route path="/user/settings" children={<UserSettings />} />

                    <Route
                        path="/messages/:id"
                        children={
                            <ThreadShow
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />
                        }
                    />

                    <Route path="/messages" children={<Messages />} />
                </Switch>
            </main>
            {/* <footer>Copyright Plantera 2020</footer> */}
        </Router>
    );
}

export default App;
