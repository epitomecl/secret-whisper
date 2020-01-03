# perform-check

## Server start
```
cd server
npm install
node app.js
```

## Client start
```
npm install
npm run serve
```

## POSTMan Test Link
[link](https://www.getpostman.com/collections/8757926d110b3084c50b)

## Assumptions
1. No authentication: restricting access based on user or admin. Just implment one page.
2. Predefined : UserId on EmployeeView
3. If you delete Employee, the Review associated with this Employee will not be removed.
4. In server side, to avoid CORS issue, allow access to endpoint from all

## Tech stack
VueJS, Node.js, Firebase(DB)

