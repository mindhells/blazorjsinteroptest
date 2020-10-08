import React from 'react';
import './App.css';
import {register} from "./serviceWorker";
import Nav from "./Nav";
import Login from "./Login";
import ItemList from "./ItemList";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Item from "./Item";

function App() {
    register()
    return (
        <BrowserRouter>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/items" exact component={ItemList}/>
                    <Route path="/items/:id" component={Item}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
