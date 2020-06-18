# Creating @ imports
One way to ease development and refactoring of your app is to use the 'paths' feature
of the tsc. Instead of importing from paths relative to your current location (``./../features/stuff/component``)
we will be importing from paths relative to the root directory, prefixed with an @. (``@feautres/component``)

This is achieved with the ``paths`` tsc option. Take a look at the ``tsconfig.json`` to see how it's set up!
