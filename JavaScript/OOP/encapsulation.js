class BankAccout{
    #balance =0;

    deposite(amount)
    {
        this.#balance += amount;

        return this.#balance
    }

    //we can access it outside the class using getter function
    getBalance()
    {
        return `${this.#balance}`;
    }
}

let account = new BankAccout()

console.log(account.getBalance());
