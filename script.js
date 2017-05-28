
$(window).load(function(){
	var NameVariable = $('#For-id .class img').width();
	$('#For-id img').each(function(){
		$(this).attr('width', NameVariable);
	});
	$('#For-id .Class that change').css('max-width', NameVariable + 'px');
});
