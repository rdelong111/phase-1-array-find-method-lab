function superbowlWin(yearlist) {
	if (yearlist.find(x => x.result === 'W')) {
		return yearlist.find(x => x.result === 'W').year;
	}
	else {
		return undefined;
	}
}