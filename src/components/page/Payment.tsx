import React, { memo, useCallback, useState } from 'react'
import { Card, Form, Typography } from 'antd'
import PaymentForm from '../PaymentForm/PaymentForm'
import PaymentTimer from '../PaymentForm/PaymentTimer'
import PaymentModal from '../PaymentForm/PaymentModal'
import { FieldsType } from '../types/TPaymentForm'
import { TPayment } from '../types/TPayment'

const { Title } = Typography

const Payment: React.FC<TPayment> = memo(({ timeOnTimer, successfulConfirmation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [configModal, setConfigModal] = useState({ textModal: '', textButton: '' })
  const [timer, setTimer] = useState({ minutes: timeOnTimer })
  const [isTimerStart, setIsTimerStart] = useState(true)
  const [isCorrectCode, setIsCorrectCode] = useState(false)
  const [form] = Form.useForm<FieldsType>()

  const handleButton = useCallback(() => {
    if (isCorrectCode) {
      successfulConfirmation()
    } else {
      setIsModalOpen(false)
      setTimer({ minutes: timeOnTimer })
      setIsTimerStart(true)
      form.resetFields()
    }
  }, [isCorrectCode, form, timeOnTimer, successfulConfirmation])

  const openModal = useCallback((textModal: string, textButton: string) => {
    setIsModalOpen(true)
    setIsTimerStart(false)
    setConfigModal({ textModal, textButton })
  }, [])

  return (
    <>
      <Card hidden={isCorrectCode} className='payment' extra={<PaymentTimer isTimerStart={isTimerStart} timerStartTime={timer} openModal={openModal} />} title={<Title className='title'>Подтверждение оплаты</Title>} bordered={true}>
        <Title className='payment__title'>Тестовый банк</Title>
        <PaymentForm form={form} openModal={openModal} setIsCorrectCode={setIsCorrectCode} />
      </Card>
      <PaymentModal isModalOpen={isModalOpen} handleButton={handleButton} configModal={configModal} />
    </>
  )
})

export default Payment