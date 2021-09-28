import CardItem from '../CardItem/CardItem';

const Card = ({robots}) => {

    // if(true){
    //     throw new Error('Error occur.');
    // }


    return (
        <div className="d-grid-template-3 container mt-100">
            {
                robots.map((user,i) => {
                    return (
                        <CardItem 
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    )
}

export default Card;