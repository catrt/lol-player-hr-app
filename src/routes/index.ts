import createRouter from "../core/createRouter";
import Home from "./Home"
import Management from "./Management"
import Profile from "./Profile"
import Edit from "./Edit";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/management", component: Management },
  { path: "#/profile", component: Profile },
  { path: "#/edit", component: Edit },
])
