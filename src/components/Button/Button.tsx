import React, { memo, ButtonHTMLAttributes } from "react";

import "./index.scss";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = memo(
  (props) => <button className="button" {...props} />
);

export default Button;
