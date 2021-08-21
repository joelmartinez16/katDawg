const Card = ({ border, header, size = 20 }) => {

    return <>
        <div class={`card border-${border} mb-3`} style={{maxWidth: `${size}rem`}}>
            <div class="card-header">{header}</div>
            <div class="card-body">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </>
}

export default Card