// jshint esversion:6

// jQuery
	$("#search-box").keyup(function(e){
		let searchValue = $("#search-box").val();
		$.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
		{
			srsearch: searchValue,
			action: "query",
			list: "search",
			format: "json"
		},
		function(data) {
			$("#result-list").empty();
			if (searchValue.length !== 0) {
			$("#result-list").append(`<p>Results for <b>${searchValue}</b></p>`);
		}
			$.each(data.query.search, function(i, item){
				$("#result-list").append(`<a href='http://en.wikipedia.org/wiki/${encodeURIComponent(item.title)}' target='_blank'><div class='article-box'><span class='article-title'>${item.title}</span><br><br>${item.snippet}...</div></a> <br><br>`);
			});
		});
	});
