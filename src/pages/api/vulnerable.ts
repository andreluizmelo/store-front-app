import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const url = req.query.url
    if(typeof(url) !== 'string') {
        res.status(400).send({ message: 'Url inválido'})
        return
    }
    const result = await fetch(url);
    const jsonResult = await result.json()
    res.status(200).json({ fetchResult: jsonResult })
  }