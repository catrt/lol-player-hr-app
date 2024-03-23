import createRouter from "../core/createRouter";
import Home from "./Home"
import Management from "./Home"
import Profile from "./Home"

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/management", component: Management },
  { path: "#/profile", component: Profile },
])
