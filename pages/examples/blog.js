import BlogLayout from "../../components/examples/BlogLayout"
import Main from "../../components/examples/Main"
import Card from "../../components/examples/Card"

const BlogPage = () => {
  return (
    <BlogLayout>
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col-md-6">
            <Card />
          </div>
        </div>
      </div>
      <Main />
    </BlogLayout>
  )
}

export default BlogPage