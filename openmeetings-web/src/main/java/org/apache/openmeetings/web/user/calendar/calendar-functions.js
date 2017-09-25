/* Licensed under the Apache License, Version 2.0 (the "License") http://www.apache.org/licenses/LICENSE-2.0 */
/**
 * @author Sebastien Briquet
 */
function getCalendarHeight() {
	return $(window).height() - $('#${markupId}').position().top - 20;
}
function setCalendarHeight() {
	var cal = $('#${markupId}');
	if (cal.length) {
		cal.fullCalendar('option', 'height', getCalendarHeight());
	}
}
$(function() {
	$(window).on("load", function() { setCalendarHeight(); } );
});
function toggleDatePicker(id) {
	var dp = $("#" + id);
	dp.datepicker(dp.datepicker("widget").is(":visible") ? "hide" : "show");
	return false;
}
function addCalButton(rtl, id) {
	var my_button =
		'<button class="fc-button fc-state-default fc-corner-right fc-corner-left" onclick="return toggleDatePicker(\'' + id + '\');">' +
		'<input type="text" id="' + id + '" /></button>';

	if (rtl) {
		$(".fc .fc-toolbar .fc-right").prepend(my_button);
	} else {
		$(".fc .fc-toolbar .fc-left").append(my_button);
	}

	var dp = $("#" + id);
	dp.datepicker({
		showOn: "button",
		buttonImage: "images/calendar.gif",
		buttonImageOnly: true,
		changeMonth: true,
		changeYear: true,
		changeDay: true,
		dayNames: $('#${markupId}').fullCalendar("option","dayNames"),
		dayNamesShort: $('#${markupId}').fullCalendar("option","dayNamesShort"),
		dayNamesMin: $('#${markupId}').fullCalendar("option","dayNamesShort"),
		monthNames: $('#${markupId}').fullCalendar("option","monthNames"),
		monthNamesShort: $('#${markupId}').fullCalendar("option","monthNamesShort"),
		isRTL: rtl,
		onChangeMonthYear: function(year, month, inst) {
			$('#${markupId}').fullCalendar('gotoDate', year + '-' + ('0' + month).slice(-2) + '-' + inst.selectedDay);
		},
		onSelect: function(dateText, inst) {
			var date = new Date(dateText);
			$('#${markupId}').fullCalendar('gotoDate', date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate());
		}
	});
	dp.hide();
}
function setDatepickerDate(id, date) {
	$("#"+id).datepicker('setDate', date);
}
