Bucket List - WDI Homework - JavaScript templating

The purpose of this app is to teach you about using JavaScript templates.
For this assignment we will be using the templating function in Underscore: http://underscorejs.org/#template

Your app is a page displaying your bucket list of your "must do" items this lifetime.
Please use a template to generate this list dynamically using AJAX post
and put. This is going to produce similar functionality to using unobtrusive JavaScript in a Rails app. The app will be using a 
template generated in the application.js file rather than using js.erb files.

The functionality is pretty similar to any ToDo app. It's a big unordered list of items. You should be able to check an item off once completed, and delete an item once completed. This is all going to happen without the page reloading. If the page does reload any changes should persist. Hint: you might need to prevent the default action of your form from executing. You might also need to make sure there is a response code of 200 returned for controller functions that don't redirect anywhere.

To add many items that are already on your list please use a seed file, then run rake db:seed to put the items in your database. More items can be added to this list dynamically, of course!

