
# **Expenses** :moneybag: :euro: :dollar: :pound:

Control personal expenses and incomings.

## Prototype:

https://www.figma.com/file/UZ4ZKhxA1ZwoKbIezuIRiQ/Expense-App?node-id=0%3A1  

## Database Diagram:

https://dbdiagram.io/d/5fafd2d63a78976d7b7be3eb

## NOTE: 
If migration fails due to uuid problems you might add postgres extensions:
DROP EXTENSION "uuid-ossp";
CREATE EXTENSION "uuid-ossp";

### Features:

- Login;
- Dashboard;
- Add expense;
- Add budget;
- Reports;

## Technologies:

- HTML;
- CSS;
- JavaScript;
- TypeScript;
- React;
- PostgreSQL;

### _Dependencies:_

- [TypeORM;](https://typeorm.io/)  
- [axios](https://github.com/axios/axios);

## How to run the project

### front-end

```
cd web
npm start
```