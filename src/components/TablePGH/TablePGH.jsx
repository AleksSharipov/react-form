import React from 'react';
import { useSelector } from 'react-redux';
import Row from '../TableCell/TableCell';


export default function TablePGH() {

  const { items } = useSelector(({ data }) => {
    if (data.items !== null) {
      return data
    }
  });

  return (
    <div className="form__table form__table_one">
      <table>
        <tbody>
          <tr>
            <td>ПГХ</td>
            <td className="form__table_one-title">1</td>
            <td className="form__table_one-title">2</td>
            <td className="form__table_one-title">3</td>
            <td className="form__table_one-title">4</td>
            <td className="form__table_one-title">5</td>
            <td className="form__table_one-title">6</td>
          </tr>
          <tr>
            <td>t газа после ПГХ, C</td>
            {
              items.temperature ? items.temperature.map(el => {
                return (
                  <Row key={Math.random()} item={el} />
                )
              })
                :
                <>
                  <td><input /></td>
                  <td><input /></td>
                  <td><input /></td>
                  <td><input /></td>
                  <td><input /></td>
                  <td><input /></td>
                </>
            }
          </tr>
        </tbody>
      </table>
    </div>
  )
}
