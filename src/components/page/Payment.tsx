import React, { useState } from 'react'
import { Card, Typography } from 'antd'
import PaymentForm from '../PaymentForm/PaymentForm'
import PaymentTimer from '../PaymentForm/PaymentTimer'
import PaymentModal from '../PaymentForm/PaymentModal'
import { TPayment } from '../types/TPayment'

const { Title } = Typography

const Payment: React.FC<TPayment> = ({ timeOnTimer, successfulConfirmation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [configModal, setConfigModal] = useState({ textModal: '', textButton: '' })
  const [timer, setTimer] = useState({ minutes: timeOnTimer })
  const [isTimerStart, setIsTimerStart] = useState(true)
  const [isCorrectCode, setIsCorrectCode] = useState(false)
  const [isResetForm, setIsResetForm] = useState(false)

  const handleButton = () => {
    if (isCorrectCode) {
      successfulConfirmation()
    }
    setIsModalOpen(false)
    setTimer({ minutes: timeOnTimer })
    setIsTimerStart(true)
    setIsResetForm(true)
  }

  const openModal = (textModal: string, textButton: string) => {
    setIsModalOpen(true)
    setIsTimerStart(false)
    setConfigModal({ textModal, textButton })
  }

  const onTimerEnded = () => {
    openModal('Время закончилось!', 'Попробовать снова')
  }

  const cancelIsResetForm = () => setIsResetForm(false)

  return (
    <>
      <Card className='payment' extra={<PaymentTimer isTimerStart={isTimerStart} timerStartTime={timer} onTimerEnded={onTimerEnded} />} title={<Title className='title'>Подтверждение оплаты</Title>} bordered={true}>
        <Title className='payment__title'>Тестовый банк</Title>
        <PaymentForm openModal={openModal} setIsCorrectCode={setIsCorrectCode} isResetForm={isResetForm} cancelIsResetForm={cancelIsResetForm} />
      </Card>
      <PaymentModal isModalOpen={isModalOpen} handleButton={handleButton} configModal={configModal} />
    </>
  )
}

export default Payment