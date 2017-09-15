// Declare the array of objects that will contain the bank of questions, choices, the answers, and the imagaes for each question.
let questionBank = [
	{question: "What type of animal sits on the shoulder of the villain, Shan Yu?",
	answer:"a",
	a: "Falcon",
	b: "Dragon",
	c: "Owl",
	d: "Griffin",
	img: "http://www.cornel1801.com/disney/Mulan-1998/characters/Shan-Yu.jpg"},
	{question: "How does grandmother Fa hope to bring Mulan good luck early in the film?",
	answer:"b",
	a: "A silk dress",
	b: "A special cricket",
	c: "An herbal concoction",
	d: "A prayer to her ancestors",
	img: "http://68.media.tumblr.com/tumblr_lsga4lf2hM1qfr1m4o1_1280.png?.jpg"},
	{question: "What is the name of Mulan's horse?",
	answer:"a",
	a: "Khan",
	b: "Song",
	c: "Max",
	d: "Ping",
	img: "https://secure.parksandresorts.wdpromedia.com/media/disneyparks/blog/wp-content/uploads/2011/06/dhh078137LARGE.jpg"},
	{question: "Complete the lyric: \"When will my reflection show...\"",
	answer:"a",
	a: "Who I am inside",
	b: "How I feel inside",
	c: "What I want to see",
	d: "What they see in me",
	img: "https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2015/02/Mulan-Reflection-6.jpg"},
	{question: "Who does the Emperor request join the fight against the Huns?",
	answer:"d",
	a: "100 men from every village",
	b: "The head of every household",
	c: "Every man who knows how to fight",
	d: "One man from every family",
	img: "https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2014/08/Disney-Characters-Grumpier-Than-Grumpy-3.png"},
	{question: "Complete the line, spoken before Mushu is woken up: \"Ancestors, hear our prayer...\"",
	answer:"a",
	a: "Watch over Mulan",
	b: "Protect Mulan",
	c: "Bring back Mulan",
	d: "Give Mulan strength",
	img: "http://images6.fanpop.com/image/articles/229000/disney-princess_229925_8.jpg?cache=1393145686"},
	{question: "Who do Mulan's ancestors intend to send after her, before Mushu accepts the job for himself?",
	answer:"b",
	a: "The Amazing Fire Dragon",
	b: "The Great Stone Dragon",
	c: "The Ancient Ice Dragon",
	d: "The Beloved Sea Dragon",
	img: "https://vignette4.wikia.nocookie.net/disney/images/f/f8/Mulan-disneyscreencaps.com-2444.jpg/revision/latest?cb=20110630213520"},
	{question: "When the soldiers are asked to retrieve an arrow by their captain, they are forced to carry two weights.  One represents discipline.  What does the other represent?",
	answer:"b",
	a: "Honor",
	b: "Strength",
	c: "Respect",
	d: "Duty",
	img: "https://i.ytimg.com/vi/MArbhFpwG6k/maxresdefault.jpg"},
	{question: "Complete the lyric: \"You're the saddest bunch I ever met, but you can bet before we're through, mister...\"",
	answer:"d",
	a: "I'll show you a thing or two",
	b: "You'll know what you have to do",
	c: "You'll shoot straight and true",
	d: "I'll make a man out of you",
	img: "https://vignette4.wikia.nocookie.net/disney/images/5/58/I%27ll_Make_a_Man_Out_of_You.jpg/revision/latest?cb=20130216164740"},
	{question: "When Mushu and Cri-kee impersonate a messenger riding a panda, what does Mushu call it?",
	answer:"a",
	a: "A Black & White",
	b: "The Panda Express",
	c: "Special Delivery",
	d: "His Royal Bearness",
	img: "http://apollo-na-uploads.s3.amazonaws.com/1441985490/Mulan-Mushu-Panda-Messenger_d4192111.jpeg"},
	{question: "At the opening of the film, Mulan wears mostly red and pink.  As a soldier, what color armor does she sport?",
	answer:"b",
	a: "Blue",
	b: "Green",
	c: "Yellow",
	d: "Purple",
	img: "https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2014/08/Mulan-by-Garden.jpg"},
	{question: "How does Mulan survive the large battle with Shan Yu?",
	answer:"d",
	a: "By hiding under the snow",
	b: "By disguising herself as a Hun",
	c: "By sending Mushu on the offensive",
	d: "By causing an avalanche of snow",
	img: "https://i.ytimg.com/vi/LtCR2DANUzw/maxresdefault.jpg"},
	{question: "What secret does Cri-kee reveal to Mushu?",
	answer:"a",
	a: "He's not actually lucky",
	b: "He's not actually a cricket",
	c: "He is a she",
	d: "He can speak perfect English",
	img: "https://vignette4.wikia.nocookie.net/disney/images/f/f9/Mulan-disneyscreencaps.com-9070.jpg/revision/latest?cb=20130217213631"},
	{question: "What trophy does Li Shang present to the Emperor?",
	answer:"d",
	a: "The enemy's banner",
	b: "A letter from a captured soldier",
	c: "A symbolic trunk of gold coins",
	d: "The sword of Shan Yu",
	img: "http://cdn.quotesgram.com/img/56/33/724523094-disney_quotes_mulan_shang_emperor.jpg"},
	{question: "What tactic do Mulan's compatriots use to sneak in to the Emperor's palace after he is taken prisoner?",
	answer:"c",
	a: "Stick to the shadows",
	b: "Impersonate the enemy",
	c: "Dress as women",
	d: "A spell of sleep",
	img: "https://static1.squarespace.com/static/50645fbe84aecce3f33e6d30/t/5374127ae4b0297decd4a824/1400115852659/"},
	{question: "When Mushu asks Mulan her plan for escaping the Emperor's palace, what response does he get?",
	answer:"a",
	a: "\"I'm making this up as I go\"",
	b: "\"He'll never find us in the city\"",
	c: "\"I will not stop fighting for my father\"",
	d: "\"One of us isn't making it out alive\"",
	img: "http://a.dilcdn.com/bl/wp-content/uploads/sites/2/2014/08/Mulan-escaping-emperors-palace.jpg"},
	{question: "What special equipment helps Mulan defeat Shan Yu?",
	answer:"b",
	a: "A kite",
	b: "Fireworks",
	c: "A warrior's axe",
	d: "Her cloak",
	img: "https://ghostmaster16.files.wordpress.com/2015/04/mulan-disneyscreencaps-com-8810.jpg"},
	{question: "Complete the line: \"The flower that blooms in adversity...\"",
	answer:"c",
	a: "Wilts under the light of contentment",
	b: "Cannot be picked in haste",
	c: "Is the most rare and beautiful of all",
	d: "Is a prize to be treasured",
	img: "http://jimhillmedia.com/mb/images/upload/Mulan-Blossom-Photo-web.jpg"},
	{question: "When Mulan returns home, she delivers her father the sword of Shan Yu and the crest of the Emperor.  What's on the crest?",
	answer:"d",
	a: "A swan",
	b: "A sword",
	c: "A cricket",
	d: "A dragon",
	img: "http://wap.chinadaily.com.cn/img/attachement/jpg/site1/20150414/001ec97909631696c4bf06.jpg"}];

// Initialize the a variable for the answer to the current question, the index of the current position in the array,
// the number of questions asked, number of correct answers, and an array to store the previously asked questions.
let currCorrAns;

let currQpos;

let numQuestionsAsked = 0;

let corrNum = 0;

let prevUsedQuestions = [];

// This function chooses a question at random from the bank of questions available.
function chooseQuestion() {
	currQpos = Math.floor(Math.random() * (questionBank.length));
    renderQuestionToScreen(currQpos);
    onlyAsk10Questions(numQuestionsAsked);
    showScore(corrNum);
}

// This function shows the player their current score.
function showScore(numCorr) {
	$('#correct').text(`Score: ${numCorr}/10`);
}

// This function shows the player how many questions they've been asked.
function showQsAnswered(numQs) {
	$('#numAns').text(`Question: ${numQs}/10`);
}

// This function displays the question, image, and choices for each question
function renderQuestionToScreen(chosenQind) {
	let q = questionBank[chosenQind];
	currCorrAns = q.answer;
	let txt = q.question;
	let qImage = q.img;
	let aChoice = q.a;
	let bChoice = q.b;
	let cChoice = q.c;
	let dChoice = q.d;
	$('.quest').text(txt);
	$('.qImg').attr('src', qImage);
	$('#a').attr('value', aChoice);
	$('#b').attr('value', bChoice);
	$('#c').attr('value', cChoice);
	$('#d').attr('value', dChoice);
}

// This function allows the player to select their choice
function selectChoice() {
	$('.qChoice').on('click', function() {
		if ($(this).attr('id') === currCorrAns) {
			rightAnswer($(this).attr('id'));
			nextQuestion($(this).attr('id'));
			corrNum = corrNum + 1;
		}
		else {
			wrongAnswer($(this).attr('id'));
			nextQuestion($(this).attr('id'));
		}
	});
}

// This function tells the player what the correct answer is if they chose the wrong answer.
function wrongAnswer(id) {
	$(`.${id}`).append(`<img class="respImg" src="http://worldartsme.com/images/x-no-background-clipart-1.jpg" alt="Wrong Answer">`);
	$(`.${currCorrAns}`).append(`<img class="respImg" src="https://atozsportsnashville.com/wp-content/uploads/2017/04/check-mark-7-512.png" alt="Right Answer">`);
}

// This function lets the player know if they got the right answer.
function rightAnswer(id) {
	$(`.${id}`).append(`<img class="respImg" src="https://atozsportsnashville.com/wp-content/uploads/2017/04/check-mark-7-512.png" alt="Right Answer">`);
}

// This function removes the answer feedback for each question.
function removeSolutions(id) {
	$('.respImg').remove();
}

// This function removes the questions already used in the question bank and puts them in a previously used question array.
function removeAlreadyUsedQ(questionArray, currVal) {
	prevUsedQuestions = questionArray.splice(currVal, 1).concat(prevUsedQuestions);
}

// This function ensures the player only gets asked 10 questions.
function onlyAsk10Questions(numQs) {
	if (numQs < 10) {
		numQuestionsAsked = numQs + 1;
		showQsAnswered(numQuestionsAsked);
	}
	else {
		renderResults();
	}
}

// This function moves the player on to the next question.
function nextQuestion(id) {
	setTimeout(function() {
		removeAlreadyUsedQ(questionBank, currQpos);
		chooseQuestion();
		removeSolutions(id);	
		}, 1500);
}

// This function tells the player how they scored on the quiz.
function renderResults() {
	showStartEndHideQuiz();
	$('#stBut').attr('value', 'Re-Start Quiz');
	if (corrNum === 0) {
		$('.quote').text('Dishonor on you! Dishonor on your cow! Dishonor on your WHOLE family!');
	}
	else if (corrNum >= 1 && corrNum < 5) {
		$('.quote').text('You are one limp noodle!');
	}
	else if (corrNum >= 5 && corrNum < 8) {
		$('.quote').text('You are NOT a lucky cricket!');
	}
	else if (corrNum >= 8 && corrNum < 10) {
		$('.quote').text('You bring honor to us all!');
	}
	else {
		$('.quote').text('You are the Great Stone Dragon!');
	}
}

// This function shows the start and end of the quiz and hides the actual questions.
function showStartEndHideQuiz() {
	$('.parImgQuest').hide();
	$('.qChoices').hide();
	$('.results').hide();
	$('.txt').show();
	$('.navButton').show();
}

// This function hides the start and end of the quiz and shows the actual quiz questions.
function hideStartEndShowQuiz() {
	$('.parImgQuest').show();
	$('.qChoices').show();
	$('.results').show();
	$('.txt').hide();
	$('.navButton').hide();
}

// This function enables the player to start the quiz.
function startQuiz() {
	showStartEndHideQuiz();
	$('#stBut').attr('value', 'Start Quiz');
	$('.quote').text('Will you bring honor to all of China?');
}

// This function sets the quiz up whether the player is starting or re-starting the quiz.
function handleStartButton() {
	$('#stBut').on('click', function() {
		numQuestionsAsked = 0;
		corrNum = 0;
		questionBank = prevUsedQuestions.concat(questionBank);
		prevUsedQuestions = [];
		hideStartEndShowQuiz();
		chooseQuestion();
	});
}

// This function initializes the quiz application.
function handleQuiz() {
	selectChoice();
	startQuiz();
	handleStartButton();
}

$(handleQuiz);