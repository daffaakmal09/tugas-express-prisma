import { main_db } from "@/lib/db";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { Request, Response } from "express";

export const get = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const todo = await main_db.mst_todo_category.findFirst({
    where: {
      id,
      deleted_at: null,
    },
  });

  if (!todo) {
    res.status(404).json({
      message: "Todo tidak ditemukan",
    });
  }

  return res.status(200).json({
    message: "Todo berhasil diambil",
    data: todo,
  });
};

export const put = [
  authMiddleware,
  async (req: Request, res: Response) => {
    const { name } = req.body;
    const id = parseInt(req.params.id);

    const isExist = await main_db.mst_todo_category.findFirst({
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!isExist) {
      return res.status(404).json({
        message: "Todo tidak ditemukan",
      });
    }

    const todo = await main_db.mst_todo_category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return res.status(203).json({
      message: "Todo berhasil diubah",
      data: todo,
    });
  },
];

export const del = [
  authMiddleware,
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const isExist = await main_db.mst_todo_category.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!isExist) {
      return res.status(404).json({
        message: "Todo tidak ditemukan",
      });
    }

    const todo = await main_db.mst_todo_category.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({
      message: "Data berhasil dihapus",
      data: todo,
    });
  },
];
