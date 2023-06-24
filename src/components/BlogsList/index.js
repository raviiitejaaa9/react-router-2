import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

const blogsData = [
  {
    id: 1,
    title: 'Blog 1',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
    avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
    author: 'Author Name',
    topic: 'React.js',
  },
  {
    id: 2,
    title: 'Blog 2',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
    avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
    author: 'Author Name',
    topic: 'React.js',
  },
]

class BlogsList extends Component {
  state = {
    apiBlogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)
    const modifiedData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    // console.log(modifiedData)
    this.setState({
      apiBlogList: modifiedData,
      isLoading: false,
    })
  }

  render() {
    const {apiBlogList, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          apiBlogList.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogsList
