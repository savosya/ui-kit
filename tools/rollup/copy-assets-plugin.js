export const copyAssetsPlugin = dest =>
  copy({
    flatten: false,
    targets: [{ src: ['src/**/*.{png,svg,jpg,jpeg}', '!**/__image_snapshots__/**'], dest }]
  });
