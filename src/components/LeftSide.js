import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@mui/material'
import { height } from '@mui/system'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import userEvent from '@testing-library/user-event';
import { connect } from 'react-redux';

const LeftSide = ({user}) => {
  return (
    <Container>
        <UserCard>
            <UserInfo>
                <CardBackground/>
                <a>
                <Avatar 
                        sx={{ width: 45, height: 45 }}
                        alt="Charles Archibald" src="https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg" />
                        <Link>Welcome, there {user ? user.displayName : ""}</Link>
                </a>      
                <a>
                    <AddphotoText>Add a photo</AddphotoText>
                </a>          
            </UserInfo>
            <Widget>
                <a>
                    <div>
                        <p>Connections <span><PersonAddIcon sx={{ width: 20, height: 20 }}/></span></p>
                        <p>Grow your Network</p>
                    </div>                   
                </a>
            </Widget>
            <PremiumAccess>
                <a>
                   <div>
                     <p>Access exclusive tools & insights</p>
                        <p>Try Premium for free</p>
                   </div>
                </a>
            </PremiumAccess>
            <Item>
                <div>
                    <span>
                        <BookmarkIcon/>
                    </span>
                    <span>My Items</span>
                </div>                
            </Item>
        </UserCard>
        <CompanyCard>
           <CompanyWidget>                
                    <div>
                        <a><img src='images/companypng.png' width={30} height={30}/></a>
                        <a><p>Company Name...</p></a>
                        <hr width={40}/>                       
                    </div>                   
                    
                        <div>
                            <a>Page Notifications  </a>
                            <span>0</span>
                        </div>
                        <div>
                            <a>Page Visitors</a>
                            <span>0</span>
                        </div>
                        <div>
                          <a>See Visitors analytics</a>   
                        </div>                                            
                                   
                      
            </CompanyWidget>

        </CompanyCard>
        
        <CommunityCard>
          <a>
            <span>Groups</span>
          </a>
          <a>
            <span>Events <AddIcon/> </span>
          </a>
          <a>
            <span>Followed Hastags</span>
          </a>
          <a>
            <span>Discover More</span>
          </a>

        </CommunityCard>
    </Container>
  )
}



const Container = styled.div`
    grid-area: leftside;
    
`;

const UserCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 15px;
background-color:#fff;
border-radius:5px;
transition: box-shadow 83ms;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px rgb(0 0 0 / 20%);

`;
const UserInfo = styled.div`
    border-bottom:1px solid rgba(0,0,0,0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break-after: break-word;
    a > *{   
        margin:0 auto ;  
        border: 1px solid white;      
    }
`;

const CardBackground = styled.div`
    background: url('/images/cardbg2.webp');
    background-position:center;
    background-repeat:no-repeat;
    background-size:100%;
    height:54px;
    margin: -12px ;
    
`;

const Link= styled.div`
    font-size: 14px;
    line-height:1.5;
    color:rgba(0,0,0,0.9);
    font-weight:600;
`;

const AddphotoText = styled.div`
    color: #0a66c2;
    font-size: 12px;
    line-height:1.5;
    font-weight:400;
 `;
 const Widget = styled.div`
 cursor: pointer;
 padding: 10px 0;
 border-bottom:1px solid rgba(0,0,0,0.15);
 
 div{
    text-align: left;
    padding: 0 15px ;
    &:hover {
        background-color: #00000014;
     }
 }
    div > p:nth-child(1){
        color: #00000099;
        font-size: 12px;
        line-height:1.5;
        position: relative;
        span > *{
            position:absolute;
            bottom:0px;
            right:15px;
        }
    }
    div > p:nth-child(2){
        color: #000000e6;
        font-size: 12px;
        line-height:1.5;
        font-weight:600;
    }
 `;

 const PremiumAccess = styled(Widget)`
    word-wrap: nowrap;
    white-space: wrap;
 `;

 const Item = styled.div`
 cursor: pointer;
    &:hover {
        background-color: #00000014;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    span:nth-child(1){
        color: #00000099;
    }
     span:nth-child(2){
        position: absolute;
        bottom: 17px;
        left: 40px;
        font-size: 12px;
        line-height: 1.5;
    }
 `;
 const CompanyCard =styled(UserCard)``;
 const CompanyWidget =styled.div`
    text-align: left;
    padding: 0 15px;
   div:nth-child(4) {
    color: #000;
    font-weight:semibold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border: 1px solid #00000014;
    padding:14px 0;
    margin-bottom:10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px rgb(0 0 0 / 20%);
    &:hover {
        background-color: #00000014;
    }
    
   }
        hr{
            margin: 10px 0;
        }
        & div:nth-child(2) a,
            div:nth-child(3) a{
            font-size:12px;
            padding: 4px 0;
            cursor: pointer;
            color: #00000099;
            &:hover {
                text-decoration: underline;
                color: #0a66c2;
            }
        }
            & div:nth-child(2),
            div:nth-child(3){
                display: flex;
                align-items: center;
                justify-content: space-between;
                span{
                    color: #0a66c2;
                }
            }
           
 `;

 const CommunityCard = styled(UserCard)`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a{
        cursor: pointer;
        color:black;
        padding: 4px 15px 4px 15px;
        font-size: 12px;
        line-height: 1.5;
        &:hover {
            color: #0a66c2;

        }
        span{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &:last-child {
            color: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            border-top: 1px solid #00000014;
            padding:14px 0;
            &:hover {
                background-color: #00000014;
            }
        }
    }
 `;

 const mapStateToProps = (state) => {
    return{
        user: state.userState.user,
    };
};
export default connect(mapStateToProps)(LeftSide)