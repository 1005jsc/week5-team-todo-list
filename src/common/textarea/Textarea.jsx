import * as styles from "./Textarea.styles";
import { forwardRef } from "react";

const Textarea = forwardRef((props, children, ref) => {
  return (
    <styles.Textarea {...props} ref={ref}>
      {children}
    </styles.Textarea>
  );
});

export default Textarea;
