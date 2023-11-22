import { Col, InputNumber, Row } from "antd";

export default function MatriksField({ value, onChange, format }: any) {
  const row = []
  for (let index = 0; index < format[0]; index++) {
    row.push(index)
  }
  
  return (
    <>
      <Col>
        {row.map((_, row) => {
          const column: number[] = []
          for (let index = 0; index < format[1]; index++) {
            column.push(index)
          }
          return (
            <Row>
              {column.map((_, col) => {
                return (
                  <Col>
                    <InputNumber
                      key={`${row + 1}.${col + 1}`}
                      onChange={(v) => {
                        onChange({ ...value, [row+1]: { ...value[row+1], [col+1]: v} })
                      }}
                    />
                  </Col>
                )
              })}
            </Row>
          )
        })}
      </Col>
    </>
  )
}