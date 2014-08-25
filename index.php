 <!DOCTYPE html>
 
 <html>
 <head>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
	
	<script src="partners.js"></script>
	<link rel="stylesheet" href="partners.css" />
	
	<title>Community Partners</title>
	
	
	<?php
		//ini_set('display_errors', 'On');
		//error_reporting(E_ALL | E_STRICT);
		
		function getImgs () {
			$dir = 'img';
			$files = array_diff(scandir($dir), array('..', '.'));
			
			$picID = 0;
			
			foreach ($files as $file) {
				if (exif_imagetype("$dir/$file")) {
					$size = getimagesize("$dir/$file");
					$w = $size[0];
					$h = $size[1];
					$name = explode(".", $file);
					
					echo "<div class='image' id='$picID'>";
					echo "	<img src='$dir/$file' width='$w' height='$h' />";
					echo "	<p class='name' id='$picID'>$name[0]</p>";
					echo "</div>";
					$picID++;				
				}
			}
		}
	?>
 </head>
 <body>
	<div id="mainContainer">
	<div class="ctrlBtn" id="left">&lt;</div>
	<div class="ctrlBtn" id="right">&gt;</div>
		<div class="imgContainer">
			<?php getImgs(); ?>
		</div>
	</div>
 </body>
 </html>
