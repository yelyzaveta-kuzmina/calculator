import React from 'react';
import styles from './styles.module.scss';


class KeyPadComponent extends React.Component {

  render() {
    return (
      <div className={styles.buttonWrapper}>
        <button 
            className={styles.greyButton} 
            name="AC" 
            onClick={e => this.props.onClick(e.target.name)}>
            AC
        </button>

        <button 
            className={styles.greyButton} 
            name="CE" 
            onClick={e => this.props.onClick(e.target.name)}>
            +/-
        </button>

        <button 
            className={styles.greyButton} 
            name="%" 
            onClick={e => this.props.onClick(e.target.name)}>
            %
         </button>

        <button 
            className={styles.orangeButton} 
            name="÷" 
            onClick={e => this.props.onClick(e.target.name)}>
            ÷
        </button>
        <br/>


        <button
            className={styles.darkGreyButton} 
            name="1" 
            onClick={e => this.props.onClick(e.target.name)}>
            1
        </button>

        <button
            className={styles.darkGreyButton} 
            name="2" 
            onClick={e => this.props.onClick(e.target.name)}>
            2
        </button>

        <button
            className={styles.darkGreyButton} 
            name="3" 
            onClick={e => this.props.onClick(e.target.name)}>
            3
        </button>

        <button
            className={styles.orangeButton} 
            name="x" 
            onClick={e => this.props.onClick(e.target.name)}>
            x
        </button><br/>



        <button
            className={styles.darkGreyButton}
            name="4" 
            onClick={e => this.props.onClick(e.target.name)}>
            4
        </button>

        <button
            className={styles.darkGreyButton}
            name="5" 
            onClick={e => this.props.onClick(e.target.name)}>
            5
        </button>

        <button
            className={styles.darkGreyButton}
            name="6" 
            onClick={e => this.props.onClick(e.target.name)}>
            6
        </button>

        <button   
            className={styles.orangeButton} 
            name="-" 
            onClick={e => this.props.onClick(e.target.name)}>
            -
        </button>
        <br/>


        <button
            className={styles.darkGreyButton}
            name="7" 
            onClick={e => this.props.onClick(e.target.name)}>
            7
        </button>

        <button
            className={styles.darkGreyButton}
            name="8" 
            onClick={e => this.props.onClick(e.target.name)}>
            8
        </button>

        <button
            className={styles.darkGreyButton}
            name="9" 
            onClick={e => this.props.onClick(e.target.name)}>
            9
        </button>

        <button 
            className={styles.orangeButton} 
            name="+" 
            onClick={e => this.props.onClick(e.target.name)}>
            +
        </button>
        <br/>


        <button
            className={styles.zeroButton}
            name="0" 
            onClick={e => this.props.onClick(e.target.name)}>
            0
        </button>

        <button
            className={styles.darkGreyButton}
            name="," 
            onClick={e => this.props.onClick(e.target.name)}>
            ,
        </button>

        <button
            className={styles.orangeButton}
            name="=" 
            onClick={e => this.props.onClick(e.target.name)}>
            =
        </button>
        <br/>

        <div className={styles.homeButton} />

      </div>
    );
  }
}

export default KeyPadComponent;