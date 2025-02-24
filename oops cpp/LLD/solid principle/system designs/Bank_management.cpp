#include <bits/stdc++.h>
using namespace std;

class Bank
{
    int account_num;
    string accountHolderName;
    string accountType;
    double balance;

public:
    // Constructor
    Bank(int accNum, string accHolder, string accType, double bal)
    {
        account_num = accNum;
        accountHolderName = accHolder;
        accountType = accType;
        balance = bal;
    }

    // Getter functions
    int getAccountNumber() { return account_num; }
    double getBalance() { return balance; }

    // Setter function
    void setBalance(double newBalance) { balance = newBalance; }

    // Display account details
    void displayAccount()
    {
        cout << "\nAccount Details:\n";
        cout << "Account Number: " << account_num << endl;
        cout << "Account Holder: " << accountHolderName << endl;
        cout << "Account Type: " << accountType << endl;
        cout << "Balance: $" << balance << endl;
    }
};

// Deposit class
class Deposit
{
public:
    void depositMoney(Bank &account, double amount)
    {
        double balance = account.getBalance();
        balance += amount;
        account.setBalance(balance);
        cout << "Deposit successful! New Balance: $" << balance << endl;
    }
};
class Withdraw
{
public:
    void withdrawMoney(Bank &account, double amount)
    {
        double balance = account.getBalance();
        if (balance >= amount)
        {
            balance -= amount;
            account.setBalance(balance);
            cout << "Withdraw successful! New Balance: $" << balance << endl;
        }
        else
        {
            cout << "Insufficient balance! Withdraw failed.\n";
        }
    }
};
// Global list of accounts
vector<Bank> accounts;
int account_num = 1000; // Starting account number

// Function to create an account
void createAccount()
{
    string accountHolderName, accountType;
    double balance = 0.0;
    int typeOption;

    cout << "Enter your name: ";
    cin >> accountHolderName;

    cout << "Choose Account Type:\n";
    cout << "1 > Saving Account\n";
    cout << "2 > Current Account\n";
    cout << "3 > Fixed Account\n";
    cin >> typeOption;

    switch (typeOption)
    {
    case 1:
        accountType = "Saving Account";
        break;
    case 2:
        accountType = "Current Account";
        break;
    case 3:
        accountType = "Fixed Account";
        break;
    default:
        cout << "Invalid choice! Defaulting to Saving Account.\n";
        accountType = "Saving Account";
    }

    // Create a new account and add it to the list
    accounts.push_back(Bank(++account_num, accountHolderName, accountType, balance));

    cout << "\nAccount created successfully!\n";
    accounts.back().displayAccount();
}

// Function to find an account by account number
Bank *findAccount(int accNum)
{
    for (auto &acc : accounts)
    {
        if (acc.getAccountNumber() == accNum)
            return &acc;
    }
    return nullptr; // Account not found
}

// Function to deposit money
void depositMoney()
{
    int accNum;
    double amount;
    cout << "Enter your account number: ";
    cin >> accNum;

    Bank *account = findAccount(accNum);
    if (account)
    {
        cout << "Enter amount to deposit: $";
        cin >> amount;

        if (amount > 0)
        {
            Deposit d;
            d.depositMoney(*account, amount);
        }
        else
        {
            cout << "Invalid amount! Deposit must be greater than 0.\n";
        }
    }
    else
    {
        cout << "Account not found!\n";
    }
}

void withDrawMoney()
{
    int accNum;
    int amount;
    cout << "Enter your account number: ";
    cin >> accNum;

    Bank *account = findAccount(accNum);
    if (account)
    {
        cout << "Enter amount to withdraw: $";
        cin >> amount;

        if (amount > 0)
        {
            Withdraw w;
            w.withdrawMoney(*account, amount);
        }
        else
        {
            cout << "Invalid amount! Withdraw must be greater than 0.\n";
        }
    }
    else
    {
        cout << "Account not found!\n";
    }
}
// Main function
int main()
{
    int option;
    while (true)
    {
        cout << "\n===== Welcome to OOPS Bank =====\n";
        cout << "1. Create Account\n";
        cout << "2. Deposit Money\n";
        cout << "3. Withdraw Money\n";
        cout << "4. Display All Accounts\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> option;

        switch (option)
        {
        case 1:
            createAccount();
            break;
        case 2:
            depositMoney();
            break;
        case 3:
            withDrawMoney();
            break;
        case 4:
            for (auto &acc : accounts)
            {
                acc.displayAccount();
            }
            break;
        case 5:
            cout << "Thank you for using OOPS Bank! Exiting...\n";
            return 0;
        default:
            cout << "Invalid option! Please try again.\n";
        }
    }
}
