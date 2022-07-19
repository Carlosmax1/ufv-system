import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 50vw;
  height: 55vh;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  margin-top: 3em;
  padding: 1em;
`

