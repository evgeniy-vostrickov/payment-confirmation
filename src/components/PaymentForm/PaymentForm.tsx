import React, { memo, useContext, useState } from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'
import type { CheckboxProps } from 'antd'
import { FieldsType, TPaymentForm } from '../types/TPaymentForm'
import { CorrectCodeContext } from '../../App'

const PaymentForm: React.FC<TPaymentForm> = memo(({ form, openModal, setIsCorrectCode }) => {
  const correctCode = useContext(CorrectCodeContext)
  const [isinputEmail, setIsinputEmail] = useState(false)
  
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
    if (isinputEmail) {
      form.setFieldsValue({ email: '' })
    }
  }

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
        <Input.OTP length={4} size={'large'} variant={'filled'} />
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
        <Input />
      </Form.Item>

      <Form.Item className='payment__button'>
        <Button type="primary" className='payment__button__text' htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
})

export default PaymentForm