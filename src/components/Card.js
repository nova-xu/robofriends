import React from "react";

const Card = ({id, name, email}) => {
    return (
        <div className='bg-light-green tc br-pill pa3 ma4 dib grow shadow-3'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;