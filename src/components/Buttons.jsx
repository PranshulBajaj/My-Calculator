import styles from './Buttons.module.css'

let ButtonsArray =["C","/","*","⌫","7","8","9","-","4","5","6","+","1","2","3","=","%","0","."];
const Buttons = ({buttonClick}) => {
 return (
  <div className={styles.buttonsContainer}>
    {ButtonsArray.map(button => <button className={styles.myButton} key={button} onClick={() => buttonClick(button)}>{button}</ button>)}
  </div>
 )
};

export default Buttons;
