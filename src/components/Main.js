import React, { useState } from 'react'
import styled from 'styled-components'
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PostModal  from './PostModal'



const Main = (props) => {
    const [showModal,setShowModal] = useState('close');

const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {return};

    switch (showModal) {
        case'open':
        setShowModal('close');
        break;
        case'close':
        setShowModal('open');
        break;
        default:
            setShowModal('close');
        break;
    }
};
  return (
    <Container>
            <ShareBox>
                    {/*<input type="text" name="share" />*/}               
                <div>
                    <Avatar src='https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg'/>
                    <button onClick={handleClick}>Start a post</button>
                </div>
                <div>
                    <button> <ImageIcon style={{ color: '#378fe9' }}/> <span>Photo</span></button>
                    <button> <SmartDisplayIcon style={{ color: '#5f9b41' }}/> <span>Video</span></button>
                    <button> <EventAvailableIcon style={{ color: '#c37d16' }}/> <span>Event</span></button>
                    <button> <NewspaperIcon style={{ color: '#e16745' }}/> <span>Write article</span></button>                
                </div>     
            </ShareBox>  
            
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <div>
                            <Avatar src='https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg' sx={{ width: 48, height: 48 }}/>
                            </div>
                            
                            <div>
                                <span>React Native Uber-Clone</span>
                                <span>27,000,523 followers</span>
                                <span>4w</span>
                            </div>
                        </a>
                        <button>
                            <MoreHorizIcon/>
                        </button>
                    </SharedActor>
                    <Description>Click here to view repository <a href='https://github.com/ChuckMaster16/uberclone'>uber-clone</a></Description>
                    <SharedImg>
                        <a href=''> 
                        <img src='https://res.cloudinary.com/chuckmaster/image/upload/v1669096906/myportfolio_img/uberclone_hquqyg.png' alt='example image'/>
                        </a>
                    </SharedImg>
                    <SocialIcons>
                        <div>
                            <li>
                                <button>
                                    <ThumbUpOutlinedIcon 
                                        style={{ color: 'white' }}
                                    sx={{ width: 15, height: 15 }}/>
                                </button>
                                
                            </li>
                            
                            <li>
                                <button>
                                    <VolunteerActivismOutlinedIcon
                                    style={{ color: 'white' }}
                                    sx={{ width: 15, height: 15 }}/>                                
                                </button>
                                
                            </li>
                            <li>
                                <button>
                                    <FavoriteBorderOutlinedIcon
                                    style={{ color: 'white' }}
                                    sx={{ width: 15, height: 15 }}/>
                                </button>
                                <span>7k</span>
                            </li>
                        </div>
                        <div>
                            <li>                                
                                <p>
                                <span>63 </span> 
                                   comment                    
                                </p>
                            </li>
                            <span>·</span>
                            <li>
                                <p>
                                <span>53k </span> 

                                   repost                  
                                </p>
                            </li>
                        </div>    
                    </SocialIcons>
                    <ShareYours>
                        <li>
                            <button>
                                <Avatar src='https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg' sx={{ width: 25, height: 25}}/> 
                                <span><KeyboardArrowDownIcon/></span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <ThumbUpOutlinedIcon style={{ color: 'black' }} />
                                <span>Like</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <InsertCommentIcon/>
                                <span>Comment</span>
                            </button>
                        </li>
                        <li> 
                            <button>
                                <RestartAltIcon/>
                                <span>Repost</span>
                            </button>
                        </li>
                        <li> 
                            <button>
                                <SendIcon style={{ transform: 'rotate(-45deg)' }} />
                                <span>Send</span>
                            </button>
                        </li>
                    </ShareYours>
                </Article>  

                <Article>
                    <SharedActor>
                        <a>
                            <div>
                            <Avatar src='https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg' sx={{ width: 48, height: 48 }}/>
                            </div>
                            
                            <div>
                                <span>React Native Uber-Clone</span>
                                <span>27,000,523 followers</span>
                                <span>4w</span>
                            </div>
                        </a>
                        <button>
                            <MoreHorizIcon/>
                        </button>
                    </SharedActor>
                    <Description>Click here to view demo<a href='https://netflix-clone-f5c52.web.app/'>Netflix Fullstack clone with stripe payment</a></Description>
                    <SharedImg>
                        <a href=''> 
                        <img src='https://res.cloudinary.com/chuckmaster/image/upload/v1663971281/myportfolio_img/netflixclone_k1jgbc.png' alt='example image'/>
                        </a>
                    </SharedImg>
                    <SocialIcons>
                        <div>
                            <li>
                                <button>
                                    <ThumbUpOutlinedIcon 
                                        style={{ color: 'white' }}
                                    sx={{ width: 15, height: 15 }}/>
                                </button>
                                
                            </li>
                            
                            <li>
                                <button>
                                    <VolunteerActivismOutlinedIcon
                                    style={{ color: 'white' }}
                                    sx={{ width: 15, height: 15 }}/>                                
                                </button>
                                
                            </li>
                            <li>
                                <button>
                                    <FavoriteBorderOutlinedIcon
                                    style={{ color: 'white' }}
                                    sx={{ width: 15, height: 15 }}/>
                                </button>
                                <span>7k</span>
                            </li>
                        </div>
                        <div>
                            <li>                                
                                <p>
                                <span>63 </span> 
                                   comment                    
                                </p>
                            </li>
                            <span>·</span>
                            <li>
                                <p>
                                <span>53k </span> 

                                   repost                  
                                </p>
                            </li>
                        </div>    
                    </SocialIcons>
                    <ShareYours>
                        <li>
                            <button>
                                <Avatar src='https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg' sx={{ width: 25, height: 25}}/> 
                                <span><KeyboardArrowDownIcon/></span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <ThumbUpOutlinedIcon style={{ color: 'black' }} />
                                <span>Like</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <InsertCommentIcon/>
                                <span>Comment</span>
                            </button>
                        </li>
                        <li> 
                            <button>
                                <RestartAltIcon/>
                                <span>Repost</span>
                            </button>
                        </li>
                        <li> 
                            <button>
                                <SendIcon style={{ transform: 'rotate(-45deg)' }} />
                                <span>Send</span>
                            </button>
                        </li>
                    </ShareYours>
                </Article>                  
            </div>   

            
            <PostModal showModal={showModal} handleClick={handleClick}/>   
            
              
    </Container>
  );
};

export default Main

const Container = styled.div`
    grid-area: main;
    overflow-Y: scroll;
`;
const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position: relative
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px rgb(0 0 0 / 20%);

`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background-color: #fff;
    div{
        button{
            outline: none;
            color: rgba(0,0,0,0.6);
            font-size:14px;
            line-height:1.5;
            min-height:48px;
            background:transparent;
            border:none;
            display: flex;
            align-items: center;
            font-weight:600;          
        }
        &:first-child {
            display: flex;
            align-items: center;
            margin:8px 16px 8px 16px;
        }
        button{
            margin: 4px 0;
            flex-grow: 1;
            border-radius:35px;
            padding-left:16px;
            border: 1px solid rgba(0 ,0 ,0 ,0.15);
            background-color:white;
            text-align:left;
        }
    }
    div:nth-child(2){
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        padding-bottom:4px;
        button{
            border:none;
            cursor: pointer;
            border-radius: 15px;
            margin: 10px;
            transition: all 256ms ease-in-out;
            &:hover {
                background-color: rgba(0,0,0,0.1);
            }
     span {
            margin:0 0 0 4px;
            color:#00000099;
            }
        }
    }
    `;

const Article = styled(CommonCard)`
    padding:0;
    margin:0 0 8px;
    overflow: visible;
    `;
const SharedActor = styled.div`
padding-right:40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom:8px;
align-items:center;
display: flex;
position: relative;
a{
    margin-right:12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    
    & > div{
        display: flex;
        flex-direction: column;
        margin-left:8px;
        overflow:hidden;
        span{
            text-align: left;
            &:first-child{
                font-size:16px;
                font-weight:700;
                color:rgba(0,0,0,1);
            }
            &:nth-child(n+1){
                font-size:12px;
                color:rgba(0,0,0, 0.6);
            }
        }     
    }
}
button{
    position:absolute;
    right:12px;
    top:0;
    background-color:transparent;
    border:none;
    outline:none;
}`;
 const Description = styled.div`
 padding: 0 16px;
 overflow:hidden;
 color:rgba(0,0,0,.9);
 font-size:14px;
 text-align:left;

 `;
 const SharedImg = styled.div`
 margin-top:8px;
 width: 100%;
display: block;
position: relative;
background-color:#f9fafb;
img{
    object-fit:contain;
    width:100%;
    height:100%;    
} `;
const SocialIcons = styled.div`
display:flex;
justify-content: space-between;
margin:0 8px;
padding-bottom:10px;
list-style-type: none;
div{
    display:flex;
    font-size:12px;
    align-items: center;
    li > button:nth-child(1){
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    li:nth-child(1) button{
        border:none;
        border-radius:50%;
        padding:5px;
        background-color:#3486cf;        
    }
    li:nth-child(2) button{
        border:none;
        border-radius:50%;
        padding:5px;
        background-color:#4c8b35;        
    }
    li:nth-child(3) button{
        border:none;
        border-radius:50%;
        padding:5px;
        background-color:#df704d;        
    }
    
}
   & p, span{
    color: 00000099;
   }`;
   const ShareYours = styled.ul`
    display:flex;
    justify-content: space-around;  
    align-items: center;
    list-style-type: none;
    padding:10px 0;
    border-top:1px solid rgba(0,0,0,0.2); 
    
    

    & button{
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border:none;
        font-size:12px;
        color:rgba(0,0,0,0.6);
        background-color:transparent;
        
    }
   `;