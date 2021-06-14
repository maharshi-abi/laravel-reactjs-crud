import React from 'react';
import { Link } from "react-router-dom";

const BlogList = (props) => {
    const text_truncate = (str, length, ending) => {
        if (length == null) {
            length = 100;
        }
        if (ending == null) {
            ending = ' ...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };

    return (
        <div className="BlogList">

            <div className="col-md-12">
                <div className="blog-entry d-md-flex">
                    <img src={props.image} className="img img-2"  alt={"Blog Data"}/>
                    <div className="text text-2 pl-md-4">
                        <h3 className="mb-2"><Link to={`/post/${props.id}`}>{text_truncate(props.title,40)} </Link></h3>
                        <div className="meta-wrap">
                            <p className="meta">
                                <span><i className="icon-calendar mr-2"/>{props.date}</span>
                                <span><i className="icon-comment2 mr-2"/>{props.comment}</span>
                            </p>
                        </div>
                        <p className="mb-4">
                            {text_truncate(props.desc,200)}
                        </p>
                        <p>
                            <Link className="btn btn-primary" to={`/post/${props.id}`} >Read More <span
                                className="ion-ios-arrow-forward"/></Link>

                            <a href="#" className="btn btn-danger" onClick={props.remove} style={{float : 'right' }}><span
                                className="ion-ios-remove-circle-outline"/> Remove</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;