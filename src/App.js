import React from "react";
import Scroll from './Scroll';
import CardList from "./CardList";
import Searchbox from "./Searchbox";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(user=> this.setState({robots:user}));
    }

    onsearchchange=(event)=>{
        this.setState({searchfield: event.target.value})
       
    }

    render(){
        const filteredRobo= this.state.robots.filter(robots =>{
            return(robots.name?.includes(this.state.searchfield))
        })
        return(
            <div className="tc">
                <h1 className="f1 serif white">RoboFriends</h1>
                <Searchbox searchchange={this.onsearchchange}/>
                <Scroll>
                    <CardList robots={filteredRobo}/>   
                </Scroll>
            </div>
        )
    }
    
}

export default App;
