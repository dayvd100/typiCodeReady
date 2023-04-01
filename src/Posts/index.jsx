import Post from "../postCard";
import './styles.css';

const Posts = ({posts}) => (
  <div className="posts">
            {posts.map(post => (
              <Post
              key={post.id}
              title={post.title}
              body={post.body} 
              cover={post.cover}
              id={post.id}
              // post={post}
              />
            ))}
          </div>
)

export default Posts;