initialy the element does not renders
forgot imports/exports
fixed render
#current App

import React from 'react';
import ReactDOM from 'react-dom';

let App=<h1>Simple element</h1>;
ReactDOM.render(App, document.getElementById('root'));

export default App

#current index

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

Error as follows;
Element type is invalid: expected string or class/function but got: object
when closed render is fine
New code
#current App

import React from 'react';
import ReactDOM from 'react-dom';

let App=() =>{return <h1>Simple element</h1>;}
ReactDOM.render(App, document.getElementById('root'));

export default App

#current index

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(<App />, document.getElementById('root'));

fixed Error, new Error follows;
Warning functions are not valid React child
New Code
#current App

import React from 'react';

let App=() =>{return <h1>Simple element</h1>;}

export default App

#current index

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
let ele=<App />

ReactDOM.render(ele, document.getElementById('root'));

Renders without errors

## Changing to String

#new App

import React from 'react';

let App=(props) =>{return <h1>Hello there, {props.name}.</h1>;}

export default App

#new index

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
let ele=<App name="General Kenobi"/>

ReactDOM.render(ele, document.getElementById('root'));

Rendered without errors

## Class component

#new App

import React ,{ Component } from 'react';

class App extends Component {
    render()
    {
        let endmessage="Welcome!"
        if(this.props.name==="General Kenobi"){
            endmessage="I am Groot";
        }
        return <h1>Hello there, {this.props.name}. {endmessage}</h1>;
    }
}

export default App

#new index

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
let ele=<App name="General Kenobi"/>

ReactDOM.render(ele, document.getElementById('root'));

##Props and States

#new app

import React ,{ Component } from 'react';

//let App=(props) =>{return <h1>Hello there, {props.name}.</h1>;}

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            text: "Hello there"
        }
    }
    
    render()
    {
        let endmessage="Welcome!"
        if(this.props.name==="General Kenobi"){
            endmessage="I am Groot";
        }
        return (
        <div>
            <input
                placeholder="What is Your name?"
                value={this.props.name}
                onChange={(event)=>console.log(event.target.value)}
            />
            <h1>{this.state.text}, {this.props.name}. {endmessage}</h1>;
        </div>
        )
    }
}

export default App

#same index

## Events

React.Fragment does not change the document noticeably
False is displayed first due to default
componentDidMount causes true to be default

#new app

import React ,{ Component } from 'react';

//let App=(props) =>{return <h1>Hello there, {props.name}.</h1>;}

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            text: "Hello there",
            name : 'Ben',
            hasLoaded: false
        }
    }
    onInputChange=(value)=>{
        this.setState({name: value})
    }
    toggle() {
        this.setState(state => ({
        hasLoaded: !state.hasLoaded}));
    }
    componentDidMount() {this.setState({hasLoaded : true})}
    render()
    {
        let endmessage="Welcome!"
        if(this.state.name==="General Kenobi"){
            endmessage="I am Groot"
        };
        if(this.state.hasLoaded){
        return (
        <React.Fragment>
            <div>
            <input
                placeholder="What is Your name?"
                value={this.state.name}
                onChange={(event)=>this.onInputChange(event.target.value)}
            />
            </div>
            <div>
            <input
                value="Toggle"
                type="button"
                onClick={()=>{this.toggle()}}
            />
            </div>
            <h1>{this.state.text}, {this.state.name}. {endmessage}</h1>
        </React.Fragment>
        )}else{
        return(
            <div>
                <h1>Loading...</h1>
                <div>
                    <input
                        value="Load"
                        type="button"
                        onClick={()=>{this.componentDidMount()}}
                    />
                </div>
            </div>
        )}
    }
}

export default App