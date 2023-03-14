// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
}));

// Navbar functions end here -----------------------^

const speakerInfo = [
  {
    id: 'Sara',
    name: 'Sarah Alderton',
    post: 'The founder & lead educator The Talk Edu & MindFit Co programs',
    picture: './images/sara.png',
    text: 'Sarah is a classroom teacher, Primary PDHPE specialist and Wellbeing practitioner currently studying the Masters of Positive Psychology at UniMelb.',
  },
  {
    id: 'Claire',
    name: 'Claire Andrewartha',
    post: 'Passionate and dedicated lead teacher of Technology and Humanities',
    picture: './images/Claire.png',
    text: 'Claire Andrewartha is a passionate and dedicated lead teacher of Technology and Humanities with almost 20 years teaching experience in the primary and secondary classroom.',
  },
  {
    id: 'Rahat',
    name: 'Rahat Arain',
    post: 'Rahat co-founded an Independent school in the Northern suburbs of <br>Melbourne',
    picture: './images/Rahat.png',
    text: 'Rahat co-founded an Independent school in the Northern suburbs of Melbourne. Having spent the last 15 years in school leadership, she has dedicated her efforts to exploring how students can become the best versions of themselves.',
  },
  {
    id: 'Shyam',
    name: 'Shyam Barr',
    post: 'Dr Shyam Barr is an education consultant, coach and speaker',
    picture: './images/Shyam.png',
    text: 'Dr Shyam Barr is an education consultant, coach and speaker, helping educators foster students’ metacognition and self-regulated learning (SRL). He is a co-host of the podcast Educate to Self-Regulate and a TEDx Speaker (TEDx Canberra’s 2022 event – Impact)',
  },
  {
    id: 'Steve',
    name: 'Steve Brophy',
    post: ' Director of Digital Transformation at Ivanhoe Grammar School',
    picture: './images/Steve.png',
    text: 'Steve Brophy is a dedicated and experienced leader in the field of education. With a passion for human-centred learning and a deep understanding of the potential for technology to drive positive change.',
  },
  {
    id: 'Sam',
    name: 'Sam Cobb',
    post: 'Works at the Alannah and Madeline Foundation as an eSmart Advisor in the Policy and Prevention team',
    picture: './images/Sam.png',
    text: 'Sam has always been people-focused, having spent a decade in stakeholder engagement roles within universities, developing relationships with industry, education partners and schools through Australia and South-East Asia.',
  },
];
const personalities = document.getElementById('speakers');

function displayPersonality() {
  let displayPer = '';
  for (let i = 0; i < 6; i += 1) {
    displayPer += `<div class="d-flex flex-column">
                            <img class="picture-b mx-4" src="./images/wb-bg.jpg" alt="backgroung design image">
                            <img class="picture-s mx-5" src="${speakerInfo[i].picture}" alt="backgroung design image">
                      </div>
                      <div class='speaker-info d-flex flex-column'>
                            <h2 class='speaker-name'>${speakerInfo[i].name}</h2>
                            <h3 class='speaker-post'>${speakerInfo[i].post}</h3>
                            <hr class='speaker-hr'>
                            <p class='speaker-data'>${speakerInfo[i].text}</p>
                      </div>
                      
        `;
  }
  personalities.innerHTML = displayPer;
}

displayPersonality();