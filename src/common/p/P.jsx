import * as styles from "./P.styles";

const P = ({ children, ...props }) => {
  return <styles.P {...props}>{children}</styles.P>;
};

export default P;
