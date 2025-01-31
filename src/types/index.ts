import { Request } from "express";

export interface customRequest extends Request {
    user?: {
        name: string;
        nik: string;
    };
};

