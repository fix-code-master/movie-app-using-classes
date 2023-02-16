export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props
  return (
    <div key={imdbID} className='row'>
      <div className='col s12'>
        <div className='card'>
          <div className='card-image'>
            <img alt='Not found' src={Poster} />
            <a
              href='#1'
              className='year btn-floating halfway-fab waves-effect waves-light red'
            >
              <i className='material-icons'>{Year}</i>
            </a>
          </div>
          <div className='card-content'>
            <span className='card-title'>
              {Title}
              <span className='right'>{Type}</span>
            </span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
