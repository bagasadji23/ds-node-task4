//for loop
//for(let i = 1; i <= 5; i++){
//	let kalimat = '';

//	for(let j = 1; j <= 3; j++){
//		kalimat += '$'
//	}

//	console.log(kalimat);
//}

let day = 7;
let dayName;

switch (day){
    case 0:
        dayname = "Monday";
        break;
    case 1:
        dayname = "Tuesday";
        break;
    case 2:
        dayname =  "Wednesday";
        break;
    case 3:
        dayname = "Thursday";
        break;
    case 4:
        dayname = "Friday";
        break;
    case 5:
        dayname = "Saturday";
        break;
    default:
        dayname = "Unknown Day";   
}

console.log(`Today is ${dayname}`);