import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    padding,
    margin,
    bg,
    center,
    is_left,
    is_right,
    children,
  } = props;
  const styles = {
    is_flex: is_flex,
    width: width,
    padding: padding,
    margin: margin,
    bg: bg,
    center: center,
    is_left: is_left,
    is_right: is_right,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  is_left: false,
  is_right: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""};
  ${(props) => (props.center ? `text-align: center;` : "")};
  ${(props) =>
    props.is_left
      ? `display: flex; justify-content:flex-first; align-items: center;`
      : ""};
  ${(props) =>
    props.is_right
      ? `display: flex; justify-content:flex-end; align-items: center;`
      : ""};
`;

export default Grid;
