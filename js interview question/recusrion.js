//* Recusrion ----> same as c++


function num (n)
{
    if(!n) return ;
     num(n-1);
     console.log(n)
}

num(5);