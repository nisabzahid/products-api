# 🧾 Product API Server with Swagger Documentation

A simple RESTful API server built using **Express.js**, supporting basic CRUD operations on `products`, and featuring interactive API documentation via **Swagger UI**.

---

## 📁 Project Structure

```
/project-root
│
├── index.js           # Main Express app
├── swagger.json       # Swagger/OpenAPI spec file
├── package.json
└── node_modules/
```

---

## 📦 Prerequisites

- Node.js ≥ 16.9.0 (Recommended: latest LTS like v18 or v20)
- npm (Node package manager)

---

## 🚀 How to Run

1. **Install dependencies**

   ```bash
   npm install express swagger-ui-express
   ```

2. **Ensure `swagger.json` exists**

   You must have a `swagger.json` file in the root folder. Use a valid Swagger 2.0 (OpenAPI 2.0) format. See the example below.

3. **Start the server**

   ```bash
   node index.js
   ```

4. **Server will run at:**

   ```
   http://localhost:8080
   ```

---

## 📘 Access Swagger API Docs

After the server is running, open:

```
http://localhost:8080/api-docs
```

You’ll see interactive Swagger UI for testing all your API endpoints.

---

## 📡 API Endpoints

| Method | Endpoint             | Description                      |
|--------|----------------------|----------------------------------|
| GET    | `/api/products`      | List all products (with filters) |
| GET    | `/api/products/:id`  | Get a specific product by ID     |
| POST   | `/api/products`      | Create a new product             |
| PUT    | `/api/products/:id`  | Update an existing product       |
| DELETE | `/api/products/:id`  | Delete a product by ID           |

---

## 📝 `swagger.json` Example

```json
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Product API",
    "description": "API to manage products"
  },
  "host": "localhost:8080",
  "basePath": "/",
  "schemes": ["http"],
  "paths": {
    "/api/products": {
      "get": {
        "summary": "Get all products",
        "responses": {
          "200": { "description": "List of products" }
        }
      },
      "post": {
        "summary": "Add a new product",
        "parameters": [
          {
            "in": "body",
            "name": "product",
            "schema": {
              "type": "object",
              "properties": {
                "name": { "type": "string" },
                "category": { "type": "string" }
              },
              "required": ["name", "category"]
            }
          }
        ],
        "responses": {
          "201": { "description": "Product created" }
        }
      }
    },
    "/api/products/{id}": {
      "get": {
        "summary": "Get product by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer"
          }
        ],
        "responses": {
          "200": { "description": "Product found" },
          "404": { "description": "Product not found" }
        }
      }
    }
  }
}
```

---

## ✅ Tips

- Make sure `swagger.json` is **valid JSON** and fully written.
- You can use [Swagger Editor](https://editor.swagger.io/) to validate your Swagger file.
- For production use, consider switching to **OpenAPI 3.0** and tools like **Redoc** or **SwaggerHub**.

---

## 🧑‍💻 Author

**Your Name Here**

---

## 📜 License

MIT (or your chosen license)
