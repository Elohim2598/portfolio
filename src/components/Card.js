import React from 'react';
import './card.css';

function Card(props) {
  console.log(props.coverImg);
  return (
    <div className="card">
      <div className="card__image__container">
        <img src={props.coverImg} alt="project cover" className="card__image" />
        {props.coverImg2 && (
          <img
            src={props.coverImg2}
            alt="project cover"
            className="card__image2"
          />
        )}
      </div>

      <h3 className="card__title">{props.title}</h3>
      <p className="card__description">{props.description}</p>
      <a
        className="card__url"
        href={props.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        Go check it out!
      </a>
    </div>
  );
}
export default Card;
