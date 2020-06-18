# On OpenAPI
OpenAPI is the direct successor of swagger 2.0, creating an open-source standard to
define your RESTful APIs in a unified .yaml or .json format.

We are embracing this concept, since almost all of your application will not stand on their own,
instead working with some sort of RESTful API, either written and maintained by us, or provided
by a third party.

Using OpenAPI and the openapi-generator to generate http services and the APIs data model
can now greatly reduce the time it takes to let our application communicate with the API.

Openapi-generator...:
* ... generates HTTP services for us that will encapsulate the HTTP calls
* ... generates the full data model for us
* ... generates a module for us
* ... takes care of potential changes, creating tsc-errors if a part of the data model changes

# Working with the model
As most of the applications we are building are tightly knit into the API, it is usually
okay to use the generated data model throught the application. If you have the feeling
that the API you are using will change frequently, you can always treat the generates
API models as DTO and map them to your own objects.
