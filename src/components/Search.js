import { Component } from 'react'

export default class Search extends Component {
  state = {
    search: 'panda',
    type: 'all',
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type)
    }
  }

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type)
      }
    )
  }

  render() {
    const { search } = this.state
    return (
      <div className='row'>
        <div className='input-field col s6'>
          <input
            id='last_name'
            type='text'
            className='validate'
            value={search}
            placeholder='Search'
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className='btn'
            onClick={() =>
              this.props.searchMovie(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div className='input-field col s6 filter'>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='all'
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    )
  }
}
