import React from 'react'
import styled from 'styled-components'

const IconSecton = styled.img`
    width: ${(props) => props.width || 18};
    margin: ${(props) => props.m || 0};
`
export const Icon = (props) => {
    return <IconSecton {...props} />
}
