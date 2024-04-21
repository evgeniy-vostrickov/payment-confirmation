import React from 'react'
import type { GetProp } from 'antd'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'

type FieldType = {
  num1?: number
  num2?: number
  num3?: number
  num4?: number
  isEmail?: boolean
  email?: string
}

const PaymentForm: React.FC = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
    console.log('onChange:', text)
  }

  return (
    <Form
      name="basic"
      labelCol={{ md: { span: 8 }, sm: { span: 10 } }}
      wrapperCol={{ md: { span: 15, offset: 1 }, sm: { span: 13, offset: 1 } }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='payment__form'
    >
      <Form.Item<FieldType>
        name="num1"
        label="Код подтверждения"
        rules={[{ required: true, message: 'Please input your num1!' }]}
      >
        <Input.OTP length={4} size={'large'} variant={'filled'} onChange={onChange} />
      </Form.Item>

      <Form.Item<FieldType>
        name="isEmail"
        valuePropName="checked"
        labelAlign="right"
        wrapperCol={{ md: { span: 16, offset: 9 }, sm: { span: 13, offset: 11 } }}
      >
        <Checkbox>Отправить чек</Checkbox>
      </Form.Item>

      <Form.Item<FieldType>
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
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