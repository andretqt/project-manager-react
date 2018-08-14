import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects'
import AddProject from './components/addproject'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
  // lifecycle method below
  componentWillMount() {
    this.setState({projects:[
      {
        title: "business Website",
        category: "Web Design"
      },{
        title: "Social App",
        category: "Mobile Development"
      },{
        title: "Ecommerce Shopping Cart",
        category: "Web Development"
      }
    ]});
  }
  handleAddProject(project) {
    console.log(project)
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <Projects  projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
