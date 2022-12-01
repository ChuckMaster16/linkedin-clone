import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Avatar } from '@mui/material';
import { connect } from 'react-redux';
import { signOutAPI } from '../actions';

const Header = ({user, signOut}) => {
  return (
    <Container>
       
        <Content>
            <Logo><a href='/home'> <img src='/images/linkinlogo.png'/></a></Logo>
            <Search>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <SearchIcons>
                   <SearchIcon/>
                </SearchIcons>
            </Search>
            <Nav>
                <NavListWrapper>
                    <NavList>
                        <a href='/home'>
                            <HomeIcon/>
                            <span>Home</span>
                        </a>
                        </NavList>
                        <NavList>
                        <a>
                            <PeopleAltIcon/>
                            <span>Network</span>
                        </a>
                        </NavList>
                        <NavList>
                        <a>
                            <BusinessCenterIcon/>
                            <span>Jobs</span>
                        </a>
                        </NavList>
                        <NavList>
                        <a>
                            <MarkunreadRoundedIcon/>
                            <span>Messages</span>
                        </a>
                        </NavList>
                        <NavList>
                        <a>
                            <NotificationsRoundedIcon/>
                            <span>Notifications</span>
                        </a>
                        </NavList>
                       
                    <User>
                      <a>
                      {user.photoURL ?  (<Avatar sx={{ width: 25, height: 25 }} scr={user.photoURL}/>) 
                    : (<Avatar sx={{ width: 25, height: 25 }} src={user.displayName}/>) }
                         {/*setting the user name or image */}
                            <span>Me <KeyboardArrowDownRoundedIcon/> </span>
                            
                        </a>
                        <Signout onClick={()=> signOut()}>
                            <a>Sign out</a>
                        </Signout>
                    </User> 
                    <Work>
                    <a>
                            <AppsRoundedIcon/>
                            <span>Work <KeyboardArrowDownRoundedIcon/></span>
                        </a>  
                    </Work>  
                    <Premium> 
                        <a>Try Premium for free</a>
                    </Premium>            
                </NavListWrapper>
            </Nav>
        </Content>
    </Container>
  )
}



const Nav = styled.div`
    margin-left: auto; 
    display: block; 
    @media (max-width: 768px){
        position:fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;

    }
`;

const Premium = styled.div`
    display: flex;
    text-align: center;
    margin: auto 0;
    width:90px;
    cursor: pointer;
    a{
        font-size:10px;
        color:#5d3b09;
    }
`;

const NavListWrapper = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type:none;
.active{
    &:after{
        content:' ';
        transform: scaleX(1);
        border-bottom:2px solid var(--white,#fff);
        position: absolute;
        left: 0;
        bottom: 0;
        transition: transform .2s ease-in-out;
        border-color: rgba(0,0,0,0.9)
    }
}
`;

const NavList = styled.li`
display: flex;
align-items: center;

 a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size:10px;
    font-weight: 400;
    justify-content:center; 
    line-height:1.5;
    min-width:80px;
    min-height:42px;
    text-decoration: none;
    position: relative;
    color:#666;
    cursor:pointer;
    &:hover {
        color:#2d79b5;
    }
    span{
        color: rgba(0, 0 ,0,0.6);
        display: flex;
        align-items: center;
    }
    @media (max-width: 768px){
        min-width:70px;
    }
 }
 &:hover,
 &:active {
    a{
        span{
            color: #2d79b5;
        }
    }

 }
`;

const Signout = styled.div`
   position:absolute;
   top:45px;
   background: white;
   border-radius: 0 0 5px 5px;
   width:100px;
   height:40px;
   transition-duration:167ms;
   text-align:center;
   display:none;
`;

const User = styled(NavList)`
&:hover{
    ${Signout}{
        align-items: center;
        display: block;
        justify-content: center;
    }
}
    
    `;
const Work = styled(User)`
border-left: 1px solid lightgrey;
`;



const Container = styled.div`
    background-color:white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left: 0;
    padding: 0 10px;
    position: fixed;
    width: 100%;
    z-index:100;
    margin: 0 auto;
    overflow: none;
`;


const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height:100%;
max-width:1128px;
`;
const Logo = styled.span`
margin-right:8px;
font-size:0px;
& > a > img  {
    height:34px;
    object-fit:contain;
    @media (max-width: 768px){
      padding: 0 5px;
      
    }`;
const SearchIcons = styled.div`
width:40px;
position: absolute;
z-index:1;
top: 6px;
left: 2px;
boarder-radius:0 2px 2px 0;
margin:0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
transition: background-color 0.15s;-
`;
const Search = styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
& > div{
    max-width:280px;
    input{
        border: none;
        box-shadow:none;
        background-color:#eef3f8;
        border-radius:3px;
        color: rgba(0,0,0,0.9);
        width:218px;
        padding: 0 8px 0 40px;
        line-height:1.75;
        font-weight:400;
        font-size:14px;
        height:34px;
        border-color: #dce6f1;
        vertical-align:text-top;
    }
}`;

const mapStateToProps = (state) => {
    return{
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    
        signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
