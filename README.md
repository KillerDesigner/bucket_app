Bucket List

The purpose of this app is to teach you about using JavaScript templates.
There is a templating function in Underscore: http://underscorejs.org/#template

Your app should be a bucket list of your "must do" items this lifetime.
You can use a template to generate this list dynamically using AJAX post
and put. This is similar to what we did yesterday, but you are using a 
template generated in your application.js file rather than using js.erb files.

You should be able to check an item off once completed, and delete an item once finished. This is all going to happen without the page reloading. Hint: you might need to prevent the default action of your form from executing.

If you want to create many items that are already on your list please use a seed file, then run rake db:seed to put the items in your database.

