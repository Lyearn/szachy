import { css } from "emotion";

export const dialogTitle = css`
  margin: 0px !important;
`;

export const dialogCloseIcon = css`
  position: absolute !important;
  top: 8px;
  right: 8px;
`;

export const form = css`
  width: 100%;
`;

export const grid = css`
  width: 400px;
  margin: 10px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const button = css`
  width: 200px;
  border-radius: 4px;
`;

export const itemContainer = css`
  width: 400px !important;
  margin: 10px !important;
`;

export const itemName = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const itemComponent = css`
  width: 100%;
`;

export const formInput = css`
  width: 100%;
  height: 40px;
  cursor: pointer;
`;

export const formSlider = (timeControl: string) => css`
  visibility: ${timeControl === "unlimited" ? true : false};
`;

export const formSelect = css`
  width: 100%;
  height: 40px;
`;
