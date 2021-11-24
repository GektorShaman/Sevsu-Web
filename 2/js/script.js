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


function validateContactForm(form) {
	var inputs = form.getElementsByTagName('input');
	var textareas = form.getElementsByTagName('textarea');
	var selects = form.getElementsByTagName('select');

	 for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value == ""){        	
            alert("Заполните поле");
            inputs[i].focus();
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

    for (var i = 0; i < selects.length; i++) {
        if(selects[i].value == ""){        	
            alert("Заполните поле");
            selects[i].focus();
            return false;
        }        
    }

	var name = document.getElementById('name');
	var nameRegex = /^([A-Za-zА-Яа-я]+ ){2}[A-Za-zА-Яа-я]+$/;
	
	if (!(nameRegex.test(name.value)))
	{
		alert("Поле ФИО должно содержать 3 слова, разделенных пробелами");
        name.focus();
        return false;
	}
	

	var phone = document.getElementById('name');
	var phoneRegex = /^((\+7)|(\+3))[0-9]{8,10}$/;
	
	if (!(phoneRegex.test(phone.value)))
	{
		alert("Поле телефон должно начинаться с +7 или +3, не должно содержать пробелов и должно содержать от 9 до 11 цифр");
        phone.focus();
        return false;
	}

	return true;
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
