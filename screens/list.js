import { StatusBar } from 'react-native';
import { View, ScrollView, Modal } from "react-native";
import { GestureHandlerRootView,GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import { useContext, useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';

import Header from "../components/topBars";
import { DialButton } from "../components/buttons";
import { CategoryItem } from "../components/items";
import { CategoryModal, TaskModal } from "../components/createModals";

import { containers } from "../assets/utils/common";
import { settingsContext } from "../assets/utils/settings";
import { listPage } from "../assets/utils/translations";
import { themeColors } from '../assets/utils/colors';

import { getCategoriesFull } from "../assets/utils/data";


export default function List(props){
	const theme = useContext(settingsContext).DarkTheme ? 'dark' : 'light';
	const lang = useContext(settingsContext).AppLanguage;
	const dir = ['fa'].includes(lang)?'rtl':'ltr';
	const swipe = Gesture.Fling().direction(Directions.LEFT).onStart(()=>{
		props.navigation.navigate('plan');
	});

	const [categoryModal,setCategoryModal] = useState(false);
	const [taskModal,setTaskModal] = useState(false);
	const [categories,setCategories] = useState([]);
	const focus = useIsFocused();

	useEffect(()=>{
		const getCats = async() => {
			setCategories(await getCategoriesFull());
		};
		if(focus){
			getCats();
		}
	},[focus]);

	const refresh = async() => {
		setCategories([]);
		setCategories(await getCategoriesFull());
	};
	
	return(
		<View style={{...containers[theme],...containers[dir]}}>
			<StatusBar backgroundColor={themeColors[theme]} barStyle={theme==='dark'?'light-content':'dark-content'} />
			<Header page='list' navigation={props.navigation} navBar={true} />
			<GestureHandlerRootView style={containers.scroll}><GestureDetector gesture={swipe}><ScrollView>
				{categories.map(cat=><CategoryItem category={cat} full={true} refresh={refresh} />)}
				<View style={{height:75}}></View>
			</ScrollView></GestureDetector></GestureHandlerRootView>
			<DialButton 
				icon='add' 
				labels={listPage.hover[lang]} 
				actions={[
					()=>setCategoryModal(true),
					()=>setTaskModal(true)
				]} 
			/>
			<Modal transparent={true} visible={categoryModal} animationType="fade" onRequestClose={()=>setCategoryModal(false)}>
				<CategoryModal onEnd={()=>setCategoryModal(false)} refresh={refresh} mode={0} />
			</Modal>
			<Modal transparent={true} visible={taskModal} animationType="fade" onRequestClose={()=>setTaskModal(false)}>
				<TaskModal onEnd={()=>setTaskModal(false)} refresh={refresh} mode={0} cat_id={0} />
			</Modal>
		</View>
	);
}
