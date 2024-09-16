export function fixValue(value: string, isOpacity = false, defaultValue = "0"): string {
	const fixed = parseFloat(value);
	if (isOpacity) {
		if (isNaN(fixed)) return defaultValue;
		return fixed > 1 ? "1" : fixed < 0 ? "0" : fixed.toFixed(2);
	}
	return isNaN(fixed) ? defaultValue : value;
}
