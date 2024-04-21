export type TPaymentModal = {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  textModal: string
  setTimer: React.Dispatch<React.SetStateAction<{ minutes: number }>>
}