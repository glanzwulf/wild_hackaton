import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Moodtext from './Moodtext'
import ActivityList from './ActivityList'

const MainPage = () => (
    <div>
        <Header />
        <Moodtext />
        <ActivityList />
        <Footer />
    </div>
)

export default MainPage;