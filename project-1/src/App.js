import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      // {
      //   id: '1',
      //   title: 'Título 1',
      //   body: 'Body 1'
      // },
      // {
      //   id: '2',
      //   title: 'Título 2',
      //   body: 'Body 2'
      // },
      // {
      //   id: '3',
      //   title: 'Título 3',
      //   body: 'Body 3'
      // }
    ]
  };

  componentDidMount() {
    // this.handleTimeout()
    this.loadPosts()
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;
    return (
      <sction className='container'>
        <div className='posts'>
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title} />
              <div key={ post.id } className='post-content'>

                <h1>{ post.title }</h1>
                <p>{ post.body }</p>
              </div>
            </div>
          ))}
        </div>
      </sction>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá mundo.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
