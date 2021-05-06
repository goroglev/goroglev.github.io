// JavaScript Document

function concertSeason(concertDateString) {
	var concertDate = moment(concertDateString, 'DD.MM.YYYY', 'de')
	var season = (concertDate.year()-1) + '/' + (concertDate.year()%100);
	if (concertDate.month() > 7) { // Months start from 0 in js, so 7 is August
								   // New seasons start in September.
  		season = (concertDate.year()) + '/' + (concertDate.year()%100+1);
	}
	return season;
}

function _confirm(text) {
	_continue = confirm(text);
	if (_continue) {
		return true;
	}
	return false;
}