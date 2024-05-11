import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Search from "../views/search.vue";
import Community from "../views/community.vue";
import MyUser from "../views/myUser.vue";
import VideoPlayerView from "../views/videoPlayerView.vue";
import SingingListDetails from "@/views/SingingListDetails.vue";
// import Follow from "../views/follow.vue";
// import RankingList from "../views/rankingList.vue";

export default [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/search", component: Search },
  { path: "/community", component: Community },
  { path: "/myUser", component: MyUser },
  {
    path: "/videoPlayerView/:id",
    name: "videoPlayerView",
    component: VideoPlayerView,
  },
  {
    path: "/SingingListDetails/:id",
    name: "SingingListDetails",
    component: SingingListDetails,
  },

  // { path: "/follow", component: Follow },
  // { path: "/rankingList", component: RankingList },
];
