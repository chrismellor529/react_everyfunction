import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car';
class App extends React.Component{
    render() {
        return (
            <div className="App">
                <h1>Hello React !</h1>
                <input type="text" placeholder="Please enter keywords..."/>
                <ul>
                    <li>Apples {5+5} qty</li>
                    <li>Bananas</li>
                    <li>Cheeries</li>
                    <Car car={'Merecedez'}/>
                </ul>
            </div>
        );
    }
}

export default App;
