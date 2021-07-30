var test = {
    "a":"Test 1",
    "b":[
    {
    "c":["Test 2","Test 3","Test 4"],
    "d":"Test 5"
    },
    {
    "e":"Test 6",
    "f":["Test 7","Test 8","Test 9","Test 10"]
    }
    ],
    "g":["Test 11", "Test 12"]
}; 

const i = test.b[1].f[2]
console.log(i);