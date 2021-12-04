import styled, { css } from "styled-components";
import { useStore } from "@nanostores/react";
import { counter, profile } from "../lib/store";
import { useEffect } from "react";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
`;

export default function Home() {
  let count = useStore(counter);
  let prof = useStore(profile);

  function handleClick() {
    console.log("lala");
    counter.set(count + 1);
    profile.setKey("age", 25);
  }

  console.log(prof);

  return (
    <Container>
      <Button onClick={handleClick}>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <p>{count}</p>
    </Container>
  );
}
