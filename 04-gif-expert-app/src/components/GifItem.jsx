<<<<<<< HEAD
import PropTypes from 'prop-types'

export const GifItem = ({ title, url, id }) => {
=======
import React from "react";
import PropTypes from "prop-types";
>>>>>>> 00db8db4b2d38759da756ea7a85e019058b99618

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
<<<<<<< HEAD
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired, 
  url  : PropTypes.string.isRequired, 
}
=======
  );
};


GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
>>>>>>> 00db8db4b2d38759da756ea7a85e019058b99618
