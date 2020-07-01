import React from 'react';
import { double } from '@monorepo/common';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: green;
`;

export default _ => (
  <Container>
    <Text>Double 2 is {double(2)}</Text>
  </Container>
);
