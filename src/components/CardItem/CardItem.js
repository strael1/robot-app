import './CardItem.css';

const CardItem = ({id,name,email}) => {
    return (
        <div className="card tc">
            <img src={`https://robohash.org/${id}?200x200`} alt="" />
            <h2 className="display-3">{name}</h2>
            <p className="text-muted">{email}</p>
        </div>
    )
}

export default CardItem;