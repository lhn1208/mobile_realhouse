$(document).ready(function(){
  //footer
  var memory = '';
		var src;
		$('#footer_nav>ul>li a').click(function(){
			if(memory != ''){
				memory.attr('src',src);
			}
      memory = $(this).find('img');
			src = memory.attr('src');
			memory.attr('src',src.replace('.png','_on.png'));
		});
	
});