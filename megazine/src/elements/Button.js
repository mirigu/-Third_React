import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { width, padding, margin, bg, _onClick, children } = props;

  const styles = {
    width: width,
    padding: padding,
    margin: margin,
    bg: bg,
  };
  return (
    <React.Fragment>
      <Btn {...styles}>{children}</Btn>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

const Btn = styled.button`
  width: ${(props) => props.width};
  height: 30px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.bg ? "#845EC2" : "#B39CD0")};
  color: white;
  cursor: pointer;
`;

export default Button;
