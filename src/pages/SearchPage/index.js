import react from 'react';
import './searchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from '../partials/SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august . 2 guests</p>
                <h1>Stay nearby</h1>
                <Button variant="outlined">Cancellation flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filtres</Button>
            </div>
            <SearchResult img="https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                location="Paris"
                title="Stay at this spacious Edwardin house"
                description="1 guest . 1 bed . wifi . kitchen . Free parking"
                star={4.5}
                price="69£/night"
            />
        </div>
    )
}

export default SearchPage;