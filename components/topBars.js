import { View, Text, Image, Pressable, StyleSheet, Dimensions } from "react-native";
import { useState, useContext, useRef } from "react";

import { settingsContext } from "../assets/utils/settings";
import { textStyle, textColor, icons, imageColor } from "../assets/utils/common";
import { pageTitles } from "../assets/utils/translations";


export default function Header({page, navigation, navBar}){
	const [height,setHeight] = useState(20);
	const keys=useRef({
		1: 0,
		2: 0,
	});

	function addHeight(key,h){
		if(keys.current[key]==0){
			keys.current[key]+=1;
			setHeight(height+h);
		}
	}

	if(navBar) {
		return(
			<View style={{flex:0,height:height}}><View style={styles.headerView}>
				<TitleBar page={page} navigation={navigation} onLayout={addHeight} />
				<NavBar page={page} navigation={navigation} onLayout={addHeight} />
			</View></View>
		);
	} else {
		return(
			<View style={{flex:0,height:height}}>
				<TitleBar page={page} navigation={navigation} onLayout={addHeight} />
			</View>
		);
	}
}

function TitleBar({page,navigation,onLayout}){
	const [navOpen,setNavOpen] = useState(false);
	const theme = useContext(settingsContext).DarkTheme ? 'dark' : 'light';
	
	const toAbout = ()=>{
		setNavOpen(false);
		navigation.navigate('about');
	};
	const toSettings = ()=>{
		setNavOpen(false);
		navigation.navigate('settings');
	};

	return(
		<View style={styles.titleBar} onLayout={(obj)=>onLayout(1,obj['nativeEvent']['layout']['height'])}>
			<Text style={{...textStyle.title,...textColor.primary}}>{pageTitles[page][useContext(settingsContext).AppLanguage]}</Text>
			{navOpen ? (
				<View style={styles.navOpenView}>
					<Pressable style={icons.smallIcon} onPress={toAbout}>
						<Image 
							style={{...icons.smallIcon,...imageColor[theme]}} 
							source={page=='about'?require('../assets/icons/info-filled.png'):require('../assets/icons/info.png')} 
						/>
					</Pressable>
					<Pressable style={icons.smallIcon} onPress={toSettings}>
						<Image 
							style={{...icons.smallIcon,...imageColor[theme]}} 
							source={page=='settings'?require('../assets/icons/setting-filled.png'):require('../assets/icons/setting.png')} 
						/>
					</Pressable>
					<Pressable style={icons.smallIcon} onPress={() => setNavOpen(false)}>
						<Image 
							style={{...icons.smallIcon,...imageColor[theme]}} 
							source={require('../assets/icons/close.png')} 
						/>
					</Pressable>
				</View>
			) : (
				<Pressable style={icons.smallIcon} onPress={() => setNavOpen(true)}>
					<Image 
						style={{...icons.smallIcon,...imageColor[theme]}} 
						source={require('../assets/icons/more.png')} 
					/>
				</Pressable>
			) }
		</View>
	);
}

function NavBar({page,navigation,onLayout}){
	theme=useContext(settingsContext).DarkTheme?'dark':'light';

	return (
		<View style={styles.navView} onLayout={(obj)=>onLayout(2,obj['nativeEvent']['layout']['height'])}><View style={styles.navBar}>
			<Pressable style={icons.bigIcon} onPress={()=>navigation.navigate('list')}>
				<Image 
					style={{...icons.bigIcon,...imageColor[theme]}} 
					source={page=='list'? require('../assets/icons/list-selected.png') : require('../assets/icons/list.png')} 
				/>
			</Pressable>
			<Pressable style={icons.bigIcon} onPress={()=>navigation.navigate('plan')}>
				<Image 
					style={{...icons.bigIcon,...imageColor[theme]}} 
					source={page=='plan'? require('../assets/icons/plan-selected.png') : require('../assets/icons/plan.png')} 
				/>
			</Pressable>
			<Pressable style={icons.bigIcon} onPress={()=>navigation.navigate('archive')}>
				<Image 
					style={{...icons.bigIcon,...imageColor[theme]}} 
					source={page=='archive'? require('../assets/icons/archive-selected.png') : require('../assets/icons/archive.png')} 
				/>
			</Pressable>
		</View></View>
	);
}

const styles = StyleSheet.create({
	headerView:{
		flex:1,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
	},
	navOpenView:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 22,
	},
	titleBar:{
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 22,
	},
	navBar:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	navView:{
		width:Dimensions.get('screen').width,
		height: 40,
	},
});