import React, { useContext } from 'react'
import styled from 'styled-components'
import { MeetingCard } from '../MeetingCard'
import { Flex } from '../UI/Flex'

import * as avatars from '../../img/avatars'
import add from '../../img/icons/add.svg'
import report from '../../img/icons/report.svg'
import clock from '../../img/icons/clock.svg'
import lab from '../../img/icons/lab.svg'

import { Link } from 'react-router-dom'
import { InfoCard } from '../InfoCards'
import { Context } from '../App'

const CabinetSection = styled.main`
    margin: 20px;
    span {
        margin: 20px;
        font-size: 16px;
    }
    .title {
        margin: 0 0 5px 0;
    }
    a {
        color: #50caff;
    }
`
export const Cabinet = () => {
    const meetings = useContext(Context)
    const content = meetings.slice(meetings.length - 2, meetings.length)
    const infoCards = [
        {
            title: 'Информация о пациенте',
            icon: report,
            content: {
                type: 'list',
                content: [
                    'Ваши личные данные',
                    'Рекомендации врачей',
                    'История болезней',
                ],
            },
            active: true,
            id: 1,
        },
        {
            title: 'Результаты анализов',
            icon: lab,
            content: {
                type: 'paragraph',
                content: ['Вы можете узнать здесь результаты своих анализов'],
            },
            id: 2,
        },
        {
            title: 'Добавить информацию',
            icon: add,
            content: {
                type: 'paragraph',
                content: [
                    'Добавляйте в свою электронную медицинскую карту новые данные',
                ],
            },
            id: 3,
        },
        {
            title: 'История приемов',
            icon: clock,
            content: {
                type: 'paragraph',
                content: [
                    'Вся информация о полученных услугах за все время хранится здесь',
                ],
            },
            id: 4,
        },
    ]

    return (
        <CabinetSection>
            <span>Записи на прием</span>
            <Flex m="15px 0 0 0">
                {content.map((meeting, i) => {
                    return (
                        <MeetingCard
                            key={meeting.id}
                            m="0 20px 20px 0"
                            avatar={avatars[meeting.doctor.img]}
                            meeting={meeting}
                        />
                    )
                })}

                <Flex
                    alignSelf="center"
                    direction="column"
                    alignItems="center"
                    m="0 75px 0 0"
                >
                    <span className="title">Еще 3 записи</span>
                    <Link to="/mamory">Подробнее</Link>
                </Flex>
            </Flex>
            <span>Электронная карта</span>
            <Flex wrap="wrap" m="15px 0 0 0 ">
                {infoCards.map((card, i) => {
                    return (
                        <InfoCard
                            key={card.id}
                            icon={card.icon}
                            card={card}
                            m="5px"
                        />
                    )
                })}
            </Flex>
        </CabinetSection>
    )
}
