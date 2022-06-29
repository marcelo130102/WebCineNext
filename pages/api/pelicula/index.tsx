import type { NextApiRequest, NextApiResponse } from 'next';
import PrismaClient from '../../../utils/prisma';
import { InputUserBodyPost } from '../../../types/form';
const prisma = PrismaClient;


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        /*if (req.method === 'POST') {
            // TODO create a forms
            let body = req.body;
            let data = <InputUserBodyPost>(body);

            const result = await prisma.ticket.create({
                data: data,
            })
            return res.status(200).json(result)
        } else*/ if (req.method === 'GET') {
            // return all movies
                const result = await prisma.movie.findMany({
                });
                return res.status(200).json(result)
        }
        return res.status(405).json({ errorMessage: 'Method not allowed' })

    } catch (err: any) {
        return res.status(404).json({ statusCode: 404, message: err.message })
    }
}
