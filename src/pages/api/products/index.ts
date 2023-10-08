import { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/mocks/products";

const defaultPage = 1
const defaultPageSize = 10

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const page = typeof(req.query.page) === 'string' ? parseInt(req.query.page) : defaultPage
    const pageSize = typeof(req.query.pageSize) === 'string' ? parseInt(req.query.pageSize) : defaultPageSize
    
    const pageNumber = isNaN(page) ? defaultPage : page
    const pageSizeNumber = isNaN(pageSize) ? defaultPageSize : pageSize
    
    const selectedProducts = products.slice((pageNumber - 1) * pageSizeNumber, pageSizeNumber)
    res.status(200).json({ products: selectedProducts, page: pageNumber, pageSize: pageSizeNumber })
  }