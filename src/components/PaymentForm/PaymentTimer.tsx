import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const PaymentTimer: React.FC = () => {
  return (
    <Title className='title'>
      Код действует 10:00
    </Title>
  )
}

export default PaymentTimer