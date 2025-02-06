class add
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    sum()
    {
        return this.a+this.b;
    }
    product()
    {
        return this.a*this.b;
    }
}

const obj = new add(10,20);
console.log(obj.sum());
console.log(obj.product());