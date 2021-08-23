const Card = ({ border, header, secondary,  size = 20 }) => {

    return <>
        <div class={`card border-${border} mb-3`} style={{ maxWidth: `${size}rem` }}>
            <div class="card-header">{header}</div>
            <div class="card-body">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
            <div class={`card border-${secondary} mb-3`} style={{ maxWidth: `${size}rem`}}>
                <div class="card-header">{header}</div>
                <div class="card-body">
                    <h4 class="card-title">Secondary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                </div>
            </div>
    </>
}

        export default Card