import "./FirstStyles.css"

function First(props){
    return(
        <>
        <div className={props.cName}>

            <img alt="firstimg" src={props.firstImg} />

            <div className="first-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>
        </div>

        </>
    );
}

export default First;