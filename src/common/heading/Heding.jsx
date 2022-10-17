import * as styles from "./Heading.styles";

const Heading = ({ children, ...props }) => {
  return <styles.Heading {...props}>{children}</styles.Heading>;
};

export default Heading;
