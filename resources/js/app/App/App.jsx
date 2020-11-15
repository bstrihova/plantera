import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home"
import Post from "../Post/Post"
import PostCreate from "../Post/PostCreate"
import PostEdit from "../Post/PostEdit"
import PostDelete from "../Post/PostDelete"
import UserProfile from "../User/UserProfile"
import UserSettings from "../User/UserSettings"
import Messages from "../Messages/Messages"
import MessageCreate from "../Messages/MessageCreate"
import Header from '../Header/Header';


function App() {
    return (
        <Router>
            {/* <React.Fragment> */}
                <Header/>
                <main>
                <Switch>
                    {/* // BARA ONLY */}
                    <Route exact path="/" children={<Home/>}/> 

                    <Route path="/posts/create" children={<PostCreate/>}/>

                    <Route path="/posts/edit" children={<PostEdit/>}/>

                    <Route path="/posts/delete" children={<PostDelete/>}/>

                    {/* // STEFANO ONLY */}
                    <Route path="/posts" children={<Post/>}/>

                    <Route path="/user/profile" children={<UserProfile/>}/>

                    <Route path="/user/settings" children={<UserSettings/>}/>

<<<<<<< HEAD
                {/* EVA ONLY */}

                <Route path="/messages/create" children={<MessageCreate/>}/>
                <Route path="/messages" children={<Messages/>}/>

                
            </Switch>
            </main>
=======
                    {/* EVA ONLY */}
                    <Route path="/messages" children={<Messages/>}/>

                    <Route path="/messages/create" children={<MessageCreate/>}/>
                </Switch>
                </main>
            {/* </React.Fragment>     */}
>>>>>>> e4f493a2a8b92012290a9f6a35ed378650904a18
        </Router>
        )
}

export default App
