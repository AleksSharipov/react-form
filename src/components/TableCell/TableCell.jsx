import React, { useState } from 'react';

import './tableCell.scss';

export default function Row({ item }) {
  const [state, setState] = useState(item.value);
  return (
    <td key={item.item}>
      <input
        value={state}
        onChange={({ target }) => setState(target.value)} />
    </td>
  )
}
