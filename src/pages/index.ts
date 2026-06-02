import NotFound from "./NotFound"
import Landing from "./Landing"

interface RouteT {
  path: string,
  element: React.ComponentType
}

export const appRoutes: RouteT[] = [
  {
    path: '/',
    element: Landing
  },
  {
    path: '*',
    element: NotFound
  }
]