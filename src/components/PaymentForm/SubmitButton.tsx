import React from 'react'
import { Button, Form } from 'antd'
import { TSubmitButtonProps } from '../types/TSubmitButton'

const SubmitButton: React.FC<React.PropsWithChildren<TSubmitButtonProps>> = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false)

  const values = Form.useWatch([], form)

  React.useEffect(() => {
    form.validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
  }, [form, values])

  return (
    <Button type="primary" className='payment__button__text' htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  )
}

export default SubmitButton
