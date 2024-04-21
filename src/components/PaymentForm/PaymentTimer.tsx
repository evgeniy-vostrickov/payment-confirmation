import React, { useEffect, useRef, useState } from 'react'
import { Typography } from 'antd'
import { convertMinutesToSeconds, convertTimeToString, getCurrentTime, getMinutes, getSeconds } from '../helpers/workWithTime'
import { TPaymentTimer } from '../types/TPaymentTimer'

const { Title } = Typography

const PaymentTimer: React.FC<TPaymentTimer> = ({ timerStartTime, setIsModalOpen, setTextModal }) => {
  const [currentTime, setCurrentTime] = useState({ minutes: convertTimeToString(timerStartTime.minutes), seconds: convertTimeToString(0) })
  const time = useRef<number>()
  const timer = useRef<number>()

  const handlerTimer = () => {
    let currentTime = time.current! - 1

    let minutes = convertTimeToString(getMinutes(currentTime))
    let seconds = convertTimeToString(getSeconds(currentTime))

    setCurrentTime({ minutes, seconds })
    
    if (currentTime === 0) {
      setIsModalOpen(true)
      setTextModal('Время закончилось!')
      clearInterval(timer.current)
    }
    
    time.current = currentTime
  }

  useEffect(() => {
    time.current = convertMinutesToSeconds(timerStartTime.minutes)
    
    const idInterval = window.setInterval(() => {
      handlerTimer()
    }, 1000)
    
    timer.current = idInterval

    return () => {
      clearInterval(timer.current)
    }
  }, [timerStartTime])

  return (
    <Title className='title'>
      Код действует {getCurrentTime(currentTime)}
    </Title>
  )
}

export default PaymentTimer