import { main_db } from "@/lib/db";
import { Request, Response } from "express";

export const get = async (req: Request, res: Response) => {
  const categori = await main_db.mst_todo_category.findFirst({
    where: {
      deleted_at: {
        not: null,
      },
      id: parseInt(req.params.id),
    },
  });

  res.status(200).json({
    status: true,
    data: categori,
  });
};

//put
export const put = async (req: Request, res: Response) => {
  const { category } = req.body;
  const id = parseInt(req.params.id);

  const isExist = await main_db.mst_todo_category.findFirst({
    where: {
      id: id,
      deleted_at: null,
    },
  });

  if (!isExist) {
    return res.status(404).json({
      status: false,
      message: "Items is not found",
    });
  }

  const categori = await main_db.mst_todo_category.update({
    where: {
      id: id,
    },
    data: {
      category,
    },
  });

  res.status(203).json({
    status: true,
    data: categori,
  });
};

export const del = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const categori = await main_db.mst_todo_category.update({
    where: {
      id: id,
    },
    data: {
      deleted_at: new Date(),
    },
  });

  res.status(200).json({
    status: true,
    data: categori,
  });
};