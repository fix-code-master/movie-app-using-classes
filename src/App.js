// import React from 'react'
import React, { Component } from 'react'
import './App.css'
// import Posts from './components/Posts'
// import { News } from './News'
// import Loader from './Loader'
// import Content from './Content'
import Form from './Form'

// const App = () => {
//   const description = `Ibragimov Yashnarbek Rashid o'g'li`
// 12-dars Loader
// return props.isLoading ? (
//   <div>
//     <News
//       // name='BBC News'
//       name='BBC News'
//       extra='2020'
//       text='Ibragimov Yashanrbek'
//       header='BigJob'
//     >
//       Extra inform
//     </News>
//     <Descr />
//   </div>
// ) : (
//   Loader()
// )
// 12-dars Loader
// 13-dars
// return (
//   <div>
//     <News
//       name='BBC News'
//       extra='2020'
//       text='Ibragimov Yashanrbek'
//       header='BigJob'
//     >
//       Extra inform
//     </News>
//     <Content descr={description} />
//   </div>
// )
// 13-dars
// }
// 15-dars class Components
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0,
//       key: true,
//     }
//   }

//   handleClick = () => {
//     this.setState(
//       (prevState) => ({ count: prevState.count + 1 }),
//       () => {
//         console.log('setState completed')
//       }
//     )
//     console.log('From handle click')
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//         <News />
//         <Content />
//         <button onClick={this.handleClick}>{this.state.count}</button>
//       </div>
//     )
//   }
// }
// 15-dars class Components
// 16-dars class Componentlarda methodlar hosil qilish
class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0,
  //     key: true,
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }
  // handleClick() {
  //   this.setState((prevState) => ({ count: prevState.count + 1 }))
  // }
  // state = {
  //   count: 0,
  //   key: true,
  // }
  // handleClick() {
  //   this.setState({ count: this.count - 1 })
  // }
  // render() {
  //   return (
  //     <div>
  //       <h1>Hello world</h1>
  //       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
  //         +
  //       </button>
  //       <button>{this.state.count}</button>
  //       <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
  //       <button onClick={() => this.setState({ count: 0 })}>
  //         Reset
  //       </button>
  //     </div>
  //   )
  // }
  // 16-dars class Componentlarda methodlar hosil qilish
  // 17-dars class Amaliyot
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0,
  //     key: true,
  //   }
  // }
  // handleClick = (val) => {
  //   this.setState({ count: val })
  // }

  // incr = () => {
  //   this.setInterval(() => {
  //     this.handleClick(this.state.count + 1)
  //   }, 2000);
  // }

  // render() {
  //   return (
  //     <div>
  //       <h1>Hello world</h1>
  //       <button onClick={() => this.handleClick(this.state.count + 1)}>+</button>
  //       <button>{this.state.count}</button>
  //       <button onClick={() => this.handleClick(this.state.count - 1)}>
  //         -
  //       </button>
  //       <button onClick={() => this.handleClick(0)}>Reset</button>
  //     </div>
  //   )
  // }
  // 17-dars class Amaliyot
  // 18-dars hayotiy sikl
  // :) 1 :)
  // constructor() {
  //   super()
  //   this.state = {
  //     data: 'Ibragimov',
  //   }
  // }

  // getData() {
  //   setTimeout(() => {
  //     console.log('data updating')
  //     this.setState({ data: 'Yashnarbek' })
  //   }, 3000)
  // }

  // componentDidMount() {
  //   console.log('render')
  //   this.getData()
  // }

  // render() {
  //   console.log('render')
  //   return (
  //     <div>
  //       <h1>Hello world</h1>
  //       <h1>{this.state.data}</h1>
  //     </div>
  //   )
  // }
  // :) 1 :)
  // :) 2 :)
  // constructor() {
  //   super()
  //   this.state = {
  //     posts: [],
  //     loading: true,
  //     comments: [],
  //   }
  // }

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   fetch('https://jsonplaceholder.typicode.com/post')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ posts: data, loading: false }))

  //   this.timerId = setInterval(() => {
  //     fetch('https://jsonplaceholder.typicode.com/comments')
  //       .then((response) => response.json())
  //       .then((json) => this.setState({ comments: json }))
  //   }, 3000)
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  // render() {
  //   return (
  //     <div>
  //       {this.state.loading ? (
  //         <h1>Loading...</h1>
  //       ) : (
  //         <h1>{this.state.posts.length} was loaded</h1>
  //       )}
  //       {/* <h1>{this.state.comments}</h1> */}
  //     </div>
  //   )
  // }
  // :) 2 :)
  // :) 3 :)
  // constructor() {
  //   super()
  //   this.state = {
  //     favouriteColor: 'yellow',
  //   }
  // }

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   this.timerId = setTimeout(() => {
  //     this.setState({ favouriteColor: 'crimson' })
  //   }, 3000)
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  //   document.querySelector(
  //     'p'
  //   ).innerHTML = `My favourite color ${this.state.favouriteColor}`
  // }

  // render() {
  //   return (
  //     <div className='App'>
  //       <h1>
  //         <p>{this.state.favouriteColor}</p>
  //       </h1>
  //     </div>
  //   )
  // }
  // :) 3 :)
  // 18-dars hayotiy sikl
  // 19-dars Amaliyot
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0,
  //     isCounting: false,
  //   }
  // }

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   this.userCount = localStorage.getItem('totalCount')
  //   this.setState({ count: +this.userCount })
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  //   localStorage.setItem('totalCount', this.state.count)
  // }

  // startHandle = () => {
  //   this.setState({ isCounting: true })
  //   this.timerCount = setInterval(() => {
  //     this.setState({ count: this.state.count + 1 })
  //   }, 1000)
  // }

  // stopHandle() {
  //   this.setState({ isCounting: false })
  //   clearInterval(this.timerCount)
  // }

  // resetHandle() {
  //   clearInterval(this.timerCount)
  //   this.setState({ count: 0 })
  // }

  // render() {
  //   return (
  //     <div>
  //       <h1>Hello world</h1>
  //       {!this.state.isCounting ? (
  //         <button onClick={this.startHandle}>+</button>
  //       ) : (
  //         <button onClick={() => this.stopHandle()}>-</button>
  //       )}
  //       <button>{this.state.count}</button>
  //       <button onClick={() => this.resetHandle()}>Reset</button>
  //     </div>
  //   )
  // }
  // 19-dars Amaliyot
  // 20-dars To'plamlar va key tushunchalari
  // state = {
  //   posts: [
  //     { id: 1, name: 'Javascript' },
  //     { id: 2, name: 'ReactJs' },
  //     { id: 3, name: 'VueJs' },
  //   ],
  // }

  // render() {
  //   return (
  //     <div>
  //       {this.state.posts.map((post) => (
  //         <p key={post.id}>{post.name}</p>
  //       ))}
  //     </div>
  //   )
  // }
  // 20-dars To'plamlar va key tushunchalari
  // 21-dars props bilan ishlash tepadan pastga
  // state = {
  //   posts: [
  //     { id: 1, name: 'Javascript' },
  //     { id: 2, name: 'ReactJs' },
  //     { id: 3, name: 'VueJs' },
  //   ],
  // }

  // handleSomething = () => {
  //   console.log('App.js setStates is updated')
  // }

  // render() {
  //   const {posts} = this.state.posts
  //   return (
  //     <div>
  //       <Posts posts={posts} callback={this.handleSomething} />
  //     </div>
  //   )
  // }
  // 21-dars props bilan ishlash tepadan pastga
  // 22-dars Amaliyot

  // constructor() {
  //   super()
  //   this.state = {
  //     posts: [
  //       { id: 1, name: 'Javascript' },
  //       { id: 2, name: 'ReactJs' },
  //       { id: 3, name: 'VueJs' },
  //     ],
  //   }
  // }

  // state = {
  //   posts: [
  //     { id: 1, name: 'Javascript' },
  //     { id: 2, name: 'ReactJs' },
  //     { id: 3, name: 'VueJs' },
  //   ],
  // }

  // removePost = (id) => {
  //   this.setState({ posts: this.state.posts.filter((post) => post.id !== id) })
  // }

  // render() {
  //   const { posts } = this.state
  //   return (
  //     <div>
  //       <Posts posts={posts} removePost={this.removePost} />
  //     </div>
  //   )
  // }
  // 22-dars Amaliyot
  // 23-dars Formalar bilan ishlash va validation

  // constructor() {
  //   super()
  //   this.state = {
  //     firstName: '',
  //   }
  // }

  // state = {
  //   firstName: 'Yashnarbek',
  // }

  // changeHandler = (e) => {
  //   this.setState({ firstName: e.target.value })
  // }

  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
  // 23-dars Formalar bilan ishlash va validation
}

export default App

// https://youtube.com/shorts/dgV8Pq9aykg?feature=share
