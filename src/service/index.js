import request from "./request";

//获取首页数据
export const getHomePageData = () => request.get("/homepage/block/page");

export const getDragonball = () => request.get("");
