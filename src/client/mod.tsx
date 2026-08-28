// deno-lint-ignore no-unused-vars
import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "../server/app.tsx";

console.info("Hydrating in 5 seconds...");

setTimeout(() => {
  hydrateRoot(document, <App />);
  console.info("Hydrated, ready to interact 🚀");
}, 5_000);
