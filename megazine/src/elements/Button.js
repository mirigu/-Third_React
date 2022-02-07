import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { width, padding, margin, bg, is_float, _onClick, children } = props;

  const styles = {
    width: width,
    padding: padding,
    margin: margin,
    bg: bg,
    is_float: is_float,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <AddBtn {...styles} onClick={_onClick}>
          {children}
        </AddBtn>
      </React.Fragment>
    );
  }

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
  is_float: false,
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

const AddBtn = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border: none;
  border-radius: 50%;
  background-color: #b39cd0;
  color: #fbeaff;
  font-size: 24px;
  font-weight: bold;
`;

export default Button;
