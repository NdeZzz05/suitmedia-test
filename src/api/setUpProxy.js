import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://suitmedia-backend.suitdev.com",
      changeOrigin: true,
      hostName: assets.suitdev.com,
      pathRewrite: {
        "^/api": "/api",
      },
    })
  );
}
