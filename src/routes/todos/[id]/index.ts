import { main_db } from "@/lib/db";
import { auth } from "@/middlewares/auth";
import { printTimestamp } from "@/middlewares/printtimestamp";
import { Request, Response } from "express";

// GET request handler
export const get = [
  printTimestamp, 
  auth, 
  async (req: Request, res: Response) => {
    const todo = await main_db.tr_todo.findFirst({
      where: {
        deleted_at: null,
        id: parseInt(req.params.id),
      },
    });

    res.status(200).json({
      status: true,
      data: todo,
    });
  }
];

// PUT request handler
export const put = [
  printTimestamp, 
  auth, 
  async (req: Request, res: Response) => {
    const { title, category_id, description, progress = 0 } = req.body;
    const id = parseInt(req.params.id);
    const isExist = await main_db.tr_todo.findFirst({
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!isExist) {
      return res.status(404).json({
        status: false,
        message: 'Data not found',
      });
    }

    const todo = await main_db.tr_todo.update({
      where: {
        id: id,
      },
      data: {
        title,
        category_id,
        description,
        progress,
      },
    });

    return res.status(203).json({
      status: true,
      data: todo,
    });
  }
];

// DELETE request handler
export const del = [
  printTimestamp, 
  auth, 
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const todo = await main_db.tr_todo.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(203).json({
      status: true,
      data: todo,
    });
  }
];
