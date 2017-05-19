$(document).ready(function () 
{
	// $("titles_bg").
	var titles_bg = document.getElementsByClassName('titles_bg')[0];
	console.log(titles_bg);

	var title_contents = titles_bg.children;
	console.log(title_contents);

	// for (var i = 0; i < title_contents.length; i++) 
	// {
	// 	title_contents[i]
	// }

	$(".title_contents").each(function () 
	{
		$(this).animate({'top':'0px'},6000);
	})

});