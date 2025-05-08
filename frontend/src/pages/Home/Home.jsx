import React, { useState, useEffect } from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import './Home.css';

const Home = () => {
  const featuredPlants = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 89.90,
      image: 'monstera.png',
      category: 'Folhagem'
    },
    {
      id: 2,
      name: 'Suculenta Echeveria',
      price: 29.90,
      image: 'echeveria.jpg',
      category: 'Suculentas'
    },
    {
      id: 3,
      name: 'Orquídea Phalae...',
      price: 69.90,
      image: 'phalaenopsis.jpg',
      category: 'Flores'
    },
    
    {
      id: 4,
      name: 'Costela de Adão',
      price: 79.90,
      image: 'cost-adao.jpg',
      category: 'Folhagem'
    },
    {
      id: 5,
      name: 'Cacto Baldianum',
      price: 39.90,
      image: 'baldianum.jpg',
      category: 'Cactos'
    },
    {
      id: 6,
      name: 'Cacto Myrtillocactus',
      price: 39.90,
      image: 'geometrizans.jpg',
      category: 'Cactos'
    },
    {
      id: 7,
      name: 'Anthurium',
      price: 29.90,
      image: 'anthurium.jpg',
      category: 'Folhagem'
    },
    {
      id: 8,
      name: 'Sedum Adolphi',
      price: 39.90,
      image: 'suc-adolphi.jpg',
      category: 'Suculentas'
    },
    {
      id: 9,
      name: 'Monstera variegada',
      price: 129.90,
      image: 'monst-varieg.jpg',
      category: 'Folhagem'
    },
    {
      id: 10,
      name: 'Cacto Mandacaru',
      price: 39.90,
      image: 'mandacaru.jpg',
      category: 'Cactos'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const cardsToShow = Math.min(3, featuredPlants.length); // Mostra até 3 cards
  
  useEffect(() => {
    let interval;
    if (isAutoPlaying && featuredPlants.length > cardsToShow) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => 
          (prevIndex + 1) % (featuredPlants.length - cardsToShow + 1)
        );
      }, 300000); // 3 segundos (ajuste conforme necessário)
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredPlants.length, cardsToShow]);
  
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      (prevIndex + 1) % (featuredPlants.length - cardsToShow + 1)
    );
  };
  
  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      (prevIndex - 1 + (featuredPlants.length - cardsToShow + 1)) % 
      (featuredPlants.length - cardsToShow + 1)
    );
  };

  return (
    <div className="home-page">
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Conecte-se com a natureza</h1>
            <p>Plantas selecionadas para trazer vida e harmonia ao seu espaço</p>
            <button className="cta-button">Explorar Coleção</button>
          </div>
        </section>
  
        <section className="featured-section">
          <h2>Plantas em Destaque</h2>
          <div className="plants-carousel-container">
            <button 
              className="carousel-control prev" 
              onClick={goToPrev}
              aria-label="Plantas anteriores"
              disabled={featuredPlants.length <= cardsToShow}
            >
              &lt;
            </button>
            
            <div className="plants-slide-wrapper">
              <div
                className="plants-slide"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                  width: `${(featuredPlants.length * 100) / cardsToShow}%`
                }}
              >
                {featuredPlants.map(plant => (
                  <div className="plant-card-wrapper" key={plant.id}>
                    <PlantCard plant={plant} />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-control next" 
              onClick={goToNext}
              aria-label="Próximas plantas"
              disabled={featuredPlants.length <= cardsToShow}
            >
              &gt;
            </button>
          </div>
        </section>
  
        <section id="about-section" className="about-section">
          <div className="about-content">
            <h2>Sobre a Aura Botânica</h2>
            <p>Na Aura Botânica, acreditamos que a natureza tem o poder de transformar espaços e vidas. Mais do que uma loja de plantas, somos um portal para um mundo de cores, aromas e bem-estar. Aqui, cada folha, cada flor e cada vaso carregam uma energia única, pronta para harmonizar o seu lar ou ambiente de trabalho.
  
  Deixe-se envolver pela nossa aura verde, cuidadosamente cultivada para oferecer uma seleção especial de plantas que inspiram, purificam o ar e trazem a beleza do mundo natural para perto de você. Seja você um entusiasta experiente ou um iniciante curioso, nossa equipe apaixonada está pronta para guiá-lo na escolha perfeita, oferecendo dicas de cuidado e soluções para que suas plantas prosperem.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;