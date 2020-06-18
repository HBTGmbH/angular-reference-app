# AngularReferenceApp

## Purpose
This repository is supposed to serve as a reference architecture for
angular apps. It is supposed to be a suggestion on how to build the foundation
of a scalable and easily extendable angular app.

It uses these dependencies/technologies:
* @ngrx/store and @ngrx/effects as an example for state management
* openapi and openapi-generator to work with an API
* primeng as an example for a component framework.
* scss for styling

All these components are interchangeable and are only a suggestion based
on experiences with angular applications. 

This reference-app is also supposed to serve as a base for discussion.

## Things you need and why
1. ``nodeJS``. The angular CLI is based on node and uses node as interpreter. This does not mean
angular runs on node. Angular still runs in your browser.
2. ``Typescript (tsc)``. Typescript will be downloaded when you are ``npm install``. It adds a 
typesafe layer over javascriüt
3. ``yarn``. Though you could use npm (bundled with node), yarn is a lot faster and
smoother.
4. ``A webkit browser`` like Chrome, Brave or the new Edge. Developing in a webkit browser
is a lot smoother than developing in Firefox or...Internet Explorer...
5. ``Firefox and Internet Explorer`` because you will most likely have to support **clearly inferior** browsers, too
6. ``redux-devtools``, which is a chrome extension that will help you understand
what is going on in your ``@ngrx/store``. Redux is the core concept used by ``@ngrx/store``

## How-To
1. Checkout this repository
2. run ``yarn install``
3. run ``ng serve``

# In-Detail
Relevant directories and relevant classes/components will have detailed
comments, elaborating why the structure is built like it is, and what
possible alternatives are.

If comments are not possible (e.g. in JSON), please refer to the readme

### On ngrx
While ngrx is pretty verbose, using global state management and the feature-rich
ngrx-ecosystem provides a few advantage if you follow these guidelines:

1. Place everything in the store. Even small bits of state like ``dialogOpen``.
2. Use finely-grained actions. Don't try to group multiple events into a single action.
3. Embrace and test effects. Effects can be a pretty powerful tool, but can get quite complicated.
As soon as you realize your effects are getting more complex, test them with rxjs-marbles.

## Extending the application
An advantage of this pattern is easy extendability of your application. To add something
new to your application, simply:
1. Use the angular cli to generate a new module in ``features``
2. Define an entry component.
3. Add it the the ``app-routing.module.ts`` via loadChildren

Done. You can now develop your feature (almost) independently from the rest of your application.
