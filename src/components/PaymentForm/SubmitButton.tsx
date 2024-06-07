import React from 'react'
import { Button } from 'antd'
import { TSubmitButtonProps } from '../types/TSubmitButton'

const SubmitButton: React.FC<React.PropsWithChildren<TSubmitButtonProps>> = ({ isSubmittable, children }) => {
  return (
    <Button type="primary" className='payment__button__text' htmlType="submit" disabled={!isSubmittable}>
      {children}
    </Button>
  )
}

export default SubmitButton
