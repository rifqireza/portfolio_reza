import React from 'react';
import { Table } from 'antd';

interface MatrixDisplayProps {
  matrix: number[][];
}

const MatrixDisplay: React.FC<MatrixDisplayProps> = ({ matrix }) => {
  const columns = matrix[0].map((_, index) => ({
    dataIndex: index,
    key: index,
    title: `Column ${index + 1}`,
    render: (text: number) => <span className='text-5xl text-center block'>{text}</span>, 
  }));

  const dataSource = matrix.map((row, index) => ({
    key: index,
    ...row.reduce((acc, value, colIndex) => {
      acc[colIndex] = value;
      return acc;
    }, {} as Record<string, number>),
  }));

  return (
    <Table 
      className='w-72' 
      showHeader={false} 
      pagination={false} 
      dataSource={dataSource} 
      columns={columns} 
    />
  )
};

export default MatrixDisplay;
