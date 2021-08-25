const Card = ({ border, header, secondary, size = 40 }) => {

    return <> <div>
     
        {/* <div className="card-grid"> */}
            <div className={`card border-${border} mb-3`} style={{ maxWidth: `${size}rem`, display: "inline-block" }}>
                <div className="card-header">{header}</div>
                <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="container">
                <div className={`card border-${secondary} mb-3`} style={{ maxWidth: `${size}rem` }}>
                    <div className="card-header">{header}</div>
                    <div className="card-body">
                        <h4 className="card-title">Secondary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    {/* </div> */}
    </>
}
export default Card