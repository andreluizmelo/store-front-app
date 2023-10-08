import Layout from "@/components/Layout/layout"
import { ProductCard, ProductCardPlaceholder } from "@/components/ProductCard"
import { Product } from "@/types/Product"
import { useEffect, useState } from "react"

type PageProps = {
    products: Product[]
}

export default function Page() {
    const [loadingAds, setLoadingAds] = useState<boolean>(true)
    const [showcaseProducts, setShowcaseProducts] = useState<Product[]>([])
    useEffect(() => {
        (async () => {
            const res = await fetch('/api/products?pageSize=3')
            const data = await res.json()
            setShowcaseProducts(data.products)
            setLoadingAds(false)
        })()
    }, [])
    return <Layout>
        <div className="container">
            <div className="row">
                <h2>Produtos em destaque</h2>
            </div>
            {loadingAds ? 
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <ProductCardPlaceholder/>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <ProductCardPlaceholder/>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <ProductCardPlaceholder/>
                </div>
            </div> : 
            <div className="row">
                {showcaseProducts.map(product => {
                    return <div className="col-12 col-md-6 col-lg-3" key={`product-${product.id}`}>
                        <ProductCard {...product} imgUrl={product.imgUrls[0]}/>
                    </div>
                })}
            
            </div>
            }
        </div>
    </Layout>
}

