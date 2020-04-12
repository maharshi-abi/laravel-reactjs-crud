import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header';

class App extends Component{
render(){
        return(
            <div className="Application">
                <Router>
                    <Header/>
                </Router>
            </div>
        );
    }

};

export default App;

if (document.getElementById('react-js')) {
    ReactDOM.render(<App/>, document.getElementById('react-js'));
}
