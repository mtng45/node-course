# THE REST API
Representational State Transfer - Applidation Programming Interface (REST API or RESTful API)

- TASK RESOURCE  
  - Create: POST /tasks
  - Read: GET /tasks
  - Read: GET /tasks/:id
  - Update: PASTCH /tasks/:id
  - Delete: DELETE /tasks/:id

 ---
- Reauest [Text]
```javascript
 POST /tasks HTTP/1.1 // [HTTP方式 HTTPプロトコル]
 // Request Header: meta data
 Accept: application/json
 Connection: Keep-Alive
 Authorization: Bearer asdfghjkl.qwertyuiop.zxcvbnm...

 {"description": "Order new drill bits"}
```

- Responce [Text]
```javascript
HTTP/1.1 201 Created
Date: Sun, 28 Jul 2019 15:37;37 GMT
Server: Express
Content-Type: application/json

{"_id": "asdfghjkl", "description": "Order new drill bits", "completed": false}
```

## tool
- [Postman](https://www.getpostman.com/)

## docs
- [HTTP Status Codes](https://httpstatuses.com/)