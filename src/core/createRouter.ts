import Component from "./Component"

interface Route {
  path: string
  component: typeof Component
}
type Routes = Route[]

function routeRender(routes: Routes) {
  if(!location.hash) {
    history.replaceState("", "", "/#/")
  }

  const routeView = document.querySelector("router-view")
  const [hash, queryString = ""] = location.hash.split("?")

  interface Query {
    [key: string]: string
  }
  const query = queryString.split("&")
                           .reduce((acc, cur) => {
                             const [key, val] = cur.split("=")
                             acc[key] = val
                             return acc
                           }, {} as Query)
  history.replaceState(query, "")

  const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))
  if(routeView) {
    routeView.innerHTML = ""
    currentRoute && routeView.append(new currentRoute.component().el)
  }
  
  window.scrollTo(0, 0)
}
export function createRouter(routes: Routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}