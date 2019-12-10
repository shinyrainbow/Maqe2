import React from 'react'
import moment from 'moment'
import ClockIcon from '../ClockIcon'
import LocationIcon from '../LocationIcon'
import './index.scss'

class Posts extends React.Component {
  findAuthor = (authorId) => {
    const { authors } = this.props
    return authors.filter((author) => author.id === authorId)
  }

  render() {
    const { posts } = this.props
    return (
      posts && posts.length > 0
      &&
      posts.map((post, index) => {
        const { id: postId, author_id, title, body, image_url, created_at } = post
        let date = moment(created_at),
          now = moment(),
          weeks = now.diff(date, 'weeks'),
          months = now.diff(date, 'months'),
          result = ""

        if (months) {
          result += months + (months === 1 ? ' month ' : ' months ')
          weeks = weeks % 4
        } else if (weeks || weeks === 0) {
          result += weeks + (weeks === 1 ? ' week' : ' weeks')
        }
        const author = this.findAuthor(author_id)
        const gray = index % 2 !== 0 && 'gray'
        return (
          <div className={`post ${gray}`} key={postId}>
            <div className='content-wrapper'>
              <div className='image'>
                <img src={image_url} width='200px' />
              </div>
              <div className='content'>
                <div className='title'>{title}</div>
                <div className='body'>{body}</div>
                <div className='create-at'><ClockIcon width='10px' fill='gray' className='icon' />{result} ago</div>
              </div>
            </div>
            <div className='author'>
              {
                author && (Object.entries(author[0]).length !== 0)
                && (
                  <>
                    <img src={author[0].avatar_url} className='author-image' />
                    <div className='author-name'>{author[0].name}</div>
                    <div className='author-role'>{author[0].role}</div>
                    <div className='author-location'><LocationIcon width='10px' className='icon' />{author[0].place}</div>
                  </>
                )
              }
            </div>
          </div>
        )
      })
    )
  }
}

export default Posts