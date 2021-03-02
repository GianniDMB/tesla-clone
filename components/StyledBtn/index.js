import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

function StyledBtn(props) {
	const { type, content, onPress } = props;

	const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
	const txtColor = type === 'primary' ? '#fff' : '#171a20';

	return (
		<View style={styles.container}>
			<Pressable style={[styles.btn, { backgroundColor: backgroundColor }]} onPress={onPress}>
				<Text style={[styles.text, { color: txtColor }]}>{content}</Text>
			</Pressable>
		</View>
	);
}

export default StyledBtn;
