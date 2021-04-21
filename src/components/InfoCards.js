import React from 'react'
import styled from 'styled-components'
import { Flex } from './UI/Flex'
import { Icon } from './UI/Icons'

const InfoCardSection = styled.div`
    display: flex;
    align-items: center;
    width: 540px;
    height: 183px;
    box-shadow: 0px 0px 5px #ebe7ff;
    border-radius: 5px;
    border: ${(props) => (props.active ? '2px solid #50caff' : 'none')};
    margin: ${(props) => props.m || '0'};
    padding: ${(props) => props.p || '0'};
    hr {
        border: 1px solid #ebe7ff;
        width: 335px;
    }
    h1 {
        font-weight: normal;
        font-size: 28px;
        margin-bottom: 10px;
    }
    p {
        color: #000;
        margin-top: 20px;
        font-size: 16px;
        font-weight: normal;
    }
    li p {
        margin: 3px;
    }
    li {
        color: #50caff;
        margin: 7px 0;
    }
    ul {
        margin-left: 17px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
export const InfoCard = (props) => {
    const {
        title,
        content: { content, type },
        active,
    } = props.card

    const renderItems = () => {
        if (type === 'list') {
            return (
                <ul>
                    {content.map((item, i) => {
                        return (
                            <li key={i + item[0]}>
                                <p>{item}</p>
                            </li>
                        )
                    })}
                </ul>
            )
        }
        if (type === 'paragraph') {
            return <p>{content}</p>
        }
    }

    return (
        <InfoCardSection {...props} active={active || null}>
            <Flex
                justify="center"
                alignItems="center"
                style={
                    active
                        ? {
                              backgroundColor: '#50caff',
                              borderRadius: '2px 0 0 2px',
                              height: '100%',
                          }
                        : null
                }
            >
                <Icon src={props.icon} width="50px" />
            </Flex>

            <Flex direction="column" m="15px 36px">
                <h1>{title}</h1>
                <hr style={active ? { border: '1px solid #50caff' } : null} />
                {renderItems()}
            </Flex>
        </InfoCardSection>
    )
}
