import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

// In React, the className attribute is used instead of the class attribute for 
// applying CSS classes to HTML elements. This is because class is a reserved 
// keyword in JavaScript, and using it in JSX syntax would cause a syntax error.


