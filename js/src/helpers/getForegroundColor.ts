const hexToRgb = (hex: string): { b: number; g: number; r: number } | null => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				b: parseInt(result[3], 16),
				g: parseInt(result[2], 16),
				r: parseInt(result[1], 16),
		  }
		: null;
};
const getForegroundColor = (hex: string): string => {
	const rgb = hexToRgb(hex);
	if (!rgb) return 'black';
	const luminance = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
	return luminance < 140 ? '#ffffff' : '#000000';
};
export default getForegroundColor;
