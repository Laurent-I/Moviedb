import Card from "../UI/Card";
import oppenheimer from '../../assets/images/oppenheimer.jpg'
import spiderman from '../../assets/images/spiderman.jpg'

const cardData = [
    {
      image: oppenheimer,
      title: 'Oppenheimer',
      release: '2023-08-01',
      rating: 87,
    },
    {
      image: oppenheimer,
      title: 'Oppenheimer',
      release: '2023-08-02',
      rating: 92,
    },
    {
      image: oppenheimer,
      title: 'Oppenheimer',
      release: '2023-08-03',
      rating: 78,
    },
    {
      image: oppenheimer,
      title: 'Oppenheimer',
      release: '2023-08-04',
      rating: 84,
    },
    {
        image: oppenheimer,
        title: 'Oppenheimer',
        release: '2023-08-04',
        rating: 84,
      },
      {
        image: oppenheimer,
        title: 'Oppenheimer',
        release: '2023-08-04',
        rating: 84,
      },
    {
      image: spiderman,
      title: 'Spiderman: Across The Spider-Verse',
      release: '2023-08-05',
      rating: 75,
    },
    {
      image: spiderman,
      title: 'Spiderman: Across The Spider-Verse',
      release: '2023-08-06',
      rating: 88,
    },
    {
      image: spiderman,
      title: 'Spiderman: Across The Spider-Verse',
      release: '2023-08-07',
      rating: 90,
    },
    {
      image: spiderman,
      title: 'Spiderman: Across The Spider-Verse',
      release: '2023-08-08',
      rating: 82,
    },
    {
      image: spiderman,
      title: 'Spiderman: Across The Spider-Verse',
      release: '2023-08-09',
      rating: 79,
    },
    {
      image: spiderman,
      title: 'Spiderman: Across The Spider-Verse',
      release: '2023-08-10',
      rating: 86,
    },
    {
      image: spiderman,
      title: 'Spiderman: Across The Spider-Verse',
      release: '2023-08-11',
      rating: 91,
    },
  ];
  
  const CardList = () => {
    return (
        <div className='flex'>
          {cardData.map((card, index) => (
              <div key={index} className='flex-none w-40 p-2'>
              <Card
                image={card.image}
                title={card.title}
                release={card.release}
                rating={card.rating}
              />
            </div>
          ))}
        </div>
      
    );
  };
  
  export default CardList;
  