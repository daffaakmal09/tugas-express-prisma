import { CustomRequest } from "@/types";
import { Response, NextFunction } from "express";

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const now = new Date();
  console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);

  if (req.query.stop === "true") {
    return res.status(403).json({
      message: "Stop!!",
    });
  }

  req.user = {
    name: "Daffa Akmal",
    nip: "J0303211176",
  };

  next();
};
