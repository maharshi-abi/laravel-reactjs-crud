import React,{Component} from 'react';
import { Switch,Route,Link } from "react-router-dom";
import axios from "axios";
import Blog from './Blog/BlogIndex';
import CreateBlog from './Blog/BlogCreate';
import BlogDetail from "./Blog/BlogList/BlogDetail";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

class Header extends Component{
render(){
        return(
            <div className="HeaderSection">

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/create-blog">Create Blog</Link>
                            </li>

                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/home">
                        <Blog />
                    </Route>
                    <Route path="/create-blog">
                        <CreateBlog />
                    </Route>
                    <Route path="/post/:id" render={props => <BlogDetail postID=":id" {...props} />}>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Header;