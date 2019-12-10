import React, { Component, Fragment } from 'react'
import Posts from './Posts'
import Pagination from './Pagination'
import './App.scss'

class App extends Component {
  state = {
    authors: [],
    posts: [],
  }

  async componentDidMount() {
    try{
      let [authorsRes, postsRes] = await Promise.all([
        fetch('http://maqe.github.io/json/authors.json'),
        fetch('http://maqe.github.io/json/posts.json')
      ])
      let [authors, posts]= await Promise.all([
        authorsRes.json(),
        postsRes.json()
      ]) 
      this.setState({ authors, posts })
    } catch(error){
      throw new Error(error)
    }
  }

  render() {
    return (
      <div className='test'>
        <h1>MAQE Forums</h1>
        <h2>Subtle</h2>
        <h3>Posts</h3>
        <Posts
          posts={this.state.posts}
          authors={this.state.authors}
        />
        <Pagination />
      </div>
    )
  }
}

export default App