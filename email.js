var emails = "selenagomez@modesens.com;TheFashionBook@modesens.com;helenaglazer@gmail.com;julia@galmeetsglam.com;maklawless@gmail.com;rumi@fashiontoast.com;rvaidila@gmail.com;vanessa@thehautepursuit.com;guobiting@modesens.cn"
var list = emails.split(";")
console.log(list);


('selenagomez@modesens.com',
'1074201799@qq.com'
'TheFashionBook@modesens.com',
'helenaglazer@gmail.com',
'julia@galmeetsglam.com',
'maklawless@gmail.com',
'rumi@fashiontoast.com',
'rvaidila@gmail.com',
'vanessa@thehautepursuit.com',
'guobiting@modesens.cn')


SELECT username,email FROM `auth_user` WHERE email IN ('selenagomez@modesens.com','TheFashionBook@modesens.com','helenaglazer@gmail.com',
'julia@galmeetsglam.com',
'1074201799@qq.com',
'maklawless@gmail.com',
'rumi@fashiontoast.com',
'rvaidila@gmail.com',
'vanessa@thehautepursuit.com',
'guobiting@modesens.cn')
