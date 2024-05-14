import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Search from "../views/search.vue";
import Community from "../views/community.vue";
import MyUser from "../views/myUser.vue";
import VideoPlayerView from "../views/videoPlayerView.vue";
import SingingListDetails from "../views/singingListDetails.vue";
import Edit from "../views/edit.vue";
// import Follow from "../views/follow.vue";
// import RankingList from "../views/rankingList.vue";

export default [
  { path: "/", component: Home },
  { path: "/login", name: "login", component: Login },
  { path: "/search", component: Search },
  { path: "/community", component: Community },
  { path: "/myUser", component: MyUser },
  {
    path: "/videoPlayerView/:id",
    name: "videoPlayerView",
    component: VideoPlayerView,
  },
  {
    path: "/singingListDetails/:DationId",
    name: "singingListDetails",
    component: SingingListDetails,
  },
  {
    path: "/edit",
    name: "edit",
    component: Edit,
  },
];
