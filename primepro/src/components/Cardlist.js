import React from 'react';
import Card from './Card';

const cardData = [
  {
    image: "https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 28, 2024",
    title: "Fintrex Finance Partners with PrimePro for corporate travel solutions",
    description: "PrimePro, Sri Lanka's leading technology driven mobility solutions provider announced its most recent partnership with Fintrex Finance Limited."
  },
  {
    image: "https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 28, 2024",
    title: "Fintrex Finance Partners with PrimePro for corporate travel solutions",
    description: "PrimePro, Sri Lanka's leading technology driven mobility solutions provider announced its most recent partnership with Fintrex Finance Limited."
  },
  {
    image: "https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 28, 2024",
    title: "Fintrex Finance Partners with PrimePro for corporate travel solutions",
    description: "PrimePro, Sri Lanka's leading technology driven mobility solutions provider announced its most recent partnership with Fintrex Finance Limited."
  },
  // Add more card data objects as needed
];

function CardsList() {
  return (
    <div className='max-w-7xl mx-auto p-4 space-y-4'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          date={card.date}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default CardsList;