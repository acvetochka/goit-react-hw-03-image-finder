import { Component } from 'react';
import fetchImages from 'helpers/api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      // fetch();
      fetchImages(this.state.query, this.state.page).then(res =>
        console.log(res)
      );
    }
  }

  handleSubmit = query => {
    this.setState(
      { query: query, page: 1 },
      this.fetchImageToArray

      //   async () => {
      //   try {
      //     const { images, page, query } = this.state;
      //     const imagesArray = await fetchImages(query, page);
      //     console.log(imagesArray.hits);
      //     this.setState({ images: imagesArray.hits });
      //     console.log(images);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    );
    console.log(query);
  };

  fetchImageToArray = async () => {
    try {
      const { images, page, query } = this.state;
      const imagesArray = await fetchImages(query, page);
      console.log(imagesArray.hits);
      this.setState({ images: imagesArray.hits });
      console.log(images);
    } catch (error) {
      console.log(error);
    }
  };

  buttonOnClick = () => {
    this.setState(
      { page: this.state.page + 1 },
      this.fetchImageToArray
      //   async () => {
      //   try {
      //     const { images, page, query } = this.state;
      //     const imagesArray = await fetchImages(query, page);
      //     console.log(imagesArray.hits);
      //     this.setState({ images: imagesArray.hits });
      //     console.log(images);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    );
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.buttonOnClick} />
      </Container>
    );
  }
}
