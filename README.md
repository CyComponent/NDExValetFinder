
NDEX Valet
==========
Browse and select NDEx networks through custom search queries

####Usage:


Parameters
----------
- style: Override default css styles for Valet container
- onLoad: a function with a list of networks as a parameter. Called when load networks is clicked in the cart.



NDExValet
===
> NDExValet is a smart network search CyComponent. NDExValet allows advanced queries against an NDEx database, and presents the results of a search in many vizualizations, including tables, images, cards, etc. These vizualizations allow the user to understand and compare networks, and select the networks that they wish to work on. NDEx can be styled and fitted into any web page. 

__CyComponent Library Name:__ NDExValet
> ######  Note: A CyComponent's library name appears in npm, and is the name used for importing the CyComponent as a library.

__CyStore Registered Name:__ valet
> ######  Note: The CyComponents's registered name appears when it's initialized with the CyFramework in the CyFramework's data model.

__Sample Usage__
> ```javascript
<html>

  <head>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-with-addons.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>


  <script src="CyFramework/build/CyFramework.js"></script>
    <script src="NDExStore/build/NDExStore.js"></script>
    <script src="NDExValet/build/NDExValet.js"></script>
  </head>

  <body>
    <div id='valet'></div>
    <script>
      var cyto = CyFramework.config([NDExStore, NDExValet])
      
      cyto.render(NDExValet, document.getElementById('valet'), {
        style: {
          height: '80%',
          width: '90%'
        },
        onLoad: function(networkList) {}
      })
    </script>
  </body>

</html>
```

lucene
---
> The lucene store is an immutablejs map. The lucene store has a flag indicating whether the client is still searching fo networks (for displaying a spinner, etc). It also containers an error that is filled if the search fails, and a list of networks that contain the results of the previous search.

__Data model__
> ```javascript
  lucene: Map({
    searching: false,
    networkSummaries: Set(),
    error: null
  })
```

### Action Creators

__Registed Name:__ luceneActions
> The object under which the action creators are exported under. 

#### searchBegin()
> Sets the searching flag to true, use before beginning a search with searchFor/3

#### searchError(error)
> Called from searchFor/3, not normally used elsewhere, sets the error field with the value of error.
>
> __Params__
> - error: An error object that can be inspected to see the error reason of a failed lucene search.

#### seachFor(server, query, resultSize)
> Begins a lucene search agains the server with a query string, this search will either update networkSummaries or error, depending on the outcome of the search. Either way, it will then flip the searching flag to false.
>
> __Params__
> - server: A string, usually taken from the server store to reflect the store's choice of server.
> - query: A string, the lucene query to search against NDEx. 
> - resultSize(OPTIONAL): Default of 50, setting this to a high value will incease the searchTime. This is the max number of results returned by the lucene search.

server
---
> The server store is an immutable map. It containers information about the NDEx server to be used, the username and password, and the log in state of the user. If loggedIn is false, th userName and userPass fields are considered garbage. Actions allow setting the server name and address, and logging the user in and out.

__Data model__
> ```javascript
  lucene: Map({
    serverName: "Public NDEx",
    serverAddress: "http://public.ndexbio.org",
    userName: "",
    userPass: "",
    loggedIn: false
  })
```

### Action Creators

__Registed Name:__ serverActions
> The object under which the action creators are exported under. 

#### setServer(name, address)
> Set the server name and address.
>
> __Params__
> - name: A string, a human readable identifier for the server.
> - address: The url of the NDEx server.

#### login(name, pass)
> Sets loggedIn to true, and adds the users credentials (unencrypted).
>
> __Params__
> - name: The user's NDEx username
> - pass: The user's NDEx password 

#### logout()
> Sets the loggedIn flag to false.
