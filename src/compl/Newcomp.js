import './New_comp.css'
export const Newcomp = () => {
    return(
        <div>
            
            <input type="text"  className="comp-title" placeholder="      Title"/>
            <textarea className="comp-box"  placeholder='Description'>
            </textarea>
                {/* <div className="comp-tools"></div> */}

            <div className='drop-box'>
            </div>
            <div className='drop-text'>Drag and drop images or</div>

            <input type="file" className='bro-cont' id='arif' name='file' placeholder='Browse files'  />
            <label for="arif" className='arif'>Browse files</label>
             
            

            <button className='post'>Post</button>

           
            
            
        </div>
    )
}