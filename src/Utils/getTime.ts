import * as moment from 'moment';

export function timeTransformation(time: Date | string) {
	if (time == null || time == '') {
		return null;
	}
	const date: Date | string = new Date(new Date(time).getTime());
	return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
