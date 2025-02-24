#include <bits/stdc++.h>
using namespace std;

// ✅ ISP: Separate interfaces for Account and Transactions
class IAccount {
public:
    virtual void displayAccount() = 0;
    virtual int getAccountNumber() = 0;
    virtual double getBalance() = 0;
    virtual void setBalance(double newBalance) = 0;
};

class ITransaction {
public:
    virtual void processTransaction(IAccount &account, double amount) = 0;
};

// ✅ SRP: Single Responsibility for Account Management
class BankAccount : public IAccount {
private:
    int account_num;
    string accountHolderName;
    string accountType;
    double balance;

public:
    BankAccount(int accNum, string accHolder, string accType, double bal)
        : account_num(accNum), accountHolderName(accHolder), accountType(accType), balance(bal) {}

    int getAccountNumber() override { return account_num; }
    double getBalance() override { return balance; }
    void setBalance(double newBalance) override { balance = newBalance; }

    void displayAccount() override {
        cout << "\nAccount Details:\n";
        cout << "Account Number: " << account_num << endl;
        cout << "Account Holder: " << accountHolderName << endl;
        cout << "Account Type: " << accountType << endl;
        cout << "Balance: $" << balance << endl;
    }
};

// ✅ OCP & LSP: Polymorphic Transactions
class Deposit : public ITransaction {
public:
    void processTransaction(IAccount &account, double amount) override {
        account.setBalance(account.getBalance() + amount);
        cout << "Deposit successful! New Balance: $" << account.getBalance() << endl;
    }
};

class Withdraw : public ITransaction {
public:
    void processTransaction(IAccount &account, double amount) override {
        if (account.getBalance() >= amount) {
            account.setBalance(account.getBalance() - amount);
            cout << "Withdrawal successful! New Balance: $" << account.getBalance() << endl;
        } else {
            cout << "Insufficient balance! Withdrawal failed.\n";
        }
    }
};

// ✅ DIP: Dependency Injection in BankService
class BankService {
private:
    vector<BankAccount> accounts;
    int account_num = 1000; // Auto-incrementing account numbers

public:
    void createAccount() {
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

        switch (typeOption) {
            case 1: accountType = "Saving Account"; break;
            case 2: accountType = "Current Account"; break;
            case 3: accountType = "Fixed Account"; break;
            default: cout << "Invalid choice! Defaulting to Saving Account.\n"; accountType = "Saving Account";
        }

        accounts.push_back(BankAccount(++account_num, accountHolderName, accountType, balance));
        cout << "\nAccount created successfully!\n";
        accounts.back().displayAccount();
    }

    IAccount* findAccount(int accNum) {
        for (auto &acc : accounts) {
            if (acc.getAccountNumber() == accNum)
                return &acc;
        }
        return nullptr;
    }

    void depositMoney(ITransaction &transaction) {
        int accNum;
        double amount;
        cout << "Enter your account number: ";
        cin >> accNum;

        IAccount *account = findAccount(accNum);
        if (account) {
            cout << "Enter amount to deposit: $";
            cin >> amount;
            if (amount > 0) transaction.processTransaction(*account, amount);
            else cout << "Invalid amount! Deposit must be greater than 0.\n";
        } else cout << "Account not found!\n";
    }

    void withdrawMoney(ITransaction &transaction) {
        int accNum;
        double amount;
        cout << "Enter your account number: ";
        cin >> accNum;

        IAccount *account = findAccount(accNum);
        if (account) {
            cout << "Enter amount to withdraw: $";
            cin >> amount;
            if (amount > 0) transaction.processTransaction(*account, amount);
            else cout << "Invalid amount! Withdrawal must be greater than 0.\n";
        } else cout << "Account not found!\n";
    }

    void displayAllAccounts() {
        for (auto &acc : accounts) acc.displayAccount();
    }
};

// ✅ SRP: `main()` only handles user interaction
int main() {
    BankService bankService;
    Deposit depositTransaction;
    Withdraw withdrawTransaction;
    int option;

    while (true) {
        cout << "\n===== Welcome to OOPS Bank =====\n";
        cout << "1. Create Account\n";
        cout << "2. Deposit Money\n";
        cout << "3. Withdraw Money\n";
        cout << "4. Display All Accounts\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> option;

        switch (option) {
            case 1: bankService.createAccount(); break;
            case 2: bankService.depositMoney(depositTransaction); break;
            case 3: bankService.withdrawMoney(withdrawTransaction); break;
            case 4: bankService.displayAllAccounts(); break;
            case 5: cout << "Thank you for using OOPS Bank! Exiting...\n"; return 0;
            default: cout << "Invalid option! Please try again.\n";
        }
    }
}
