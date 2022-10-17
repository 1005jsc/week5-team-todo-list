import * as styles from "./Form.styled";

const Form = ({ children, ...props }) => {
  return <styles.Form {...props}>{children}</styles.Form>;
};

export default Form;
