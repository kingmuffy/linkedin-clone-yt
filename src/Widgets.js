import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
const Widgets = () => {

    const newArticle= (heading, subtitle) => (
        <div className="widget__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle }</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
            <h2>FFI News</h2>
            <InfoIcon/>

            </div>
            <div>
                {newArticle("75% salary coming", "on-going talks-- read now")}
                {newArticle("Tyrone has been transfered" , "confirmed")}
                {newArticle("mofe is back to programming" , "top news")} 
                {newArticle("not vacinated yet?", "tighthened policy")}          
            </div>
            
        </div>
    )
}

export default Widgets
