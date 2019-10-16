# Coercion

Now we have got familiar with *types* is JavaScript, let us consider that JavaScript is not a *typed* language. This means JavaScript is, let's say, *unique* in how it interprets variables and evaluates conditions.

The expressive, flexible nature of JavaScript without the need to *specify* types of variables, comes with the caveat that we have to be more cautious when evaluating variables to avoid unexpected results as we'll see. Let's look at *Coercion*.

This is when the compiler will try to be 'smart' about interpreting variables, the logic behind which we should at least be familiar with to ensure we understand *how* our logic is evaluated to give the results we expect.

*Corcion* has a bad reputation, but it pays off to really learn and understand it so we can be confident in checking for values in our code, not to mention understanding what's going on *under the hood*!
> Anything we don't learn is indistinguishable from magic - Arthur C Clarke

Here's how we might evaluate an expression in Python; a *typed* langauge:

`'The year is ' + 2019`  

Results in:  
`TypeError: can only concatenate str (not "int") to str `  

Of course it would error, as we cannot add a string to a number.

Now in JavaScript, the Number is *coerced* to a String.

> Try typing some of these directly into your browsers' console...

`'The year is ' + 2019`

...which results in concatenation:  
`"The year is 2019"`

**Similarly:**  
`5 + '5'`  
returns `55` as the compiler will *coerce* the Number 5 into a string in order to *concatenate* them as `'55'`

But what about this...  
Without using the console yet, what would we expect here?  
`5 + 5 + '5'`  

> **Solution**  
> *Answer:* 105.  
> The compiler will carry out the first operation, which is (5+5), then coerce that to a String, and concatenate it to the `'5'`, resulting in `105`.
>
>We're having fun  🚀

But with a minus, it's different. What might you expect from typing this into the console?:
`'5' - 5`

Yep, Number `0`.  
That's because the String 5 is *coerced* to a Number in order for the `-` operator to be applied.

This is Type Corcion and it is intentional and follows expected rules.

## Typed

Part of what makes JavaScript so expressive (and so accessible!) is its *dynamically-typed* nature, as opposed to *typed* like Python or Java.

This means developers are free to mix and match types, reassigning them to variables, and using them to determine control flow without at any point needing to *specify* what the type of a variable should be (either when creating it or checking it).

The key point here is that this can generate errors; and not the easy-to-spot syntax ones but as logical bugs if we don't account for type coercion when evaluating variables.

## Type checking with `typeof`

So how to add in such a check on the actual *type* of a variable?  Fortunately, we can guard againast anything unexpected by coding defensively. 

When checking strings and numbers we can use JavaScripts' 'built-in' method `typeof` to check the type of a given variable.

> **Tip:**  
> You may notice we're using single quotes for strings. In JavaScript, either single or double quotes are valid, although single tends to be more popular. In projects, it's more important to pick one and keep it consistant.  
> 
> Single quotes allow you to store double quotes in HTML strings without ecaping them, so might be more convenient:  
`var HtmlString = '<div class="content">...</div>'`

Let's create some variables.  
Type these into your console of choice:  
`const age = 30`  
`const year = "2019"`  
`const name = 'Alex'`  

And then check their type:  
`typeof age`  
...which should return 'number', and      
`typeof name`  
...which should return 'string'
`typeof year`  
...which should return 'string'

>Remember you'll need to write these as `console.log(typeof name)` to read their output if not writing directly to the console in your browser.

So one way to add some *strictness* to our logic is to enforce type equality using the triple-equals `===` operator:  
````
if (age === 35) {
   console.log('We know age is definitely a number!');
}
````
> Notice the `===` we saw in a previous section. This ensures we're checking for a number. A string of "35" would return false.

In most cases, using loose equality (`==`) is discouraged. The result of a comparison using *strict* equality (`===`) is easier to predict as there's no room for type coercion to change the outcome.

# Booleans and coercion

One other thing to note is that numbers `0` or `1` can be evaluated as booleans in JavaScript, for example `1` can evaluate as `true`.
```
const pass = 1;
if (pass) {
  console.log('Passed!')
}
```
We can verify this by running these and seeing how the boolean is evaluated as `0` or `1`:  
`5 + true` // 6  
`5 + false` // 5

## Truthy and Falsy

Finally, let's look at *Truthy* and *Falsy* values.

> a truthy value is a value that translates to true when evaluated in a Boolean context - [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

It's often joked that JavaScript has some quirks, particularly when considering what makes a truthy value! But understanding which values constitute each in JavaScript is helpful when evaluating them and knowing what to expect given. Here are some common examples of each.

**falsy** values meaning they will evaluate `false`:

- false
- `0`
- '0'
- '' (empty string)
- null
- undefined

**truthy** values, meaning they will evaluate `true`:
- true
- '0'
- `1`
- ' ' (any token, including space in a string)
- {} (empty object)
- [] (empty array)

## Resources on Types and Cocercion
- [MDN - Equality comparisons and sameness
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [MDN - Truthy values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)    
- [MDN - Falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)    
- [Teacher Kyle Simpson on JavaScript's reputation and development](https://www.youtube.com/watch?v=WoL4BfSv7pI)