import axios from 'axios';

const per_page = 12;
let totalPages = 0;

export default async function fetchImages(query, page, totalPages) {
  const API_KEY = '35367804-7020ab364021c8257af086cad';
  const params = new URLSearchParams({
    key: API_KEY,
    // q: 'cat',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
    // page: 1,
  });
  const response = await axios.get(
    `https://pixabay.com/api/?${params}&q=${query}&page=${page}`
  );

  totalPages = response.data.totalHits / per_page;
  //   console.log(totalPages);
  //   console.log(response);
  //   console.log(response.data.hits);
  return response.data;

  // fetch(
  //   'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
  // )
  //   .then(res => res.json())
  //   .then(console.log);
}
