import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "Example Server",
  version: "1.0.0",
  description: "An example server using Model Context Protocol",
});

server.registerTool(
  "my-first-tool",
  {
    title: "My First Tool",
    description: "A simple tool that does something",
    inputSchema: { a: z.number(), b: z.number() },
    annotations: {
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
      readOnlyHint: true,
      title: "My First Tool",
    },
  },
  async ({ a, b }) => {
    // Simulate some processing
    const result = `Processed input: ${String(a + b)}`;
    return {
      content: [
        {
          type: "text",
          text: result,
        },
      ],
    };
  }
);

const resourceTemplate = new ResourceTemplate("lista://{nome}", {
  list: undefined,
});
server.registerResource(
  "my-first-resource",
  resourceTemplate,
  {
    title: "my-first-resource",
    description: "My first resource",
  },
  async (uri, variables) => {
    return {
      contents: [
        {
          uri: uri.href,
          text: `Hello, ${variables.nome}!`,
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);
