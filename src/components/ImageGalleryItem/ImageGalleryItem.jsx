import React from 'react';
import css from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
    webformatURL,
    // tags,
    largeImageURL,
    onToggleModal,
}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt=""
                className={css.ImageGalleryItem_image}
                data-source={largeImageURL}
                onClick={() => onToggleModal(largeImageURL)}
            />
        </li>
    );
};
// alt={tags}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
