import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) =>
    props.isWinningCell
      ? props.theme.colors.yellow
      : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  width: 10rem;
  height: 10rem;
  border-radius: 2.5rem;
  box-shadow: 5px 10px #b8b2a1;
  cursor: pointer;
  position: relative;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .outlineIcon {
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .outlineIcon {
    opacity: 1;

    /* Target circles in OIconOutlined */
    circle {
      stroke: ${(props) =>
        props.theme.colors.primary}; /* Change stroke color on hover */
    }

    /* Target paths in XIconOutlined */
    path {
      stroke: ${(props) =>
        props.theme.colors.primary}; /* Change stroke color on hover */
    }
  }

  .markedItem {
    path,
    circle {
      stroke: ${(props) => props.theme.colors.primary};
      fill: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }
`;
