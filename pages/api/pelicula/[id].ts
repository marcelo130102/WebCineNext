// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PrismaClient from '../../../utils/prisma';
//import { InputSpeciesBodyPatch, OutputGetSingleSpecies } from '../../../types/species'
const prisma = PrismaClient;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {

        const id: Number = parseInt(req.query?.id as string, 10);
        if (req.method === 'GET') {
            // TODO get a species by its id
            const movie = await prisma.movie.findUnique(
                {
                    where: {
                        idmovie: id
                    }
                }
            );
            return res.status(200).json(movie)
        }
    } catch (err: any) {
        return res.status(404).json({ statusCode: 404, message: err.message })
    }
}
