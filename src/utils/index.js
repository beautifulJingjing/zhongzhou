// dateFormatString
const dateFormatString = (timestamp, type = 0) => {
	const date = new Date(timestamp)

	if (type === 0) {
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`.replace(/\b(\w)\b/g, '0$1')
	}

    if (type === 1) {
		return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`.replace(/\b(\w)\b/g, '0$1')
	}

	if (type === 2) {
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`.replace(/\b(\w)\b/g, '0$1')
	}
}

// stringify
function stringify(data) {
    return Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')
}

// 检验是否包含有某一个class
function classIndexOf(obj,v){
	var arrClassName = obj.className.split(" ");
	for(var i=0;i<arrClassName.length;i++){
		if(arrClassName[i] == v){
			return i;
		}
	}
	return -1;
}
function addClass(obj,className){
	//如果原来没有class
	if(obj.className == ""){
		obj.className = className;
	}else{
		var _index = classIndexOf(obj,className);
		//如果原来没有这个新加的class
		if(_index == -1){
			obj.className += " " + className;
		}
	}
}

function removeClass(obj,className){
	//如果以前的元素不为空
	if(obj.className != ""){
		var arrClassName = obj.className.split(" ");
		var _index = classIndexOf(obj,className);
		//如果存在要删除的class
		if(_index != -1){
			arrClassName.splice(_index,1);
		}
		obj.className = arrClassName.join(" ");
	}
}
function generateId (){
	return Math.floor(Math.random() * 10000);
}

export { dateFormatString, stringify, classIndexOf, generateId };