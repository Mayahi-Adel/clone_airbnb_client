import React, { useState } from 'react';
import './banner.css';
import {Button} from '@material-ui/core';
import SearchDates from '../../../components/SearchDates';
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();
    const [showShearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                { showShearch && <SearchDates />}
                <Button onClick={() => setShowSearch(!showShearch)}
                className="banner__searchButton"
                variant="outlined">
                    Search Dates
                </Button>
            </div>
            
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
                <Button onClick={() => history.push("/search")}
                    variant="outlined">
                    Explore nearBy
                </Button>
            </div>

        </div>
    )
}

export default Banner;