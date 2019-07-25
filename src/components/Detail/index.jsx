import './style.scss'

import React from 'react'

const Detail = ({ details }) => (
  <div className="detail row">
    <div className="detail__map col-lg-6">
      map
    </div>
    <div className="detail__info col-lg-6">
      <table>
        <thead>
          <tr>
            <th>Data / Hora</th>
            <th>Detalhes</th>
          </tr>
        </thead>

        <tbody>
          {details.map(detail => (
            <tr key={detail.msg}>
              <td>{detail.data}</td>
              <td>{detail.msg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Detail
