// export default {
//   providers: [
//     {
//       domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
//       applicationID: "convex",
//     },
//   ],
// };
// convex/auth.config.ts
// convex/auth.config.js
// convex/auth.config.ts
import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};
