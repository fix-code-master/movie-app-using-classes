export default function Header() {
  return (
    <nav>
      <div className='nav-wrapper header__nav cyan darken-3'>
        <a href='#top' className='brand-logo'>
          Logo
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='#top'>Movie</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
