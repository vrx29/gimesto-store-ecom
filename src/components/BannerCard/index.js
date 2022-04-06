import React from "react";
import "./bannerCard.css";
import PropTypes from "prop-types";

export function BannerCard({
  trending,
  background,
  img,
  category,
  description,
  onClick,
}) {
  return (
    <div className={`card-banner background-${background}`} onClick={onClick}>
      {trending && <div className="card-banner-badge">Trending</div>}
      <img
        className="card-banner-img"
        src={img}
        alt={category}
        loading="lazy"
      />
      <p className="card-banner-category">{category}</p>
      <h5 className="card-banner-description">{description}</h5>
    </div>
  );
}

BannerCard.defaultProps = {
  trending: false,
};

BannerCard.propTypes = {
  trending: PropTypes.bool,
  background: PropTypes.string,
  img: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
};
