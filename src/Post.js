export default function Post({title, details}){
    
    return(
        <div style={{height:"100px", border:"solid teal 5px", padding:"10px",margin:"25px",  alignContent:"center"}}>
            <h2>{title}</h2>
            <hr/>
            <p>{details} </p>
        </div>
    );
}