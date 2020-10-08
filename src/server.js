import sirv from "sirv";
import polka from "polka";
import shrinkRay from "shrink-ray-current";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  .use(
    shrinkRay(),
    sirv("static", {
      dev,
      etag: true,
    }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
