
window.document.addEventListener('DOMContentLoaded', () => {



const title = document.querySelector('#in1'),
ism = document.querySelector('#in2'),
familiya = document.querySelector('#in3'),
knopka = document.querySelector('#knopka'),
tbody = document.querySelector('#bodyTable');


knopka.addEventListener('click', (event) => {

	event.preventDefault();


	if(title.value == '' && ism.value == '' && familiya.value == '' && +familiya.value<0 ){

alert('malumotlar to\'ldirilmagan ')


	}


else{


const tr = document.createElement('tr');

const td1 = document.createElement('td');

td1.innerHTML = title.value;


tr.appendChild(td1);






const td2 = document.createElement('td');

td2.innerHTML = ism.value;


tr.appendChild(td2);







const td3 = document.createElement('td');

td3.innerHTML = familiya.value;


tr.appendChild(td3);







tbody.appendChild(tr)


title.value = '';
ism.value = '';
familiya.value = '';	




}

})



})



