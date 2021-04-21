import React from 'react'
import styled from 'styled-components'
import { Flex } from './UI/Flex'
import search from '../img/icons/search.svg'
import eye from '../img/icons/eye.svg'
import bell from '../img/icons/bell.svg'
import arrow from '../img/icons/arrow.svg'
import avatar from '../img/avatar.png'
import { Icon } from './UI/Icons'

const HeaderSection = styled.header`
    background-color: #50caff;
    color: #fff;
    max-height: 55px;
`
const HeadingOne = styled.h1`
    font-size: 28px;
    font-weight: 400;
`
const AvatarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px #fff solid;
    padding: 2px;
    width: 49px;
    height: 49px;
    img {
        border-radius: 50%;
        width: 45px;
    }
`

const ArrowIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    margin-left: 7px;
    width: 16px;
    height: 16px;
`
export const Heaader = () => {
    const icons = [
        { src: search, alt: 'search' },
        { src: bell, alt: 'bell' },
        { src: eye, alt: 'eye' },
    ]
    return (
        <HeaderSection>
            <Flex p="3px 40px" justify="space-between" alignItems="center">
                <HeadingOne>Мой профиль</HeadingOne>
                <Flex flex="0">
                    {icons.map((icon) => (
                        <Icon
                            src={icon.src}
                            alt={icon.alt}
                            m="0 0 0 20px"
                            key={icon.alt}
                        />
                    ))}

                    <Flex m="0 0 0 20px" alignItems="center">
                        <AvatarWrapper>
                            <img src={avatar} alt="" />
                        </AvatarWrapper>

                        <ArrowIcon>
                            <img
                                style={{
                                    width: '10px',
                                    height: '8px',
                                    marginTop: '3px',
                                }}
                                src={arrow}
                                alt=""
                            />
                        </ArrowIcon>
                    </Flex>
                </Flex>
            </Flex>
        </HeaderSection>
    )
}
