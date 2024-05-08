import Home from "../views/Home.vue";
import Login from "../views/login.vue";
// import Community from "../views/community.vue";
import MyUser from "../views/myUser.vue";
// import Follow from "../views/follow.vue";
// import RankingList from "../views/rankingList.vue";

export default [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  // { path: "/component", component: Community },
  { path: "/myUser", component: MyUser },
  // { path: "/follow", component: Follow },
  // { path: "/rankingList", component: RankingList },
];
