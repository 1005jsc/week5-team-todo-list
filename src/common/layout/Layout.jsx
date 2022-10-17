import * as styles from "./Layout.styles";

const Layout = ({ children, ...props }) => {
  return <styles.Layout {...props}>{children}</styles.Layout>;
};

export default Layout;
