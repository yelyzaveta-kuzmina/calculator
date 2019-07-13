
import React, { Component } from 'react';
import ResultComponent from './components/result-component';
import KeyPadComponent from "./components/keypad";
import styles from './styles.module.scss';

class App extends Component {
  constructor(){
    super();

    this.state = {
        result: ""
    }
  }

  render() {
    return (
      <div className={styles.wrapp}>
        <div className={styles.calculatorBody}>
            <ResultComponent result={this.state.result}/>
            <KeyPadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;