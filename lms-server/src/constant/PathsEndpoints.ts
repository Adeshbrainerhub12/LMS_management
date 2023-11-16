/**
 * Express router paths go here.
 */

import { Immutable } from "../others/PathTypes.ts";

const Paths = {
  Base: "/api",
  Ping: "/ping",
  Users: {
    Base: "/users",
    Login: "/login", // POST
    Create: "/create", // POST
  }
};

// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
