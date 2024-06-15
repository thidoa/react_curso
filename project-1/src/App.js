import { Component } from 'react';

import './App.css';

import { Posts } from './components/Posts'
import { loadPosts } from './utils/load-posts'

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;
    return (
      <sction className='container'>
        <Posts posts={posts} />
      </sction>
    );
  }
}

export default App;
