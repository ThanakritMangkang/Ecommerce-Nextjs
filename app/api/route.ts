import { NextResponse, NextRequest } from "next/server";
import { mysqlPool } from "@/utils/db";

export async function GET(request: NextRequest) {
  const promisePool = mysqlPool.promise();
  const [rows, fields] = await promisePool.query(
    `SELECT * FROM products`
  )
  return NextResponse.json(rows);
}
