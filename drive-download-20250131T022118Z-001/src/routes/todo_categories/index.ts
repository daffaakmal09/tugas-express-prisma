import { main_db } from "@/lib/db";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { CustomRequest } from "@/types";
import { Request, Response } from "express";

export const get = async (req: Request, res: Response) => {
    const todos = await main_db.mst_todo_category.findMany({
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
        const { name } = req.body;

        const newTodos = await main_db.mst_todo_category.create({
            data: {
                name: name,
            },
        });

        res.status(201).json({
            message: "Todo berhasil dibuat",
            data: newTodos,
        });
    },
];
