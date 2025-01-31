
import { printTimestamp } from "@/middlewares/printtimestamp";
import { Request, Response } from "express";
// `/users`
export const get = (req: Request, res: Response) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  res.json(users);
};

export const post = [
    printTimestamp,
  (req: Request, res: Response) => {
    const newUser = {
      id: Date.now(),
      name: req.body.name,
    };
    res.status(201).json(newUser);
  },
];
