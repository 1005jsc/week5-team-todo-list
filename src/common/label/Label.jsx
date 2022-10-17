import * as styles from "./Label.styles";

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <styles.Label htmlFor={htmlFor} {...props}>
      {children}
    </styles.Label>
  );
};

export default Label;
