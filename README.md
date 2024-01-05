# Angular Challenge

(This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.)

## The task

This simple application has a bug in it: your task is to fix it as fast as you can! 
Run the application, and you will see three links on the main page. Clicking on any of them completely breaks the application. Make the application work without removing any existing functionality to win a special prize! 

## Running the app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Thoughts

- This problem is a long standing problem in Angular.
- The crux of the problem is that change detection checks causes an infinite loop when you use `*ngFor` and `routerLinkActive` together.  `Get` inputs may also play a part in the problem.  
- Simpliest solution: upgrade to Angular 17 and use its new template syntax.
- After installing the Angular 17 packages, I had to change `browserTarget` to `buildTarget` in the `angular.json`.
- I removed `vendorChunk: true` from the `angular.json` as well.  

## Useful Resources

- [Stack Overflow](https://stackoverflow.com/questions/47384521/angular-router-link-stops-working) - router link stops working
- [Github](https://github.com/angular/angular/issues/20995) - RouterLinkActive Causes Browser To Freeze When Inside NgFor #20995