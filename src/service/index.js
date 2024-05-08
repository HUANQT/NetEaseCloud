import request from "./request";

//获取首页数据
export const getHomePageData = () => request.get("/homepage/block/page");

//获取首页发现
export const getHomeBall = () => request.get("/homepage/dragon/ball");

// 获取推荐歌单

export const getPersonalized = (limit) =>
  request.get("/personalized", { params: { limit } });

// 新歌新碟\数字专辑

export const getAlbumList = (limit) =>
  request.get("/album/list", { params: { limit } });

// /hot/topic

export const getHotTopic = (limit) =>
  request.get("/hot/topic", { params: { limit } });
