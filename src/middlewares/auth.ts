import { customRequest } from '@/types';
import { Request, Response, NextFunction} from 'express';

export const auth = (req: customRequest, res: Response, next: NextFunction) => {
  console.log(`accessing ${req.url} at ${new Date().toISOString()}`);

  if (req.query.stop === 'true') {
    return res.status(403).json({
        message: 'Access denied',
        });
    }

    req.user = {
        name: 'Daffa Akmal',
        nik: 'J0303211176',
    };

    next();
};