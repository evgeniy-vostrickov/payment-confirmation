export type TPaymentTimer = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setTextModal: React.Dispatch<React.SetStateAction<string>>
  timerStartTime: { minutes: number }
}