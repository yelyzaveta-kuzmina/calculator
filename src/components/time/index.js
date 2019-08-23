import React from "react";
import moment from "moment";
import styles from "./styles.module.scss";

class Time extends React.Component {
  state = { time: "" };

  componentDidMount() {
    setInterval(() => {
      const time = moment().format("H:MM");

      this.setState({ time });
    }, 1000);
  }

  render() {
    const { time } = this.state;
    return <div className={styles.time}>{time}</div>;
  }
}

export default Time;
