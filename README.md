# **Expenses** :moneybag: :euro: :dollar: :pound:

## About:

- A personal finance application for daily control of incomes and expenses.  

## Screenshots:

<div align="center">
    <img src="./readme/screenshot_01_login.png" width="100px">
    <img src="./readme/screenshot_02_dashboard.png" width="100px">
<div>

## How it works:

### Minimum Viable Product (MVP):

- The user will create a registration in the application informing a user name and a password.  
  
- When logging into the application, the user will go to the "Transactions" screen, where the user will register incomes and expenses. The user will have to inform the type (income or expense), the date, the category (salary, rent, food, entertainment, etc.), a description (this information is optional), and a value of the income or expense in EUR.  
  
- After the registration of at least one income or expense, the user will enable the "History" and "Balance" screen.  
  
- In the "History" screen the user will be able to see all the incomes and expenses registered, having the option to display information by month and year.  
  
- In the "Balance" screen the user will be able to see the "current balance" which will be the result of the sum of all expenses subtracted by the sum of all incomes.  

### Plus (after completion of the MVP):

- Dashboard (incomes, expenses, balance, etc.);
- Accounts (so that more than one person can read and/or write data);
- Export data to a file (csv, xlsx, pdf, etc.);
- Store invoice photos;
- Possibility of using other currencies (United States Dollar, Pound sterling, etc.);
- Application color themes.

## Benefits:

- Improve personal or family financial planning;  
- Quickly provide a financial balance to help in decision-making.  

## Examples:

- [Mobills](https://www.mobillsapp.com/)
- [SPENDEE](https://www.spendee.com/)
- [Fast Budget](https://fastbudget.app/)

## Challenges:

- Creation of a user-friendly interface;  
- Application authentication and security process;  
- Create a mobile version using React Native.  

## Features:

- Home page with desktop and mobile versions;
- Authentication;
- Add incomes and expenses (type, date, category, description, and values);
- Transaction history;
- Monthly or annual balance;
- Reports.

## Tech Stack:

**_Frontend:_**  

- HTML;
- CSS;
- SASS;
- JavaScript;
- React;
- React Native.

**_Backend:_**  

- Node.js;
- Express;
- PostgreSQL.

**_Dependencies:_**  

- [TypeORM;](https://typeorm.io/)  
- [axios](https://github.com/axios/axios);

**_Tools:_**  

- Git;
- GitHub;
- Visual Studio Code;
- Notion.so (Kanban boards, wikis, calendars, and reminders);
- Figma.com (UX design tool).

## Prototype:

- https://www.figma.com/file/UZ4ZKhxA1ZwoKbIezuIRiQ/Expense-App?node-id=0%3A1  

## Database Diagram:

- https://dbdiagram.io/d/5fafd2d63a78976d7b7be3eb  

## How to run the project

### front-end


```
    cd web
    npm start
```

## Notes: 

### back-end

- If migration fails due to uuid problems you might add PostgreSQL extensions:  
DROP EXTENSION "uuid-ossp";  
CREATE EXTENSION "uuid-ossp";  