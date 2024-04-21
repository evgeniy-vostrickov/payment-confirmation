import React, { useEffect, useState } from 'react'
import { Card, Typography } from 'antd'
import PaymentForm from '../PaymentForm/PaymentForm'
import PaymentTimer from '../PaymentForm/PaymentTimer'
import PaymentModal from '../PaymentForm/PaymentModal'

const { Title } = Typography

const Payment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [textModal, setTextModal] = useState('')
  const [timer, setTimer] = useState({ minutes: 10 })

  // useEffect(() => {
  //   console.log(timer)
  // }, [timer])
  

  return (
    <>
      <Card className='payment' extra={<PaymentTimer timerStartTime={timer} setIsModalOpen={setIsModalOpen} setTextModal={setTextModal} />} title={<Title className='title'>Подтверждение оплаты</Title>} bordered={true}>
        <Title className='payment__title'>Тестовый банк</Title>
        <PaymentForm />
      </Card>
      <PaymentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} textModal={textModal} setTimer={setTimer} />
    </>
  )
}

export default Payment