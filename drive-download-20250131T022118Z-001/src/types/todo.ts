import { Request } from "express";

export interface TodoRequest extends Request {
  todo?: {
    task: string;
    is_complete: boolean;
  };
}