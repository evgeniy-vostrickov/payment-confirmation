import React from 'react'
import { Button, Modal } from 'antd'
import { TPaymentModal } from '../types/TPaymentModal'

const PaymentModal: React.FC<TPaymentModal> = ({ isModalOpen, setIsModalOpen, textModal, setTimer }) => {
  const handleOk = () => {
    setIsModalOpen(false)
    setTimer({ minutes: 10 })
    console.log("Попробовать снова")
  };

  // const handleCancel = () => {
  //   setIsModalOpen(false)
  // };
  return (
    <Modal title="Подтверждение оплаты" open={isModalOpen} closable={false} footer={[
      <Button key="submit" type="primary" onClick={handleOk}>
        Попробовать снова
      </Button>
    ]}>
      {textModal}
    </Modal>
  )
}

export default PaymentModal