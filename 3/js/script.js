function getPhotos()
{
	const fotos =
	[
		'https://picsum.photos/id/500/500',
		'https://picsum.photos/id/501/500',
		'https://picsum.photos/id/502/500',
		'https://picsum.photos/id/503/500',
		'https://picsum.photos/id/504/500',
		'https://picsum.photos/id/505/500',
		'https://picsum.photos/id/506/500',
		'https://picsum.photos/id/507/500',
		'https://picsum.photos/id/508/500',
		'https://picsum.photos/id/509/500',
		'https://picsum.photos/id/510/500',
		'https://picsum.photos/id/511/500',
		'https://picsum.photos/id/512/500',
		'https://picsum.photos/id/513/500',
		'https://picsum.photos/id/514/500'
	]

	const titles =
	[
		'Фото 1',
		'Фото 2',
		'Фото 3',
		'Фото 4',
		'Фото 5',
		'Фото 6',
		'Фото 7',
		'Фото 8',
		'Фото 9',
		'Фото 10',
		'Фото 11',
		'Фото 12',
		'Фото 13',
		'Фото 14',
		'Фото 15'
	]

	const countPhotos = 15;
	const row = 4;

	for (var i = 0; i < countPhotos; i++) 
	{
		if (i % row == 0)
		{
			document.write(`<div class="row">`);
		}
		document.write(`<div class="col">`);
		document.write(`<img src="${fotos[i]}" title="${titles[i]}" alt = "${titles[i]}">`);
		document.write(`<p class="centered">${titles[i]}</p>`)
		document.write(`</div>`);
		if (i % row == row - 1)
		{
			document.write(`</div>`);
		}
	}
}

function showListOfInterests() {
	let numberOfArguments = showListOfInterests.arguments.length;
	document.write(`<ul>`);
	for (var i = 0; i < numberOfArguments; i++) {		
		document.write(`<li><a href="${showListOfInterests.arguments[i][0]}">${showListOfInterests.arguments[i][1]}</a></li>`);
	}
	document.write(`</ul>`);
}


function validateQuestionForm(form)
{
	var selects = form.getElementsByTagName('select');
	var textareas = form.getElementsByTagName('textarea');
	var inputs = document.getElementsByName('answer_3');

    for (var i = 0; i < selects.length; i++) {
        if(selects[i].value == ""){        	
            alert("Заполните поле");
            selects[i].focus();
            return false;
        }        
    }

    for (var i = 0; i < textareas.length; i++) {
        if(textareas[i].value == ""){        	
            alert("Заполните поле");
            textareas[i].focus();
            return false;
        }        
    }

	var isChecked = false
	for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].checked)
        	isChecked = true;        	      
    }

    if (!isChecked)
    {
    	alert("Ответьте на третий вопрос");
        inputs[0].focus();
        return false;
    }

    var secondAnswer = document.getElementById('ans_2')
    var answerRegex = /^?-[0-9]+$/; 

    if (!(answerRegex.test(secondAnswer.value)))
	{
		alert("Поле ответа на 2-й вопрос должно содержать целое число");
        secondAnswer.focus();
        return false;
	}

	return true;
}





function onMouseOverImage(tag) {
  let image = tag.firstElementChild;
  image.src = "images/logo2.jpg";
}

function onMouseOutImage(tag) {
  let image = tag.firstElementChild;
  image.src = "images/logo.jpg";
}



function showDropdown() {
  document.getElementById("interest_drop_menu").classList.toggle("show");
}


const week = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  0: "Воскресение",
};

function getDateAndTime() {
  	let now = new Date();
  	let date = now.getDate().toString() + '.' + now.getMonth().toString() + '.' + now.getFullYear().toString() + ' ' + week[now.getDay()];
  	let text = document.getElementById("date");
  	text.innerHTML = date;
	let timeNode = document.getElementById("time-node");
   	function getCurrentTimeString() {
      	return new Date().toTimeString().replace(/ .*/, '');
   	}
 
   	setInterval(
      	() => timeNode.innerHTML = getCurrentTimeString(),1000);
}






function validate_form() {
    var valid = true;
    if (document.contact_form.sex[0].checked == false && document.contact_form.sex[1].checked == false && valid == true){
        valid = false;
    }
    if (validate_fio('hintName') == false)
        valid = false;
    if (validate_email('hintMail') == false)
        valid = false;
    if (validate_mes() == false)
        valid == false;
    if (validate_phone('hintPhone') == false)
        valid = false;
    if (document.getElementById("dateOfBirth").value == ""){
        document.getElementById("dateOfBirth").style.backgroundColor = "#FF6347";
        valid = false;
    }

    if (valid == false) {
        window.alert("Поля не заполнены или заполнены неверно. Незаполненные отмечены красным.")
    }
    return valid;
}

function hideHints(){
    for (var i = 0; i < hideHints.arguments.length; i++) {
        document.getElementById(hideHints.arguments[i]).innerHTML = "";

    }
}

var hids = ['hintName', 'hintPhone', 'hintMail'];
var hints = ['Например, Иванов Иван Иванович', 'Например, 7912344514. Номер начинается на 7 или 3', 'Например, test@gmail.com'];

function validate_fio(hint){
    var regExp = /^[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+$/;
    if (!(regExp.test(document.contact_form.name.value))) {
        document.contact_form.name.style.backgroundColor = "#FF6347";
        document.getElementById(hint).innerHTML = hints[hids.indexOf(hint)];
        return false;
    } else {
        document.contact_form.name.style.backgroundColor = "#44944A";
        document.getElementById(hint).innerHTML = "";
        return true;
    }
}

function validate_phone(hint){
    var regExp = /^[73]\d{8,10}$/;
    if (!(regExp.test(document.contact_form.phone.value))) {
        document.contact_form.phone.style.backgroundColor = "#FF6347";
        document.getElementById(hint).innerHTML = hints[hids.indexOf(hint)];
        return false;
    } else {
        document.contact_form.phone.style.backgroundColor = "#44944A";
        document.getElementById(hint).innerHTML = "";
        return true;
}
}

function validate_mes(){
    if (document.contact_form.message.value == "") {
        document.contact_form.message.style.backgroundColor = "#FF6347";
        return false;
    } else {
        document.contact_form.message.style.backgroundColor = "#44944A";
        return true;
    }
}

function validate_email(hint){
    var regExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    if (!regExp.test(document.contact_form.email.value)) {
        document.contact_form.email.style.backgroundColor = "#FF6347";
        document.getElementById(hint).innerHTML = hints[hids.indexOf(hint)];
        return false;
    } else {
        document.contact_form.email.style.backgroundColor = "#44944A";
        document.getElementById(hint).innerHTML = "";
        return true;
    }
}

function imchange(){
    var value = document.images["kindaSliderMaybe"].alt - 0;
    if (value == 15) {
        value = 1;
    } else {
        value++;
}
    document.images["kindaSliderMaybe"].src = "photos/"+value+".jpg";
    document.images["kindaSliderMaybe"].alt = value;
}


function showList() {
    if (document.getElementById("inter").style.display != 'none'){
        document.getElementById("inter").style.display = 'none';
    } else {
        document.getElementById("inter").style.display = 'block';
    }
}


function showCalendar(date) {
    document.getElementById("dateOfBirth").setAttribute('enabled', '0');
    var yearSelect = document.getElementById("year");
    var monthSelect = document.getElementById("month");
    var week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    var daysInMonth;

    document.getElementById("calendar").style.display = 'inline';
    if (yearSelect.options.length == 0) {
        for (var year = 1900; year < date.getFullYear() + 1; year++) {
            var option = new Option();
            option.text = year;
            option.value = year;
            yearSelect.add(option);
        }
        var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        for (var i = 0; i < 12; i++) {
            var option = new Option();
            option.text = months[i];
            option.value = i;
            monthSelect.add(option);
        }
        yearSelect.options[date.getFullYear() - 1900].selected = true;
        monthSelect.options[date.getMonth()].selected = true;
    } else {
        document.getElementById("calendar").removeChild(document.getElementById("days"));
        var month = document.getElementById("month").options[document.getElementById("month").selectedIndex].value;
        var year = document.getElementById("year").options[document.getElementById("year").selectedIndex].value;
        date = new Date(year, month, 1);
    }
    var table = document.createElement("table");
    table.setAttribute('id', 'days');
    document.getElementById("calendar").appendChild(table);

    var daysCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((date.getMonth() == 1) && (date.getFullYear() % 4 == 0))
        daysInMonth = 29;
    else
        daysInMonth = daysCount[date.getMonth()];
    tr = document.createElement("tr");
    table.appendChild(tr);

    for (i = 0; i < 7; i++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = week[i];
    }
    var datetemp = new Date(date.getFullYear(), date.getMonth(), 1);
    var empty = datetemp.getDay();
    var tr = document.createElement("tr");
    table.appendChild(tr);

    for (i = 0; i < empty; i++) {
        var td = document.createElement("td");
        tr.appendChild(td);
    }

    var currentDay = 1;

    for (i = empty; i < 7; i++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = currentDay.toString();
        td.setAttribute("id", currentDay+"");
        td.setAttribute("onclick", "setDate(" + (currentDay + "") + ");");
        currentDay++;
    }
    var count = 7;
    console.log(currentDay + " " + daysInMonth);
    while (currentDay <= daysInMonth) {
        if (count == 7) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            count = 0;
        }
        count++;
        var td = document.createElement("td");
        tr.appendChild(td);
        td.setAttribute("onclick", "setDate(" + (currentDay + "") + ");");
        td.setAttribute("id", currentDay+"");
        td.innerHTML = currentDay.toString();
        currentDay++;
    }
    for (i = count; i < 7; i++) {
        var td = document.createElement("td");
        tr.appendChild(td);
    }
    if (document.getElementById("dateOfBirth").value != ""){
        var regExp = /(\d+)/;
        var cur = document.getElementById("dateOfBirth").value;
        document.getElementById(regExp.exec(cur)[0]).style.backgroundColor = "#FF6347";
    } else {
        date = new Date();
        document.getElementById(date.getDate() + 1).style.backgroundColor = "#FF6347";
    }

}

function redrawCalendar() {
    var month = document.getElementById("month").options[document.getElementById("month").selectedIndex].value;
    var year = document.getElementById("year").options[document.getElementById("year").selectedIndex].value;
    showCalendar(new Date(year, month, 1));
}

function setDate(day){
    var month = document.getElementById("month").options[document.getElementById("month").selectedIndex].value;
    var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var year = document.getElementById("year").options[document.getElementById("year").selectedIndex].value;
    document.getElementById("dateOfBirth").value = months[month]+  " " + day + " " +  year;
    document.getElementById("dateOfBirth").style.backgroundColor = "#44944A";
    hideCalendar();
}

function hideCalendar(){
    document.getElementById("calendar").style.display = 'none';
    document.getElementById("dateOfBirth").setAttribute('enabled', 'enabled');
}


function showHistory(){
	var pages = new Array('index', 'about', 'interests',  'study', 'photos', 'contacts', 'tests');
    for (var i = 0; i < pages.length; i++) {
    	document.getElementById(pages[i] + '_local').innerHTML = localStorage.getItem(pages[i]);
        document.getElementById(pages[i] + '_cookie').innerHTML = getCookie(pages[i]);
    }
}

function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

function getCookie(name) {
    var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    if (r) return r[2];
    else return 0;
}


function saveToCookies(name) {
	lsNull();
    localStorage.setItem(name, parseInt(localStorage.getItem(name)) + 1);
    setCookie(name, parseInt(getCookie(name))+ 1);
}

function lsNull() {
    var pages = ['index', 'about', 'contacts',  'photos','interests', 'study', 'tests'];
    for (var i = 0; i < pages.length; i++) {
        var iValue = localStorage[pages[i]] || 0;
        localStorage.setItem(pages[i], iValue);
    }
}

