import React from 'react';
import styles from './styles.module.scss';

class ResultComponent extends React.Component {

  render() {
    let {result} = this.props;
    return (
       <div className={styles.result}>
         <p>{result}</p>
      </div>
    )
  }
}

export default ResultComponent;