import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import TablePGH from './components/TablePGH/TablePGH';
import TableTwo from './components/TableTwo/TableTwo';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="form">
        <h2>Первичное охлаждение и машинный зал</h2>
        <div className="form__body">
          <div className="form__row-one">
            <TablePGH />
            <TableTwo />
          </div>
          <div className="form__row-two">
            <div className="form__row-two_table">
              <p>ПГХ Расход воды на первич. охл-е, м/ч</p>
              <div>
                <td><input /></td>
                <span>/</span>
                <td><input /></td>
              </div>
            </div>
            <div className="form__row-two_table">
              <p>ПГХ t воды на первич. охл-е, C</p>
              <div>
                <td><input /></td>
              </div>

            </div>
            <div className="form__row-two_table">
              <p>ПГХ t воды  после первич. олх-я, C</p>
              <div>
                <td><input /></td>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
