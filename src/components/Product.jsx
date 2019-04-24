import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  return (
    <div>
      <style jsx global>{`
        .ticket {
          color: black;
          font-family: 'Kavivanar', cursive;
          font-size: 15px;
          padding: 1em 0 1em 2em;
          background-color: #FFCA38;
          display: block;
        }
        .hr {
          height: 1px;
          color: red;
          background-color: green;
          border: none;
          width: 100%;
          height: 3px;
        }
      `}
      </style>
      <div className="ticket">
        <h2 className="clickable">{props.month}</h2>
        <h3 className="clickable">{props.produce}</h3>
      </div>
    </div>
  );
}

Product.propTypes = {
  month: PropTypes.string.isRequired,
  produce: PropTypes.string.isRequired
};

export default Product;