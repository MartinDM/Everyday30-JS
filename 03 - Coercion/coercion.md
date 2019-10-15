# Coercion

Now we have got familiar with *types* is Javacript, let us consider that JavaScript is not a *typed* language. This means JavaScript is, let's say, *unique* in how it interprets variables and evaluates conditions.

The expressive, flexible nature of JavaScript without the need to *specify* types of variables, comes with the caveat that we are free to trip ourselves up when evaluating variables for logic and control flow.

Let's look at how we might evaluate an expression in Python; a *typed* langauge:

`'The year is ' + 2019`
`// `

JS tries to be smart and coerces the string to an integer. It will in this case treat inputs as a number  

`console.log('5' - 5); // 0`

Treats everything as a string:
`console.log(5 + '5'); // 55`

To compare this to how another language might interpret such a mixing of types, see this example from Python:  
``

## Typing 

The key point here is that this can cause errors; and not the easy-to-spot ones, but logical errors.  

JavaScript is not a typed language, meaning that developers are free - at their peril - to mix and match types, reassigning then to variables, and using them to determine control flow.
This means that 