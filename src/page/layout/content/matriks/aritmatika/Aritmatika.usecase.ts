import { AritmethicsMatrixResp, Matrix, MatrixObject } from "./Aritmatika.interface";

export class AritmatikaMatrixUsecase {
  objectToMatrix(obj: MatrixObject): Matrix {
    const matrix: Matrix = [];
    Object.keys(obj).forEach((rowKey) => {
      const row = Object.values(obj[rowKey]);
      matrix.push(row);
    });
    return matrix;
  }

  addMatrices(matrixA: Matrix, matrixB: Matrix): AritmethicsMatrixResp {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
      return {
        isError: true,
        message: "Format matriks tidak sesuai",
        matrix: []
      }
    }

    const result: Matrix = [];
    for (let i = 0; i < matrixA.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < matrixA[0].length; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
      }
      result.push(row);
    }

    return {
      isError: false,
      message: "",
      matrix: result
    }
  };

  multiplyMatrices(matrixA: Matrix, matrixB: Matrix): AritmethicsMatrixResp {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
  
    if (colsA !== rowsB) {
      console.error("Number of columns in matrixA must be equal to the number of rows in matrixB");
      return {
        isError: true,
        message: "Format matriks tidak sesuai",
        matrix: []
      }
    }
  
    const result: Matrix = Array.from({ length: rowsA }, () => Array(colsB).fill(0));
  
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
  
    return {
      isError: false,
      message: "",
      matrix: result
    }
  }
}