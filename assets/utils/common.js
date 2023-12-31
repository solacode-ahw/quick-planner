import { StyleSheet, PixelRatio, Dimensions } from "react-native";
import { themeColors } from "./colors";

export const icons = StyleSheet.create({
	smallIcon: {
		width: 10*PixelRatio.get(),
		height: 10*PixelRatio.get(),
	},
	mediIcon: {
		width: 15*PixelRatio.get(),
		height: 15*PixelRatio.get()
	},
	bigIcon: {
		width: 20*PixelRatio.get(),
		height: 20*PixelRatio.get(),
	},
	hugeIcon: {
		width: 30*PixelRatio.get(),
		height: 30*PixelRatio.get(),
	},
	rtl: {
		transform: [{scaleX: 1}],
	},
	ltr: {
		transform: [{scaleX: 1}],
	}
});

export const imageColor = StyleSheet.create({
	light: {
		tintColor: themeColors.dark,
	},
	dark:{
		tintColor: themeColors.light,
	},
	primary:{
		tintColor: themeColors.primary.original,
	},
	gray:{
		tintColor: themeColors.gray,
	},
	accent: {
		tintColor: themeColors.accent.original,
	}
});

export const imageColorInvert = StyleSheet.create({
	light: {
		tintColor: themeColors.light,
	},
	dark:{
		tintColor: themeColors.dark,
	},
});

export const textStyle = StyleSheet.create({
	body:{
		fontFamily: 'BalooBhaijaan2_400Regular',
		fontSize: 10*PixelRatio.getFontScale()*PixelRatio.get(),
		lineHeight: 16*PixelRatio.getFontScale()*PixelRatio.get(),
		verticalAlign: 'middle',
		textAlignVertical: 'center',
		textAlign: 'justify',
	},
	label:{
		fontFamily: 'BalooBhaijaan2_500Medium',
		fontSize: 10*PixelRatio.getFontScale()*PixelRatio.get(),
		lineHeight: 16*PixelRatio.getFontScale()*PixelRatio.get(),
		verticalAlign: 'middle',
		textAlignVertical: 'center',
		textAlign: 'justify',
	},
	title:{
		fontFamily: 'BalooBhaijaan2_500Medium',
		fontSize: 14*PixelRatio.getFontScale()*PixelRatio.get(),
		lineHeight: 22*PixelRatio.getFontScale()*PixelRatio.get(),
		verticalAlign: 'middle',
		textAlign: 'justify',
	},
	huge:{
		fontFamily: 'BalooBhaijaan2_500Medium',
		fontSize: 16*PixelRatio.getFontScale()*PixelRatio.get(),
		lineHeight: 26*PixelRatio.getFontScale()*PixelRatio.get(),
		verticalAlign: 'middle',
		textAlignVertical: 'center',
		textAlign: 'justify',
	},
});

export const textColor = StyleSheet.create({
	light:{
		color: themeColors['dark'],
	},
	dark:{
		color: themeColors['light'],
	},
	gray:{
		color: themeColors['gray'],
	},
	primary:{
		color: themeColors['primary']['original'],
	}
});
export const textColorInvert = StyleSheet.create({
	dark:{
		color: themeColors['dark'],
	},
	light:{
		color: themeColors['light'],
	}
});
export const textColorPrimary = StyleSheet.create({
	dark:{
		color: themeColors.primary.lighter,
	},
	light:{
		color: themeColors.primary.darker,
	},
});

export const containers = StyleSheet.create({
	light: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: themeColors.light,
		width: Dimensions.get('screen').width,
		height: Dimensions.get('screen').height,
	},
	dark: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: themeColors.dark,
		width: Dimensions.get('screen').width,
		height: Dimensions.get('screen').height,
	},
	scroll: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		paddingTop: 16*PixelRatio.get(),
	},
	rtl: {
		direction: 'rtl',
	},
	ltr:{
		direction: 'ltr',
	},
});

export const shadow = StyleSheet.create({
	dark: {
		elevation: 4,
		shadowColor:themeColors.light,
		shadowOffset:{width:0,height:0},
		shadowOpacity:0.5,
		shadowRadius: 4,
	},
	light: {
		elevation: 4,
		shadowColor:themeColors.dark,
		shadowOffset:{width:0,height:0},
		shadowOpacity:0.5,
		shadowRadius: 4,
	}
})

export const modalBasic = StyleSheet.create({
	light: {
		backgroundColor: themeColors.light+'dd',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	dark: {
		backgroundColor: themeColors.dark+'dd',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		margin: 8*PixelRatio.get(),
		borderRadius: 8*PixelRatio.get(),
		padding: 8*PixelRatio.get(),
		gap: 8*PixelRatio.get(),
		width: '90%',
	}
});

export const textInput = StyleSheet.create({
	borderBottom: {
		padding: 4*PixelRatio.get(),
		paddingVertical: 2*PixelRatio.get(),
		borderBottomWidth: 0.75*PixelRatio.get(),
	},
	roundCorner: {
		paddingHorizontal: 4*PixelRatio.get(),
		paddingVertical: 2*PixelRatio.get(),
		borderWidth: 0.75*PixelRatio.get(),
		borderRadius: 4*PixelRatio.get(),
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	light: {
		borderColor: themeColors.dark,
		backgroundColor: themeColors.light,
		color: themeColors.dark,
	},
	dark: {
		borderColor: themeColors.light,
		backgroundColor: themeColors.dark,
		color: themeColors.light,
	}
});