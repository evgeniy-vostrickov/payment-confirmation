export interface IPayment {
  timeOnTimer: number
  successfulConfirmation: () => void
}