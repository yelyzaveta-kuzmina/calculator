import React from "react";
import styles from "./styles.module.scss";

class Time extends React.Component {
  timerId = null;
  state = { time: "" };

  componentDidMount() {
    const date = new Date();
    const hours = Math.floor(date.getHours() + 1 / 60);
    const min = Math.floor(date.getMinutes() % 60);
    this.timerId = setInterval(() => {
      const time =
        String(hours).padStart(2, "0") + ":" + String(min).padStart(2, "0");
      this.setState({ time });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    return <div className={styles.time}>{time}</div>;
  }
}

export default Time;
