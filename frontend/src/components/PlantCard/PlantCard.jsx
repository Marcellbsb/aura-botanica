import React from 'react';
import { Link } from 'react-router-dom';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  // --- Defina o caminho base das suas imagens na pasta `public` aqui ---
  //
  // EX: Se suas imagens estão em `public/assets/images/plants/`, use:
  // const PUBLIC_IMAGE_PATH_BASE = '/assets/images/plants/';
  //
  // EX: Se suas imagens estão em `public/images/`, e plant.image inclui a subpasta, use:
  // const PUBLIC_IMAGE_PATH_BASE = '/images/';
  //
  // Substitua a string abaixo pelo caminho correto. Deve começar com '/'
  const PUBLIC_IMAGE_PATH_BASE = '/images/';
  // --------------------------------------------------------------------

  // Monta a URL completa para a imagem
  // Assume que `plant.image` contém apenas o nome do arquivo (ex: 'monstera.png')
  const imageUrl = `${PUBLIC_IMAGE_PATH_BASE}${plant.image}`;

  return (
    <div className="plant-card">
      <div className="plant-image">
        {/* Usa a URL completa montada a partir do caminho público */}
        <img src={imageUrl} alt={plant.name} />
        <span className="plant-category">{plant.category}</span>
      </div>

      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="plant-price">R$ {plant.price.toFixed(2)}</p>
        <button className="add-to-cart">Adicionar ao carrinho</button>
        <Link to={`/product/${plant.id}`} className="view-details">Ver detalhes</Link>
      </div>
    </div>
  );
};

export default PlantCard;