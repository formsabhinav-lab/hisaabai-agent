import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.airtable.com/mcp",
  description: "Organize and automate data across bases, tables, and records.",
  auth: connect("mcp.airtable.com/prj_Xl9M4fPrNHi1uB3eBpbcPSIcTK4L"),
});
