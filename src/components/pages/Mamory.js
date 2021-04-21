import React from 'react'
import styled from 'styled-components'
import { Flex } from '../UI/Flex'
import { Icon } from '../UI/Icons'
import back from '../../img/icons/back.svg'
import { Link } from 'react-router-dom'
import { ScrollBlock } from '../ScrollBlock'
import { Calendar } from '../Calendar'

const MamorySection = styled.main`
    margin: 15px 40px 0 20px;
    height: 100vh;
    position: fixed;
    span {
        margin-left: 15px;
        font-size: 16px;
    }
    a {
        color: #000;
        text-decoration: none;
    }
`

export const Mamory = () => {
    return (
        <MamorySection>
            <Link to="/">
                <Flex alignItems="center" m="0 0 15px 20px">
                    <Icon src={back} />
                    <span>Мои записи</span>
                </Flex>
            </Link>

            <Flex justify="space-between">
                <ScrollBlock />
                <Calendar />
            </Flex>
        </MamorySection>
    )
}
