# JavaScript Notes- Aditya
## *Modified on 15/06/2023*
### Introduction:
- Can be used for both frontend and backend code.
- Javascript is case senstive language. 


### Data Types:
- 8 Datatypes: undefined, null, boolean, string, symbol,bigint, number, object.
- A String literal is a series of zero or more characters enclosed in single or double quotes.
- decimal values are also known as floating point numbers or floats.
- Single and double quotes both work in same manner when it comes to strings.



### Variables:
- Store values
- allows manipulating data in dynamic fashion
- user doesn't touch the value but the label attached to that value
- variable names can be made up of numbers, letters, and $ or _
- variable name must not start with spaces or with a number
    ```js
    var myFirstVariable; 
    ```
- To initialize variable at time of decalation, simply use this syntax:
  ```js
  var mySecondVariable=0;
    ```
- Initial value of any variable is ` undefined `, any calculation (mathematical or string manipulation), will result in either `NaN` or `undefined`.
- Best practice - use **camelCase** to declare variables: first letter is lowercase, and first letter of each subsequent word is capitalized.
- Variables declared using **const** keyword are **read-only**, and can't be reassigned.
- Uppercase for immutables (const), and camelCase for mutables (var/let)

### Difference between **var** and **let** keywords:
- variables declared with **var** keywords can be easily overwritten.
- **let** keyword introduced in *ES6*, resolved this issue. When one uses **let** keyword, a variable with the same name **can be declared only once**. 

### Operators:
- increment operator `++`
  ```js
  i++;
  ``` 
  is equivalent to 
  ```js
  i=i+1;
  ```
- decrement operator `--`
- Remainder opertor `%` gives the remainder of the division of two numbers. e.g. `5%2=1`, which is same as `5/2=2 remainder 1`
  
### Even/Odd numbers using `%` operator:
- if `n%2==0`, then n is even
- if `n%2!=0`, then n is odd
  
### Escaping Literal Quotes in Strings
- use `\` to escape a quote when typing this kind of sentence in javacript:
  ```js
  const quote="Aditya said,\"He lives under a rock\".";
  ```
  The output will be: `Aditya said,"He lives under a rock".`  

### Escape Sequences in Strings:
- `\'`- single quote
- `\"`- double quote
- `\\`- backslash
- `\n`- newline
- `\t`- tab
- `\r`- carriage return
- `\b`- backspace
- `\f`- form feed

<!-- Concatenating Strings with the Plus Equals Operator -->