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
                        onClick={()=>{this.toggle()}}
                    />
                </div>
            </div>
        )}
    }
}

export default App