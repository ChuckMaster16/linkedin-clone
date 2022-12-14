import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'
import { Navigate } from 'react-router-dom'
import{connect} from 'react-redux'

const Home = ({user}) => {
  return (
    <Container>
      {!user && <Navigate to='/'/>}
      <Layout>
        <div>
          <LeftSide/>
        </div>
        <div>
          <Main/>
        </div>
        <div>
          <RightSide/>
        </div>
      </Layout>
      
    </Container>
  )
}



const Container = styled.div`
  padding: 52px;
  max-width:100%;
  `;
  const Layout = styled.div`
  display:grid;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap:25px;
  row-gap:25px;
  grid-template-row: auto;
  margin: 25px 0;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5px:
  }`;

  const mapStateToProps = (state) => {
    return {
      user: state.userState.user,
    };
  };
  export default connect(mapStateToProps)(Home)