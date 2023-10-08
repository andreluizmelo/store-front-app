import { ProductCardType } from "./props"
import { CardImage, ImagePlaceholder } from "./styles"

export const ProductCard = ({
    id,
    title,
    imgUrl,
    imgAlt,
    shortDescription
}: ProductCardType) => {
    return <div className="card">
    <div className="card-body">
        {imgUrl != null ? 
            <CardImage src={imgUrl} className="card-img-top" alt={imgAlt}></CardImage>
        : null}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{shortDescription}</p>
        <a href={`/products/${id}`} className="btn btn-primary">Ver produto</a>
    </div>
    </div>
}

export const ProductCardPlaceholder = () => {
    return <div className="card"  aria-hidden="true">
    <div className="card-body">
        <ImagePlaceholder className="card-img-top placeholder"></ImagePlaceholder>

        <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-12"></span>
            <span className="placeholder col-12"></span>
        </p>
        <a href="#" className="btn btn-primary"><pre>{'           '}</pre></a>
    </div>
    </div>
}