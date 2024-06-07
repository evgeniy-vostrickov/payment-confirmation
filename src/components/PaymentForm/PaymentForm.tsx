import React, { useContext, useState, useEffect } from 'react'
import type { FormProps } from 'antd'
import { Checkbox, Form, Input } from 'antd'
import type { CheckboxProps } from 'antd'
import { FieldsType, TPaymentForm } from '../types/TPaymentForm'
import { CorrectCodeContext } from '../../App'
import SubmitButton from './SubmitButton'

const PaymentForm: React.FC<TPaymentForm> = ({ openModal, setIsCorrectCode, isResetForm, cancelIsResetForm }) => {
  const correctCode = useContext(CorrectCodeContext)
  const [isinputEmail, setIsinputEmail] = useState(false)
  const [isSubmittable, setIsSubmittable] = useState<boolean>(false)
  const [form] = Form.useForm<FieldsType>()
  const values = Form.useWatch([], form)

  const onFinish: FormProps<FieldsType>['onFinish'] = (dataForm) => {
    // Должен быть запрос на сервер
    if (dataForm.code === correctCode) {
      openModal('Код успешно подтвержден!', 'Далее')
      setIsCorrectCode(true)
    } else {
      openModal('Неправильный СМС-код!', 'Попробовать снова')
    }
    // console.log('Валидные данные:', dataForm)
  }

  const onFinishFailed: FormProps<FieldsType>['onFinishFailed'] = (errorInfo) => {
    openModal('Некорректный ввод даннх!', 'Попробовать снова')
    // console.log('Невалидные данные:', errorInfo)
  }

  const onChangeCheckbox: CheckboxProps['onChange'] = (event) => {
    setIsinputEmail(event.target.checked)

    const currentEmail = form.getFieldValue('email')
    if (isinputEmail && currentEmail) {
      form.setFieldsValue({ email: undefined })
    }
  }

  const onInputCode = (event: any) => {
    const value = event.target.value
    const isCodeValidating = form.isFieldValidating('code')
    if (isCodeValidating)
      setIsSubmittable(true)
    else if (!value) {
      setIsSubmittable(false)
    }
  }

  useEffect(() => {
    form.validateFields({ validateOnly: true })
      .then(() => {
        setIsSubmittable(true)
      })
      .catch(() => {
        setIsSubmittable(false)
      })
  }, [values])

  useEffect(() => {
    if (isResetForm) {
      form.resetFields()
      cancelIsResetForm()
    }
  }, [isResetForm])

  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ md: { span: 8 }, sm: { span: 10 } }}
      wrapperCol={{ md: { span: 15, offset: 1 }, sm: { span: 13, offset: 1 } }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        isEmail: isinputEmail
      }}
      autoComplete="off"
      className='payment__form'
    >
      <Form.Item<FieldsType>
        name="code"
        label="Код подтверждения"
        rules={[{ required: true, message: 'Код содержит 4 цифры!' }, { pattern: new RegExp('^\\d+$'), message: 'Код содержит только цифры!' }]}
      >
        <Input.OTP length={4} size={'large'} variant={'filled'} onInput={onInputCode} />
      </Form.Item>

      <Form.Item<FieldsType>
        name="isEmail"
        valuePropName="checked"
        wrapperCol={{ md: { span: 16, offset: 9 }, sm: { span: 13, offset: 11 } }}
      >
        <Checkbox onChange={onChangeCheckbox}>Отправить чек</Checkbox>
      </Form.Item>

      <Form.Item<FieldsType>
        name="email"
        label="Email"
        hidden={!isinputEmail}
        rules={[{ required: isinputEmail, type: 'email', message: 'Пожалуйста введите email!' }]}
        hasFeedback
      >
        <Input placeholder="Введите email" />
      </Form.Item>

      <Form.Item className='payment__button'>
        <SubmitButton isSubmittable={isSubmittable}>Отправить</SubmitButton>
      </Form.Item>
    </Form>
  )
}

export default PaymentForm