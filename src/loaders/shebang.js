module.exports = function(source) {
    if ((typeof source === "string") && (/^#!/.test(source))) {
        source = source.replace(/^#![^\n\r]*[\r\n]/, '');
    }
	return source;
}