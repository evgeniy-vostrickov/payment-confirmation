import React from 'react'
import { Card, Typography } from 'antd'
import PaymentForm from '../PaymentForm/PaymentForm'
import PaymentTimer from '../PaymentForm/PaymentTimer'

const { Title } = Typography

const Payment: React.FC = () => {
  return (
    <Card className='payment' extra={<PaymentTimer />} title={<Title className='title'>Подтверждение оплаты</Title>} bordered={true}>
      <Title className='payment__title'>Тестовый банк</Title>
      <PaymentForm />
    </Card>
  )
}

export default Payment