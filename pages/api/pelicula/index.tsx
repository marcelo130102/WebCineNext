import type { NextApiRequest, NextApiResponse } from 'next'
import PrismaClient from '../../../utils/prisma';
const prisma = PrismaClient;





export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === 'GET') {
            // return all species
                const result = await prisma.movie.findMany({
                });
                return res.status(200).json(result)
        }
        return res.status(405).json({ errorMessage: 'Method not allowed' })

    } catch (err: any) {
        return res.status(404).json({ statusCode: 404, message: err.message })
    }

}
