import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine } = props;

  if (multiLine) {
    return (
      <React.Fragment>
        <Grid>
          <Text margin="0px 0px 5px 5px">{label}</Text>
          <Textarea
            rows={10}
            placeholder={placeholder}
            onChange={_onChange}
          ></Textarea>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px 0px 5px 5px" bold>
          {label}
        </Text>
        <InputBox type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: "텍스트",
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {}, //콜백함수
  type: "text",
};

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #b39cd0;
  border-radius: 5px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid #b39cd0;
  border-radius: 5px;
`;

export default Input;
