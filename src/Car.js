import React from 'react';
import logo from './logo.svg';
import './App.css';

class Car extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    static getDerivedStateFromProps(props, state){
        return {brand: props.car}
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({model: " 480 tubes"})
        }, 1000);
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Before the update, the model was " + prevState.model;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById("div2").innerHTML = "The updated model is" + this.state.model;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    changeColor = () => {
        this.setState({brand: "Toyota"});
    };
    render(){
        const title = this.props.car;
        return(
            <div>
                <h1>{this.state.brand}</h1>
                <p>
                    <span>It is a {this.state.color}</span>
                    <span>{this.state.model}</span>
                    <span> from {this.state.year}</span>

                </p>
                <button type="button" onClick={this.changeColor}>Change color</button>
                <h1>{title}</h1>
                <p id="div1">

                </p>
                <p id="div2"></p>
            </div>
        );
    }

}
export default Car;