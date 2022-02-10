import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, margin, textAlign, _onClick, children } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    textAlign: textAlign,
  };

  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  textAlign: false,
  _onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.textAlign ? `text-align: center;` : "")};
`;

export default Text;
