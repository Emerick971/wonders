import React from 'react';
import Wondersworld from './card';


const wonders = [
    {
        name: 'La Muraille de Chine',
        image: 'muraille.jpg',
        location: 'Chine',
        year: 'Entre le IIIᵉ siècle av. J.-C. et le XVIIᵉ siècle'
    },
    {
        name: 'Christ Rédempteur',
        image: 'christ.jpg',
        location: 'Brésil',
        year: '1922–1931'
    },
    {
        name: 'Machu Picchu',
        image: 'machupichu.jpg',
        location: 'Pérou',
        year: 'XV e siècle'
    },
    {
        name: 'Chichen Itza',
        image: 'azteque.jpg',
        location: 'Mexique',
        year: 'X e siècle'
    },
    {
        name: 'Pétra',
        image: 'petra.jpg',
        location: 'Jordanie',
        year: '300 av. J.-C.'
    },
    {
        name: 'Le Colisée de rome',
        image: 'colisee.jpg',
        location: 'Italie',
        year: 'De 72 à 80 apr. J.-C.'
    },
    {
        name: 'Taj Mahal',
        image: 'palais.jpg',
        location: 'Inde',
        year: '1631 - 1648'
    }
];

const Sevenwonders = () => (
    <div className="divFlex">
        {wonders.map(item => (
        <Wondersworld key={item.name} name={item.name} img={item.image} location={item.location} year={item.year} />
        ))}
    </div>
);

export default Sevenwonders;