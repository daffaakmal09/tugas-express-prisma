import { Request } from "express";

export interface CustomRequest extends Request {
  user?: {
    name: string;
    nip: string;
  };
}
