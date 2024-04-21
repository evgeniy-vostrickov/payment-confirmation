import { FormInstance } from "antd"

export interface TPaymentForm {
  form: FormInstance<FieldsType>
  setTextModal: React.Dispatch<React.SetStateAction<string>>
  openModal: () => void
  setCorrectCode: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FieldsType {
  code: string
  isEmail?: boolean
  email?: string
}