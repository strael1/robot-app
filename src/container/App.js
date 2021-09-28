import React, {Component} from 'react';
import Card from '../components/Card/Card';
import Searchbox from '../components/Searchbox/Searchbox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import './App.css';

class App extends Component {

  // Foi construído
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  // Foi montado
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))
    .catch(err => console.error(err));
  }

  // Rederizado
  render(){
    const {robots, searchField} = this.state;
    
    const robotsComponent = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return !robots.length ? 
      <h1 className="sega-font text-center mt-20">Loading...</h1>
    : <div>
        <div className="tc mt-100">
          <h1 className="display-1 sega-font">Robotfriend</h1>
        </div>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <Card robots={robotsComponent}/>
          </ErrorBoundry>
        </Scroll>
      </div>  
  }
}

export default App;