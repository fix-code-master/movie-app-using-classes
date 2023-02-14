import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// 7-dars
// const Book = (props) => {
// const Book = ({ name, year, price }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{year}</p>
//       <p>{price}</p>
//     </div>
//   )
// }
// 7-dars
// 8-dars Amaliy mashg'ulot
// const News = ({ name, extra, header, text }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <div className='box'>
//         <pre>{extra}</pre>
//         <p>{text}</p>
//       </div>
//       <div className='square'>
//         <h1>{header}</h1>
//       </div>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <News
//         name='BBC News'
//         extra='2020'
//         text='Ibragimov Yashanrbek'
//         header='BigJob'
//       />
//     </div>
//   )
// }
// 8-dars
// 7-dars
// const App = () => {
//   return (
//     <div>
//       <Book name='JavaScript for beginners' year='2019' price='50' />
//       <Book name='React.js for beginners' year='2020' price='60' />
//       <Book name='Vue.js for beginners' year='2021' price='70' />
//     </div>
//     React.createElement('div', {} [
//     React.createElement(Book, {name:'JavaScript for beginners', year:2019, price: 50})
//     React.createElement(Book, {name:'React.js for beginners', year:2020, price: 60})
//     React.createElement(Book, {name:'Vue.js for beginners', year:2021, price: 70})
// ])
//   )
// }
// 7-dars
// 9-dars JSX xususiyatlari
// const News = ({ name, extra, header, text, children }) => {
//   return (
//     <div>
//       <h1>{name ? name : 'default book'}</h1>
//       <div className='box'>
//         <pre>{extra} {children}</pre>
//         <p>{text}</p>
//       </div>
//       <div className='square'>
//         <h1>{header}</h1>
//       </div>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <News
//         // name='BBC News'
//         name='BBC News'
//         extra='2020'
//         text='Ibragimov Yashanrbek'
//         header='BigJob'
//       >
//         Extra inform
//       </News>
//     </div>
//   )
// }
// 9-dars JSX xususiyatlari
// const isLoading = true

// ReactDOM.render(
//   <React.StrictMode>
//     <App isLoading={isLoading}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
