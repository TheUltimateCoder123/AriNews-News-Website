import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  
    }
    setProgress=(progress)=>{
      this.setState({progress:progress})
   
    }
  render() {
    
    return (
      <div>
         <Router>
         <LoadingBar
         height={3}
        color='#f11946'
        progress={this.state.progress}
     
      />
        <Navbar/>
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={8} category='technology' country="in"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={8} category='business' country="in"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={8} category='entertainment' country="in"/></Route>
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={8} category='general' country="in"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={8} category='health' country="in"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={8} category='science' country="in"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={8} category='sports' country="in"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={8} category='technology' country="in"/></Route>
        </Switch>
        </Router>
   
        
     </div>
    )
  }
}
