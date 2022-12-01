import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';
import { Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightSide = () => {
  return (
    <Container>
        <FollowCard>
            <Tittle>
                <h2>Add to your Feed</h2>
                <InfoIcon/>
            </Tittle>
            <FeedList>
                 <li>
                    <a><Avatar src="https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg"/></a>
                    <div>
                      <span>#Charles Archibald</span>
                      <p>Reactjs · NextJS · MERN · Fullstack Developer </p>
                      <button> <AddIcon/> Follow</button>
                    </div>                    
                </li>
                <li>
                    <a><Avatar src="images/iconlink.png"/></a>
                    <div>
                      <span>#linkedIn </span>
                      <p>Company · Online Media</p>
                      <button> <AddIcon/> Follow</button>
                    </div>                    
                </li>
                <li>
                    <a><Avatar src="images/facebook.png"/></a>
                    <div>
                      <span>#Facebook</span>
                      <p>Company · Online Social Platform</p>
                      <button> <AddIcon/> Follow</button>
                    </div>                    
                </li>
                <li>
                    <a><Avatar src="images/gicon.png"/></a>
                    <div>
                      <span>#Google</span>
                      <p>Company · Online Search engine</p>
                      <button> <AddIcon/> Follow</button>
                    </div>                    
                </li> 
                <a><h2>View all recommendations <ArrowForwardIcon/> </h2></a>            
            </FeedList>           
        </FollowCard>
        
        <Ads>
        <div>
            <span>Ad <MoreHorizIcon/></span>
        </div>
            <AdsList>
                <h3> Get the latest jobs and industry news</h3>
                <div>
                    <Avatar src='https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg'/>
                    <a> <Avatar src='images/gicon.png'/></a>
                </div>
                <div>
                    <p>Charles, explore relevant opportunites with <span>Google</span></p>
                    <button>Follow</button>
                </div>  

            </AdsList>
        </Ads>
    </Container>
  )
}

export default RightSide;

const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom:8px;
    background-color:#fff;
    border-radius: 8px;
    position: relative;
    border:none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px rgb(0 0 0 / 20%);
    padding:12px;
    `;
    const Tittle = styled.div`
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        font-size:16px;
        width: 100%;
        color: rgba(0,0,0,0.6);
    `;
    const FeedList = styled.ul`
        margin-top:16px;
        li{
        display: flex;
        align-items: center;
        margin:12px 0;
        position: relative;
        font-size:14px;
        a{
            position: relative;
            bottom: 30px;
         }
        }
       & div{
            display: flex;
            flex-direction: column;
            margin: 0 0 10px 10px;
            text-align:left;
            span{
                font-size:1.2rem;
                font-weight:600;
                color:rgba(0,0,0,0.7);
            }
            p{
                color:rgba(0,0,0,0.6);
            }
            
        }
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color:transparent; 
            color:rgba(0,0,0,0.6);
            box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
            padding:5px 0;
            width:100px;
            border-radius: 25px;
            border:none;
            margin-top:16px;
            cursor: pointer;
            transition: all 265ms ease-in-out;
            &:hover{
                background-color:rgba(0,0,0,0.1);
                border: 1px solid;
            }
        }
        h2{
            display: flex;
            align-items: center;
            justify-content: start;
            position:relative;
            color:rgba(0,0,0,0.6);
            padding: 5px 10px;
            width:80%;
            word-wrap: nowrap;
            white-space: nowrap;
            border-radius:15px;
            cursor: pointer;
            &:hover {
                background-color:rgba(0,0,0,0.1);
            }
        }
        `;
        const Ads = styled(FollowCard)`
        div > span {
            display: flex;
            align-items:center;
            justify-content: end;
            font-size:14px;
            margin-right: 10px;
            color:rgba(0,0,0,0.6);
             & :nth-child(1) {
                cursor: pointer;
            }
            
        }`;

        const AdsList = styled.div`
        h3{
            color:rgba(0,0,0,0.55);
            font-size:12px;
            font-weight:400;
            line-height:16px;
            max-height:32px;
            margin:8px 0;
        }
        div:nth-child(2){
            display: flex;
            align-items: center;
            justify-content: center;
            a{
                margin-left:10px;
            }    
        }
        div:nth-child(3){
            p{
                color:rgba(0,0,0,0.7);
                font-size:15px;
                font-weight:400;
                line-height:20px;
                max-height:60px;
                overflow: hidden;
                span{
                    font-weight:600;
                }
            }
            button{
                padding:5px 0;
                width:100px;
                border-radius:16px;
                color:#0a66c2;
                border:1px solid #0a66c2;
                cursor: pointer;
                transition: all 265ms ease-in-out;
                &:hover {
                    background-color:#70b5f926;
                    box-shadow:#0a66c2 0px 0px 0px 1px inset;
                }
            }
        }
        `;