let preQuestions =
    [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "1 of 20: The song &quot;Twin Size Mattress&quot; was written by which band?",
            "correct_answer": "The Front Bottoms",
            "answers": ["The Front Bottoms", "Twenty One Pilots", "The Wonder Years", "The Smith Street Band"]
        },
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "2 of 20: Which Japanese company is the world&#039;s largest manufacturer of motorcycles?",
            "correct_answer": "Honda",
            "answers": ["Yamaha", "Suzuki", "Kawasaki", "Honda"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "3 of 20: Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
            "correct_answer": "Niagara Mohawk Building",
            "answers": ["Niagara Mohawk Building", "Taipei 101", "One Detroit Center", "Westendstrasse 1"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "4 of 20: In most FPS video games such as Counter-Strike, shooting which part of the body does the highest damage?",
            "correct_answer": "Head",
            "answers": ["Arm", "Leg", "Chest", "Head"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "5 od 20: The term &quot;Spam&quot; came before the food product &quot;Spam&quot;.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "6 of 20: In the show Stranger Things, what is Eleven&#039;s favorite breakfast food?",
            "correct_answer": "Eggo Waffles",
            "answers": ["Toast", "Captain Crunch", "Bacon and Eggs", "Eggo Waffles"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "7 of 20: In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
            "correct_answer": "Goombario",
            "answers": ["Goombella", "Goombarry", "Goomby", "Goombario"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "8 of 20: When was Google founded?",
            "correct_answer": "September 4, 1998",
            "answers": ["October 9, 1997", "December 12, 1989", "Feburary 7th, 2000", "September 4, 1998"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "9 of 20: Which is not a playable character in the 2005 video game Killer7?",
            "correct_answer": "Frank Smith",
            "answers": ["Frank Smith", "Mask de Smith", "Dan Smith", "Coyote Smith"]
        },
        {
            "category": "Geography",
            "type": "boolean",
            "difficulty": "medium",
            "question": "10 of 20: The capital of the US State Ohio is the city of Chillicothe.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "11 of 20: Which company did Bethesda purchase the Fallout Series from?",
            "correct_answer": "Interplay Entertainment",
            "answers": ["Capcom", "Interplay Entertainment", "Blizzard Entertainment", "Nintendo"]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "12 of 20: Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
            "correct_answer": "Unknown Pleasures",
            "answers": ["The Dark Side of the Moon", "Unknown Pleasures", "London Calling", "The Velvet Underground &amp; Nico"]
        },
        {
            "category": "Politics",
            "type": "boolean",
            "difficulty": "medium",
            "question": "13 od 20: During the 2016 United States presidential election, the State of California possessed the most electoral votes, having 55.",
            "correct_answer": "True",
            "answers": ["False", "True"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "14 of 20: Who was the first prime minister of Canada?",
            "correct_answer": "John Macdonald",
            "answers": ["John Macdonald", "John Abbott", "Alexander Mackenzie", "Robert Borden"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "15 of 20: The land mass of modern day Turkey is called what?",
            "correct_answer": "Anatolia",
            "answers": ["Anatolia", "Ismuth of Ottoma", "Ottoma", "Ismuth of Anatolia"]
        },
        {
            "category": "Sports",
            "type": "boolean",
            "difficulty": "easy",
            "question": "16 of 20: In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "17 of 20: Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
            "correct_answer": "Doug Bradley",
            "answers": ["Doug Bradley", "Doug Jones", "Doug Savant", "Doug Benson"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "18 of 20: Which of these countries is the smallest by population?",
            "correct_answer": "Norway",
            "answers": ["Slovakia", "Norway", "Finland", "Hong Kong"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "19 of 20: Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
            "correct_answer": "Amazon",
            "answers": [
                "eBay",
                "Overstock",
                "Shopify",
                "Amazon"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "20 of 20: Generally, which component of a computer draws the most power?",
            "correct_answer": "Video Card",
            "answers": [
                "Hard Drive",
                "Processor",
                "Power Supply",
                "Video Card"
            ]
        }];

let start = document.querySelector('.start');
let history = document.querySelector('.history');

let display_buttons= document.querySelector('.display_buttons');
let display_quiz = document.querySelector('.display_quiz');

let new_game = document.querySelector('.new_game');
let next = document.querySelector('.next');
let back = document.querySelector('.back');

let question = document.querySelector('.question');
let score = document.querySelector(".score");

let answers = document.querySelectorAll('.list-group-item');

let games = 0;
let index = 0;
let points = 0;
let all_points = 0;


function add_class(element, class_name){
    element.classList.add(class_name);
}

function remove_class(element, class_name){
    element.classList.remove(class_name);
}


start.addEventListener('click', function() {
    games++;

    remove_class(new_game, 'display_on');
    add_class(display_quiz, 'display_on');

    remove_class(display_buttons, 'display_on');
    add_class(display_buttons, 'display_off');
});

history.addEventListener('click', function() {
    document.getElementById('history_score').innerHTML="Wykonałeś ten quiz " +games+ " razy." + "<br>" + 
    "Ilość punktów zdobytych w wszystkich grach: " +all_points+ "<br>"+
    "Średni wynik z rozwiązywania quizu: " +all_points/games;
});

new_game.addEventListener('click', function() {
    index = 0;
    setQuestion(index);

    document.getElementById('history_score').innerHTML="";
    next.innerHTML="Dalej";
    
    remove_class(score, 'display_on');
    add_class(score, 'display_off');

    remove_class(display_quiz, 'display_on');
    add_class(display_buttons, 'display_on');

    remove_class(back, 'disabled');
    remove_class(next, 'disabled');

    all_points+=points;
    points=0;
});


for(let i=0; i<answers.length; i++){
    answers[i].addEventListener('click', function (event) {
        if(event.target.innerHTML === preQuestions[index].correct_answer) {
            event.target.classList.add('is-valid');
            add_all();
            points++;    
        }
        else {
            event.target.classList.add('is-invalid');
            add_all();
        }
    });
}


function setQuestion(index) {
    question.innerHTML = preQuestions[index].question;

    answers[0].innerHTML = preQuestions[index].answers[0];
    answers[1].innerHTML = preQuestions[index].answers[1];
    answers[2].innerHTML = preQuestions[index].answers[2];
    answers[3].innerHTML = preQuestions[index].answers[3];
}

setQuestion(index);


function add_all() {
    for(let i=0; i<answers.length; i++){
        add_class(answers[i], 'disabled');
    }
}


function remove_all() {
    answers.forEach(function(element){
        element.classList.remove('is-valid');
        element.classList.remove('is-invalid');
    });
      
    for(let i=0; i<answers.length; i++){
        remove_class(answers[i], 'disabled');
    }
}


next.addEventListener('click', function () {  
    if(index == 18){
        next.innerHTML="Koniec";
    }
    else if(index == 19) {
        add_class(new_game, 'display_on');
        add_class(score, 'display_on');

        add_class(back, 'disabled');
        add_class(next, 'disabled');

        score.innerHTML="Liczba zdobytych punktów: " +points;
    }
    
    index++;
    remove_all();
    setQuestion(index);
});

back.addEventListener('click', function() {
   index--;
   remove_all();
   setQuestion(index); 
});