	$("#search-box").keyup(function(e) {
	    const searchValue = $("#search-box").val();
	    $.getJSON("https://en.wikipedia.org/w/api.php?callback=?", {
	            srsearch: searchValue,
	            action: "query",
	            list: "search",
	            format: "json"
	        },
	        function(data) {
	            $("#result-info").empty();
	            if (searchValue.length !== 0) {
	                $("#result-info").append(`<p>Results for "<strong>${searchValue}</strong>"</p>`);
	            }
	            $("#result-list").empty();
	            $.each(data.query.search, function(i, item) {
	                $("#result-list").append(
	                    `
			      <a href="http://en.wikipedia.org/wiki/${encodeURIComponent(item.title)}" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">
			        <div class="d-flex w-100 justify-content-between">
			          <h5 class="mb-1"><strong>${item.title}</strong></h5>
				</div>
				  <p class="mb-1">${item.snippet}</p>
			      </a>
			    `
	                );
	            });
	        });
	});
