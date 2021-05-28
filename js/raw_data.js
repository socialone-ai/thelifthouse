const data = [
		{
			name:"Accessories",
			products: [
				"./assets/images/categories/Accessories/Elevator FAN.jpg",
				"./assets/images/categories/Accessories/ESSBEE Limit Switch NC-NO.jpg",
				"./assets/images/categories/Accessories/High Speed Blower Fan.jpg",
				"./assets/images/categories/Accessories/Inspection Box.png",
				"./assets/images/categories/Accessories/J Hook pata.jpg",
				"./assets/images/categories/Accessories/Junction Box.jpg",
				"./assets/images/categories/Accessories/Limit Switch.jpg",
				"./assets/images/categories/Accessories/MS Fireman Swtich.jpg",
				"./assets/images/categories/Accessories/Pit Switch.jpg",
				"./assets/images/categories/Accessories/Plastic Cable Hanger.jpg",
				"./assets/images/categories/Accessories/Ribbon Cable telephone type.jpg",
				"./assets/images/categories/Accessories/Rope Clamp.jpg",
				"./assets/images/categories/Accessories/Rubber pad.jpg",
				"./assets/images/categories/Accessories/SS Emergency Alarm.jpg",
			],
		},
		{
			name:"Doors",
			products: [
				"./assets/images/categories/Doors/MS Collapsible Door.jpg",
				"./assets/images/categories/Doors/MS IFG Door.jpg",
				"./assets/images/categories/Doors/MS Swing Door.jpg",
				"./assets/images/categories/Doors/MS Telescopic-Manual Door.jpg",
				"./assets/images/categories/Doors/SS Auto Door.jpg",
				"./assets/images/categories/Doors/SS Glass Door.jpg",
				"./assets/images/categories/Doors/SS Golden Etching-door.jpg",
				"./assets/images/categories/Doors/SS Rose Gold Etching-door.jpg",
			],
		},
		{
			name:"Electricals",
			products: [
				"./assets/images/categories/Electricals/AVOX Sleel Type.jpg",
				"./assets/images/categories/Electricals/Box Type.jpg",
				"./assets/images/categories/Electricals/Fuji Drive.jpg",
				"./assets/images/categories/Electricals/Geared - Integrated Control Panel.jpg",
				"./assets/images/categories/Electricals/Gearless - Integrated Control Panel.jpg",
				"./assets/images/categories/Electricals/HP Mont Drive.jpg",
				"./assets/images/categories/Electricals/INVT Drive.jpg",
				"./assets/images/categories/Electricals/LIFT ON - ARD.jpg",
				"./assets/images/categories/Electricals/Simple Auto Door Panel.jpg",
				"./assets/images/categories/Electricals/SS-Acrylic Design.jpg",
				"./assets/images/categories/Electricals/Standard Wallmount Type.jpg",
				"./assets/images/categories/Electricals/TG Drive.jpg",
				"./assets/images/categories/Electricals/Yaskawa Drive.jpg",
			]
		},
		{
			name:"Headers",
			products: [
				"./assets/images/categories/Headers/Fermator Header.jpg",
				"./assets/images/categories/Headers/Synergy Header.jpg",
				"./assets/images/categories/Headers/Wittur Header.png",
			]
		},
		{
			name:"Safeties and Hardware",
			products: [
				"./assets/images/categories/Safeties and Hardware/Cantilever Type.jpg",
				"./assets/images/categories/Safeties and Hardware/Car Shoe.jpg",
				"./assets/images/categories/Safeties and Hardware/Counter Shoe.jpg",
				"./assets/images/categories/Safeties and Hardware/Counter Weight.jpg",
				"./assets/images/categories/Safeties and Hardware/Divertor Wheel.jpg",
				"./assets/images/categories/Safeties and Hardware/FASTNERS.jpg",
				"./assets/images/categories/Safeties and Hardware/GP Bracket.jpg",
				"./assets/images/categories/Safeties and Hardware/Guide Clips.jpg",
				"./assets/images/categories/Safeties and Hardware/MRL Type.jpg",
				"./assets/images/categories/Safeties and Hardware/Otis Type Manual Lock.jpg",
				"./assets/images/categories/Safeties and Hardware/R Cam.jpg",
				"./assets/images/categories/Safeties and Hardware/Standard Otis Type.jpeg",
			]
		},
		{
			name:"Motor",
			products: [
				"./assets/images/categories/Motor/Montanari-Geared.jpg",
				"./assets/images/categories/Motor/Sharp-Geared-MP-61.jpg",
				"./assets/images/categories/Motor/Sicor-geared.jpg",
				"./assets/images/categories/Motor/Technik Essti - Geared.jpg",
				"./assets/images/categories/Motor/Varsha VI - Geared.jpeg",
				"./assets/images/categories/Motor/Bharat-bijlee-gearless.jpg",
				"./assets/images/categories/Motor/Gearless Motor.jpg",
				"./assets/images/categories/Motor/Hepu-Gearless.jpg",
				"./assets/images/categories/Motor/Monodrive-Gearless.jpg",
				"./assets/images/categories/Motor/Montanari-Gearless.jpg",
				"./assets/images/categories/Motor/Sharp-Gearless.jpg",
				"./assets/images/categories/Motor/Torindrive-Gearless.jpg",
			]
		},
		{
			name:"Cabin",
			products: [
				"./assets/images/categories/Cabin/M.S. CABIN.jpg",
				"./assets/images/categories/Cabin/MS CABIN.jpg",
				"./assets/images/categories/Cabin/MS  CABIN.jpg",
				"./assets/images/categories/Cabin/S.S. CABIN.jpg",
				"./assets/images/categories/Cabin/S.S.  CABIN.jpg",
				"./assets/images/categories/Cabin/SS CABIN.jpg",
				"./assets/images/categories/Cabin/SS  CABIN.jpg",
			]
		},
	]

get_data = async (category) => {
	for(var i=0; i<data.length;i++){
		if(data[i].name == category) {
			return data[i]
		}
	}
	return null
}

buy_now = (id,product=-1) => {
	if(id == -1)
		var buy_text = "Hey, I want you to help me out with my query!"
	else{
		var name = ""
		if(product == -1){
			name = data[id].name
		} else {
			var temp = data[id]["products"][product]
			temp = temp.split("/")
			temp = temp.pop
			temp = temp.split(".")
			temp.pop()
			name = temp.join('')
		}
		var buy_text = "Hey there, assist me please! \nI want to purchase " + name
	}
	window.open('https://wa.me/+918209292067?text='+buy_text)
}
