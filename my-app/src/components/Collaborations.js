import React, { useState, useEffect } from 'react';
import './Collaborations.css';

// Define the showcase collaborations
const showcaseCollaborations = {
  localArtisans: [
    {
      name: 'Artisan Ram Gopal Saini',
      image: '/images/artisan-a.jpg',
      description: 'Mr. Saini is synonymous with blue pottery. That his work is special is evident when he tells you that his pieces can be found in the homes of Presidents and Prime Ministers. He takes pride in being able to bring innovation to an art form that is as old as human civilization.',
      link: 'https://example.com/artisan-a'
    },
    {
      name: 'Artisan Sneh Gangal',
      image: '/images/artisan-b.jpg',
      description: 'Her name Sneh translates to love and it was this love for art that motivated her to pursue painting despite her family’s disapproval. A National Award winner twice over (1993, 1997), her miniature paintings have been featured in National Geographic and are known',
      link: 'https://example.com/artisan-b'
    },
    {
      name: 'Artisan Mohan Lal Sharma',
      image: '/images/artisan-c.jpg',
      description: 'It is not often one comes across someone so adept at their craft that they are able to transform the physical properties of the materials they use for their work. Copper, silver, and bronze become threads and rosewood becomes the cloth on which patterns of exquisite beauty are embroidered.',
      link: 'https://example.com/artisan-c'
    },
    {
      name: 'Artisan Surinder',
      image: '/images/artisan-d.jpg',
      description: 'Travel can be a great teacher, turning even seasoned professionals into awestruck students. Surinder’s story is the perfect example of this axiom. Traveling through South India, he found himself mesmerized by the brass figurines he encountered in the temples and palaces.',
      link: 'https://example.com/artisan-d'
    }
  ],
  culturalInstitutions: [
    {
      name: 'Indian Museum, Kolkata',
      image: '/images/cultural-museum.jpg',
      description: 'The Indian Museum in Kolkata, established in 1814, is the oldest and largest museum in India. It houses an extensive collection of artifacts, including ancient sculptures, fossils, and paintings, representing India rich cultural and natural heritage. Visitors can explore exhibits spanning six sections: Art, Archaeology, Anthropology, Geology, Zoology, and Economic Botany, providing a comprehensive glimpse into India diverse history.',
      link: 'https://example.com/cultural-museum'
    },
    {
      name: 'Salar Jung Museum, Hyderabad',
      image: '/images/cultural-museum-b.jpg',
      description: 'The Salar Jung Museum in Hyderabad, one of the largest art museums in the world, showcases an extensive collection of art and artifacts amassed by Nawab Mir Yousuf Ali Khan, Salar Jung III. Exhibits include Persian carpets, Chinese porcelain, European paintings, and Indian sculptures, spanning various cultures and time periods. Highlights include the famous Veiled Rebecca statue and an intricately designed double-sided wooden cabinet.',
      link: 'https://example.com/cultural-museum'
    },
    {
      name: 'Archaeological museum, Badami',
      image: '/images/cultural-museum-c.jpg',
      description: 'The Archaeological Museum in Badami, Karnataka, houses an impressive collection of artifacts from the Chalukya dynasty, known for their rock-cut temples and exquisite carvings. The museum exhibits include ancient inscriptions, sculptures, and architectural fragments that provide insight into the region rich historical and cultural heritage. Key highlights include the statues of Lord Shiva and Goddess Parvati, as well as intricate carvings from the famous Badami caves.',
      link: 'https://example.com/cultural-museum'
    },
    {
      name: 'Dakshina Chitra, Chennai',
      image: '/images/cultural-museum-d.jpg',
      description: 'Dakshina Chitra, located near Chennai, is a living museum dedicated to South Indian heritage and culture. It features authentic replicas of traditional houses from Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh, offering visitors an immersive experience of regional lifestyles. The museum hosts craft demonstrations, cultural performances, and workshops, celebrating the rich artistic traditions and vibrant cultural heritage of South India.',
      link: 'https://example.com/cultural-museum'
    }
  ],
  tourismBusinesses: [
    {
      name: 'Incredible India Tours',
      image: '/images/incredible-india-tours.jpg',
      description: 'A premier travel agency offering guided tours and immersive travel experiences across India.',
      link: 'https://example.com/incredible-india-tours'
    },
    {
      name: 'Heritage India Travel',
      image: '/images/heritage-india-travel.jpg',
      description: 'Specializes in cultural and historical tours, providing in-depth insights into India\'s rich heritage.',
      link: 'https://example.com/heritage-india-travel'
    },
    {
      name: 'Eco India Journeys',
      image: '/images/eco-india-journeys.jpg',
      description: 'Focused on eco-friendly travel, offering sustainable and nature-based tours across India.',
      link: 'https://example.com/eco-india-journeys'
    },
    {
      name: 'Royal India Expeditions',
      image: '/images/royal-india-expeditions.jpg',
      description: 'Offers luxury travel experiences, including palace stays and exclusive tours of India\'s royal heritage.',
      link: 'https://example.com/royal-india-expeditions'
    }
  ]
};

const Collaborations = () => {
  const [collaborations, setCollaborations] = useState({
    localArtisans: showcaseCollaborations.localArtisans,
    culturalInstitutions: showcaseCollaborations.culturalInstitutions,
    tourismBusinesses: showcaseCollaborations.tourismBusinesses,
  });

  useEffect(() => {
    const storedCollaborations = JSON.parse(localStorage.getItem('collaborations')) || {
      localArtisans: [],
      culturalInstitutions: [],
      tourismBusinesses: [],
    };

    // Merge showcase collaborations with stored collaborations
    const formattedCollaborations = {
      localArtisans: [
        ...showcaseCollaborations.localArtisans,
        ...(Array.isArray(storedCollaborations.localArtisans) ? storedCollaborations.localArtisans : [])
      ],
      culturalInstitutions: [
        ...showcaseCollaborations.culturalInstitutions,
        ...(Array.isArray(storedCollaborations.culturalInstitutions) ? storedCollaborations.culturalInstitutions : [])
      ],
      tourismBusinesses: [
        ...showcaseCollaborations.tourismBusinesses,
        ...(Array.isArray(storedCollaborations.tourismBusinesses) ? storedCollaborations.tourismBusinesses : [])
      ],
    };

    setCollaborations(formattedCollaborations);
  }, []);

  return (
    <div className="collaborations-container">
      <h1>Our Collaborations</h1>
      <p>We proudly partner with local artisans, cultural institutions, and businesses to offer you authentic and enriching experiences.</p>
      
      {Object.keys(collaborations).map(category => (
        <div key={category} className="category-section">
          <h2>{category.replace(/([A-Z])/g, ' $1').toUpperCase()}</h2>
          <div className="collaboration-list">
            {collaborations[category].map((collaboration, index) => (
              <div key={index} className="collaboration-card">
                <img src={collaboration.image} alt={collaboration.name} className="collaboration-image" />
                <div className="collaboration-info">
                  <h3>{collaboration.name}</h3>
                  <p>{collaboration.description}</p>
                  <a href={collaboration.link} className="learn-more">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collaborations;
