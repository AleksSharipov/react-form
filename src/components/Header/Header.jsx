import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action/data';

import './header.scss';

export default function Header() {

  const dispatch = useDispatch();

  const [change, setChange] = useState('change1')

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(fetchData(change));
  }

  const onChangeSelectValue = (e) => {
    setChange(e.target.value)
  }

  return (
    <div className="form__header">
      <div>
        <label className="">Сменный рапорт. ЦПХП №1.</label>
        <input className="form__header_input" type="date" />
        <select className="form__header_input" value={change || 'change1'} onChange={e => onChangeSelectValue(e)}>
          <option disabled>Выберите смену:</option>
          <option value="change1">Смена 1</option>
          <option value="change2">Смена 2</option>
        </select>
        <button onClick={(e) => { onSubmitForm(e) }} className="form__header_btn">Просмотр</button>
      </div>
    </div>
  )
}
