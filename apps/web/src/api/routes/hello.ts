import { procedure } from "../trpc.js";

export default procedure.query(async () => {
  return { hellow: "world" };
});
