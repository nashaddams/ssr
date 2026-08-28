# SSR with `React` and `Deno`

This repository contains a proof of concept implementation for server-side
rendering using
[`renderToReadableStream`](https://react.dev/reference/react-dom/server/renderToReadableStream)
and [`hydrateRoot`](https://react.dev/reference/react-dom/client/hydrateRoot).

## Structure

```sh
┌── src/
│   ├── client/mod.tsx # Hydration logic
│   ├── server/mod.tsx # SSR logic, including content streaming and style injection
│   └── server/app.tsx # The React app
└── bundle.ts # Bundle the client code responsible for hydration
```

## Run

```sh
deno task dev
```

Alternatively, `ssr` can also be run as an executable:

```sh
deno task build && dist/ssr
```

## Stack

- [React](https://github.com/facebook/react)
- [styled-components](https://github.com/styled-components/styled-components)
- [Deno](https://github.com/denoland/deno)
- [esbuild-deno-loader](https://github.com/lucacasonato/esbuild_deno_loader)

## Other work

- [Hono JSX](https://hono.dev/docs/guides/jsx) and
  [Hono Client Components](https://hono.dev/docs/guides/jsx-dom)
- [Udibo React App](https://github.com/udibo/react-app)
- [Examples of SSR using Deno, Oak, and Handlebars](https://github.com/denoland/deno-ssr-examples)
- [Fresh](https://fresh.deno.dev/) and
  [Deno SaaSKit](https://github.com/denoland/saaskit)
