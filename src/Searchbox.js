// import react from "./react";
const Searchbox=({searchchange})=>{
    return(
        <div className="pa2 mb4">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search robos"
                onChange={searchchange}
            />
        </div>
        
    );
}

export default Searchbox; 