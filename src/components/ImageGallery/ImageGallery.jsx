import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.scss';

import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onClickImg }) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    onClickImg={onClickImg}
                    largeImageURL={largeImageURL}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onClickImg: PropTypes.func.isRequired,
};
