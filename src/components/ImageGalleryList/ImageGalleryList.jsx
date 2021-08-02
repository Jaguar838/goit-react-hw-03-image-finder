import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

import css from './ImageGalleryList.module.scss';

const ImageGalleryList = ({ images, modalImage }) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => {
                const onClickImg = () => modalImage(largeImageURL);
                return (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        tags={tags}
                        onClickImg={onClickImg}
                        largeImageURL={largeImageURL}
                    />
                );
            })}
        </ul>
    );
};

ImageGalleryList.propTypes = {
    images: PropTypes.array.isRequired,
    modalImage: PropTypes.func.isRequired,
};

export default ImageGalleryList;
