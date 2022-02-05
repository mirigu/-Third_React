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
      <Btn {...styles} onClick={_onClick}>
        {children}
      </Btn>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  _onClick: () => {},
};

const Btn = styled.button`
  width: ${(props) => props.width};
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.bg ? "#845EC2" : "#B39CD0")};
  color: white;
  cursor: pointer;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
`;

export default Button;
