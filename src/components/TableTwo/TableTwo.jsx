import React from 'react';
import { useSelector } from 'react-redux';
import Row from '../TableCell/TableCell';

export default function TableTwo() {
  const { items } = useSelector(({ data }) => {
    if (data.items !== null) {
      return data
    }
  });
  return (
    <div className="form__table form__table_two">
      <div className="form__pressure">
        <p>Давление газа после эксгаустеров, мм.вод.ст.</p>
        <div className="form__pressure_row">
          <div className="form__pressure_input form__pressure_input-one">
            {
              items.gasPressure1 ? items.gasPressure1.map(el => {
                return (
                  <Row key={Math.random()} item={el} />
                )
              })
                :
                <>
                  <td><input /></td>
                  <td><input /></td>
                </>
            }
          </div>
          <div className="form__pressure_input form__pressure_input-two">
            {
              items.gasPressure2 ? items.gasPressure2.map(el => {
                return (
                  <Row key={Math.random()} item={el} />
                )
              })
                :
                <>
                  <td><input /></td>
                  <td><input /></td>
                </>
            }
          </div>
        </div>
      </div>
      <div className="form__resistance">
        <div className="form__resistance_inpit">
          <p>Сопротивление ПГХ</p>
          <div>
            {
              items.resistance1 ? items.resistance1.map(el => {
                return (
                  <Row key={Math.random()} item={el} />
                )
              })
                :
                <>
                  <td><input /></td>
                  <td><input /></td>
                </>
            }
          </div>
        </div>
        <div className="form__resistance_inpit">
          <p>Сопротивление газопровода</p>
          <div>
            {
              items.resistance2 ? items.resistance2.map(el => {
                return (
                  <Row key={Math.random()} item={el} />
                )
              })
                :
                <>
                  <td><input /></td>
                  <td><input /></td>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
