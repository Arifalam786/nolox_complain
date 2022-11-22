import React from 'react'
import './Item.css'

import { TbArrowBigDown,TbArrowBigTop} from "react-icons/tb";
import {FaRegComment} from 'react-icons/fa'
export const Items = (props)=> {
    return(
        <div className='main-cont-comp'>
            <div className='prod'>
                <div className='profile-image'></div>
                <div className='sub-prod'>
                    <div className='title'>{props.title}</div>
                    <div className='des'>{props.desc}</div>
                </div>
            </div>
            <div className='comp-image'>
                <img src={props.image} alt='img'></img>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit non quam quis ultricies. Duis a est vehicula, facilisis arcu tincidunt, sollicitudin risus. Donec non odio mi. Ut rhoncus leo quis rhoncus pretium. Pellentesque iaculis dui non metus dapibus, in maximus neque bibendum.
                
            </div>
            <div>
                <div className='social'>
                    <div className='like'><TbArrowBigTop className='like1' /></div>
                    <div className='dislike'><TbArrowBigDown className='dislike1'/></div>
                    <div className='comment'><FaRegComment/></div>
                    
                </div>
                <hr />
            </div>

            
            











                

        </div>
    )

}