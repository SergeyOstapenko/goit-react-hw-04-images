import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchHeader,
  SearchBtn,
  SearchForm,
  SearchLabel,
  SearchInput,
} from './Searchbar.styles';
import { toast } from 'react-toastify';
//---------------------------------------------//
 export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };

  handlerInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    const { query } = this.state;
    e.preventDefault();

    if (!query.trim()) {
      toast.error('empty field', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handlerSubmit}>
          <SearchBtn type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchBtn>

          <SearchInput
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            onChange={this.handlerInput}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}
