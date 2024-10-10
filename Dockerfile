# Sử dụng Node.js làm base image
FROM node:20

# Tạo thư mục làm việc
WORKDIR /usr/src/app

# Sao chép package.json và cài đặt các phụ thuộc
COPY package*.json ./
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Expose port
EXPOSE 3000

# Chạy json-server
CMD [ "node", "node_modules/json-server/bin/index.js", "db.json", "--port", "$PORT" ]
