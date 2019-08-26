import React from "react";
import Time from "./components/time";
import KeyPad from "./components/keypad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faWifi,
  faBatteryThreeQuarters
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

const formatNumber = number => String(number).replace(".", ",");

const calculate = (a, b, action) => {
  const number1 = Number(a.replace(",", "."));
  const number2 = Number(b.replace(",", "."));

  switch (action) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "×":
      return number1 * number2;
    case "/":
      return number1 / number2;
    case "%":
      calculateProcantage(a, b);
  }
};

const calculateProcantage = (a, b) => {
  const number1 = Number(a.replace(",", "."));
  const number2 = Number(b.replace(",", "."));
  const number3 = number1 / 100;
  const number4 = number3 * number2;

  return number1 - number4;
};

const initialState = {
  input: "0",
  memory: undefined,
  action: undefined
};

class App extends React.Component {
  state = initialState;

  onAction = action => {
    const { input, memory } = this.state;

    switch (action) {
      case "+":
      case "-":
      case "/":
      case "×":
        this.setState({
          action,
          input: initialState.input,
          memory: memory
            ? formatNumber(calculate(memory, input, this.state.action))
            : input
        });
        break;
      case "AC":
        this.setState(initialState);
        break;
      case "±":
        this.setState({
          input: String(Number(this.state.input) * -1)
        });
        break;
      case "=":
        this.setState({
          ...initialState,
          input: formatNumber(calculate(memory, input, this.state.action))
        });
        break;
      case "%":
        this.setState({
          input: calculateProcantage(memory, input, this.state.action)
        });
    }
  };

  onCharacter = value => {
    const { input } = this.state;
    let newInput = input;

    if (input.length > 7) {
      return;
    }

    switch (value) {
      case ",":
        if (!input.includes(",")) {
          newInput = input + ",";
        }
        break;
      default:
        newInput = input === "0" ? value : input + value;
    }

    this.setState({ input: newInput });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.phonesBody}>
          <div className={styles.header}>
            <Time />
            <span className={styles.rightSideSigns}>
              <div className={styles.signal}>
                <FontAwesomeIcon icon={faSignal} />
              </div>
              <div className={styles.wifi}>
                <FontAwesomeIcon icon={faWifi} />
              </div>
              <div className={styles.battery}>
                <FontAwesomeIcon icon={faBatteryThreeQuarters} />
              </div>
            </span>
          </div>
          <span className={styles.resultDisplay}>
            <span className={styles.accumulatorValue}>{this.state.memory}</span>
            <span className={styles.result}>{this.state.input}</span>
          </span>
          <KeyPad onAction={this.onAction} onCharacter={this.onCharacter} />
        </div>
      </div>
    );
  }
}

export default App;
