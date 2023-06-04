import SearchBar from '../components/SearchBar'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import CategoriesList from '../components/CategoriesList'


const Receipes = () => {
  return (
    <Wrapper>
        <SearchBar />
        <CategoriesList />
        <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

export default Receipes