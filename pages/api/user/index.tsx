/*import type { NextApiRequest, NextApiResponse } from 'next';
import PrismaClient from '../../../utils/prisma';
import { User } from "../../../types/user";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
      try {
          if (req.method === 'POST') {
                // TODO create a species
                let body = req.body;
                let data = <User>(body);
  
                const result = await prisma.user.create({
                   data: data,
                });
                return res.status(200).json(result)
          }
      } catch (err: any) {
            console.log("aea");
            return res.status(404).json({ statusCode: 404, message: err.message })
      } 
    } 
*/