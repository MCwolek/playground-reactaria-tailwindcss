module.exports = {
	content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
	theme: {
		extend: {
			borderWidth: { 3: '3px' },
			colors: {
				webridge: {
					error: '#D91515',
					'error-border': '#970F0F',
					'dark-gray': '#2D2D2D',
					'light-gray': '#F2F2F2',
					green: '#3CBE14',
				},
			},
			opacity: { 35: '0.35' },
		},
	},
	plugins: [],
};
