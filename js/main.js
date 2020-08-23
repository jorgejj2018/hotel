
console.log('Iniciado main')
/*POPOVER*/
$(function () {
	$('[data-toggle="popover"]').popover()
	})
$(function () {
	$('.example-popover').popover({
		container: 'body'
	  })
	})


/*Modal - reservar*/

$('#reservar-modal').on('show.bs.modal', function (e) {
	console.log('Ejecutando modal con evento show')
	$('#btn-reservar').removeClass('btn-outline-info')
})

$('#reservar-modal').on('shown.bs.modal', function (e) {
	console.log('Ejecutando modal con evento shown')
	$('#btn-reservar').addClass('btn-dark')
	$('#btn-reservar').prop('disabled', true)
})

$('#reservar-modal').on('hide.bs.modal', function (e) {
	console.log('Ejecutando modal con evento hide')
	$('#btn-reservar').removeClass('btn-dark')
})
$('#reservar-modal').on('hidden.bs.modal', function (e) {
	console.log('Ejecutando modal con evento hidden')
	$('#btn-reservar').addClass('btn-outline-info')
	$('#btn-reservar').prop('disabled', false)
})
