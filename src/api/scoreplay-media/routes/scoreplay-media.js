"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/scoreplay-media/import",
      handler: "scoreplay-media.import",
      config: {
        auth: false,
      },
    },
  ],
};
