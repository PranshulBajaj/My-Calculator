import styles from "./Input.module.css";

const Input = ({text}) => {
  return <input type="text" className={styles.display} readOnly id="input" placeholder={text}/>;
};

export default Input;
