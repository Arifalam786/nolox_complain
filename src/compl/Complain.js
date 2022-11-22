import "./Complain.css"
import { products } from "./products";
import { Items } from "./Item";
import { Link } from "react-router-dom";
// import {Routes, Route, useNavigate} from 'react-router-dom';
export const Complain = () => {
    
    const product = products.map((item)=>{
        return(
            <Items image={item.img} title={item.title} desc={item.description}/>
        )
    })


    return(
        <div className='complaint'>
            <p className='comp-title2'>All Complaints</p>
            <Link to="/newcomplain" className='new'><p>New Complaint</p></Link>
            
            <div className="comp-detail">
                

            </div>
            <div className='complaints'>232 Complaints</div>
            <button className='newest'>Newest</button>
            <button className='popular'>Popular</button>
            <input type="search" className='comp-search' placeholder='     Search'/>

            <div className='prod-container'>
        {product}
        </div>
        



           
            

        </div>
    )
}