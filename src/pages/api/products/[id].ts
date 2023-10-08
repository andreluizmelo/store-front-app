import { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/mocks/products";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const productIdParam = req.query.id
    if(typeof(productIdParam) !== 'string' || isNaN(parseInt(productIdParam))) {
        res.status(400).send({ message: 'Id inválido'})
        return
    }
    const productId = parseInt(productIdParam)

    
    const selectedProduct = products.find((p) => p.id === productId)
    if(selectedProduct == null) {
        res.status(404).send({ message: 'Produto não encontrado'})
        return
    }
    res.status(200).json({ product: selectedProduct})
  }