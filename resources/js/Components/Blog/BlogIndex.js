import React,{Component} from 'react';
import { Link } from "react-router-dom";
import BlogList from './BlogList/BlogList';

class BlogIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            postList: [],
            dataLoaded: false,
            error: false,
            Data: false
        };
    };

    componentWillMount() {
        axios.get('/post').then((response) => {
            if(response.data.value.length === 0){
                this.setState({ postList: [], dataLoaded: true ,error : false,Data : false});
            }else{
                this.setState({ postList: response.data.value, dataLoaded: true ,error : false,Data : true});
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    removePostHandler(key,id){
        axios.get('/remove/post/'+id).then((response) => {
          if(response.data.status === "success"){
              const postList = this.state.postList;
              postList.splice(key, 1);
              if(postList.length === 0){
                  this.setState({ postList: [], dataLoaded: true ,error : false,Data : false});
              }else{
                  this.setState({ postList: postList, dataLoaded: true ,error : false,Data : true});
              }

          }
        }).catch(function(error) {
            console.log(error);
        });

    }

    render(){
        let BlogListData=null;
        if(this.state.dataLoaded){
            if(this.state.Data){
                BlogListData = this.state.postList.map((post,key) =>
                    <BlogList
                        key={key}
                        remove={() => this.removePostHandler(key,post.id)}
                        title={post.title}
                        image={post.image}
                        desc={post.description}
                        date={post.created_at}
                        id={post.id}
                        comment={6}
                    />
                );
            }else{
                BlogListData = <h4>No Data Found !!! <br/><hr/><Link  to="/create-blog">Create Your Post</Link></h4>;
            }
        }else{
                BlogListData = <h4>Loading ...</h4>;
        }

        return(
            <div className="BlogSection">
                    <section className="ftco-section ftco-no-pt ftco-no-pb">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-xl-12 py-12 px-md-12">
                                    <div className="row pt-md-4">
                                        {BlogListData}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        );
    }
};

export default BlogIndex;