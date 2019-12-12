
$(function(){

	$("#walkthrough").scroll(function() {

	    // var scrollTop = $(window).scrollTop();

		// if ( scrollTop > $("#before-we-start").offset().top ) { 
	 //    	// display add
	 //    	console.log($("#before-we-start").offset().top)
	 //    }

	    
		// TOP AND BOTTOM OF THE SCREEN
		var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
	    var top_of_screen = $(window).scrollTop();

	    // BEFORE WE START
	    var before_we_start = $("#before-we-start"),
		    top_of_element_before_we_start = before_we_start.offset().top,
	        bottom_of_element_before_we_start = before_we_start.offset().top + before_we_start.outerHeight();

	    if ((bottom_of_screen > top_of_element_before_we_start) && (top_of_screen < bottom_of_element_before_we_start)){
	    	console.log("before-we-start is visible")

	    	if ($(".section1").hasClass("active")) {
	    		console.log("section1 already active")
	    	} else {
		    	// find active to remove
		        findActive();
		        // add class active
		        $(".section1").addClass("active");  
		    }
	    } 


	    // SET UP FOR THE TUTORIAL
	    var setup_for_the_tutorial = $("#setup-for-the-tutorial"),
	        top_of_element_setup_for_the_tutorial = setup_for_the_tutorial.offset().top;
	        bottom_of_element_setup_for_the_tutorial = setup_for_the_tutorial.offset().top + setup_for_the_tutorial.outerHeight();

	    if((bottom_of_screen > top_of_element_setup_for_the_tutorial) && (top_of_screen < bottom_of_element_setup_for_the_tutorial)) {
	    	console.log("setup-for-the-tutorial is visible")
	    	
	    	if ($(".section2").hasClass("active")) {
	    		console.log("section2 already active")
	    		console.log($(this))
	    	} else {
		    	// find active to remove
		        findActive();
		        // add class active
		        $(".section2").addClass("active");  
		    }
	    }

	    // OVER VIEW
	    var overview = $("#overview"),
		    top_of_element_overview = overview.offset().top,
	        bottom_of_element_overview = overview.offset().top + overview.outerHeight();

	    if((bottom_of_screen > top_of_element_overview) && (top_of_screen < bottom_of_element_overview)) {
	    	console.log("overview is visible")
	    	
	    	if ($(".section3").hasClass("active")) {
	    		console.log("section3 already active")
	    	} else {
		    	// find active to remove
		        findActive();
		        // add class active
		        $(".section3").addClass("active");  
		    }
	    }

	    // WEBSITE HEAD
	    var website_head = $("#website-head"),
		    top_of_element_website_head = website_head.offset().top,
	        bottom_of_element_website_head = website_head.offset().top + website_head.outerHeight();

	    if((bottom_of_screen > top_of_element_website_head) && (top_of_screen < bottom_of_element_website_head)) {
	    	console.log("website-head is visible")
	    	
	    	if ($(".section4").hasClass("active")) {
	    		console.log("section4 already active")
	    	} else {
		    	// find active to remove
		        findActive();
		        // add class active
		        $(".section4").addClass("active");  
		    }
	    }

	    // WEBSITE NAVIGATION
	    var navigation = $("#navigation"),
		    top_of_element_navigation = navigation.offset().top,
	        bottom_of_element_navigation = navigation.offset().top + navigation.outerHeight();

	    if((bottom_of_screen > top_of_element_navigation) && (top_of_screen < bottom_of_element_navigation)) {
	    	console.log("navigation is visible")
	    	
	    	if ($(".section5").hasClass("active")) {
	    		console.log("section5 already active")
	    	} else {
		    	// find active to remove
		        findActive();
		        // add class active
		        $(".section5").addClass("active");  
		    }
	    }

	    // WEBSITE SEARCH BAR
	    var website_search_bar = $("#website-search-bar"),
		    top_of_element_website_search_bar = website_search_bar.offset().top,
	        bottom_of_element_website_search_bar = website_search_bar.offset().top + website_search_bar.outerHeight();

	    if((bottom_of_screen > top_of_element_website_search_bar) && (top_of_screen < bottom_of_element_website_search_bar)) {
	    	console.log("website-search-bar is visible")
	    	
	    	if ($(".section6").hasClass("active")) {
	    		console.log("section6 already active")
	    	} else {
		    	// find active to remove
		        findActive();
		        // add class active
		        $(".section6").addClass("active");  
		    }
	    }

	    // WEBSITE FOOTER
	    var website_footer = $("#website-footer"),
		    top_of_element_website_footer = website_footer.offset().top,
	        bottom_of_element_website_footer = website_footer.offset().top + website_footer.outerHeight();

	    if((bottom_of_screen > top_of_element_website_footer) && (top_of_screen < bottom_of_element_website_footer)) {
	    	console.log("website-footer is visible")
	    	
	    	if ($(".section7").hasClass("active")) {
	    		console.log("section7 already active")
	    	} else {
		    	// find active to remove
		        findActive();
		        // add class active
		        $(".section7").addClass("active");  
		    }
	    }

	    // CONCLUSION
	    var conclusion = $("#conclusion"),
		    top_of_element_conclusion = conclusion.offset().top,
	        bottom_of_element_conclusion = conclusion.offset().top + conclusion.outerHeight();

	    if((bottom_of_screen > top_of_element_conclusion) && (top_of_screen < bottom_of_element_conclusion)) {
	    	console.log("conclusion is visible")
	    	
	    	if ($(".section8").hasClass("active")) {
	    		console.log("section8 already active")
	    	} else {
		    	// find active to remove
		        findActive();
		        // add class active
		        $(".section8").addClass("active");  
		    }
	    }


	});

	// find active class and remove it from what element has it
	findActive = () => {
		$(".active").removeClass("active");
	}
});

