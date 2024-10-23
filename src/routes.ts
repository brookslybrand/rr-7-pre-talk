import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export const routes: RouteConfig = [
  route("/", "routes/layout.tsx", [index("routes/home.tsx")]),
];
