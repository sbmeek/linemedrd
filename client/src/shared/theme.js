import { createMuiTheme } from '@material-ui/core/styles';

export const lmedTheme = {
	linkColor: '#5389E5',
	linkColorHover: '#3267c0',
	black00: '#1b1b1b',
	green00: '#9ec8bf',
	green01: '#85f2dc',
	green02: '#66d2bc',
	green03: '#005e4b',
	red00: '#EE3A3A',
	red01: '#ff6363'
};

export const muiTheme = createMuiTheme({
	palette: {
		primary: {
			main: lmedTheme.green02,
			contrastText: '#fff'
		},
		text: {
			primary: lmedTheme.green00,
			secondary: lmedTheme.green00
		},
		action: {
			active: lmedTheme.green00
		}
	}
});
