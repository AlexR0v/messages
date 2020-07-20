import React from 'react'
import { Header } from '../../ui/topBar/Header'
import { Nav } from '../../ui/topBar/Nav'
import { Logo } from '../../ui/topBar/Logo'
import TopBarLinks from './TopBarLinks'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <Header
      maxWidth={[1150]}
      m={'auto'}
      height={[70]}
    >
      <Nav>
        <Link to={'/'}>
          <Logo>Messages</Logo>
        </Link>
        <TopBarLinks />
      </Nav>
    </Header>
  )
}

export default TopBar
