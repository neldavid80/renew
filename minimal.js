<script type="text/javascript" src="https://latorre-net.colpatria.com/SiteAssets/jquery.min.js"></script> 
<script type="text/javascript" src="https://latorre-net.colpatria.com/SiteAssets/jquery.SPServices-0.7.2.min.js"></script> 

<script type="text/javascript" src="https://latorre-net.colpatria.com/SiteAssets/stratus-forms-1.5.js"></script>
<script type="text/javascript" src="https://latorre-net.colpatria.com/SiteAssets/stratus-forms-data-SPServices-1.4.js"></script>

<div id="SFForm">
</div>

<script type="text/javascript">

	$(document).ready(function() {
		$("#SFForm").StratusFormsInitialize({
	          htmlForm: "https://latorre-net.colpatria.com/Upegui/Documents/minimal.html",
		        queryStringVar: "formID",
	          listName: "preguntaleajaime",
	          completefunc: function()
	          {
	          }
		});
	});

	function SubmitForm()
	{		
		$("#SFForm").StratusFormsSubmit({
	     	listName: "preguntaleajaime",
        	completefunc: function(id) { 
  				alert("Save was successful. ID = " + id);
	  			window.location = window.location.pathname + "?formID=" + id; 
			}
    		});
	}

</script>
