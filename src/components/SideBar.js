import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from './UI/Flex'

import heart from '../img/icons/heart.svg'
import speak from '../img/icons/speak.svg'
import stethoscope from '../img/icons/stethoscope.svg'
import book from '../img/icons/book.svg'
import test from '../img/icons/test.svg'
import help from '../img/icons/help.svg'
import logo from '../img/исх.png'
import { Icon } from './UI/Icons'
import { Button } from './UI/Button'

const SideBarSection = styled.section`
    flex: 0.14;
    background-color: #003b72;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    position: fixed;
    bottom: 0;
    top: 0;
    a {
        text-decoration: none;
        color: #fff;
        display: flex;
    }
    .active {
        background-color: #fff;
        z-index: 11;
        border-left: 3px solid #7761ff;
    }
    .active span {
        color: #7761ff;
    }
    .help {
        position: absolute;
        left: 20px;
        bottom: 16px;
    }
`

export const SideBar = () => {
    const links = [
        { title: 'Профиль', to: '/', icon: heart, active: true },
        { title: 'Врачи и клиники', to: '#', icon: stethoscope, active: false },
        { title: 'Сообщения', to: '#', icon: speak, active: false },
        { title: 'Тестирования', to: '#', icon: test, active: false },
        { title: 'Полезно знать', to: '#', icon: book, active: false },
    ]
    return (
        <SideBarSection>
            <Flex p="19px">
                <span>Логотип</span>
            </Flex>
            <Flex direction="column">
                {links.map(({ title, to, icon, active }, index) => {
                    return (
                        <Flex
                            m="0 0 10px 0"
                            p="14px 20px"
                            className={active ? 'active' : null}
                            key={index}
                        >
                            <Link to={to}>
                                <Icon src={icon} alt={icon} m="0 14px 0 0" />
                                <span>{title}</span>
                            </Link>
                        </Flex>
                    )
                })}
                <Flex m="10px 0" alignSelf="center">
                    <Button>Подать заявку</Button>
                </Flex>
            </Flex>
            <div className="help">
                <Flex p="14px 0">
                    <Icon src={help} m="0 14px 0 0" />
                    <span>Помощь</span>
                </Flex>
                <img src={logo} alt="" />
            </div>
        </SideBarSection>
    )
}
