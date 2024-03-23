import createRouter from "../core/createRouter";
import Home from "./Home"
import Management from "./Management"
import Profile from "./Profile"

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/management", component: Management },
  { path: "#/profile", component: Profile },
])
