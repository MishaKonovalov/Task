import React from 'react'
import styled from 'styled-components'
import { Heaader } from './Header'
import { Routes } from './Routes'

const MainPageSection = styled.section`
    flex: 1;
    margin-left: 186px;
`

export const MainPage = () => {
    return (
        <MainPageSection>
            <Heaader />
            <Routes />
        </MainPageSection>
    )
}
