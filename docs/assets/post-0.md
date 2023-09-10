# HTML Notes- Aditya
## *Modified on 09/09/2023*
![html5](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/260px-HTML5_logo_and_wordmark.svg.png)  
### Introduction:
- HTML stands for *Hyper Text Markup Language*.
- HTML is not a programming language but a **markup language** meant for creating web pages.
- Helps to present information in a presentable manner and has no logical concept behind html code.
- Building block of web.
- HTML helps in creating the skeleton of any website- format in which data will be presented to the user.

### Creating basic HTML page:
- File must end with .html extension.
- Home page should be **index.html**, it should be the root file.

### HTML Tags:
- HTML Tags are the building block of any html file.
- tags format information how information will be displayed
- Element names surrounded by angle brackets.
  
  ``` html
  <tagname>content</tagname>
  ```

- HTML Tags are generally of two types:
  - Container Tags (with opening and closing tags; content in between)
  - Empty Tags (without closing tags)

### Basic HTML Page Structure:

``` html
    <!-- DOCTYPE tells the document type to the web browser -->
    <!DOCTYPE html>
    <html lang="en">
    <!-- specifies the browser about the base language for the html page -->
    <head>
    <!--Meta data for web page description comes here-->
    <meta charset="UTF-8">
    <!-- encoding type -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- title of the web page -->
    </head>
    <body>
    <!--WEB PAGE MAIN CONTENT COMES HERE-->
    </body>
    </html>
```

- Comments are written in this way
  ``` html
    <!--Commented code will not get parsed-->
  ```
- Heading tags (from H1 TO H6)
   ``` html
   <h1>HEADING 1</h1>
   <h2>HEADING 2</h2>
   <h3>HEADING 3</h3>
   <h4>HEADING 4</h4>
   <h5>HEADING 5</h5>
   <h6>HEADING 6</h6>
   ```
   Output:
   <h1>HEADING 1</h1>
   <h2>HEADING 2</h2>
   <h3>HEADING 3</h3>
   <h4>HEADING 4</h4>
   <h5>HEADING 5</h5>
   <h6>HEADING 6</h6>
- Paragraph tag
  ``` html
  <p>Block Level element use to display data in paragraph form.</p>
  ``` 