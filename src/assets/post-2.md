### Hosting Angular App on Github pages
Points to keep in mind for smooth deployment
- In *Angular.json* file, change the buildOutput path to “docs” as below:
  
  ``` json
   "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "docs",
  ```

- In index.html, change the base-href with your github repository name, since once deployed your website url will change

    ``` html
    <head>
  <meta charset="utf-8">
  <title>Testproject</title>
  <base href="/testAngular/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    ```

- In case there is some asset embedded, linked from asset folder, change it src destination to just asset/file_name, instead of providing relative path
  
  ```html
  <div>
  <p>Aditya is Trying hosting angular website on Github.</p>
  <img src="assets/JJBA_wall.png " alt="">
  </div>
  ```
