export function Image(props){

    return(

        <div>
        <h2>Mumbai Street Food</h2>
        <h3>Location: {props.location}</h3>
            <img src={props.src} alt="" />
        </div>
    )
}