
/* Toggles the Navigation Bar */
	function toggleNav() {
	    var e = document.getElementById("mySidenav");
      var doticon = document.getElementById("navicon");
	    if (e.style.width == '250px')
	    {
	        e.style.width = '0px';
          doticon.style.padding_top = '0px';

	    }
	    else 
	    {
	        e.style.width = '250px';
          doticon.style.padding_top = '200px';

	    }
	}

   function switchStyle() {
      if (document.getElementById('styleSwitch').checked) {
        document.getElementById('gallery').classList.add("custom");
        document.getElementById('exampleModal').classList.add("custom");
      } else {
        document.getElementById('gallery').classList.remove("custom");
        document.getElementById('exampleModal').classList.remove("custom");
      }
    }

