import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  // SearchFormLabel,
  StyledBiSearchAlt,
} from 'components/Searchbar/Searchbar.styled';
// import { BiSearchAlt } from 'react-icons/bi';
export default class Searchbar extends Component {
  state = {
    query: '',
  };

  onChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase().trim() });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    // console.log(this.state.query);
    evt.currentTarget.reset();
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormButton type="submit">
            {/* <SearchFormLabel className="button-label"> */}
            <StyledBiSearchAlt />
            {/* </SearchFormLabel> */}
          </SearchFormButton>

          <SearchFormInput
            name="search"
            type="text"
            // autocomplete="off"
            // autofocus
            onChange={this.onChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  // query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
