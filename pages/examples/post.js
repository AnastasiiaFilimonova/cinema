import BlogLayout from "../../components/examples/BlogLayout"
import Jumbotron from "../../components/examples/Jumbotron"


const PostPage = () => {
  return (
    <BlogLayout>
      <div className="container">
        <Jumbotron name='Matrix'/>
      </div>
    </BlogLayout>
  )
}

export default PostPage