module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/nextjs-dashboard/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/nextjs-dashboard" : "",
  // ...existing code...
};
