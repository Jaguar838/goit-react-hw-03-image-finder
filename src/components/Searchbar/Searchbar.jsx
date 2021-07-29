import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './Searchbar.module.scss';
const INICIAL_STATE = {
    request: '',
};
export class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = INICIAL_STATE;

    handleChangeSearch = ({ target }) => {
        const { request, value } = target;
        this.setState({ [request]: value.toLowerCase() });
        console.log(value);
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const { request } = this.state;
        const { onSubmit } = this.props;
        if (this.state.request.trim() === '') {
            toast.error('Введите поисковый запрос');
            return;
        }
        onSubmit({ request });
        this.resetSearch();
    };

    resetSearch = () => {
        this.setState(INICIAL_STATE);
    };

    render() {
        const { request } = this.state;
        return (
            <header className={css.Searchbar}>
                <form onSubmit={this.handleSubmit} className={css.SearchForm}>
                    <button type="submit" className={css.SearchForm_button}>
                        <span className={css.SearchForm_button_label}>
                            Search
                        </span>
                    </button>
                    <input
                        className={css.SearchForm_input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChangeSearch}
                        value={request}
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChangeSearch: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
};
