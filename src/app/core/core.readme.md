# Core Module
## Purpose
The core module is your applications framework. It contains everything that is
supposed to be always available. This contains but is not limited to:
* An app bar, a header or a footer
* The applications main menu
* Meta information, like the user that is currently logged in

In general, you want to keep this module as slim as possible. It will always
be loaded when the app bootstraps, and keeping this module slim
will improve application load times, especially when you are working with 
large third-party libraries like vis.js or leaflet.
