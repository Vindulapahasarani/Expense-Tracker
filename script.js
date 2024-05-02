document.addEventListener('DOMContentLoaded', function() {
  const expenseForm = document.getElementById('expense-form');
  const expensesList = document.getElementById('expenses');

  // Retrieve expenses from localStorage or set empty array
  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  // Render expenses
  function renderExpenses() {
    expensesList.innerHTML = '';
    expenses.forEach(function(expense, index) {
      const expenseItem = document.createElement('div');
      expenseItem.classList.add('expense');
      expenseItem.innerHTML = `
        <div>
          <span>Description: ${expense.description}</span>
          <span>Amount: $${expense.amount}</span>
        </div>
        <div>
          <button onclick="editExpense(${index})">Edit</button>
          <button onclick="deleteExpense(${index})">Delete</button>
        </div>
      `;
      expensesList.appendChild(expenseItem);
    });
    // Save expenses to localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  // Add new expense
  expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description.trim() !== '' && !isNaN(amount) && amount > 0) {
      const newExpense = {
        description: description,
        amount: amount
      };
      expenses.push(newExpense);
      renderExpenses();
      expenseForm.reset();
    } else {
      alert('Please enter valid description and amount.');
    }
  });

  // Edit existing expense
  window.editExpense = function(index) {
    const updatedDescription = prompt('Enter updated description:', expenses[index].description);
    const updatedAmount = parseFloat(prompt('Enter updated amount:', expenses[index].amount));
    if (updatedDescription !== null && updatedAmount !== null && !isNaN(updatedAmount) && updatedAmount > 0) {
      expenses[index].description = updatedDescription;
      expenses[index].amount = updatedAmount;
      renderExpenses();
    } else {
      alert('Please enter valid description and amount.');
    }
  };

  // Delete expense
  window.deleteExpense = function(index) {
    if (confirm('Are you sure you want to delete this expense?')) {
      expenses.splice(index, 1);
      renderExpenses();
    }
  };

  // Initial render
  renderExpenses();
});
