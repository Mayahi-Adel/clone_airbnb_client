import React from 'react';
import './searchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star'

function SearchResult({img, location, title, description, star, price}) {
    return (
        <div className="searchResult">
            <img src={img} alt={title} />
            <FavoriteBorderIcon className="searchResult__heart"/>
            <div className="serachResult__info">
                <div className="serachResult__infoTop">
                    <p>{ location }</p>
                    <h3>{ title }</h3>
                    <p>____</p>
                    <p>{ description }</p>
                </div>
                <div className="serachResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star"/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult__price">
                        <h2>{price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;