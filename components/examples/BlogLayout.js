import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
const BlogLayout = (props) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Blog Template for Bootstrap</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />

                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet" />
                <link href="/css/examples/blog.css" rel="stylesheet" />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default BlogLayout