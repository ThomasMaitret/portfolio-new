import sirv from "sirv";
import polka from "polka";
import shrinkRay from "shrink-ray-current";
import { middleware } from "@sapper/server";
import helmet from "helmet";

import "./tailwind.css";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  .use(
    helmet(),
    shrinkRay(),
    sirv("static", {
      dev,
      maxAge: 31536000, // 1Y
      immutable: true
    }),
    middleware()
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });
