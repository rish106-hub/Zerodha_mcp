import { placeOrder } from "./trade";
placeOrder("HDFCBANK", 1, "BUY");
/*
import { McpServer} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

// Add an addition tool
server.tool("add two numbers",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);
server.tool("Buy a stock"
    {stock: z.string(),qty: z.number()},
    
// Add a dynamic greeting resource
const transport = new StdioServerTransport();
await server.connect(transport);

*/