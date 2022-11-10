# Class26AngularAnimations

Source: https://ankitsharmablogs.com/understanding-angular-animation/

Animation is transition from one state of the element to another state.

- Angular defined three different state for an element:

1. Void state – void state represent the state of an element which is not part of the DOM. This state occurs when an element is created but not yet placed in the DOM or the element is removed from the DOM. This state is useful when we want to create animation while adding or removing an element from our DOM. To define this state in our code we use the keyword void.

2. Wildcard state – This is also known as the default state of the element. The styles defined for this state is applicable to the element regardless of its current animation state. To define this state in our code we use the \* symbol.

3. Custom state – This is the custom state of the element and it needs to be defined explicitly in the code. To define this state in our code we can use any custom name of our choice.

<hr>
- Transition Timing - 
To show the animation transition from one state to another we define animation transition timing in our application.

Angular provides us the following three timing properties:

1. Duration:
   This property represents the time our animation takes to complete from start (initial state) to finish (final state). We can define the duration of animation in following three ways:

Using an integer value, which represent the time in milliseconds. E.g.- 500
Using a string value to represent the time in milliseconds. E.g. – ‘500ms’
Using a string value to represent the time in seconds. E.g. – ‘0.5s’

2. Delay:
   This property represent the time duration between the animation trigger and the beginning of the actual transition. This property also follows the same syntax as duration. To define the delay, we need to add the delay value after the duration value in a string format – ‘ Duration Delay’. Delay is an optional property.

e.g.
‘0.3s 500ms’. This means the transition will wait for 500ms and then run for 0.3s.

3. Easing:
   This property represents how the animation accelerate or decelerate during its execution. We can define the easing by adding it as the third variable in the string after duration and delay. If the delay value is not present, then easing will be the second value. This is also an optional property.

e.g.

‘0.3s 500ms ease-in’ – This means the transition will wait for 500ms and then run for 0.3s (300ms) with ease-in effect.
‘300ms ease-out’. – This means the transition will run for 300ms (0.3s) with ease-out effect.

<hr>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
