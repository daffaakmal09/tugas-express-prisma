import { PrismaClient as PrismaClientMainDB } from "@/generated/main_db";
import { PrismaClient as PrismaClientAuth } from "@/generated/auth_db";

export const main_db = new PrismaClientMainDB();
export const auth_db = new PrismaClientAuth();