import React, { useContext } from 'react'
import styled from 'styled-components'
import back2 from '../img/icons/back2.svg'
import back3 from '../img/icons/back3.svg'
import { Context } from './App'
import { Flex } from './UI/Flex'
import { Icon } from './UI/Icons'

const CalendarSection = styled.div`
    width: 573px;
    height: 481px;
    background: #ebe7ff;
    border-radius: 5px;
    margin-left: 40px;
    span {
        margin: 0;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
    }
    .day {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
    }
    .meetingDay {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 10px;
        bottom: 10px;
        width: 22px;
        height: 22px;
        background: #50caff;
        border-radius: 50px;
        color: #fff;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
    }
`
const CalendarHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 57px;
    background: #7761ff;
    border-radius: 5px 5px 0 0;
    span {
        font-size: 14px;
        line-height: 17px;
        color: #ffffff;
        text-align: center;
    }
`

export const Calendar = () => {
    const meetings = useContext(Context)

    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const calendarDays = Array(30)
        .fill(30)
        .map((_, i) => String(i + 1))

    const activeDays = meetings
        .map((meeting, i) => meeting?.date?.date?.slice(0, 2))
        .map((number) => {
            if (number[0] === '0') {
                return number[1]
            }
            return number
        })
    activeDays.splice(activeDays.indexOf('2'))

    const style = (day) => {
        return day > 4
            ? {
                  backgroundColor: '#fff',
                  minWidth: '79px',
                  position: 'relative',
              }
            : {
                  backgroundColor: '#ebe7ff',
                  minWidth: '79px',
                  color: 'rgba(0, 0, 0, 0.25)',
                  position: 'relative',
              }
    }
    const counter = (day) => {
        return activeDays.filter((item) => item === day).length
    }
    const findMeetingDay = (day) => {
        return activeDays.indexOf(day) > -1 ? (
            <div className="meetingDay">
                <p>{counter(day)}</p>
            </div>
        ) : null
    }
    return (
        <CalendarSection>
            <CalendarHeader>
                <Flex justify="space-between" flex=".28">
                    <Icon src={back3} />
                    <span>Июль, 2020</span>
                    <Icon src={back2} />
                </Flex>
            </CalendarHeader>
            <Flex p="10px 40px">
                {days.map((day, i) => {
                    return (
                        <Flex key={`${day + i}`} flex={0} justify="center">
                            <span>{day}</span>
                        </Flex>
                    )
                })}
            </Flex>
            <Flex m="0 10px" wrap="wrap" justify="flex-start">
                {calendarDays.map((day, i) => {
                    return (
                        <Flex
                            key={i}
                            p="11px 46px 32px 11px"
                            flex="0"
                            style={style(day)}
                        >
                            {findMeetingDay(day)}
                            <span className="day">{day}</span>
                        </Flex>
                    )
                })}
            </Flex>
        </CalendarSection>
    )
}
