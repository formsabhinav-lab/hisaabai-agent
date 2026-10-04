import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.make.com",
  description: "Run scenarios and manage automations.",
  auth: connect("mcp.make.com/prj_Xl9M4fPrNHi1uB3eBpbcPSIcTK4L"),
});
