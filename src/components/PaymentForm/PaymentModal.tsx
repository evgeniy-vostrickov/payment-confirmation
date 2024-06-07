import React from 'react'
import { Button, Modal } from 'antd'
import { TPaymentModal } from '../types/TPaymentModal'

const PaymentModal: React.FC<TPaymentModal> = ({ isModalOpen, configModal, handleButton }) => {
  return (
    <Modal title="Подтверждение оплаты" open={isModalOpen} closable={false} footer={[
      <Button key="ok" type="primary" onClick={handleButton}>
        {configModal.textButton}
      </Button>
    ]}>
      {configModal.textModal}
    </Modal>
  )
}

export default PaymentModal