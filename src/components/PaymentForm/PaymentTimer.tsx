import React, { memo, useEffect, useRef, useState } from 'react'
import { Typography } from 'antd'
import { convertMinutesToSeconds, convertTimeToString, displayTime, getCurrentTime } from '../helpers/workWithTime'
import { TPaymentTimer } from '../types/TPaymentTimer'

const { Title } = Typography

const PaymentTimer: React.FC<TPaymentTimer> = memo(({ isTimerStart, timerStartTime, openModal }) => {
  const [currentTime, setCurrentTime] = useState({ minutes: convertTimeToString(timerStartTime.minutes), seconds: convertTimeToString(0) })
  const time = useRef<number>()
  const timer = useRef<number>()

  const handlerTimer = () => {
    let currentTime = time.current! - 1
    let [minutes, seconds] = getCurrentTime(currentTime)
    setCurrentTime({ minutes, seconds })
    
    if (currentTime === 0) {
      openModal('Время закончилось!', 'Попробовать снова')
      clearInterval(timer.current)
    }
    
    time.current = currentTime
  }

  useEffect(() => {
    if (!isTimerStart) {
      clearInterval(timer.current)
    } else {
      time.current = convertMinutesToSeconds(timerStartTime.minutes)
      let idInterval = window.setInterval(handlerTimer, 1000)
      timer.current = idInterval
    }

    return () => {
      clearInterval(timer.current)
    }
  }, [timerStartTime, isTimerStart])

  return (
    <Title className='title'>
      Код действует <span className='title__underline'>{displayTime(currentTime)}</span>
    </Title>
  )
})

export default PaymentTimer