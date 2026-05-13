import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Mengunci basepath agar sesuai dengan repo GitHub
    basepath: "/kosfinder-your-student-home/", 
    context: { queryClient },
    scrollRestoration: true,
  });

  return router;
};
