const Post = (props) => {
  // const post = props.post;
  const {title} = props;
  const {id} = props;
  const {cover} = props;
  const {body} = props

  return(
    <div key={id} className="post-content">
      <img src={cover} alt='nothing'/>
      <h1 >{title}</h1>
      <p>{body}</p>
    </div>
    )
    
  }

export default Post;