export interface MatrixObject {
  [row: string]: { [col: string]: number };
}

export type Matrix = number[][]

export interface AritmethicsMatrixResp {
  isError: boolean;
  message: string;
  matrix: Matrix;
}