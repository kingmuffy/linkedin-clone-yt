import React, { forwardRef } from 'react'
import {Avatar} from "@material-ui/core"
import "./Post.css";
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
const Post = forwardRef(({name, description, message, photoUrl }, ref) => {
    return (
        <div className="post">
            <div ref={ref}   className="post__header">
                <Avatar src={photoUrl}> {name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                 <p>{description}</p>
                    
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__button">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='like'/>
                <InputOption Icon={MessageIcon} title='message'/>
                <InputOption Icon={ShareIcon} title='share'/>
                <InputOption Icon={SendIcon} title='send'/>

            </div>
            
        </div>
    )
}
)
export default Post
