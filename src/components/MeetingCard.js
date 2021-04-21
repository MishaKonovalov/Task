import styled from 'styled-components'
import React from 'react'
import { Flex } from './UI/Flex'
import { Button } from './UI/Button'

const CardSection = styled.div`
    width: 475px;
    height: 174px;
    box-shadow: 0px 0px 5px #ebe7ff;
    border-radius: 5px;
    margin: ${(props) => props.m || '0'};
    padding: ${(props) => props.p || '0'};
    h6 {
        font-weight: 500;
        font-size: 16px;
    }
    p {
        margin-top: 5px;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
    }
    .name {
        font-size: 14px;
    }
    .category {
        color: #ebe7ff;
        font-size: 14px;
        margin: 4px 0 0 0;
    }
`
export const MeetingCard = (props) => {
    const { address, date, doctor } = props.meeting
    return (
        <CardSection {...props}>
            <Flex p="20px 20px 0 20px " direction="column" justify="center">
                <h6>
                    {date.day} {date.date} |{date.time}
                </h6>
                <p>
                    {address.hospital},
                    <br />
                    {address.street}
                </p>
                <Flex m="10px 0 0 0" alignItems="center">
                    <img src={props.avatar} alt="avatar" />
                    <Flex direction="column" m="0 0 0 9px" alignItems="start">
                        <h6 className="name">{doctor.name}</h6>
                        <h6 className="category">{doctor.departmenе}</h6>
                    </Flex>
                    <Flex alignSelf="flex-end" justify="end" flex="0">
                        <Button>Отменить</Button>
                    </Flex>
                </Flex>
            </Flex>
        </CardSection>
    )
}
