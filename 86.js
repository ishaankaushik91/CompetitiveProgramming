let a = [
    { a: 1, rank: null },
    { a: 10, rank: null },
    { a: 1000000, rank: null },
    { a: 4, rank: null },
    { a: 10, rank: null },
    { a: 8, rank: null },
    { a: 7, rank: null },
    { a: 2, rank: null },
    {a : 7, rank : null}
  ];

a.sort((a, b) => {
    return b.a - a.a;
});

console.log(a);

a[0].rank = 1;

for (let i = 1; i < a.length; i++)
{
    for (let j = i; j < a.length; j++)
    {
        if (a[j].a == a[0].a) a[j].rank = 1;

        else if (a[j].a == a[i - 1].a && a[j].rank == null)
        {
            a[j].rank = a[i - 1].rank;
        }

        else if (a[i].a == a[j].a && a[i].rank == null)
        {
            a[j].rank = a[i - 1].rank + 1;
            break;
        }
    }
}

console.log(a);