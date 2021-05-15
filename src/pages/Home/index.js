import React from 'react';
import './home.css';
import Banner from '../partials/Banner';
import Card from '../../components/Card';

function Home() {
    return(
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card src="https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    title="Online Experiences"
                    description="Unique activities we can do toghether, led by o world of osts."
                />
                <Card src="https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Unique stays"
                    description="Spaces that are more thean just a place to sleep."
                />
                <Card src="https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Entier homes"
                    description="Convortable private places, with room friends or family."
                />
            </div>
            <div className="home__section">
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
    )
}

export default Home;