import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 60vw;
  height: 55vh;
  //border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  margin-top: 3em;
  padding: 1em;
`

export const Box = styled.div`
  padding: 0.8em;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`

export const NameRoom = styled.li`
  margin: 0 1em;
  list-style: none;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 15pt;
  font-family: ${(props) => props.theme.font.family.default};
`