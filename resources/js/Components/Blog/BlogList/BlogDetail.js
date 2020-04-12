import React,{Component} from 'react';
import { Link } from "react-router-dom";

class BlogDetail extends Component{
    constructor(props){
        super(props);
        let PostID = '';
        if(props.match.params.id){
            PostID = props.match.params.id;
        }
        this.state = {
            PostID : PostID,
            data : false,
            PostData : []
        }
    }

    componentDidMount() {
        axios.get('/post/'+this.state.PostID).then((response) => {
            if(response.data.status === "success"){
                if(response.data.value.length === 0){
                    this.setState({ PostData: [], Data : false});
                }else{
                    this.setState({ PostData: response.data.value, Data : true});
                }
            }
        }).catch(function(error) {
            console.log(error);
        });
    }

    render(){

        let title = '';
        let image = '';
        let description = '';
        if(this.state.Data){
            title = this.state.PostData.title;
            description = this.state.PostData.description;
            image = this.state.PostData.image;
        }

        return (
            <div className="BlogData">
                <section className="ftco-section ftco-no-pt ftco-no-pb">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-lg-8 px-md-5 py-5">
                                <Link to="/home" className="btn btn-primary">
                                    <span className="ion-ios-arrow-back"/> Back to Blog</Link>
                                <div className="row pt-md-4">
                                    <h1 className="mb-3"># {title}</h1>
                                    <p>{description}</p>
                                    <p>
                                        <img src={image} alt={title} className="img-fluid"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BlogDetail;