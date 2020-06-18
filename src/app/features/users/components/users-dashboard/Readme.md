# Smart Components vs Dumb Components
In angular (and almost all other modern SPA frameworks), your components are grouped into
smart (or structural) and dumb (or display) components. 

Smart components, in our case, are the components that are connected to our store. They contain
business logic (sorting, filtering, etc..) and may group multiple dumb components together.

Dumb components on the other hand only serve to display data. They can't modify data themselves
and are reliant on data being passed to them.

This construct has multiple advantages:
* We are reducing the rendering times angular has by splitting our large components
into multiple smaller, easily re-renderable components
* We are reducing the complexity of our application structure to a handful of smart components 
(and, of course, the store)
* Dumb components don't have to deal with observables. Data is passed to them via the ``async``
pipe
* Rerendering times become faster, since angular won't have to re-render large components

A more detailed analysis can be found here: https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/ and
https://angular.io/guide/architecture-components
