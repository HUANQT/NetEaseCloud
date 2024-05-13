import request from "./request";

// 登录二维码key
export const getLoginQrKey = () => request.get("/login/qr/key");
// 二维码图片
export const getLoginQrCreate = (params) =>
  request.get(`/login/qr/create`, { params });
// 登录检测 /login/qr/check
export const getLoginQrCheck = (key) =>
  request.get(`/login/qr/check?key=${key}`);

//获取首页数据
export const getHomePageData = () => request.get("/homepage/block/page");

//获取首页发现
export const getHomeBall = () => request.get("/homepage/dragon/ball");

// 获取推荐歌单
export const getPersonalized = (limit) =>
  request.get("/personalized", { params: { limit } });
// 歌单详情
export const getPlaylistDetail = (params) =>
  request.get("/playlist/detail", params);
//
export const getPlaylistTrackAll = (params) =>
  request.get("/playlist/track/all", { params });

// 新歌新碟\数字专辑

export const getAlbumList = (limit) =>
  request.get("/album/list", { params: { limit } });

// /hot/topic

export const getHotTopic = (limit) =>
  request.get("/hot/topic", { params: { limit } });

// 搜索
export const getCloudsearch = (params) =>
  request.get("/cloudsearch", { params });
// 热搜列表(简略)
export const getSearchHot = () => request.get("/search/hot");
// 排行
export const getToplist = () => request.get("/toplist/detail");
// mv
export const getMvAll = (params) => request.get("/top/mv", { params });
// mv视屏
export const getMvUrl = (params) => request.get("/mv/url", { params });
// mv个人数据
export const getDetail = (params) => request.get("mv/detail", { params });
// mv点赞数据
export const getDetailInfo = (params) =>
  request.get("mv/detail/info", { params });
