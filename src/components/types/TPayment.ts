export interface TPayment {
  timeOnTimer: number
  successfulConfirmation: () => void
}