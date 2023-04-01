import { Component } from 'react';
import './Home.css';
// import Post from './postCard';
import LoadPost from '../../utils/loadPost';
import Posts from '../../Posts';
import Button from '../../components/button';
import InputText from '../../components/input';

class Home extends Component{

    state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 6,
    searchValue: ''
    };

    componentDidMount(){
       this.loadPosts()
    }

    loadPosts =  async() => {
      const {page, postPerPage} = this.state;
      const postsAndPhotos = await LoadPost();
      this.setState({
        posts: postsAndPhotos.slice(page, postPerPage),
        allPosts: postsAndPhotos
      })
    }

    loadMorePosts = () => {
      const {
          page,
          postPerPage,
          allPosts, 
          posts

          } = this.state;

      const nextPage = page + postPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
      console.log(page, postPerPage, nextPage, nextPage + postPerPage);
      posts.push(...nextPosts);
      this.setState({posts, page: nextPage});
    }


  render(){
    const {posts, searchValue} = this.state;

    const filteredPosts = !!searchValue ? posts.filter((post) =>{
      return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    }) 
    : posts

    const handleChange = (e) => {
      const {value} = e.target;
      this.setState({searchValue: value})
    }

    return (
      <section className="container">
        <div className='search-container'>
        {!!searchValue && (
          <h1>Searching: {searchValue}</h1>
        )}
        <InputText onChange={(e) => handleChange(e)} searchValue={searchValue}/>
        </div>
               {filteredPosts.length > 0 && (
                <Posts posts={filteredPosts}/>
               )}
               {filteredPosts.length === 0 && (
                <p>There is anything</p>
               )}
          
          <Button onClick={this.loadMorePosts} text="this is the button text"/>
      </section>
        );
  }
}

export default Home;
