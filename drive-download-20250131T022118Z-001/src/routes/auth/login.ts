import { Response, Request } from "express";
import { generateError, generateRandomString } from "@/utils";
import md5 from "md5";
import jwt from "jsonwebtoken";
import { auth_db } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || "";

export const post = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await auth_db.users.findFirst({
      where: {
        username: username,
        password: md5(password),
      },
      select: {
        username: true,
        email: true,
      },
    });

    if (!user) {
      res.status(403).json({
        message: "Username or password is wrong! Please try again",
      });
    }

    const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({
      message: "Berhasil login",
      data: user,
      token: token,
    });

  } catch (error) {
    return res.status(500).json({
      errors: [
        generateError({
          code: 500,
          title: "Internal Server Error",
          description: error?.message || "Something went wrong",
          timestamp: new Date().toISOString(),
          id: generateRandomString(10),
          status: 500,
        }),
      ],
    });
  }
};
