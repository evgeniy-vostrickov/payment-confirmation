import { FormInstance } from "antd"

export interface TPaymentForm {
  form: FormInstance<FieldsType>
  openModal: (textModal: string, textButton: string) => void
  setIsCorrectCode: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FieldsType {
  code: string
  isEmail: boolean
  email?: string
}