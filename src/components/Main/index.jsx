import './style.scss'

import React from 'react'

import Title from '../Title'
import Box from '../Box'
import Detail from '../Detail'
import TitleStatus from '../Box/truckStatus'

const detail = [
  {
    data: '20/02/2019 13:49',
    msg: 'Solicitação recebida'
  },
  {
    data: '20/02/2019 13:49',
    msg: 'Pedido em separação'
  }
]

const Main = props => (
  <main className="main row">
    <div className="col-lg-8 col-lg-offset-2">
      <Title title="Status da entrega" />

      <div className="row">
        <Box title="#1 Número de pedido" classID="col-lg-4">
          12345
        </Box>

        <Box title={TitleStatus()} classID="col-lg-4">
          <span style={{ color: '#02baef', fontSize: '32px' }}>em separação</span>
        </Box>

        <Box title="#1 Data da coleta" classID="col-lg-4">
          20/02/2019 - 13:46
        </Box>
      </div>

      <div className="row" style={{ marginTop: '30px' }}>
        <Box title="#1 de" classID="col-lg-4">
          <span>
            Rosa Renata Meyer <br/><br/>
            Rua Pio VII, 39, São Paulo,<br/>
            SP, 00000000
          </span>
        </Box>

        <Box title='#1 Nota Fiscal' classID="col-lg-4">
          342432400000000
        </Box>

        <Box title="#1 Motorista" classID="col-lg-4">
          <span>
            Marcio Marlon da Silva <br/>
            (Moto) <br/><br/>
            Previsão: 15:00
          </span>
        </Box>
      </div>

      <Detail details={detail} />

    </div>
  </main>
);

export default Main
