export type TPaymentTimer = {
  openModal: (textModal: string, textButton: string) => void
  timerStartTime: { minutes: number }
  isTimerStart: boolean
}