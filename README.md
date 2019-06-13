Link to api
https://github.com/jeremydenton/park-finder-api


https://jeremydenton.github.io/park-finder/

This app allows users to create a park in the database that can be viewed by other users. Parks contain names, addresses, and whether or not they have a bathroom. Users can edit and delete those parks that they created.

Technologies:
SCSS
HTML
Javascript
Rails and therefore Ruby
Handlebars
JQuery


In future iterations the app will have a more coherent style. It will also have a join table which will allow users to “check-in” at parks.

The initial plan for the project was much more expansive. Thanks to the council of the SEI consultants the scope of the project was substantially reduced. Problems were generally solved with a three step approach.
Check for syntax errors.
Look up the issue on the world wide web.
Make an issue in the issue cue.
This approach was much more effective than the previously applied “try to figure it out on your own” approach.




https://media.git.generalassemb.ly/user/20343/files/e3bd7280-890b-11e9-87d1-6c373c696c09
User stories

As a user who likes authentication I want to be able to:
Signup with email, password, and password confirmation.
 Login with email and password.
 Logout when logged in.
 Change password with current and new password.
 Only have Signup and Signin available when I am signed out.
 Only have Logout and Change password available when I am signed in.
Have any actions which change data be authenticated "owned" by the user performing the change.
As a user concerned with functionality I want to be able to:
Use a front-end Javascript app to communicate with an API (both read and write) and render data that it receives in the browser.
Use at least 4 RESTful routes for handling GET, POST, PUT/PATCH, and DELETE requests.
 Be able to create a new resource
 Be able to update a resource
 Be able to delete a resource
 Be able to view a single or multiple resource(s)
 Have all resource actions that change data be available only to a signed in user.
Have at least 1 resource that has a relationship to User

As a persnickety user I want to be able to
Know that the API uses Ruby on Rails and Postgresql.
Get feedback after each action's success or failure.
Have all forms clear after submit success or failure
 See semantically clean HTML and CSS if I open up dev tools.
 Never have the repository delete or start over.
 Never rely on refreshing the page for any functionality.
 See only functional buttons, and buttons that successfully complete a task.
Never see actions at inappropriate times
Have forms  clear at appropriate times
 Never see alerts ever.
 Not see errors or warnings in the console.
 Not see debugging messages in the console.
