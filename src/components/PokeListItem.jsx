
function PokeListItem({ id, name }){

    let i = id < 100 ? ( id < 10 ? '00' + id : '0' + id ) : id;
    
    return(
        <div className="list-item"><span className="index">{i} </span> {name.charAt(0).toLocaleUpperCase() + name.slice(1)}</div>
    )
}

export default PokeListItem