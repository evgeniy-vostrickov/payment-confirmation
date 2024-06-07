export interface TPaymentTimer {
  onTimerEnded: () => void
  timerStartTime: { minutes: number }
  isTimerStart: boolean
}