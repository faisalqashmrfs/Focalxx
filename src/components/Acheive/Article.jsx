import React from 'react'
import design from "./../../assets/design.png"
import "./AcheiveStyle.css"
const Article = ({isList,dateArticle,text,images}) => { return (
    <div className='ArticleX'>
     <div className="artUnder">
     {isList ? <>
     <ul>
       <li className='listCircle'>{dateArticle.substring(0, 11)}</li> </ul></>
       : <div className='underDate'>{dateArticle.substring(0, 11)}</div>}
     </div>
     {/* <p className='articleText'>{text}</p> */}
     <p className='articleText' dangerouslySetInnerHTML={{ __html: text }}></p>
     {/* <div className="LinksArticle">
        {isLink? <>
           <span  className='linkAC'> Links</span> : {linkList.map((e,index)=>(<a key={index} className='linkArticle'>{e}</a>))}
        </> : ""}
     </div> */}
     {/* <div className="articleImages">
        {images.map((e,index)=>(
            <img key={index} src={e} alt="Article-Images" />
        ))}
     </div> */}
     <div className="designAwards">
        <img src={images} alt="" />
      </div>
    </div>
  )
}

export default Article
