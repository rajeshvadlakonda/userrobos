import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Cardlist from '../components/CardList';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import Popup from '../components/Popup';

// import {robots} from '../components/robots';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
            message: 'Robo Fans',
            popup: false
        }
    console.log("constructor");
    }
    
    changeMessage = () =>{
        this.setState({
            message : 'No records found'
        });
    }
    onsearchChange = (event) =>{
        this.setState({
            searchfield:event.target.value});
        }
    openpopup = () =>{
        this.setState({
            popup:true
        })
    }
    closepopup = () =>{
        this.setState({
            popup:false
        })
    }
    componentDidMount(){
        console.log("will mount run")
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            return response.json()
        })
        .then(users =>{
            this.setState({robots:users})
        })
    }
    

    render(){
        const {robots,searchfield,popup} = this.state
        console.log("render run");
        const filteredRobos =  robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })


        return !filteredRobos.length ? <h1 className="tc">Loading..</h1> : 
        (
            <React.Fragment>
            
            {popup ? <Popup closepopup={this.closepopup}/> : ""}
                <div className='tc'>
                    <h1>{this.state.message}</h1>
                    <button type="submit" onClick={this.openpopup} >subscrible</button>
                    <Searchbox searchChange = {this.onsearchChange}/>
                    <Scroll>
                        <Cardlist robots={filteredRobos} />
                    </Scroll>
                    {/* <Cardlist robots={robots} /> */}
                    {/* <App /> */}
                    {/* {filteredRobos.length === 0 ? this.changeMessage : " "}  */}
                </div>
            </React.Fragment>
        )
    }
}
    // const App = () => {
        // return(
        // )
    // }
// class App extends Component{
//     constructor(){
//         super();
//         this.state = ({
//             name : 'constructor name'
//         })
//     }
// componentWillMount(){
//     setTimeout( ()=>{
//         this.setState({
//             name:"Will Mount Name"
//         });
//         console.log("inside set timeout");
//     },3000)
//     console.log("will mount sync");
// }
// componentDidMount(){
//     console.log("running did mount");
//     setTimeout( ()=>{
//         this.setState({name:'Rajesh did'});
//     },1000)
// }

// render(){
//     console.log("Inside Render");
//     return(
//         <h1>Hello {this.state.name}</h1>
//     )
// }
// }
export default App;