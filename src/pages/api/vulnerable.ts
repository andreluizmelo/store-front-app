import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const id = req.query.id
    if(typeof(id) !== 'string') {
        res.status(400).send({ message: 'Id inválido'})
        return
    }
    const host = req.query.host
    if(typeof(host) !== 'string') {
        res.status(400).send({ message: 'host inválido'})
        return
    }
    const result = await fetch(`https://${host}/products/${id}`);
    const jsonResult = await result.json()
    res.status(200).json({ fetchResult: jsonResult })
  }