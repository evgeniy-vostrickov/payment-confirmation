import React, { useState } from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'
import type { CheckboxProps } from 'antd'
import { FieldsType, TPaymentForm } from '../types/TPaymentForm'

const PaymentForm: React.FC<TPaymentForm> = ({ form, setTextModal, openModal, setCorrectCode }) => {
  const [isinputEmail, setIsinputEmail] = useState(false)
  const onFinish: FormProps<FieldsType>['onFinish'] = (dataForm) => {
    // Запрос на сервер
    if (dataForm.code === '5432') {
      setTextModal('Данные успешно отправлены!')
      openModal()
      setCorrectCode(true)
    } else {
      setTextModal('Некорректный СМС-код!')
      openModal()
    }
    console.log('Success:', dataForm)
  }

  const onFinishFailed: FormProps<FieldsType>['onFinishFailed'] = (errorInfo) => {
    setTextModal('Некорректный ввод даннх!')
    openModal()
    console.log('Failed:', errorInfo)
  }

  const onChangeCheckbox: CheckboxProps['onChange'] = (event) => {
    setIsinputEmail(event.target.checked)
  }

  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ md: { span: 8 }, sm: { span: 10 } }}
      wrapperCol={{ md: { span: 15, offset: 1 }, sm: { span: 13, offset: 1 } }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
}

export default PaymentForm