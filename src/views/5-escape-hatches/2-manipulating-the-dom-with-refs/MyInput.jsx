import { forwardRef } from "react";

const MyInput = forwardRef((props, ref )=> {
  return <input placeholder="点击按钮自动获取焦点" {...props} ref={ref} />;
});

export default MyInput