import BlogLayout from "../../components/examples/BlogLayout"



const LoginPage = () => {
    return (
        <BlogLayout>
            <div className="container">
                <div className="row justify-content-center" >
                    <div className="col-md-4">
                        <form className="form-signin">
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" defaultValue="remember-me" /> Remember me
    </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                        </form>
                    </div>
                </div>
            </div>
        </BlogLayout>
    )
}

export default LoginPage