//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var bucket_view = _.template('<div id="<%= id %>" class="bucket_item"><%= title %> -- <%= description %> '+
							 '<br> <input type="checkbox" <%= completed? "checked":"" %> >' + 
							 ' <button data-method="delete" value="delete">Delete</button></div>');


var updateBucket = function(id, method, data) {
	$.ajax({
		url: "/bucket_items/" + id,
		method: method,
		data: {bucket_item: data}
	});
};

$(function() {
	$("input[name='commit']").click(function(event) {
		event.preventDefault();
	
		var $title = $("#bucket_item_title");
		var $description = $("#bucket_item_description");
		var new_bucket_item = { bucket_item: {
								title: $title.val(),
								description: $description.val()
		}}
		$title.val("");
		$description.val("");
		$.post("/bucket_items", new_bucket_item).done(function(data) {
			//console.log(data);
			//$("#bucket_items").append( bucket_view(data) );
			var $bucket_item = $(bucket_view(data))
			$("#bucket_items").prepend($bucket_item);
			// update checkbox
			$bucket_item.on("click", "input[type=checkbox]", function(event) {
				var id = $bucket_item.attr("id");
				var checked = this.checked;
				console.log(checked);
				updateBucket(id, "put", {completed: this.checked} );
			});
			// delete thing
			$bucket_item.on("click", "button[data-method='delete']", function(event) {
				var id = $bucket_item.attr("id");
				updateBucket(id, "delete", {});
				$bucket_item.remove();
			});
		});
		//console.log(new_bucket_item);
	});
	$.get("/bucket_items.json").done(function(data) {
		//console.log(data);

		_.each(data, function(item) { 
			var $bucket_item = $(bucket_view(item))
			$("#bucket_items").prepend($bucket_item);
			$bucket_item.on("click", "input[type=checkbox]", function(event) {
				var id = $bucket_item.attr("id");
				var checked = this.checked;
				console.log(checked);
				updateBucket(id, "put", {completed: this.checked} );
			});
			$bucket_item.on("click", "button[data-method='delete']", function(event) {
				var id = $bucket_item.attr("id");
				updateBucket(id, "delete", {});
				$bucket_item.remove();
			});

		});
	});

}); // end page load
