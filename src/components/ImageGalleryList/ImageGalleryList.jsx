import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryList.module.scss';

const ImageGalleryItem = ({
    webformatURL,
    tags,
    largeImageURL,
}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItem_image}
                src={webformatURL}
                alt={tags}
                data-url={largeImageURL}
            />
        </li>
    );
};

const ImageGalleryList = ({ images, modalImage }) => {
    console.log(images);
    return (
        <ul className={css.ImageGalleryList}  onClickImg={() => modalImage(images.largeImageURL)}>
            {images?.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                   
                />
            ))}
        </ul>
    );
};

ImageGalleryList.propTypes = {
    images: PropTypes.array.isRequired,
    modalImage: PropTypes.func.isRequired,
};

export default ImageGalleryList;
