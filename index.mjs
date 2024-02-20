import handler from "serve-handler";
import { createServer } from "http";

const server = createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, {
    public: "./subscribe.ru",
    headers: [
      {
        source: "**/*.html",
        headers: [
          {
            key: "Content-Type",
            value: "text/html; charset=koi8-r",
          },
        ],
      },
    ],
  });
});

server.listen(3000, () => {
  console.log("Running at http://localhost:3000");
});
