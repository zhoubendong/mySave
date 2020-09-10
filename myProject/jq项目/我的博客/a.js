const list = [
    {name: 'a'},
    {name: 'a'},
    {name: 'a'},
    {name: 'c'},
    {name: 'c'},
    {name: 'e'},
    {name: 'e'},
    {name: 'e'},
    {name: 'e'},
    {name: 'e'}
]



function test(data) {
    let acc = {
        ret:[],
        prevItem:null,
    }

    for (let i = 0; i < data.length; i++) {
        let curr = data[i];
        if (!acc.prevItem || acc.prevItem.name !== curr.name) {
            curr = { ...curr, showTitle: true };
        }
        acc.ret.push(curr);
        acc.prevItem = curr;
    }
    return acc.ret;
}

// console.log(test(list))



const result = list.reduce((acc, curr) => {
    if (!acc.prevItem || acc.prevItem.name !== curr.name) {
        curr = { ...curr, showTitle: true };
    }
    acc.ret.push(curr);
    acc.prevItem = curr;
    
    return acc;
}, {
    ret:[],
    prevItem:null,
});

console.log(result.ret)