import { router } from "./trpc.js";

import hello from "./routes/hello.js";

export const appRouter = router({
  hello,
});

export type AppRouter = typeof appRouter;
