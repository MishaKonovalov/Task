import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { MainPage } from './MainPage'
import { SideBar } from './SideBar'
import { Flex } from './UI/Flex'

export const Context = createContext()
function App() {
    const [meetings, setMeetings] = useState([])
    useEffect(() => {
        axios(
            'https://my-fi-de26c-default-rtdb.europe-west1.firebasedatabase.app/meetings.json'
        ).then((res) => setMeetings(res.data))
    }, [])
    return (
        <Context.Provider value={meetings}>
            <Flex>
                <SideBar />
                <MainPage />
            </Flex>
        </Context.Provider>
    )
}

export default App
