import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import{Avatar} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import firebase from 'firebase/compat/app';
import {postArticlesAPI} from '../actions';
 


const PostModal = (props) => {
    const [editorText, setEditorText] = useState('');
    const [shareImage, setShareImage] = useState('');
    const [shareVideo, setShareVideo] = useState('');  
    const [postArea, setPostArea] = useState('');

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === '' || image === undefined) {
            alert(`please add an image to upload ${typeof image}`);
            return;
            
        };
        setShareImage(image);
    };

    const switchPostArea = (area) =>{
        setShareImage('');
        setShareVideo('');
        setPostArea(area);
    };

    const postArticle = (e) => {
        e.preventDefault();
        console.log('post malone :😊😊😊🤣🤣 ');
        if (e.target !== e.currentTarget) {
            console.log('Cake please: 🎂🍰🍰 ');
            return;
      }

      const payload = {
        image: shareImage,
        video: shareVideo,
        user: props.user,
        description: editorText,
        timestamp: firebase.firestore.Timestamp.now(),
      };
      props.postArticle(payload);
      reset(e);
    };


    const reset = (e)=> {
    setEditorText('');
    setShareImage('');
    setShareVideo('');
    props.handleClick(e);
};
   
  return (
    <>
    { props.showModal === 'open' && (
    <Container>
        <Content>
            <Header>
                <h2>Create a post</h2>
                <button onClick={(event)=> reset(event)}>
                    <IconButton onClick={(event)=> reset(event)}>
                        <CloseIcon onClick={(event)=> reset(event)}/>
                    </IconButton>                    
                </button>
            </Header>
            <BodyContent>
                <UserDetails>
                    {props.user.photoURL ?  (<Avatar scr={props.user.photoURL}/>) 
                    : (<Avatar src={props.user.displayName}/>) }
                    
                    <span>{props.user.displayName}</span>
                </UserDetails>
                <Editor>
                    <textarea 
                    onChange={(e)=> setEditorText(e.target.value)} 
                    value={editorText} 
                    placeholder='What do you want to talk about?' autoFocus={true}/>
                    { postArea === 'image' ?
                    <UploadImage>
                        <input type='file'
                         accept='image/gif, image/jpeg, image/png' 
                         onChange={handleChange} 
                         id='file'
                         style={{display:'none'}}
                         />
                         <p>
                            <label htmlFor='file' style={{border: '1px solid rgba(0,0,0,0.25)', padding: '10px', borderRadius:'10px' }}>Select an image</label>
                         </p>
                        { shareImage && <img src={URL.createObjectURL(shareImage)} /> }
                        </UploadImage>
                        :
                        postArea === 'media' &&
                        <> 
                        <input type='text' value={shareVideo}
                        placeholder='Add a video link or URL'
                        onChange={(e)=> setShareVideo(e.target.value)}
                        style={{border: '1px solid rgba(0,0,0,0.25)', padding: '10px', borderRadius:'10px', textAlign:'center' }}
                        />
                        {shareVideo && <ReactPlayer width={'100%'} url={shareVideo}/>}
                    
                        </>
                    }
                    
                </Editor>              
            </BodyContent>
            <CreatePost>
                <AttachAssets>
                    <AssetButton onClick={()=> switchPostArea('image')}>
                      <ImageIcon style={{ color: '#378fe9' }}/>
                    </AssetButton>

                    <AssetButton onClick={()=> switchPostArea('media')}>
                       <SmartDisplayIcon style={{ color: '#5f9b41'}}  />
                    </AssetButton>                    
                </AttachAssets>
                <ShareComments>
                    <AssetButton>
                        <InsertCommentIcon /> Anyone
                    </AssetButton> 
                </ShareComments>  
                <PostButton disabled={!editorText ? true : false}
                onClick={(event)=> postArticle(event)}
                >
                    share
                </PostButton>              
            </CreatePost>
        </Content>
    </Container>
    )}
</>
  );
};



const Container = styled.div`
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0;
  bottom: 0;
  width: 100%;
  z-index:999;
  color: #000;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  animation:fadeIn 0.5s;
  `;
  const Content = styled.div`
    width: 100%;
    max-width:552px;
    background-color: #fff;
    max-height:90%;
    height:auto;
    overflow: initial;
    border-radius: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin:auto;
  `;
  const Header = styled.div`
      display: block;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(0,0,0,0.25);
      font-size: 16px;
      line-height: 1.5;
      color: rgba(0,0,0,0.6);
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      align-items:center;
      button{
        height:40px;
        width:40px;
        min-width:auto;
        border:none;
        background-color:transparent;
      }`;
      const BodyContent = styled.div`
      display:flex;
      flex-direction:column;
      flex-grow:1;
      overflow-y:auto;
      vertical-align:baseline;
      background-color:transparent;
      padding:8px 12px;
      
      `;
      const UserDetails = styled.div`
        display: flex;
        align-items: center;
        padding:12px  24px;
        span{
            font-weight:600;
            font-size:16px;
            margin-left:10px;   
            line-height:1.5;
        }`;
          const CreatePost = styled.div`
            display: flex;
            justify-content:space-between;
            padding:12px  24px 12px 16px;
            `;
      const AttachAssets = styled.div`
            align-items:center;
            display:flex;
            padding-right:8px;
      `;

      const AssetButton = styled.button`
              display: flex;
              align-items:center;
              justify-content:center;
              height:40px;
              width:40px;
              min-width:auto;
              `;
      const ShareComments = styled.div`
        display:flex;
        margin-right:auto;
        border-left:1px solid rgba(0,0,0,0.25);
        padding-left:10px;
        & ${AssetButton}{
            width:80px;
            color:rgba(0,0,0,0.6);  
        }`;
      const PostButton = styled.button`
              min-width:60px;
              border-radius:20px;
              padding-left:16px;
              padding-right:16px;
              background: ${(props) => (props.disabled ? 'rgba(0,0,0,0.1)':'#0a66c2')};
              color:#fff;
              font-weight:bold;
              &:hover {
                background: ${(props) => (props.disabled ? '':'#004182')};         
              }`;
    const Editor = styled.div`
    padding: 12px 24px;
    textarea{
        width:100%;
        height:100px;
        border:none;
        resize:none;
    }
    input{
        width:100%;
        height:15px;
        font-size:16px;
        margin-bottom:20px;
    }`;
    const UploadImage = styled.div`
    text-align:center;
    img{
        max-width:100%;
        max-height:100%;
    }`;

    const mapStateToProps = (state) => {
        return{
            user: state.userState.user,
        }
    };
    const mapDispatchToProps = (dispatch)=>({
        postArticle:(payload) => dispatch(postArticlesAPI(payload)),
    });
    export default connect(mapStateToProps, mapDispatchToProps) (PostModal)