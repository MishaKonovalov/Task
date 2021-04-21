import React, { useContext } from 'react'
import styled from 'styled-components'
import * as avatars from '../img/avatars'
import { Context } from './App'
import { MeetingCard } from './MeetingCard'

const ScrollBlockSection = styled.div`
    display: block;
    flex-direction: column;
    height: 645px;
    overflow-y: auto;
    padding: 0 20px 20px 0;
    ::-webkit-scrollbar-track {
        background-color: #ebe7ff;
        border-radius: 5px;
        max-height: 40px;
    }

    ::-webkit-scrollbar-thumb:vertical {
        border-radius: 5px;
        background-color: #003b72;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 20px;
    }
`

export const ScrollBlock = () => {
    const meetings = useContext(Context)

    return (
        <ScrollBlockSection direction="column">
            {meetings.map((item) => (
                <MeetingCard
                    key={item.id}
                    m="0 0 15px 0"
                    avatar={avatars[item.doctor.img]}
                    meeting={item}
                />
            ))}
        </ScrollBlockSection>
    )
}
