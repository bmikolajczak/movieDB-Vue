module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import "@/assets/scss/Global_vars.scss";
                @import "@/assets/scss/mixins.scss";
                `,
      },
    },
  },
};
