const Card = (props) => {
    return (
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">
                    <a className="text-dark" href="#">{props.name}</a>
                </h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-lg-block" src={props.src} alt="Card image cap" />
        </div>
    )
}

export default Card