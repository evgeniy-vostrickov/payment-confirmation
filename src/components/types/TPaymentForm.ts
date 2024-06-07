export interface TPaymentForm {
  openModal: (textModal: string, textButton: string) => void
  setIsCorrectCode: React.Dispatch<React.SetStateAction<boolean>>
  isResetForm: boolean
  cancelIsResetForm: () => void
}

export interface FieldsType {
  code: string
  isEmail: boolean
  email?: string
}