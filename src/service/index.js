import request from "./request";

// 登录二维码key
export const getLoginQrKey = () => request.get("/login/qr/key");
// 二维码图片
export const getLoginQrCreate = (params) =>
  request.get(`/login/qr/create`, { params });
// 登录检测
export const getLoginQrCheck = (params) =>
  request.get("/login/qr/check", { params });

// 获取账号信息
export const getUserAccount = (params) =>
  request.get("/login/status", { params });
// 用户详情
export const getUserDetail = (params) =>
  request.get("/user/detail", { params });
// 关注列表
export const getSuerFollows = (params) =>
  request.get("/user/follows", { params });
// 粉丝列表
export const getSuerFollowds = (params) =>
  request.get("/user/followeds", { params });
//用户等级
export const getUserLevel = (params) => request.get("/user/level", { params });
//获取用户信息 , 歌单，收藏，mv, dj 数量
export const getUserSubcount = (params) =>
  request.get("/user/subcount", { params });

// 歌单
export const getUserPlaylist = (params) =>
  request.get("/user/playlist", { params });
// 歌曲详情
export const getSongDetail = (params) =>
  request.get("/song/detail", { params });

//获取首页数据
export const getHomePageData = () => request.get("/homepage/block/page");

//获取首页发现
export const getHomeBall = () => request.get("/homepage/dragon/ball");

// 获取推荐歌单
export const getPersonalized = (limit) =>
  request.get("/personalized", { params: { limit } });
// 歌单详情
export const getPlaylistDetail = (params) =>
  request.get("/playlist/detail", { params });
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
