import { Client } from "@notionhq/client";

// 빌드 타임에 호출. 데이터 가져온 다음에 화면에 렌더링
export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});
