import React from 'react';
import './DirectoryItem.scss';


const DirectoryItem =({title,imageurl})=>
(
    <div className='menuItem'>
    <p>Hello</p>
   
    <div className='background-image' style={{
    backgroundImage: `url("${imageurl}")`
        }}/>  
        
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
        </div>

        </div>
)
export default DirectoryItem;