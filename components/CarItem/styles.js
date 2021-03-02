import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	carContainer: {
		height: Dimensions.get('window').height,
		width: '100%',
	},
	image: {
		height: '100%',
		width: '100%',
		resizeMode: 'cover',
		position: 'absolute',
	},
	titles: {
		marginTop: '30%',
		width: '100%',
		alignItems: 'center',
	},
	title: {
		fontSize: 40,
		fontWeight: '500',
	},
	subtitle: {
		color: '#5c5e62',
		fontSize: 16,
		fontWeight: '500',
	},
	subtitleCta: {
		textDecorationLine: 'underline',
	},
	btnContainer: {
		width: '100%',
		position: 'absolute',
		bottom: 60,
	},
});

export default styles;
