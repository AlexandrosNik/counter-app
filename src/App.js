import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  //1 LifeCycle initializes the state
  constructor(props){
    super(props)
    this.state = { 
      counters: [
          {id:1, value:0},
          {id:2, value:0},
          {id:3, value:0},
          {id:4, value:0}
      ]
    };
    this.initState = this.state;
    console.log('App-constructor');
  }
  //3 LifeCycle hook method that is called after the components is rendered into the dom
  componentDidMount() {
    console.log('App-mounted');
  }

  handleDelete = (id) => {
      const counters = this.state.counters.filter(c => c.id !== id);
      this.setState({counters})
  }

  handleIncrement = counter =>  {
      const counters = [...this.state.counters]; //clone state counters 
      const index = counters.indexOf(counter); //get index of counter we want to increase counter
      counters[index] = { ...counter} //copy counter into cloned counters array
      counters[index].value++;    //increase it's value
      this.setState({ counters });
  }

  handleReset = () => {
    this.setState(this.initState);
  }

  handleDecrement = counter =>{
    const counters = [...this.state.counters]; //clone state counters 
    const index = counters.indexOf(counter); //get index of counter we want to increase counter
    counters[index] = { ...counter} //copy counter into cloned counters array
    counters[index].value--;    //decrease it's value
    this.setState({ counters });
  }
  //2 LifeCycle renders the component into the dom
  render() { 
    console.log('App-rendered')
    return ( 
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
        <Counters 
          counters = {this.state.counters}
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}
        />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;

