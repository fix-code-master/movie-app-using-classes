import { Component } from 'react'
import Movies from '../components/Movies'
import { Loader } from '../components/Loader'
import Search from '../components/Search'

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=7860fa62&s=panda`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
  }

  searchMovie = (str, type) => {
    fetch(
      `http://www.omdbapi.com/?apikey=7860fa62&s=${str}${
        type !== 'all' ? `&type=${type}` : ``
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
  }

  render() {
    return (
      <div className='container'>
        <Search searchMovie={this.searchMovie} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    )
  }
}
