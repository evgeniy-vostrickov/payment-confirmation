import React, { useEffect, useState } from 'react'
import { Card, Form, Typography } from 'antd'
import PaymentForm from '../PaymentForm/PaymentForm'
import PaymentTimer from '../PaymentForm/PaymentTimer'
import PaymentModal from '../PaymentForm/PaymentModal'
import { FieldsType } from '../types/TPaymentForm'

const { Title } = Typography

const Payment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [textModal, setTextModal] = useState('')
  const [timer, setTimer] = useState({ minutes: 10 })
  const [isTimerStart, setIsTimerStart] = useState(true)
  const [correctCode, setCorrectCode] = useState(false)
  const [form] = Form.useForm<FieldsType>()

  // useEffect(() => {
  //   console.log(timer)
  // }, [timer])

  const handleButton = () => {
    if (correctCode) {
      console.log('Успех!')
    } else {
      setIsModalOpen(false)
      setTimer({ minutes: 10 })
      setIsTimerStart(true)
      form.resetFields()
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
    setIsTimerStart(false)
  }

  return (
    <>
      <Card hidden={correctCode} className='payment' extra={<PaymentTimer isTimerStart={isTimerStart} timerStartTime={timer} setIsModalOpen={setIsModalOpen} setTextModal={setTextModal} />} title={<Title className='title'>Подтверждение оплаты</Title>} bordered={true}>
        <Title className='payment__title'>Тестовый банк</Title>
        <PaymentForm form={form} setTextModal={setTextModal} openModal={openModal} setCorrectCode={setCorrectCode} />
      </Card>
      <PaymentModal isModalOpen={isModalOpen} handleRepeatForm={handleButton} textModal={textModal} />
    </>
  )
}

export default Payment