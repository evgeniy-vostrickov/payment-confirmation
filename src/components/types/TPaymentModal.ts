interface modalSetings {
  textModal: string
  textButton: string
}

export interface TPaymentModal {
  isModalOpen: boolean
  configModal: modalSetings
  handleButton: () => void
}