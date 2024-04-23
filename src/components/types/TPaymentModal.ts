interface ModalSetings {
  textModal: string
  textButton: string
}

export interface TPaymentModal {
  isModalOpen: boolean
  configModal: ModalSetings
  handleButton: () => void
}