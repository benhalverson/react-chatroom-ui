# Reactn: A React and Socket.io based chat app by Ben Halverson 

Frontend code structure for Reactn: A React and Socket.io based chat app by Ben Halverson. 

Generated 30 May 2018 using [Frontend.md](http://github.com/animade/frontend-md)

---

### Stylesheets

````
src/
|
|- scss/
|  |- app.scss _______________________________ # App Scss / CSS Imports
|
|  |- components/
|    |- _chat-header.scss ____________________ # Chat Header Component
|    |- _containers.scss _____________________ # General Layout, Media Queries and Containers
|    |- _login.scss __________________________ # Login Form for React component: components/LoginForm.js
|    |- _messages.scss _______________________ # Message Containers, Messages and Threads
|    |- _sidebar.scss ________________________ # Sidebar for React component: components/chat/SideBar.js
|    |- _users.scss __________________________ # Users patterns
|
|  |- base/
|    |- _design-tokens.scss __________________ # Color and Spacing Variables / Tokens
|    |- _mixins.scss _________________________ # Global Sass Mixins
|    |- _sitewide.scss _______________________ # Styles to be applied globally or sitewide
````

### Javascripts

````
src/
|
|- components/
|  |- Layout.js ______________________________ # General Layout Component
|  |- LoginForm.js ___________________________ # Component for the Login Form
|
|  |- messaging/
|    |- MessageInput.js ______________________ # 
|    |- Messages.js __________________________ # 
|
|  |- chat/
|    |- ChatContainer.js _____________________ # A single chat message displayed on screen
|    |- ChatHeading.js _______________________ # Heading information on how many chat users
|    |- SideBar.js ___________________________ # 
````