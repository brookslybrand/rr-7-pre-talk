import { type RouteConfig, route, index } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  route("/", "routes/layout.tsx", [
    index("routes/home.tsx"),
    route("deferred", "routes/deferred.tsx"),
    route("todos", "routes/todos.tsx", [route(":id", "routes/todo-item.tsx")]),
  ]),
];
