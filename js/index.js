function hideShowElement(x,delay)
{
	setTimeout(() => {
		for (let index = 0; index < x.length; index++) {
			x[index].classList.toggle('hidden');
		}
	}, delay);
}



//**************** */ FOOTER STARTS FROM HERE **********************
const date =  new Date().getFullYear();
document.querySelector('#date').textContent = date;
//**************** */ FOOTER ENDS HERE **********************

//**************** */ QURAN PAGE STARTS FROM HERE **********************

//Select surah,page,juz,hizb,ruku div
let btns = document.querySelectorAll('#readQuranCategory li');
btns.forEach(element => {
    element.addEventListener('click',()=>{
        // Hide all pages initially #quranPage > div selects only direct child
        document.querySelectorAll('#quranPage > div').forEach(page => {
            page.classList.add('hidden');
        });
        
        // Remove boxshadow from all buttons
        btns.forEach(btn => {
            btn.classList.remove('boxshadow-custom-verylight');
			btn.classList.add('boxshadow-custom-fast');
        });

        // Get the ID of the page to display
        let pageId = '#' + element.textContent.toLowerCase() + 'Wise';
		// console.log(pageId);
        // Remove hidden class from the selected page and add boxshadow to the clicked button
        document.querySelector(pageId).classList.remove('hidden');
        element.classList.add('boxshadow-custom-verylight');
    });
});

//Display Juz on click
const quranPagesDiv = document.getElementById('quranPages');

//Function to append images to quranPages div from page number m to n
function appendQuranPages(m, n) {
    var imgTags = '';
     
    for (var i = m; i <= n; i++) {
        imgTags += '<img src="./assets/Quran/' + i + '.jpeg" alt="page' + i + '" class="page' + i + ' ">';
    }
    quranPagesDiv.innerHTML = imgTags;
	quranPagesDiv.classList.remove('hidden');
}
//Go back to Quran Categories
document.getElementById('backToReadQuranCategory').addEventListener('click',backToReadQuranCategory);
function backToReadQuranCategory()
{
	this.classList.add('hidden');
	quranPagesDiv.classList.add('hidden');
	document.getElementById('surahWise').classList.remove('hidden');

	 // Remove boxshadow from all buttons
	 document.querySelectorAll('#readQuranCategory li').forEach(btn => {
		btn.classList.remove('boxshadow-custom-verylight');
		 btn.classList.add('boxshadow-custom-fast');
	});
	document.querySelectorAll('#readQuranCategory li')[0].classList.add('boxshadow-custom-verylight');
}

// Get the parent div
const surahListDiv = document.getElementById('surahlist');
const pageListDiv = document.getElementById('pagelist');
const juzListDiv = document.getElementById('juzlist');
const hizbListDiv = document.getElementById('hizblist');
const rukuListDiv = document.getElementById('rukulist');

//******************* SHOW PAGES ON CLICKING SURAH */
// Loop through child divs starting from surah1 to 114
for (var i = 1; i <= 114; i++) {
    // Construct the id of each child div
    var childDivId = 'surah' + i;

    // Get the child div
    var childDiv = document.getElementById(childDivId);

    // Add click event listener to each child div
    childDiv.addEventListener('click', function() {
		var min = this.getAttribute('min');
		var max = parseInt(this.getAttribute('max'));
		// Call the appendQuranPages function with min and max attributes
		appendQuranPages(min, max);
		// console.log(`min: `+min+" max: "+max);
		document.getElementById("surahWise").classList.add('hidden');
		document.getElementById("backToReadQuranCategory").classList.remove('hidden');
        
    });
}

//******************* SHOW PAGES ON CLICKING SURAH */
// Loop through child divs starting from page 4 to 850
for (var i = 4; i <= 850; i++) {
    // Construct the id of each child div
    var childDivId = 'page' + i;

    // Get the child div
    var childDiv = document.getElementById(childDivId);

    // Add click event listener to each child div
    childDiv.addEventListener('click', function() {
		let pageNo = this.getAttribute('pageNo');;
		// Call the appendQuranPages function with min and max attributes
		appendQuranPages(pageNo,pageNo);
		console.log(`page: `+pageNo);
		document.getElementById("pageWise").classList.add('hidden');
		document.getElementById("backToReadQuranCategory").classList.remove('hidden');
        
    });
}

//******************* SHOW PAGES ON CLICKING JUZ */
// Loop through child divs starting from juz1 to juz30
for (var i = 1; i <= 30; i++) {
    // Construct the id of each child div
    var childDivId = 'juz' + i;

    // Get the child div
    var childDiv = document.getElementById(childDivId);

    // Add click event listener to each child div
    childDiv.addEventListener('click', function() {
		var min = this.getAttribute('min');
		var max = parseInt(this.getAttribute('max'));
		// Call the appendQuranPages function with min and max attributes
		appendQuranPages(min, max);
		// console.log(`min: `+min+" max: "+max);
		document.getElementById("juzWise").classList.add('hidden');
		document.getElementById("backToReadQuranCategory").classList.remove('hidden');
        
    });
}

//******************* SHOW PAGES ON CLICKING Hizb  */
// Loop through child divs starting from 1 to 60
for (var i = 1; i <= 60; i++) {
    // Construct the id of each child div
    var childDivId = 'hizb' + i;

    // Get the child div
    var childDiv = document.getElementById(childDivId);

    // Add click event listener to each child div
    childDiv.addEventListener('click', function() {
		var min = this.getAttribute('min');
		var max = parseInt(this.getAttribute('max'));
		// Call the appendQuranPages function with min and max attributes
		appendQuranPages(min, max);
		// console.log(`min: `+min+" max: "+max);
		document.getElementById("hizbWise").classList.add('hidden');
		document.getElementById("backToReadQuranCategory").classList.remove('hidden');
        
    });
}

//******************* SHOW PAGES ON CLICKING RUKU  */
// Loop through child divs starting from 1 to 556
for (var i = 1; i <= 556; i++) {
    // Construct the id of each child div
    var childDivId = 'ruku' + i;

    // Get the child div
    var childDiv = document.getElementById(childDivId);

    // Add click event listener to each child div
    childDiv.addEventListener('click', function() {
		var min = this.getAttribute('min');
		var max = parseInt(this.getAttribute('max'));
		// Call the appendQuranPages function with min and max attributes
		appendQuranPages(min, max);
		// console.log(`min: `+min+" max: "+max);
		document.getElementById("rukuWise").classList.add('hidden');
		document.getElementById("backToReadQuranCategory").classList.remove('hidden');
        
    });
}
//**************** */ QURAN PAGE ENDS HERE **********************












//**************** */ QURAN PAGE ENDS HERE **********************



