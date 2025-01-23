import { serveDir } from "@std/http/file-server";
import { join } from "@std/path/join";
import { renderToReadableStream, renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { App } from "./app.tsx";

const sheet = new ServerStyleSheet();
renderToString(sheet.collectStyles(<App />));
const styles = sheet.getStyleElement();

Deno.serve(async (req: Request) => {
  const pathname = new URL(req.url).pathname;

  if (pathname.startsWith("/public")) {
    return serveDir(req, {
      fsRoot: join(import.meta.dirname!, "..", "..", "public"),
      urlRoot: "public",
    });
  }

  if (pathname === "/") {
    return new Response(
      await renderToReadableStream(<App styles={styles} />, {
        bootstrapModules: ["/public/app.js"],
      }),
      {
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "no-transform",
        },
      },
    );
  }

  return new Response("404: Not Found", { status: 404 });
});

/**
 * Alternatively, Hono's streaming helper could be used instead:
 *
 * app.get(
 *   "/public/*",
 *   serveStatic({ root: join(import.meta.dirname!, "..", "..") }),
 * );
 *
 * app.get("/", (c) => {
 *   return stream(c, async (s) => {
 *     return s.pipe(
 *       await renderToReadableStream(<App styles={styles} />, {
 *         bootstrapModules: ["/public/app.js"],
 *       }),
 *     );
 *   });
 * });
 */
