const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Nếu PORT không được thiết lập, gán giá trị mặc định là 3000
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// In ra giá trị cổng để kiểm tra
console.log("Server is starting on port:", port);

server.listen(port, () => {
  console.log("JSON Server is running");
});
