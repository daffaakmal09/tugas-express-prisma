import { main_db } from "@/lib/db";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { CustomRequest } from "@/types";
import { Request, Response } from "express";

export const get = async (req: Request, res: Response) => {
  const todos = await main_db.tr_todo.findMany({
    where: {
      deleted_at: null,
    },
  });

  res.status(200).json({
    message: "Todos berhasil diambil",
    data: todos,
  });
};

export const post = [
  authMiddleware,
  async (req: CustomRequest, res: Response) => {
    const { category_id, title, description, progress = 0 } = req.body;

    const created_by = req.user.name;

    const newTodos = await main_db.tr_todo.create({
      data: {
        category_id: category_id,
        title: title,
        description: description,
        progress: parseInt(progress),
        created_by: created_by,
      },
    });

    res.status(201).json({
      message: "Todo berhasil dibuat",
      data: newTodos,
    });
  },
];
