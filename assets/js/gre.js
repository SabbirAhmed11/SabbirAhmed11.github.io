const flashcardsSets = [
    // Set 1
    [
        {
            word: 'abound',  
            mnemonic: 'exist in large numbers or amounts.',  
            synonyms: 'Overflow, Proliferate, Flourish',  
            hint: 'Gazipur area abounds with jackfruit in summer times.',  
            positivity: 'Positive',  
            sentence: '"Wildflowers <u>abound</u> in the meadow after the spring rain."', 
            image: './assets/images/flashcards/Set1/abound.webp'  
        },
        
        {
            word: 'amorphous',  
            mnemonic: 'without a clearly defined shape or form.',  
            synonyms: 'Shapeless, Formless, Vague',  
            hint: 'Samu always bluffs that a dark, strangely amorphous shadow filled the room.',  
            positivity: 'Neutral',  
            sentence: '"The concept was still <u>amorphous</u> in the designer’s mind, lacking any clear direction."', 
            image: './assets/images/flashcards/Set1/amorphous.gif'  
        },
        
        {
            word: 'abate',  
            mnemonic: '(something unpleasant or severe) become less intense or widespread',  
            synonyms: 'Decrease, Diminish, Subside',  
            hint: 'I hope my pain in heart abates soon',  
            positivity: 'Neutral',  
            sentence: '"The storm began to <u>abate</u> after hours of heavy rain."', 
            image: './assets/images/flashcards/Set1/abate.gif'  
        },
        
        {
            word: 'austere',  
            mnemonic: 'extremely stern or strict or without any frills or luxuries.',  
            synonyms: 'Severe, Strict, Unadorned',  
            hint: 'Cadets life in their campus.',  
            positivity: 'Neutral/Negative',  
            sentence: '"Her <u>austere</u> lifestyle reflected her minimalist beliefs, with only the essentials in her home."', 
            image: './assets/images/flashcards/Set1/austere.gif'  
        },
        
        {
            word: 'aberrant',  
            mnemonic: 'departing from an accepted standard.',  
            synonyms: 'Deviant, Abnormal, Unusual',  
            hint: 'sourav mama behaviour',  
            positivity: 'Negative',  
            sentence: '"His <u>aberrant</u> behavior at the meeting surprised everyone."', 
            image: './assets/images/flashcards/Set1/aberrant.jpeg'  
        },
        {
            word: 'abeyance',  
            mnemonic: 'a state of temporary disuse or suspension.',  
            synonyms: 'Suspension, Postponement, Dormancy',  
            hint: 'The project was held in abeyance due to lack of funding.',  
            positivity: 'Neutral',  
            sentence: '"The project was held in <u>abeyance</u> until funding could be secured."', 
            image: './assets/images/flashcards/Set1/abeyance.jpg'  
        },
        
        {
            word: 'abscond',  
            mnemonic: 'leave hurriedly and secretly, typically to avoid detection.',  
            synonyms: 'Flee, Escape, Bolt',  
            hint: 'He absconded with the company funds.',  
            positivity: 'Negative',  
            sentence: '"The thief <u>absconded</u> with the jewels before anyone noticed."', 
            image: './assets/images/flashcards/Set1/abscond.gif'  
        },
        
        {
            word: 'abstemious',  
            mnemonic: 'self-indulgent, especially when eating and drinking.',  
            synonyms: 'Moderate, Temperate, Restrained',  
            hint: 'He is abstemious in his food habits.',  
            positivity: 'Neutral',  
            sentence: '"He lived an <u>abstemious</u> life, avoiding all forms of indulgence."', 
            image: './assets/images/flashcards/Set1/abstemious.jpg'  
        },
        
        {
            word: 'admonish',  
            mnemonic: 'warn or reprimand someone firmly.',  
            synonyms: 'Rebuke, Scold, Reprimand',  
            hint: 'She admonished him for being late.',  
            positivity: 'Neutral/Negative',  
            sentence: '"The teacher <u>admonished</u> the students for their lack of attention in class."', 
            image: './assets/images/flashcards/Set1/admonish.gif'  
        },
        
        {
            word: 'aggregate',  
            mnemonic: 'a whole formed by combining several (typically disparate) elements.',  
            synonyms: 'Total, Sum, Collection',  
            hint: 'The aggregate data from the survey was impressive.',  
            positivity: 'Neutral',  
            sentence: '"The data was <u>aggregated</u> from multiple sources to provide a comprehensive report."', 
            image: './assets/images/flashcards/Set1/aggregate.jpeg'  
        },
        
        {
            word: 'alacrity',  
            mnemonic: 'brisk and cheerful readiness.',  
            synonyms: 'Eagerness, Enthusiasm, Willingness',  
            hint: 'She accepted the invitation with alacrity.',  
            positivity: 'Positive',  
            sentence: '"She accepted the new project with <u>alacrity</u>, excited for the challenge."', 
            image: './assets/images/flashcards/Set1/alacrity.gif'  
        },
        
        {
            word: 'belie',  
            mnemonic: 'fail to give a true notion or impression of (something); disguise or contradict.',  
            synonyms: 'Contradict, Misrepresent, Falsify',  
            hint: 'His calm demeanor belied the stress he was under.',  
            positivity: 'Neutral',  
            sentence: '"His calm demeanor <u>belied</u> the anger he felt inside."', 
            image: './assets/images/flashcards/Set1/belie.jpg'  
        },
        
        {
            word: 'capricious',  
            mnemonic: 'given to sudden and unaccountable changes of mood or behavior.',  
            synonyms: 'Fickle, Unpredictable, Whimsical',  
            hint: 'Her capricious nature made it hard to work with her.',  
            positivity: 'Neutral/Negative',  
            sentence: '"Her <u>capricious</u> nature made it hard to predict what she would do next."', 
            image: './assets/images/flashcards/Set1/capricious.gif'  
        },
        
        {
            word: 'cerebral',  
            mnemonic: 'intellectual rather than emotional or physical.',  
            synonyms: 'Intellectual, Academic, Rational',  
            hint: 'He is known for his cerebral approach to problem-solving.',  
            positivity: 'Neutral',  
            sentence: '"The movie was too <u>cerebral</u> for a casual Friday night, requiring deep thought to understand."', 
            image: './assets/images/flashcards/Set1/cerebral.gif'  
        },
        
        {
            word: 'congenial',  
            mnemonic: 'pleasant because of a personality, qualities, or interests that are similar to one\'s own.',  
            synonyms: 'Friendly, Agreeable, Compatible',  
            hint: 'The atmosphere at the office was congenial.',  
            positivity: 'Positive',  
            sentence: '"She found her coworkers to be <u>congenial</u>, making the workplace feel more like a family."', 
            image: './assets/images/flashcards/Set1/congenial.webp'  
        },
        {
            word: 'conspicuous',  
            mnemonic: 'standing out so as to be clearly visible.',  
            synonyms: 'Noticeable, Prominent, Obvious',  
            hint: 'Her red dress made her conspicuous at the event.',  
            positivity: 'Neutral',  
            sentence: '"Her bright red dress made her <u>conspicuous</u> at the otherwise formal event."', 
            image: './assets/images/flashcards/Set1/conspicuous.webp'  
        },
        
        {
            word: 'cursory',  
            mnemonic: 'hasty and therefore not thorough or detailed.',  
            synonyms: 'Superficial, Perfunctory, Quick',  
            hint: 'A cursory glance at the document revealed some errors.',  
            positivity: 'Neutral',  
            sentence: '"His <u>cursory</u> review of the contract led to several mistakes being overlooked."', 
            image: './assets/images/flashcards/Set1/cursory.gif'  
        },
        
        {
            word: 'daunting',  
            mnemonic: 'seeming difficult to deal with in anticipation; intimidating.',  
            synonyms: 'Intimidating, Alarming, Formidable',  
            hint: 'The project seemed daunting at first.',  
            positivity: 'Negative',  
            sentence: '"The idea of moving to a new city was <u>daunting</u>, but also exciting."',
            image: './assets/images/flashcards/Set1/daunting.gif'  
        },
        
        {
            word: 'deify',  
            mnemonic: 'worship, regard, or treat (someone or something) as a god.',  
            synonyms: 'Idolize, Revere, Glorify',  
            hint: 'Many people deify celebrities.',  
            positivity: 'Neutral',  
            sentence: '"In ancient times, people often <u>deified</u> the sun and the moon."', 
            image: './assets/images/flashcards/Set1/deify.webp'  
        },
        
        {
            word: 'defy',  
            mnemonic: 'openly resist or refuse to obey.',  
            synonyms: 'Resist, Confront, Challenge',  
            hint: 'She defied the odds to become a successful entrepreneur.',  
            positivity: 'Positive',  
            sentence: '"She <u>defied</u> all expectations by winning the championship."', 
            image: './assets/images/flashcards/Set1/defy.gif'  
        },
        
        {
            word: 'didactic',  
            mnemonic: 'intended to teach, particularly in having moral instruction as an ulterior motive.',  
            synonyms: 'Instructive, Educational, Pedagogic',  
            hint: 'The novel was didactic in nature, meant to teach moral lessons.',  
            positivity: 'Neutral',  
            sentence: '"The book was more <u>didactic</u> than entertaining, focusing heavily on moral lessons."', 
            image: './assets/images/flashcards/Set1/didactic.webp'  
        },
        
        {
            word: 'erring',  
            mnemonic: 'straying from the accepted course or standards; mistaken.',  
            synonyms: 'Mistaken, Wrong, Flawed',  
            hint: 'The erring driver caused the accident.',  
            positivity: 'Negative',  
            sentence: '"The <u>erring</u> student quickly apologized for his misstep in the project."', 
            image: './assets/images/flashcards/Set1/erring.jpeg'  
        },
        
        {
            word: 'disseminate',  
            mnemonic: 'spread (something, especially information) widely.',  
            synonyms: 'Distribute, Circulate, Broadcast',  
            hint: 'The organization disseminated information about the health crisis.',  
            positivity: 'Neutral',  
            sentence: '"The company used social media to <u>disseminate</u> information about the new product launch."', 
            image: './assets/images/flashcards/Set1/disseminate.webp'  
        },
        
        {
            word: 'feasible',  
            mnemonic: 'possible to do easily or conveniently.',  
            synonyms: 'Possible, Practicable, Achievable',  
            hint: 'The plan was feasible and within the budget.',  
            positivity: 'Positive',  
            sentence: '"After reviewing the budget, they concluded the project was <u>feasible</u>."', 
            image: './assets/images/flashcards/Set1/feasible.gif'  
        },
        
        {
            word: 'flout',  
            mnemonic: 'openly disregard (a rule, law, or convention).',  
            synonyms: 'Defy, Disobey, Violate',  
            hint: 'He flouted the school rules by sneaking out at night.',  
            positivity: 'Negative',  
            sentence: '"Many people openly <u>flout</u> the new regulations, seeing them as unnecessary."', 
            image: './assets/images/flashcards/Set1/flout.webp'  
        },
        
        {
            word: 'homogeneous',  
            mnemonic: 'of the same kind; alike.',  
            synonyms: 'Uniform, Similar, Consistent',  
            hint: 'The population of the town was fairly homogeneous.',  
            positivity: 'Neutral',  
            sentence: '"The neighborhood is quite <u>homogeneous</u>, with most houses having the same design."', 
            image: './assets/images/flashcards/Set1/homogeneous.webp'  
        },
        
        {
            word: 'humdrum',  
            mnemonic: 'lacking excitement or variety; dull; monotonous.',  
            synonyms: 'Dull, Boring, Monotonous',  
            hint: 'She found her daily routine humdrum and unfulfilling.',  
            positivity: 'Negative',  
            sentence: '"His daily routine had become <u>humdrum</u>, with little excitement or variety."', 
            image: './assets/images/flashcards/Set1/humdrum.gif'  
        },
        
        {
            word: 'insipid',  
            mnemonic: 'lacking flavor; lacking vigor or interest.',  
            synonyms: 'Tasteless, Bland, Uninspired',  
            hint: 'The soup was insipid and needed more seasoning.',  
            positivity: 'Negative',  
            sentence: '"The soup was so <u>insipid</u> that it needed a lot more seasoning to make it palatable."', 
            image: './assets/images/flashcards/Set1/insipid.gif'  
        },
        
        {
            word: 'loquacious',  
            mnemonic: 'tending to talk a great deal; talkative.',  
            synonyms: 'Talkative, Chatty, Garrulous',  
            hint: 'Her loquacious nature made her popular at parties.',  
            positivity: 'Neutral',  
            sentence: '"The <u>loquacious</u> host kept the guests entertained throughout the evening."'
, 
            image: './assets/images/flashcards/Set1/loquacious.gif'  
        },
        
        {
            word: 'misanthropic',  
            mnemonic: 'disliking humankind and avoiding human society.',  
            synonyms: 'Anti-social, Cynical, Reclusive',  
            hint: 'The old man had a misanthropic attitude toward his neighbors.',  
            positivity: 'Negative',  
            sentence: '"He became increasingly <u>misanthropic</u> after years of being let down by others."', 
            image: './assets/images/flashcards/Set1/misanthropic.jpg'  
        },
        
        {
            word: 'misnomer',  
            mnemonic: 'a wrong or inaccurate name or designation.',  
            synonyms: 'Mislabeling, Inaccuracy, Misnaming',  
            hint: 'Calling that film a comedy is a misnomer.',  
            positivity: 'Neutral',  
            sentence: '"Calling him a ‘doctor’ is a <u>misnomer</u>, as he hasn’t completed his medical degree yet."', 
            image: './assets/images/flashcards/Set1/misnomer.gif'  
        },
        
        {
            word: 'soothe',  
            mnemonic: 'gently calm (a person or their feelings).',  
            synonyms: 'Calm, Pacify, Comfort',  
            hint: 'She used a soft voice to soothe the crying baby.',  
            positivity: 'Positive',  
            sentence: '"She played soft music to <u>soothe</u> the crying baby."', 
            image: './assets/images/flashcards/Set1/soothe.gif'  
        },
        
        {
            word: 'negligent',  
            mnemonic: 'failing to take proper care in doing something.',  
            synonyms: 'Careless, Remiss, Neglectful',  
            hint: 'His negligent behavior caused the accident.',  
            positivity: 'Negative',  
            sentence: '"The company was found <u>negligent</u> in its failure to properly inspect the safety equipment."', 
            image: './assets/images/flashcards/Set1/negligent.jpg'  
        },
        
        {
            word: 'obsequious',  
            mnemonic: 'obedient or attentive to an excessive or servile degree.',  
            synonyms: 'Servile, Ingratiating, Submissive',  
            hint: 'The obsequious assistant kept flattering the boss.',  
            positivity: 'Negative',  
            sentence: '"His <u>obsequious</u> behavior around the boss made his colleagues uncomfortable."', 
            image: './assets/images/flashcards/Set1/obsequious.webp'  
        },
        
        {
            word: 'placate',  
            mnemonic: 'make (someone) less angry or hostile.',  
            synonyms: 'Pacify, Soothe, Calm',  
            hint: 'She tried to placate the angry customer with a refund.',  
            positivity: 'Positive',  
            sentence: '"The manager tried to <u>placate</u> the angry customer with a discount."', 
            image: './assets/images/flashcards/Set1/placate.webp'  
        },
        
        {
            word: 'proclivity',  
            mnemonic: 'a tendency to choose or do something regularly; an inclination or predisposition toward a particular thing.',  
            synonyms: 'Inclination, Tendency, Predisposition',  
            hint: 'She has a proclivity for baking on weekends.',  
            positivity: 'Neutral',  
            sentence: '"He has a <u>proclivity</u> for solving complex problems, even in stressful situations."', 
            image: './assets/images/flashcards/Set1/proclivity.webp'  
        },
        
        {
            word: 'perverse',  
            mnemonic: 'showing a deliberate and obstinate desire to behave in a way that is unreasonable or unacceptable.',  
            synonyms: 'Contrary, Awkward, Difficult',  
            hint: 'His perverse decision surprised everyone.',  
            positivity: 'Negative',  
            sentence: '"She took a <u>perverse</u> pleasure in proving everyone wrong."', 
            image: './assets/images/flashcards/Set1/perverse.gif'  
        },
        
        {
            word: 'puerile',  
            mnemonic: 'childishly silly and trivial.',  
            synonyms: 'Childish, Immature, Juvenile',  
            hint: 'His puerile behavior was not suitable for the occasion.',  
            positivity: 'Negative',  
            sentence: '"His <u>puerile</u> jokes were out of place in the serious meeting."', 
            image: './assets/images/flashcards/Set1/puerile.webp'  
        },
        
        {
            word: 'quixotic',  
            mnemonic: 'exceedingly idealistic; unrealistic and impractical.',  
            synonyms: 'Unrealistic, Idealistic, Impractical',  
            hint: 'His quixotic plan to change the world was met with skepticism.',  
            positivity: 'Neutral',  
            sentence: '"His <u>quixotic</u> plan to save the world is unrealistic."', 
            image: './assets/images/flashcards/Set1/quixotic.png'  
        },
        
        {
            word: 'spendthrift',  
            mnemonic: 'a person who spends money in an extravagant, irresponsible way.',  
            synonyms: 'Profligate, Extravagant, Squanderer',  
            hint: 'Being a spendthrift, he quickly ran out of money.',  
            positivity: 'Negative',  
            sentence: '"Her <u>spendthrift</u> habits quickly drained her savings account."', 
            image: './assets/images/flashcards/Set1/spendthrift.gif'  
        },
        
        {
            word: 'taciturn',  
            mnemonic: '(of a person) reserved or uncommunicative in speech; saying little.',  
            synonyms: 'Reticent, Reserved, Silent',  
            hint: 'Her taciturn nature made her difficult to approach.',  
            positivity: 'Neutral',  
            sentence: '"The usually <u>taciturn</u> boy surprised everyone by speaking up in the meeting."', 
            image: './assets/images/flashcards/Set1/taciturn.png'  
        },
        
        {
            word: 'wary',  
            mnemonic: 'feeling or showing caution about possible dangers or problems.',  
            synonyms: 'Cautious, Careful, Watchful',  
            hint: 'She was wary of strangers offering help.',  
            positivity: 'Neutral',  
            sentence: '"He was <u>wary</u>of making investments in the volatile stock market."', 
            image: './assets/images/flashcards/Set1/wary.webp'  
        }
        
        


    ],
    // Set 2
    [
        { 
            word: 'Ebullient', 
            mnemonic: 'E-boil-ant', 
            synonyms: 'exuberant, buoyant, joyful', 
            hint: 'My team was ebullient after the win', 
            positivity: 'positive', 
            sentence: 'He was <u>ebullient</u> during the celebration.',
            image: 'demoimg.png' // Updated path for the image
        },
        { 
            word: 'Facetious', 
            mnemonic: 'Face-ious', 
            synonyms: 'flippant, glib, playful', 
            hint: 'He was being facetious in the meeting', 
            positivity: 'negative', 
            sentence: 'His <u>facetious</u> comments were not appreciated at the serious meeting.',
            image: 'demoimg.png' // Updated path for the image
        }
    ],
        // Set 3
        [
            { 
                word: 'Ebullient', 
                mnemonic: 'E-boil-ant', 
                synonyms: 'exuberant, buoyant, joyful', 
                hint: 'My team was ebullient after the win', 
                positivity: 'positive', 
                sentence: 'He was <u>ebullient</u> during the celebration.',
                image: 'demoimg.png' // Updated path for the image
            },
            { 
                word: 'Facetious', 
                mnemonic: 'Face-ious', 
                synonyms: 'flippant, glib, playful', 
                hint: 'He was being facetious in the meeting', 
                positivity: 'negative', 
                sentence: 'His <u>facetious</u> comments were not appreciated at the serious meeting.',
                image: 'demoimg.png' // Updated path for the image
            }
        ]




    
];

let currentSet = [];
let currentCard = 0;
let hintTimeout = null; // Store the timeout ID for the hint

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to show the homepage with all sets
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'sets-section') {
        generateSetButtons();
    }
}

// Generate buttons for all sets
function generateSetButtons() {
    const setsContainer = document.getElementById('sets-container');
    setsContainer.innerHTML = ''; // Clear previous buttons

    for (let i = 0; i < flashcardsSets.length; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Set ${i + 1}`;
        btn.onclick = () => showFlashcards(i);
        setsContainer.appendChild(btn);
    }
}

// Function to display flashcards for a selected set
function showFlashcards(setIndex) {
    currentSet = shuffle([...flashcardsSets[setIndex]]); // Shuffle the set
    currentCard = 0;
    showCard(currentCard);
    showSection('flashcard-section');
}

// Show a specific card
function showCard(index) {
    clearHint(); // Clear any active hint when showing a new card
    if (currentSet[index]) {
        document.getElementById('word').textContent = currentSet[index].word;
        document.getElementById('mnemonic').textContent = `"${currentSet[index].mnemonic}"`;
        document.getElementById('synonyms').textContent = currentSet[index].synonyms;
        document.getElementById('sentence').innerHTML = currentSet[index].sentence;
        document.getElementById('image').src = currentSet[index].image; // Set image for the card
        document.getElementById('card-counter').textContent = `${index + 1}/${currentSet.length}`;
        document.getElementById('hint-text').textContent = currentSet[index].hint; // Set the hint

        const positivityElement = document.getElementById('positivity');
        const positivity = currentSet[index].positivity;
        positivityElement.textContent = positivity === 'positive' ? 'Positive Word' : 'Negative Word';
        positivityElement.className = positivity;

        const flashcard = document.getElementById('flashcard');
        flashcard.classList.remove('flipped'); // Reset flip state
    }
}

// Flip the card
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

// Hint display logic (show hint for 5 seconds)
function showHint(event) {
    event.stopPropagation(); // Prevent card from flipping when hint icon is clicked
    const hintText = document.getElementById('hint-text');
    const hintIcon = document.getElementById('hint-icon');

    // Show the hint text and hide the hint icon
    hintText.style.display = 'block';
    hintIcon.style.display = 'none';

    // Clear any previous timeout
    if (hintTimeout) {
        clearTimeout(hintTimeout);
    }

    // Set the hint to disappear after 5 seconds
    hintTimeout = setTimeout(() => {
        hintText.style.display = 'none';
        hintIcon.style.display = 'block'; // Show the icon again
    }, 5000);
}

// Clear the hint text and timeout when navigating to another card
function clearHint() {
    const hintText = document.getElementById('hint-text');
    const hintIcon = document.getElementById('hint-icon');

    // Hide the hint and show the hint icon immediately
    hintText.style.display = 'none';
    hintIcon.style.display = 'block';

    // Clear the timeout to avoid it running after navigation
    if (hintTimeout) {
        clearTimeout(hintTimeout);
        hintTimeout = null;
    }
}

// Navigation between cards
function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        showCard(currentCard);
    }
}

function nextCard() {
    if (currentCard < currentSet.length - 1) {
        currentCard++;
        showCard(currentCard);
    }
}

// Go back to the set selection screen
function goBack() {
    showSection('sets-section');
}

// Show the homepage (sets) by default
showSection('sets-section');
