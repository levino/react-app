// src/mocks/handlers.js
import { rest } from "msw"

export const handlers = [
  rest.get("https://api.example.com/profile", (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        avatarUrl: "https://thispersondoesnotexist.com/",
        name: "Sam Flicker",
      }),
    ),
  ),
]
