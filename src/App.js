import { Component } from 'react';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App-Contsructor here');
  };

  componentDidMount(){
    console.log('App-Mounted here');
  };

  handleDelete = (counterId) => {
    //console.log("Hello", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset= () => {
    const counters = this.state.counters.map(c=> {
      c.value = 0;
      return c;
    })
    this.setState({counters});
  }

  handleIncrement = (counter) => {
    //console.log(counter);
    const counters= [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value ++;
    this.setState({counters});
  };

  render(){
    console.log("App - Rendred here");
    return (
      <>
        <Navbar 
          totalCounters={this.state.counters.filter(c=> c.value> 0).length} 
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement = {this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
