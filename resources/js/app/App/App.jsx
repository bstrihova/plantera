import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Post from "../Post/Post";
import PostCreate from "../Post/PostCreate";
import PostEdit from "../Post/PostEdit";
import PostDelete from "../Post/PostDelete";
import UserProfile from "../User/UserProfile";
import UserSettings from "../User/UserSettings";
import Messages from "../Messages/Messages";
import MessageCreate from "../Messages/MessageCreate";
import Header from "../Header/Header";

function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <Router>
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/" children={<Home  searchValue={searchValue} setSearchValue={setSearchValue}/>} />

                    <Route path="/posts/create" children={<PostCreate />} />

                    <Route path="/posts/:id/edit" children={<PostEdit />} />

                    <Route path="/posts/:id/delete" children={<PostDelete />} />

                    <Route path="/posts/:id" children={<Post searchValue={searchValue} setSearchValue={setSearchValue}/>} />

                    <Route path="/user/profile" children={<UserProfile searchValue={searchValue} setSearchValue={setSearchValue} />} />

                    <Route path="/user/settings" children={<UserSettings />} />


                    <Route
                        path="/messages/create"
                        children={<MessageCreate />}
                    />
                    <Route path="/messages" children={<Messages />} />
                </Switch>
            </main>
            {/* <footer>Copyright Plantera 2020</footer> */}
        </Router>
    );
}

export default App;
