
// Set the values
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', '30');
localStorage.setItem('country', 'United States');
localStorage.setItem('city', 'New York');

// Retrieve the values
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const age = localStorage.getItem('age');
const country = localStorage.getItem('country');
const city = localStorage.getItem('city');

console.log(firstName, lastName, age, country, city);

//student object

var student = {
    firstName: "Tejaram",
    lastName: "Akkupalli",
    age: 22,
    skills: ["JavaScript", "HTML", "CSS"],
    country: "India",
    enrolled: true
  };

  // Convert the student object to a JSON string
  var studentJSON = JSON.stringify(student);

  // Store the student object in localStorage
  localStorage.setItem('student', studentJSON);
  var storedStudentJSON = localStorage.getItem('student');
  var storedStudent = JSON.parse(storedStudentJSON);

  // Print the student data on the web page
  var studentDataDiv = document.getElementById('studentData');
  studentDataDiv.innerHTML += "<h2>Student Details</h2>";
  studentDataDiv.innerHTML += "<p>First Name: " + storedStudent.firstName + "</p>";
  studentDataDiv.innerHTML += "<p>Last Name: " + storedStudent.lastName + "</p>";
  studentDataDiv.innerHTML += "<p>Age: " + storedStudent.age + "</p>";
  studentDataDiv.innerHTML += "<p>Skills: " + storedStudent.skills.join(", ") + "</p>";
  studentDataDiv.innerHTML += "<p>Country: " + storedStudent.country + "</p>";
  studentDataDiv.innerHTML += "<p>Enrolled: " + storedStudent.enrolled + "</p>";

//person account
document.addEventListener('DOMContentLoaded', () => {
  // Define the personAccount object
  const personAccount = {
    firstname: 'John',
    lastname: 'Doe',
    incomes: new Map([
      ['Salary', 3000],
      ['Bonus', 500]
    ]),
    expenses: new Map([
      ['Rent', 1000],
      ['Groceries', 200],
      ['Utilities', 150]
    ]),

    // Calculate total income
    totalIncome() {
      let sum = 0;
      for (const amount of this.incomes.values()) {
        sum += amount;
      }
      return sum;
    },

    // Calculate total expense
    totalExpense() {
      let sum = 0;
      for (const amount of this.expenses.values()) {
        sum += amount;
      }
      return sum;
    },

    // Get account information
    accountInfo() {
      return `<p><strong>Account Holder:</strong> ${this.firstname} ${this.lastname}</p>
              <p><strong>Total Income:</strong> $${this.totalIncome()}</p>
              <p><strong>Total Expense:</strong> $${this.totalExpense()}</p>
              <p><strong>Account Balance:</strong> $${this.accountBalance()}</p>`;
    },

    // Add income
    addIncome(description, amount) {
      this.incomes.set(description, amount);
    },

    // Add expense
    addExpense(description, amount) {
      this.expenses.set(description, amount);
    },

    // Calculate account balance
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  };

  // Display account information in the web page
  const accountInfoDiv = document.getElementById('accountInfo');
  accountInfoDiv.innerHTML = personAccount.accountInfo();
});
