import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel,
} from 'components/Searchbar/Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  onChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase().trim() });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    console.log(this.state.query);
    form.reset();
  };

  render() {
    return (
      <Header className="searchbar">
        <SearchForm className="form" onSubmit={this.onSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormLabel className="button-label">Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            name="search"
            type="text"
            //   autocomplete="off"
            //   autofocus
            onChange={this.onChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
