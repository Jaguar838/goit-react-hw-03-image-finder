import React, { Component } from 'react';
import ImageGalleryList from '../ImageGalleryList';
import { connect } from 'react-redux';
import { getGalleryItems } from 'redux/operation';
import { galleryItems } from 'redux/selectors';
import { scroll } from 'utils/scroll';
import { Spinner } from 'UI/Spinner';
import { Button } from 'UI/Button';
import { Modal } from 'UI/Modal';
// import toast, { Toaster } from 'react-hot-toast';
import css from './ImageGallery.module.scss';

// import PropTypes from 'prop-types';
class ImageGallery extends Component {
    state = {
        images: [],
        currentPage: 1,
        isLoading: false,
        error: null,
        showModal: false,
        largeImageURL: null,
        showButton: false,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            // this.setState({ currentPage: 1, images: [], error: null }, () =>
            //     this.fetchImages(),
            // );
            this.props.getGalleryItems(this.props.query);
        }
    }

    // fetchImages = () => {
    //     const { currentPage } = this.state;
    //     const { query } = this.props;
    //     const options = {
    //         query,
    //         currentPage,
    //     };

    //     this.setState({ isLoading: true });

    //     fetchImg(options)
    //         .then(images =>
    //             this.setState(prevState => ({
    //                 images: [...prevState.images, ...images],
    //                 currentPage: prevState.currentPage + 1,
    //             })),
    //         )
    //         .catch(err => this.setState({ err }))
    //         .finally(() => {
    //             scroll();
    //             this.setState({ isLoading: false });
    //         });
    // };

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
        this.setState({ largeImageURL: null });
    };

    handleModalImage = url => {
        this.toggleModal();
        this.setState({ largeImageURL: url });
    };

    render() {
        const {
            showModal,
            // images,
            error,
            isLoading,
            largeImageURL,
            // showButton,
        } = this.state;
        const { images } = this.props;
        const showButton = !(images.length % 12) && images.length > 0;
        return (
            <>
                {console.log('largeImageURL', largeImageURL)}
                {isLoading && <Spinner />}
                {error && <h2>{error}</h2>}
                {error && <p className={css.Error}>{error}</p>}
                <ImageGalleryList
                    images={images}
                    modalImage={this.handleModalImage}
                />
                {showButton && (
                    <Button
                        onClick={this.fetchImages}
                        isLoading={isLoading}
                    ></Button>
                )}
                {showModal && (
                    <Modal onCloseModal={this.toggleModal}>
                        <img src={largeImageURL} alt="" />
                    </Modal>
                )}
            </>
        );
    }
}

const mapStateToProps = store => {
    return {
        images: galleryItems(store),
    };
};

const mapDispatchToProps = { getGalleryItems };
export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
