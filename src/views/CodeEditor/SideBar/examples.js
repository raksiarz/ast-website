const examples = [
    {
        key: 1,
        title: 'Hello World',
        value: 'let hello = "Hello World";\nhello;'
    },
    {
        key: 2,
        title: 'Adder',
        value: 'let newAddr = fn(x) {\n  fn(y) {\n    x + y\n  }\n};\nlet addTwo = newAddr(2);\naddTwo(3);'
    }
]

export default examples
