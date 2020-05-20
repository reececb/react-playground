import React, {Component} from 'react';

export default class HelloWorld extends Component {
    state = {
            who: "world"
    };
    render() {
        return ( 
        <div className="helloworld">
            <p className="hello-who">Hello, {this.state.who}</p>
            <button 
            onclick={() => this.setState({who: 'world' })}>World</button>
            <button
            onclick={() => this.setState({who: 'friend'})}>Friend</button>
            <button
            onclick={() => this.setState({who: 'React'})}>React</button>
        </div>
        )
    }

}