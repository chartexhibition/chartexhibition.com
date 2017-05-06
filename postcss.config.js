module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorPrimaryDark: "#515100",
            colorPrimary: "#949300",
            colorSecondaryDark: "#6B7500",
            colorSecondary: "#c4d600",
            colorNeutralDark: "#535455",
            colorNeutral: "#97999B",
            colorNeutralLight: "#C6C7C8",
            colorText: "#555",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
