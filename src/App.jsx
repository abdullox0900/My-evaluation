import { useState } from 'react'
import GlobalStyle from './App.js'
import Loading from './components/loading/loading.jsx'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import "./App.css";

const MenuWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 50px;
    font-size: 24px;
    font-weight: 600;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`

function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 4000)

  return (
    <div>
      {
        loading == true ? (
          <Loading />
        ) : (
          <Loading opacity={'none'} />
        )
      }
      <MenuWrap>
        <Link to={'/leader_board'} style={{ textDecoration: 'none', color: '#6A6C72' }}>
          <MenuItem>
            Front-End
          </MenuItem>
        </Link>
      </MenuWrap>
      <GlobalStyle />
    </div>
  )
}

export default App
