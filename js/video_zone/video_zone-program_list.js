
$('#ProgramListBlock').hide(0)
$('.sorter__style__ele').on('click', function () {
	$('.sorter__style__ele').removeClass('sorter__style__active');
	$(this).addClass('sorter__style__active');
});

$('#StyleSorterGrid').on('click',function(){
	$('#ProgramGridBlock').delay(100).fadeIn(400);
	$('#ProgramListBlock').delay(100).hide(0)
})

$('#StyleSorterList').on('click', function () {
	$('#ProgramListBlock').delay(100).fadeIn(400);
	$('#ProgramGridBlock').delay(100).hide(0)
})