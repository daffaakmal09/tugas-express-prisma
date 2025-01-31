import { main_db } from "@/lib/db";
import { auth } from "@/middlewares/auth";
import { printTimestamp } from "@/middlewares/printtimestamp";
import { Request, Response } from "express";
import { customRequest } from "@/types";

// GET request handler
export const get = [
  printTimestamp, 
  async (req: Request, res: Response) => {
    const todos = await main_db.tr_todo.findMany({
      where: {
        deleted_at: {
          equals: null,
        },
      },
    });

    res.status(200).json({
      message: "Todos berhasil diambil",
      data: todos,
    });
  }
];

// POST request handler
export const post = [
  printTimestamp, 
  auth, 
  async (req: customRequest, res: Response) => {
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
  }
];
