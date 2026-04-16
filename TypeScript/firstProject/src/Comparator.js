function sort(a, com) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = 0; j < a.length - 1 - i; j++) {
            if (com.compare(a[j], a[j + 1]) > 0) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    return a;
}
var ar = [
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' }
];
var comp = {
    compare: function (ob1, ob2) { return ob1.id - ob2.id; }
};
sort(ar, comp);
console.log(ar);
