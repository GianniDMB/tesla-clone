import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import StyledBtn from '../StyledBtn';
import styles from './styles';

function CarItem(props) {
	const { name, tagline, taglineCta, image } = props.car;

	return (
		<View style={styles.carContainer}>
			<ImageBackground style={styles.image} source={image} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline} <Text style={styles.subtitleCta}>{taglineCta}</Text>
				</Text>
			</View>
			<View style={styles.btnContainer}>
				<StyledBtn type='primary' content={'Custom Order'} />
				<StyledBtn type='secondary' content={'Existing Inventory'} />
			</View>
		</View>
	);
}

export default CarItem;
