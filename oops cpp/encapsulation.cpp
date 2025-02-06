//^ Encapsulation is one of the four pillars of Object-Oriented Programming (OOP). It is the concept of hiding data and allowing controlled access to it via public methods (getters and setters).

//* Encapsulation is the bundling of data (variables) and the code (functions) that manipulates it into a single unit (class) and restricting direct access to some of its components. It is used to protect the data from unauthorized access and modification.

//& It bundles data (variables) and the code (functions) that manipulates it into a single unit (class) and restricts direct access to some details of the object


//~  Why is Encapsulation Important?
// Data Hiding               – Prevents direct modification of sensitive data.
// Improves Security         – Only controlled access to data is allowed.
// Improves Maintainability  – Code structure is more manageable.
// Flexibility & Reusability – Allows modification without affecting other parts of the code.

//^ in key points

//! cant access the private data member directly
//* we can access the private data member using getter and setter method
//^ keep data memeber and isolated from the outside world
//^ we can validate the data before setting it


//~  Summary of Encapsulation
//^  Feature	                      ---->>>       Encapsulation in Action
//^  Hides Data	                      ---->>>       Private variables cannot be accessed directly.
//^  Restricts Access	              ---->>>       Data is accessed via controlled methods (getters/setters).
//^  Prevents Invalid Changes	      ---->>>       Only valid data is set via setters.
//^  Increases Code Maintainability	  ---->>>       Internal logic can change without affecting other parts of the program.




#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;  // ✅ Private data member (cannot be accessed directly)

public:
    // Constructor to initialize balance
    BankAccount(double initialBalance) {
        if (initialBalance < 0)
            balance = 0;  // Prevent negative balance
        else
            balance = initialBalance;
    }

    // Getter method (Encapsulation: controlled access to balance)
    double getBalance() {
        return balance;
    }

    // Setter method (Encapsulation: validation before modifying balance)
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: " << amount << ", New Balance: " << balance << endl;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn: " << amount << ", Remaining Balance: " << balance << endl;
        } else {
            cout << "Insufficient funds or invalid amount!" << endl;
        }
    }
};

int main() {
    BankAccount account(1000);  // Creating an account with $1000 balance

    account.deposit(500);   // ✅ Allowed (using setter)
    account.withdraw(200);  // ✅ Allowed (using setter)

    // cout << account.balance; ❌ ERROR! Direct access is not allowed

    cout << "Final Balance: " << account.getBalance() << endl;  // ✅ Using getter

    return 0;
}
