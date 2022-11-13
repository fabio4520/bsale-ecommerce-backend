# Bsale-ecommerce backend

## Connection to database

Debido a que las conexiones con el servidor se aborten cada 5 segundos, se realizó la conexión con la base de datos con mysql.createPool.
Un Pool es un lugar donde se almacenan las conexiones. Cuando solicita una conexión de un Pool, se le proporciona una conexión que no se está utilizando actualmente o una nueva conexión.
Si se llega al límite de conexión, se espera hasta que haya una conexión disponible antes de continuar.

```javascript
const db_config = {
  connectionLimit: 10,
  host: "hidden",
  user: "hidden",
  password: "hidden",
  port: hidden,
  database: "hidden",
};
```

## Estructura JSON

Al realizar una petición http se espera una respuesta json como la siguiente:

```json
[
  {
    "id": 1,
    "name": "bebida energetica"
  },
  {
    "id": 2,
    "name": "pisco"
  }
]
```

### GET products

GET /v1/products

```json
[
  {
    "id": 1,
    "name": "bebida energetica"
  },
  {
    "id": 2,
    "name": "pisco"
  }
]
```

### GET products query

GET /api/v1/products?size=3&offset=0

```json
[
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": 1
  },
  {
    "id": 6,
    "name": "ENERGETICA RED BULL",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    "price": 1490,
    "discount": 0,
    "category": 1
  },
  {
    "id": 7,
    "name": "ENERGETICA SCORE",
    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
    "price": 1290,
    "discount": 0,
    "category": 1
  }
]
```

### POST products

POST /api/v1/products
Retorna un status 201 con el cuerpo del nuevo producto creado.

```json
{
  "id": 105,
  "name": "New product",
  "price": 20,
  "url_image": "https://loremflickr.com/640/480",
  "discount": 20,
  "category": 2
}
```

### PATCH products

PATCH /api/v1/products/10
Si el producto se encuentra, retorna un status 200 con el cuerpo del producto editado.

```json
{
  "id": 10,
  "name": "New product - edited",
  "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg",
  "price": 3990,
  "discount": 0,
  "category": 2
}
```

PATCH /api/v1/products/1
Si no se encuentra el producto para realizar el update el mensaje que retorna es el siguiente:

```json
{
  "message": "Product not found"
}
```

### DELETE products

DELETE /api/v1/products/1
Si se encuentra el producto, retorna un status 200 y el cuerpo del mensaje es el id que se eliminó.

```json
{
  "id": "10"
}
```

Si no se encuentra el producto para realizar el update el mensaje que retorna es el siguiente:

```json
{
  "message": "Product not found"
}
```
