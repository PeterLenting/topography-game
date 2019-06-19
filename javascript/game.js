//https://gist.github.com/stephenscaff/8266351  
//Add your images
    var images = ['cyclist-1.png', 'cyclist-2.png', 'cyclist-3.png', 'cyclist-4.png', 'cyclist-5.png', 'cyclist-6.png', 'cyclist-7.png', 'cyclist-8.png'];
    
//Build the img, then do a bit of maths to randomize load and append to a div.
    $('<img class="fade-in" src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');
    


[
	{
		subjectTitle: "Cycling",
		data: [
			{
				answer: "Jacques Anquetil",
				question: "images/cyclist-1-empty.png"
			},
			{
				answer: "Lance Armstrong",
				question: "images/cyclist-2-empty.png"
			},
			{
				answer: "Gino Bartali",
				question: "images/cyclist-3-empty.png"
			},
			{
				answer: "Fausto Coppi",
				question: "images/cyclist-4-empty.png"
			},
				{
				answer: "Miguel Indurain",
				question: "images/cyclist-5-empty.png"
			},
			{
				answer: "Bernard Hinault",
				question: "images/cyclist-6-empty.png"
			},
			{
				answer: "Louison Bobet",
				question: "images/cyclist-7-empty.png"
			},
			{
				answer: "Felice Gimondi",
				question: "images/cyclist-8-empty.png"
			},
				{
				answer: "Eddy Merckx",
				question: "images/cyclist-9-empty.png"
			},
			{
				answer: "Sean Kelly",
				question: "images/cyclist-10-empty.png"
			},
			{
				answer: "Alfredo Binda",
				question: "images/cyclist-11-empty.png"
			},
			{
				answer: "Rik van Steenbergen",
				question: "images/cyclist-12-empty.png"
			}
		]
	}
];