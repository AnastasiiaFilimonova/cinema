import BlogLayout from "../../components/examples/BlogLayout"
import Main from "../../components/examples/Main"
import Card from "../../components/examples/Card"

const BlogPage = () => {
  return (
    <BlogLayout>
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-6">
            <Card name='Titanic' src='https://m.media-amazon.com/images/M/MV5BMTA4MjIyZWEtZjYwMS00ZmQ1LWJiMDEtMWNiNTI5NWE3OGJjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UY1200_CR104,0,630,1200_AL_.jpg'/>
          </div>
          <div className="col-md-6">
            <Card name='Matrix' src='https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'/>
          </div>
        </div>
      </div>
      <Main />
    </BlogLayout>
  )
}

export default BlogPage