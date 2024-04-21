import React from 'react'
import { Button, Modal } from 'antd'
import { TPaymentModal } from '../types/TPaymentModal'

const PaymentModal: React.FC<TPaymentModal> = ({ isModalOpen, textModal, handleRepeatForm }) => {
  return (
    <Modal title="Подтверждение оплаты" open={isModalOpen} closable={false} footer={[
      <Button key="submit" type="primary" onClick={handleRepeatForm}>
        Попробовать снова
      </Button>
    ]}>
      {textModal}
    </Modal>
  )
}

export default PaymentModal