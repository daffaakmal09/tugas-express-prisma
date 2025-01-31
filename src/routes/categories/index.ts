import { main_db } from "@/lib/db";
import { auth } from "@/middlewares/auth";
import { printTimestamp } from "@/middlewares/printtimestamp";

import { customRequest } from "@/types";
import { Request, Response } from "express";

// '/users'
export const get = async (req: Request, res: Response) => {
  const categories = await main_db.mst_todo_category.findMany({
    where: {
      deleted_at: {
        not: null,
      },
    },
  });

  res.status(200).json({
    status: true,
    data: categories,
  });
};

export const post = [
  printTimestamp,
  async (req: customRequest, res: Response) => {
    const { category } = req.body;

    const categori = await main_db.mst_todo_category.create({
      data: {
        category: category,
      },
    });
    res.status(201).json({
      status: true,
      data: categori,
    });
  },
];