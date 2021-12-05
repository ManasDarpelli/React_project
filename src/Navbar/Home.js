import React from 'react'
import Restaurant from '../component/Restaurant'
import { Menu } from '../component/Api/menuApi'
const Home = () => {
    return (
        <Restaurant items={Menu} />
    )
}

export default Home
