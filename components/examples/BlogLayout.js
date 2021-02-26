import Head from 'next/head'
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
            <div className="container">
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="text-muted" href="#">Subscribe</a>
                        </div>
                        <div className="col-4 text-center">
                            <a className="blog-header-logo text-dark" href="#">Large</a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="text-muted" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5" /><line x1={21} y1={21} x2="15.8" y2="15.8" /></svg>
                            </a>
                            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 text-muted" href="#">World</a>
                        <a className="p-2 text-muted" href="#">U.S.</a>
                        <a className="p-2 text-muted" href="#">Technology</a>
                        <a className="p-2 text-muted" href="#">Design</a>
                        <a className="p-2 text-muted" href="#">Culture</a>
                        <a className="p-2 text-muted" href="#">Business</a>
                        <a className="p-2 text-muted" href="#">Politics</a>
                        <a className="p-2 text-muted" href="#">Opinion</a>
                        <a className="p-2 text-muted" href="#">Science</a>
                        <a className="p-2 text-muted" href="#">Health</a>
                        <a className="p-2 text-muted" href="#">Style</a>
                        <a className="p-2 text-muted" href="#">Travel</a>
                    </nav>
                </div>



                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                        <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Featured post</a>
                                </h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#">Continue reading</a>
                            </div>
                            <img className="card-img-right flex-auto d-none d-lg-block" src="/img/examples/thumbnail.svg" alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">Design</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Post title</a>
                                </h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#">Continue reading</a>
                            </div>
                            <img className="card-img-right flex-auto d-none d-lg-block" src="/img/examples/thumbnail.svg" alt="Card image cap" />
                        </div>
                    </div>
                </div>
            </div>
            {props.children}
            <footer className="blog-footer">
                <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                <p>
                    <a href="#">Back to top</a>
                </p>
            </footer>
        </>
    )
}

export default BlogLayout