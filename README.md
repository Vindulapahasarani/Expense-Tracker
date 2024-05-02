# Expense-Tracker
It creates a simple expense tracker with functionality to add, edit, and delete expenses.

![image](https://github.com/Vindulapahasarani/Expense-Tracker/assets/85609775/978fc90c-74ec-4138-a574-2cb47e7d05b7)

![image](https://github.com/Vindulapahasarani/Expense-Tracker/assets/85609775/032bb65e-9359-4038-be87-b14f182a416e)

![image](https://github.com/Vindulapahasarani/Expense-Tracker/assets/85609775/dea965c4-45c2-48f2-839b-801c8ed28748)

![image](https://github.com/Vindulapahasarani/Expense-Tracker/assets/85609775/93de4fca-e183-4fb5-891d-db0c02bb0c95)


Here's a brief overview of what each part of the code does:

1. **HTML Structure**: 
   - Defines the structure of the expense tracker interface with input fields for description and amount, and buttons for adding expenses.
   - Includes a container to hold the interface elements.

2. **CSS Styling**: 
   - Styles the HTML elements to improve the appearance and layout of the expense tracker.
   - Sets styles for the container, form controls, buttons, and expense list.

3. **JavaScript Functionality**:
   - Listens for the DOMContentLoaded event to ensure that the JavaScript code runs after the HTML has been fully loaded.
   - Defines variables to reference the expense form and expense list elements.
   - Retrieves expenses from localStorage or initializes an empty array if no expenses are stored.
   - Defines a function to render the list of expenses, displaying each expense with its description, amount, and edit/delete buttons.
   - Defines an event listener for the expense form submission. When the form is submitted, it extracts the description and amount values, creates a new expense object, adds it to the expenses array, and renders the updated list of expenses.
   - Defines global functions `editExpense` and `deleteExpense` to handle editing and deleting expenses respectively. These functions prompt the user for updated information and update the expenses array accordingly.
   - Calls the `renderExpenses` function initially to display any existing expenses stored in localStorage.

4. **Local Storage**:
   - Uses localStorage to persist the list of expenses between page reloads. The expenses array is stored as a JSON string in localStorage, and it is retrieved and parsed when the page loads.

Overall, this code provides a basic but functional expense tracker with the ability to add, edit, and delete expenses. You can further enhance it by adding features such as category selection, date input, filtering, and sorting.
