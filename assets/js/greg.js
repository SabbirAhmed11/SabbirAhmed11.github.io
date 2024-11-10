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
            word: 'austere',  
            mnemonic: 'extremely stern or strict or without any frills or luxuries.',  
            synonyms: 'Severe, Strict, Unadorned',  
            hint: 'Cadets life in their campus.',  
            positivity: 'Neutral/Negative',  
            sentence: '"Her <u>austere</u> lifestyle reflected her minimalist beliefs, with only the essentials in her home."', 
            image: './assets/images/flashcards/Set1/austere.gif'  
        },
        
        {
            word: 'belie',  
            mnemonic: 'fail to give a true notion or impression of (something); disguise or contradict.',  
            synonyms: 'Contradict, Misrepresent, Falsify',  
            hint: 'ami mukhe ak vitore arek',  
            positivity: 'Neutral',  
            sentence: '"His calm demeanor <u>belied</u> the anger he felt inside."', 
            image: './assets/images/flashcards/Set1/belie.jpg'  
        },
        
        {
            word: 'capricious',  
            mnemonic: 'given to sudden and unaccountable changes of mood or behavior.',  
            synonyms: 'Fickle, Unpredictable, Whimsical',  
            hint: 'Shamim Dulavai',  
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
            hint: 'Oly vai',  
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
            hint: 'Delivery Dear age final jokhn check dei',  
            positivity: 'Neutral',  
            sentence: '"His <u>cursory</u> review of the contract led to several mistakes being overlooked."', 
            image: './assets/images/flashcards/Set1/cursory.gif'  
        },
        
        {
            word: 'daunting',  
            mnemonic: 'seeming difficult to deal with in anticipation; intimidating.',  
            synonyms: 'Intimidating, Alarming, Formidable',  
            hint: 'Amr Kisu Relative der sathe kotha bola',  
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
            word: 'didactic',  
            mnemonic: 'intended to teach, particularly in having moral instruction as an ulterior motive.',  
            synonyms: 'Instructive, Educational, Pedagogic',  
            hint: 'The novel was didactic in nature, meant to teach moral lessons.',  
            positivity: 'Neutral',  
            sentence: '"The book was more <u>didactic</u> than entertaining, focusing heavily on moral lessons."', 
            image: './assets/images/flashcards/Set1/didactic.webp'  
        },
        
        {
            word: 'disseminate',  
            mnemonic: 'spread (something, especially information) widely.',  
            synonyms: 'Distribute, Circulate, Broadcast',  
            hint: 'Ammu bonder moddhe new ja kore',  
            positivity: 'Neutral',  
            sentence: '"The company used social media to <u>disseminate</u> information about the new product launch."', 
            image: './assets/images/flashcards/Set1/disseminate.webp'  
        },
        
        {
            word: 'feasible',  
            mnemonic: 'possible to do easily or conveniently.',  
            synonyms: 'Possible, Practicable, Achievable',  
            hint: 'The plan was feasible ',  
            positivity: 'Positive',  
            sentence: '"After reviewing the budget, they concluded the project was <u>feasible</u>."', 
            image: './assets/images/flashcards/Set1/feasible.gif'  
        },
        
        {
            word: 'flout',  
            mnemonic: 'openly disregard (a rule, law, or convention).',  
            synonyms: 'Defy, Disobey, Violate',  
            hint: 'office vabe ami office er sob rules k ja kori',  
            positivity: 'Negative',  
            sentence: '"Many people openly <u>flout</u> the new regulations, seeing them as unnecessary."', 
            image: './assets/images/flashcards/Set1/flout.webp'  
        },
        
        {
            word: 'homogeneous',  
            mnemonic: 'of the same kind; alike.',  
            synonyms: 'Uniform, Similar, Consistent',  
            hint: 'Mou r or gustir behaviour',  
            positivity: 'Neutral',  
            sentence: '"The neighborhood is quite <u>homogeneous</u>, with most houses having the same design."', 
            image: './assets/images/flashcards/Set1/homogeneous.webp'  
        },
        
        {
            word: 'humdrum',  
            mnemonic: 'lacking excitement or variety; dull; monotonous.',  
            synonyms: 'Dull, Boring, Monotonous',  
            hint: 'bura ra',  
            positivity: 'Negative',  
            sentence: '"His daily routine had become <u>humdrum</u>, with little excitement or variety."', 
            image: './assets/images/flashcards/Set1/humdrum.gif'  
        },
        
        {
            word: 'insipid',  
            mnemonic: 'lacking flavor; lacking vigor or interest.',  
            synonyms: 'Tasteless, Bland, Uninspired',  
            hint: 'Lamiar Americano coffee',  
            positivity: 'Negative',  
            sentence: '"The soup was so <u>insipid</u> that it needed a lot more seasoning to make it palatable."', 
            image: './assets/images/flashcards/Set1/insipid.gif'  
        },
        
        {
            word: 'loquacious',  
            mnemonic: 'tending to talk a great deal; talkative.',  
            synonyms: 'Talkative, Chatty, Garrulous',  
            hint: 'Lamia jokhn karo sathe friendly hye jay',  
            positivity: 'Neutral',  
            sentence: '"The <u>loquacious</u> host kept the guests entertained throughout the evening."'
, 
            image: './assets/images/flashcards/Set1/loquacious.gif'  
        },
        
        {
            word: 'misanthropic',  
            mnemonic: 'disliking humankind and avoiding human society.',  
            synonyms: 'Anti-social, Cynical, Reclusive',  
            hint: 'Amr relativeder upor intereset',  
            positivity: 'Negative',  
            sentence: '"He became increasingly <u>misanthropic</u> after years of being let down by others."', 
            image: './assets/images/flashcards/Set1/misanthropic.jpg'  
        },
        
        {
            word: 'misnomer',  
            mnemonic: 'a wrong or inaccurate name or designation.',  
            synonyms: 'Mislabeling, Inaccuracy, Misnaming',  
            hint: 'Jepser Kala',  
            positivity: 'Neutral',  
            sentence: '"Calling him a ‘doctor’ is a <u>misnomer</u>, as he hasn’t completed his medical degree yet."', 
            image: './assets/images/flashcards/Set1/misnomer.gif'  
        },
        
        {
            word: 'negligent',  
            mnemonic: 'failing to take proper care in doing something.',  
            synonyms: 'Careless, Remiss, Neglectful',  
            hint: 'Ami namaz k ja kori, Allah maf koruk',  
            positivity: 'Negative',  
            sentence: '"The company was found <u>negligent</u> in its failure to properly inspect the safety equipment."', 
            image: './assets/images/flashcards/Set1/negligent.jpg'  
        },
        
        {
            word: 'obsequious',  
            mnemonic: 'obedient or attentive to an excessive or servile degree.',  
            synonyms: 'Servile, Ingratiating, Submissive',  
            hint: 'Setu mama, niloy',  
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
            hint: 'Office joar khetre amr Mirpur 14 root select kora',  
            positivity: 'Neutral',  
            sentence: '"He has a <u>proclivity</u> for solving complex problems, even in stressful situations."', 
            image: './assets/images/flashcards/Set1/proclivity.webp'  
        },
        
        {
            word: 'puerile',  
            mnemonic: 'childishly silly and trivial.',  
            synonyms: 'Childish, Immature, Juvenile',  
            hint: 'Lamiar behaviour maje maje',  
            positivity: 'Negative',  
            sentence: '"His <u>puerile</u> jokes were out of place in the serious meeting."', 
            image: './assets/images/flashcards/Set1/puerile.webp'  
        },
        
        {
            word: 'quixotic',  
            mnemonic: 'exceedingly idealistic; unrealistic and impractical.',  
            synonyms: 'Unrealistic, Idealistic, Impractical',  
            hint: 'Choto Khalu BNP nie ja vabe',  
            positivity: 'Neutral',  
            sentence: '"His <u>quixotic</u> plan to save the world is unrealistic."', 
            image: './assets/images/flashcards/Set1/quixotic.png'  
        },
        
        {
            word: 'spendthrift',  
            mnemonic: 'a person who spends money in an extravagant, irresponsible way.',  
            synonyms: 'Profligate, Extravagant, Squanderer',  
            hint: 'Ami proti mashe',  
            positivity: 'Negative',  
            sentence: '"Her <u>spendthrift</u> habits quickly drained her savings account."', 
            image: './assets/images/flashcards/Set1/spendthrift.gif'  
        },
        
        {
            word: 'taciturn',  
            mnemonic: '(of a person) reserved or uncommunicative in speech; saying little.',  
            synonyms: 'Reticent, Reserved, Silent',  
            hint: 'Lamia Other unknown Personer Khetre',  
            positivity: 'Neutral',  
            sentence: '"The usually <u>taciturn</u> boy surprised everyone by speaking up in the meeting."', 
            image: './assets/images/flashcards/Set1/taciturn.png'  
        },
        
        {
            word: 'wary',  
            mnemonic: 'feeling or showing caution about possible dangers or problems.',  
            synonyms: 'Cautious, Careful, Watchful',  
            hint: 'Ammu sob somoy kno topic e.',  
            positivity: 'Neutral',  
            sentence: '"He was <u>wary</u>of making investments in the volatile stock market."', 
            image: './assets/images/flashcards/Set1/wary.webp'  
        }
        


    ],

    //Set2
    [

        {
            word: 'alacrity',  
            mnemonic: 'brisk and cheerful readiness.',  
            synonyms: 'Eagerness, Enthusiasm, Willingness',  
            hint: 'Yusuf',  
            positivity: 'Positive',  
            sentence: '"She accepted the new project with <u>alacrity</u>, excited for the challenge."', 
            image: './assets/images/flashcards/Set1/alacrity.gif'  
        },
        {
            word: 'banal',
            mnemonic: 'Lacking in originality, boring',
            synonyms: 'Trite, Cliché, Commonplace, Hackneyed',
            hint: 'Roj Tue Dim kahabar thake Kite e',
            positivity: 'Negative',
            sentence: 'The conversation turned <u>banal</u>, with no one adding anything new or interesting.',
            image: './assets/images/flashcards/Set2/banal.webp'
        },
        {
            word: 'incredulous',
            mnemonic: 'Unwilling or unable to believe something',
            synonyms: 'Skeptical, Doubtful, Disbelieving, Suspicious',
            hint: 'Baba k awmilig er ku kirti bojaile',
            positivity: 'Neutral',
            sentence: 'She looked at him with an <u>incredulous</u> expression when he claimed to have seen a UFO.',
            image: './assets/images/flashcards/Set2/incredulous.gif'
        },
        {
            word: 'construe',
            mnemonic: 'Interpret or understand something in a particular way',
            synonyms: 'Interpret, Analyze, Decipher, Translate',
            hint: 'How you understand something',
            positivity: 'Neutral',
            sentence: 'His silence was <u>construed</u> as agreement, though he never actually said yes.',
            image: './assets/images/flashcards/Set2/construe.jpg'
        },
        {
            word: 'amenable',
            mnemonic: 'Open and responsive to suggestion; easily persuaded or controlled',
            synonyms: 'Agreeable, Compliant, Accommodating, Cooperative',
            hint: 'Willing to agree',
            positivity: 'Positive',
            sentence: 'The manager was <u>amenable</u> to the changes proposed by the team, making the transition smooth.',
            image: './assets/images/flashcards/Set2/amenable.gif'
        },
        {
            word: 'ameliorate',
            mnemonic: 'To make something better',
            synonyms: 'Improve, Enhance, Upgrade, Alleviate',
            hint: 'Making something less bad',
            positivity: 'Positive',
            sentence: 'The government tried to <u>ameliorate</u> the effects of the disaster by providing aid to affected families.',
            image: './assets/images/flashcards/Set2/ameliorate.jpeg'
        },
        {
            word: 'derivative',
            mnemonic: 'Imitative of someone else’s work and usually disapproved of as unoriginal',
            synonyms: 'Imitative, Copied, Unoriginal, Borrowed',
            hint: 'Reijon er Design Style',
            positivity: 'Negative',
            sentence: 'The artist\'s new work was criticized for being too <u>derivative</u> of his earlier, more famous pieces.',
            image: './assets/images/flashcards/Set2/derivative.webp'
        },
        {
            word: 'deft',
            mnemonic: 'Skillful and quick in movement or action',
            synonyms: 'Skillful, Nimble, Agile, Adroit',
            hint: 'messi',
            positivity: 'Positive',
            sentence: 'With a <u>deft</u> motion, the chef chopped the vegetables at lightning speed.',
            image: './assets/images/flashcards/Set2/deft.gif'
        },
        {
            word: 'audacious',
            mnemonic: 'Showing a willingness to take surprisingly bold risks',
            synonyms: 'Bold, Daring, Fearless, Adventurous',
            hint: 'Bold and willing to take risks',
            positivity: 'Positive',
            sentence: 'His <u>audacious</u> plan to start his own business surprised everyone, but it turned out to be a huge success.',
            image: './assets/images/flashcards/Set2/audacious.jpeg'
        },
        {
            word: 'ambivalent',
            mnemonic: 'Having mixed feelings or contradictory ideas about something',
            synonyms: 'Uncertain, Conflicted, Hesitant, Torn',
            hint: 'Ammu kno decision near somoy',
            positivity: 'Neutral',
            sentence: 'She felt <u>ambivalent</u> about moving to a new city; she was excited but also nervous about the change.',
            image: './assets/images/flashcards/Set2/ambivalent.jpg'
        },
        {
            word: 'contrite',
            mnemonic: 'Feeling or expressing remorse or penitence',
            synonyms: 'Remorseful, Apologetic, Regretful, Sorry',
            hint: 'Feeling sorry',
            positivity: 'Positive',
            sentence: 'After realizing the harm he had caused, he became deeply <u>contrite</u> and apologized sincerely.',
            image: './assets/images/flashcards/Set2/contrite.jpg'
        },
        {
            word: 'desiccate',  
            mnemonic: 'To remove moisture from something, usually to preserve it.',  
            synonyms: 'Dry out, Dehydrate, Parch',  
            hint: 'What happens when food is dried to preserve it.',  
            positivity: 'Neutral',  
            sentence: '"The <u>desiccated</u> fruits were packed for long-term storage."', 
            image: './assets/images/flashcards/Set3/desiccate.jpg'  
        },

        {
            word: 'adulterate',
            mnemonic: 'To make something impure by adding inferior substances',
            synonyms: 'Contaminate, Taint, Dilute',
            hint: 'Adding something that worsens the quality',
            positivity: 'Negative',
            sentence: 'The company was fined heavily for adulterating its products with harmful chemicals.',
            image: './assets/images/flashcards/Others/Adulterate.gif'
        },
        {
            word: 'advocate',
            mnemonic: 'To support or recommend publicly',
            synonyms: 'Support, Endorse, Champion',
            hint: 'Someone who speaks on behalf of something',
            positivity: 'Positive',
            sentence: 'She has always been an advocate for equal rights and justice.',
            image: './assets/images/flashcards/Others/Advocate.gif'
        },
        {
            word: 'aggrandize',
            mnemonic: 'To increase the power or reputation of something',
            synonyms: 'Amplify, Glorify, Magnify',
            hint: 'Making someone or something seem greater',
            positivity: 'Neutral',
            sentence: 'The politician sought to aggrandize his image through media campaigns.',
            image: './assets/images/flashcards/Others/Aggrandize.gif'
        },
        {
            word: 'anachronistic',
            mnemonic: 'Belonging to a period other than that being portrayed',
            synonyms: 'Outdated, Old-fashioned, Obsolete',
            hint: 'Out of place in time',
            positivity: 'Neutral',
            sentence: 'Using a typewriter today feels anachronistic in an age of computers.',
            image: './assets/images/flashcards/Others/Anachronistic.gif'
        },
        {
            word: 'avaricious',
            mnemonic: 'Having or showing extreme greed for wealth',
            synonyms: 'Greedy, Materialistic, Covetous',
            hint: 'Hoarding wealth without sharing',
            positivity: 'Negative',
            sentence: 'His avaricious nature led him to exploit others for personal gain.',
            image: './assets/images/flashcards/Others/Avaricious.gif'
        },
        {
            word: 'benign',
            mnemonic: 'Gentle, kindly, or not harmful',
            synonyms: 'Kind, Gentle, Harmless',
            hint: 'A soft presence or something non-threatening',
            positivity: 'Positive',
            sentence: 'Her benign smile made everyone feel comfortable.',
            image: './assets/images/flashcards/Others/Benign.gif'
        },
        {
            word: 'brazen',
            mnemonic: 'Bold and without shame',
            synonyms: 'Bold, Shameless, Audacious',
            hint: 'Doing something without caring about consequences',
            positivity: 'Negative',
            sentence: 'The thief made a brazen attempt to rob the store in broad daylight.',
            image: './assets/images/flashcards/Others/Brazen.gif'
        },
        {
            word: 'calumny',
            mnemonic: 'Making false and defamatory statements',
            synonyms: 'Slander, Defamation, Libel',
            hint: 'Damaging someone’s reputation with lies',
            positivity: 'Negative',
            sentence: 'He suffered from the calumny spread by his former colleagues.',
            image: './assets/images/flashcards/Others/Calumny.gif'
        },
        {
            word: 'candid',
            mnemonic: 'Truthful and straightforward',
            synonyms: 'Honest, Frank, Open',
            hint: 'Someone who doesn’t hide their thoughts',
            positivity: 'Positive',
            sentence: 'She appreciated his candid feedback on her performance.',
            image: './assets/images/flashcards/Others/Candid.gif'
        },
        {
            word: 'castigate',
            mnemonic: 'To reprimand someone severely',
            synonyms: 'Criticize, Reprimand, Chastise',
            hint: 'Harsh criticism or punishment',
            positivity: 'Negative',
            sentence: 'The manager did not hesitate to castigate the team for missing the deadline.',
            image: './assets/images/flashcards/Others/Castigate.gif'
        },
        {
            word: 'caustic',
            mnemonic: 'Sarcastic in a scathing and bitter way',
            synonyms: 'Sarcastic, Biting, Abrasive',
            hint: 'Harsh words that burn like chemicals',
            positivity: 'Negative',
            sentence: 'Her caustic comments about the project left the team feeling demotivated.',
            image: './assets/images/flashcards/Others/Caustic.gif'
        },
        {
            word: 'convoluted',
            mnemonic: 'Extremely complex and difficult to follow',
            synonyms: 'Complex, Complicated, Intricate',
            hint: 'Twisted or hard to understand',
            positivity: 'Neutral',
            sentence: 'The instructions were so convoluted that many students struggled to complete the task.',
            image: './assets/images/flashcards/Others/Convoluted.gif'
        },
        {
            word: 'covet',
            mnemonic: 'To yearn to possess something',
            synonyms: 'Desire, Envy, Crave',
            hint: 'Something you wish was yours',
            positivity: 'Negative',
            sentence: 'He couldn’t help but covet his neighbor’s new car.',
            image: './assets/images/flashcards/Others/Covet.gif'
        },
        {
            word: 'craven',
            mnemonic: 'Lacking in courage, cowardly',
            synonyms: 'Cowardly, Timid, Fearful',
            hint: 'Afraid to take risks',
            positivity: 'Negative',
            sentence: 'His craven behavior during the crisis disappointed his team.',
            image: './assets/images/flashcards/Others/Craven.gif'
        },
        {
            word: 'decorum',
            mnemonic: 'Behavior in keeping with good taste and propriety',
            synonyms: 'Propriety, Etiquette, Decency',
            hint: 'Good manners and social correctness',
            positivity: 'Positive',
            sentence: 'She conducted herself with perfect decorum at the formal dinner.',
            image: './assets/images/flashcards/Others/Decorum.gif'
        },
        {
            word: 'demur',
            mnemonic: 'To raise doubts or show reluctance',
            synonyms: 'Object, Protest, Hesitate',
            hint: 'Hesitates or opposes something',
            positivity: 'Neutral',
            sentence: 'He wanted to join the trip but demurred, unsure of his availability.',
            image: './assets/images/flashcards/Others/Demur.gif'
        },
        {
            word: 'diatribe',
            mnemonic: 'A forceful and bitter verbal attack',
            synonyms: 'Tirade, Rant, Condemnation',
            hint: 'Harsh and lengthy criticism',
            positivity: 'Negative',
            sentence: 'The politician launched into a diatribe against the media.',
            image: './assets/images/flashcards/Others/Diatribe.gif'
        },
        {
            word: 'ingenuous',
            mnemonic: 'Innocent and unsuspecting',
            synonyms: 'Naive, Innocent, Trusting',
            hint: 'Someone who is too trusting or unaware',
            positivity: 'Positive',
            sentence: 'Her ingenuous nature made it easy for people to take advantage of her.',
            image: './assets/images/flashcards/Others/Ingenuous.gif'
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


// pronounce
function pronounceWord() {
    const word = document.getElementById('word').textContent;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // Set the language
    speechSynthesis.speak(utterance);
}
// pronounce and not flip
function pronounceWord(event) {
    event.stopPropagation(); // Prevent the card from flipping
    const word = document.getElementById('word').textContent;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // Set the language
    speechSynthesis.speak(utterance);
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
    }, 3000);
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


//---------------------------------------//

// Function to pronounce the word (using the Web Speech API)
function pronounceWord(event) {
    event.stopPropagation(); // Ensure clicking the button doesn't flip the card
    
    const word = document.getElementById('word').innerText;
    
    // Check if the browser supports speech synthesis
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
    } else {
        console.log('Speech synthesis not supported');
    }
}

// Function to toggle the hint visibility
function toggleHint() {
    const hintText = document.getElementById('hint-text');
    if (hintText.style.display === 'none' || hintText.style.display === '') {
        hintText.style.display = 'block';  // Show the hint
    } else {
        hintText.style.display = 'none';   // Hide the hint
    }
}

// Add keydown event listeners
document.addEventListener('keydown', function(event) {
    // Left Arrow Key
    if (event.key === 'ArrowLeft') {
        prevCard();
    }
    
    // Right Arrow Key
    if (event.key === 'ArrowRight') {
        nextCard();
    }
    
    // 'S' Key to pronounce the word
    if (event.key.toLowerCase() === 's') {
        pronounceWord(event);
    }
    
    // Spacebar to flip the card
    if (event.key === ' ') {
        event.preventDefault(); // Prevent default spacebar action (scrolling)
        flipCard();
    }

    // 'H' Key to toggle the hint
    if (event.key.toLowerCase() === 'h') {
        toggleHint();
    }
});





// Function to flip the card (toggle functionality)
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

// Swipe functionality for mobile and tablet
let startX = 0; // To track the starting X position of the touch

// Detect the start of the swipe
document.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    startX = touch.clientX;
}, false);

// Detect the end of the swipe
document.addEventListener('touchend', function(event) {
    const touch = event.changedTouches[0];
    const endX = touch.clientX;

    // Calculate the difference between start and end of touch
    const diffX = startX - endX;

    // Swipe threshold to prevent accidental small moves from triggering swipe
    const swipeThreshold = 50;

    // If the swipe distance exceeds the threshold, trigger the appropriate action
    if (Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
            // Swipe left: go to the next card
            nextCard();
        } else {
            // Swipe right: go to the previous card
            prevCard();
        }
    }
}, false);

