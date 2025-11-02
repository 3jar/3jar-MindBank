import { notion } from "@/clients/notion";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const action = searchParams.get("action");
    const pageID = searchParams.get("pid");

    if (!pageID) return;

    const page_props = await notion.pages.retrieve({ page_id: pageID });

    return NextResponse.json(page_props);
}
