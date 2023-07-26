## POST request yordamida yangi blog yaratish 

`POST http://localhost:3000/blogs`

Content-Type: application/json

{
    "title": "My first blog post",
    "content": "This is the content of my first blog post."
}


## GET request yordamida barcha bloglarni ko'rish

`GET http://localhost:3000/blogs`


## GET request yordamida id orqali ko'rish

`GET http://localhost:3000/blogs/1`


## PUT request yordamida biror id'dagi blog ma'lumotlarini o'zgartirish

`PUT http://localhost:3000/blogs/1`

Content-Type: application/json

{
    "title": "My updated blog title"
}


## DELETE request orqali biror id'dagi blogni o'chirish

`DELETE http://localhost:3000/blogs/1`


just new commit