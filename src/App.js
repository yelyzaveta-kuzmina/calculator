
import React from 'react';
import KeyPadComponent from "./components/keypad";
import styles from './styles.module.scss';

class App extends React.Component {
  state = { result: "" };

  onClick = button => {

    if(button === "=") {
      this.calculate();
    }

    else if(button === "C") {
      this.reset();
    }

    else if(button === "CE") {
      this.backspace();
    }

    else if(this.state.result.length < 8) {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: this.state.result || ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div className={styles.wrapp}>
        <span className={styles.resultDisplay}>
          <span className={styles.result}>
            {this.state.result}
          </span>
        </span>
        <KeyPadComponent onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;