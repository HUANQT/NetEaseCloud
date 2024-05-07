import request from "./request";

//获取首页数据
export const getHomePageData = () => request.get("/homepage/block/page");

//获取首页发现
export const getHomeBall = () => request.get("/homepage/dragon/ball");

// 每日推荐
export const getRecommend = () => request.get("/recommend/resource");

export const getPersonalized = () => request.get("/personalized/mv");
