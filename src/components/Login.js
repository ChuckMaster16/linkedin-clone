import React from 'react'
import styled from 'styled-components'
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SmartDisplayTwoToneIcon from '@mui/icons-material/SmartDisplayTwoTone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Navigate } from 'react-router';


const Login = ({signIn, user}) => {
  return (
    <div>
      <Container>
        {user && <Navigate to="/home"/>}

        <Nav>
          <a href='/'>
            <img src='/images/pagelogo.png' alt='page logo' />
          </a>
          <DescoverIcons>
            <div>
              <ExploreIcon />
              <p>Discover</p>
            </div>
            <div>
               <PeopleAltIcon />
               <p>People</p>
            </div>            
            <div>
               <SmartDisplayTwoToneIcon />
               <p>Learning</p>
            </div>            
            <div>
               <BusinessCenterIcon />
               <p>Jobs</p>
            </div>            
          </DescoverIcons>
          <div>
            <Join>Join Now</Join>
            <Signin>Sigin</Signin>
          </div>
        </Nav>
        <Section>
          <Hero>
            <h1>Welcome to your professional community</h1>
            <div>
              <input type='text, number' placeholder='Email or Phone number'   name=''/>
              <input type='password' placeholder='Password'  name=''/>
              <a href=''>Forgot Password</a>
              <button>Sign in</button>
              <span>or</span>
              <Button onClick={() => signIn()}> <img src='/images/gicon.png' alt='googleimg' /> Sign in with Google</Button>

            </div>
            <img src='/images/loginpage.svg' alt='heroimage' />
          </Hero>
        </Section>
      </Container>
    </div>
  )
}




const DescoverIcons = styled.div`
  display: flex;
  position: relative;
  left: 185px;
  border-right: 1px solid grey;
  justify-content: space-around;
  width:250px;
  color: #666; 
  @media (min-width: 768px) {
    display: none;
  }
  div{
    text-align: center;
    p{
      font-size: 14px;
      font-weight: 400;
      line-height:1.25;
    }
  } 

  `;

const Container = styled.div`
padding:0;

`;
const Nav = styled.nav`
  max-width:1128px;
  padding:12px 0 16px;
  display:flex;
  align-items:center;
  position:relative;
  justify-content:space-between;
  margin: 0 auto;
  @media (max-width: 768px){
    margin: 0 auto;
  }
  & > a > img  {
    width:135px;
    height:34px;
    object-fit:contain;
    @media (max-width: 768px){
      padding: 0 5px;
      width:50px;
      
    }
  }
`;
const Signin = styled.a`
box-shadow: inset 0 0 0 1px  #0a66c2; 
color: #0a66c2;
transition-duration:167ms;
padding:  10px 24px;
border-radius: 20px;
cursor: pointer;
font-weight: bold;
text-align:center;
flex-wrap: nowrap;
text-decoration:none;
white-space:nowrap;
&:hover {
  background-color: #0a67c9;
  color: white;
  filter: drop-shadow(0px 3px 2px black);
}
&:active {
  color: #0a66c2;
  background-color: white;
}
@media (max-width: 768px){
  font-size: 10px;
}
`;


const Join = styled.a`
  font-size:16px;
  padding:10px 12px;
  text-decoration:none;
  color: rgba(0,0,0,0.6);
  margin-right:12px;
  cursor:pointer;
  border-radius:20px;
  flex-wrap: nowrap;
  white-space:nowrap;
  &:hover {
    background-color:rgba(0,0,0, 0.08);
    color: rgba(0,0,0, 0.9);
    filter: drop-shadow(0px 3px 2px black);
  }
  @media (max-width: 768px){
    font-size: 10px;
    
  }
`;

const Section = styled.div`
display:flex;
align-content:start;
min-height:700px;
padding-bottom:138px;
padding-top: 40px;
padding:60px 0;
position:relative;
flex-wrap:wrap;
width:100%;
max-width:1128px;
align-items:center;
margin:auto;
@media (max-width: 768px){
  min-height:0px;
  margin:auto;
}
`;
const Hero = styled.div`
display: flex;
width: 100%;
align-items: center;
  flex-wrap:no-wrap;
  min-height: 560px;
  padding-top: 40px;
  @media (max-width: 768px){
    text-align:center;
    justify-content:center;
    flex-wrap:wrap;
  }

& > h1{
  color:#8f5849 ;
  font-size: 56px;
  font-weight: 200;
  width: 55%;
  padding-right: 20px;
  padding-left:20px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: 1rem;
  @media (max-width: 768px){
    text-align:center;
    font-size:20px;
    width: 100%;
    line-height:2;
  }
}
img{ 
  width: 700px;
  height: 670px;  
  bottom:-2px;
  right:-150px;
  z-index:-1;
  @media (max-width: 768px){
    top: 230px;
    width:100%;
    display:flex;
    justify-content:center;
    position: relative;
    margin-right: 275px;
  }
 
}
 & > div{
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-left:20px;
  padding-top:20px;
  @media (max-width: 768px){
    justify-content:center;
    width: 100%;
  }
  & > input {
    width: 200%;
    border: 1px solid rgba(0,0,0,0.6);
    border-radius: 5px;
    background-color: transparent;
    padding: 20px 12px 4px;
    outline: none;
    margin-bottom:10px;
    @media (max-width: 768px){
      justify-content:center;
      width: 100%;
    }
  }
  & > a {
    text-decoration: none;
    color: black;
    font-size:12px;
    margin:10px 0;
    &:hover {
      text-decoration:underline;
      color:#0a66c2;
    }
  }
  & > button {
    background-color: #0073b1;
    border: 0;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-family: inherit;
    height: 35px;
    line-height: 48px;
    overflow: hidden;
    outline-width: 2px;
    padding: 10px 12px;
    position: relative;
    text-align: center;
    text-decoration: none;
    -webkit-transition-duration: 167ms;
    transition-duration: 167ms;
    -webkit-transition-property: background-color,color,-webkit-box-shadow;
    transition-property: background-color,color,-webkit-box-shadow;
    transition-property: background-color,box-shadow,color;
    transition-property: background-color,box-shadow,color,-webkit-box-shadow;
    -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    vertical-align: middle;
    z-index: 0;
    border-radius: 28px; 
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #2977c9;
    margin-bottom: 10px
  }
  & > span{
    display: flex; 
    justify-content: center;
  }
 }
`;
const Button = styled.a`
background-color white;
border-radius 20px;
box-shadow: inset 0 0 0 1px  rgba(0,0,0,0.6); 
color: rgba(0,0,0,0.6);
text-align:center;
padding: 10px 12px;
position: relative;
cursor: pointer;
& > img{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
  top: 8px;
  z-index:1;
  
}
&:hover {
  text-decoration: none !important;
  color: white !important;
  background-color: #2977c9 !important;
}
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);