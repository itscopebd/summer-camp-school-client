import React from 'react';
import Banner from '../../components/Banner/Banner';
import OurPricing from '../../components/OurPricing';
import NewYoga from '../../components/NewYoga';
import PopularInstructors from '../../components/PopularInstructors';
import UseTitle from '../../hooks/useTitle';

const HomePage = () => {
    UseTitle("Home")
    return (
        <div>
             
            <Banner></Banner>
            <div className="container mx-auto">
            <PopularInstructors></PopularInstructors>
            <OurPricing></OurPricing>
            <NewYoga></NewYoga>
           
            </div>
        </div>
    );
};

export default HomePage;