import React, { Component } from 'react';
import { Layout } from 'UI/Layout';
import { SectionWrap } from 'UI/SectionWrap';
import { Spinner } from 'UI/Spinner';
import { Button } from 'UI/Button';
import { Modal } from 'UI/Modal';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';

import css from './App.module.scss';
// import moduleName from 'module'

export default class App extends Component {
    state = {
        contacts: [],
        filter: '',
        name: '',
        phone: '',
    };

    componentDidMount() {
        const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

        parsedContacts && this.setState({ contacts: parsedContacts });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts),
            );
        }
    }

    handleAddContact = newContact =>
        this.setState(({ contacts }) => ({
            contacts: [...contacts, newContact],
        }));

    handleCheckUniqueContact = name => {
        const { contacts } = this.state;
        const isExistContact = !!contacts.find(
            contact => contact.name === name,
        );
        isExistContact && alert('Contact is already exist');
        return !isExistContact;
    };

    handleRemoveContact = id =>
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(contact => contact.id !== id),
        }));

    handleChangeFilter = filter => this.setState({ filter });
    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    render() {
        const {
            images,
            isLoading,
            showModal,
            largeImageURL,
            error,
            showButton,
        } = this.state;
        return (
            <Layout>
                <Searchbar onSubmit={this.onSubmit} />
                {error && <p className={css.Error}>{error}</p>}
                {images && (
                    <SectionWrap>
                        <ImageGallery
                            images={images}
                            modalImage={this.modalImage}
                        />
                    </SectionWrap>
                )}
                {isLoading && <Spinner />}
                {showButton && !isLoading && (
                    <Button onClick={this.getImages} />
                )}
                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img src={largeImageURL} alt="" />
                    </Modal>
                )}
            </Layout>
        );
    }
}
