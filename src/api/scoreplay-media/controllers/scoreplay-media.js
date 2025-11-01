"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::scoreplay-media.scoreplay-media", ({ strapi }) => ({
  async import(ctx) {
    try {
      return { message: "✅ Endpoint activo y Strapi responde correctamente." };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));
