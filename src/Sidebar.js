import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar" >
            <div className="sidebar__top" >
                <img src="https://images.unsplash.com/photo-1615714365676-a5f31fff8599?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2 > King Muffy </h2>
                <h4 > kingmuffy@gmail.com </h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat" >
                    <p> Who viewed you </p>
                    <p className="sidebar__statnumber"> 2,534 </p>

                </div>

                <div className="sidebar__stat" >
                    <p > Views on post </p>
                    <p className="sidebar__statnumber"> 2,300 </p>




                </div>


            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("javascript")}
                {recentItem("javascript")}
                {recentItem("ffi salary")}
                {recentItem("moe and dubaimall")}



            </div>



        </div>
    )
}

export default Sidebar