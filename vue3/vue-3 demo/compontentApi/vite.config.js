export default {
  proxy: {
    "/api": {
      target: "http://127.0.0.1:5500/data/",
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
