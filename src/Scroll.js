import "./Scroll.css";

const Scroll=(props)=>{
    return(
        <div className="scrollcomp" >
            {props.children}
        </div>
    );
};

export default Scroll;