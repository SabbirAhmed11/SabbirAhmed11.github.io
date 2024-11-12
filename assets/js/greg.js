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

    ],

    //Set3
    [
        {
            word: 'abate',  
            mnemonic: '(something unpleasant or severe) become less intense or widespread',  
            synonyms: 'Decrease, Diminish, Subside',  
            hint: 'Safwan er cancer current status',  
            positivity: 'Neutral',  
            sentence: '"The storm began to <u>abate</u> after hours of heavy rain."', 
            image: './assets/images/flashcards/Set1/abate.gif'  
        },
        {
            word: 'arcane',
            mnemonic: 'Known or understood by very few people',
            synonyms: 'Mysterious, Esoteric, Obscure, Enigmatic',
            hint: 'what\'s happened behind the revolution',
            positivity: 'Neutral',
            sentence: 'The professor\'s lecture on the <u>arcane</u> rituals of ancient civilizations left the students puzzled.',
            image: './assets/images/flashcards/Set2/arcane.gif'
        },
        {
            word: 'canonize',
            mnemonic: 'Officially declare someone a saint, or regard someone highly',
            synonyms: 'Deify, Idolize, Sanctify, Glorify',
            hint: 'Hzt Muhammad Sallahu Alaihi Oa Sallam',
            positivity: 'Positive',
            sentence: 'The critics practically <u>canonized</u> her after the performance, calling her one of the greatest of all time.',
            image: './assets/images/flashcards/Set2/canonize.jpeg'
        },
        {
            word: 'arduous',
            mnemonic: 'Involving or requiring strenuous effort; difficult and tiring',
            synonyms: 'Difficult, Laborious, Onerous, Grueling',
            hint: 'Something very difficult',
            positivity: 'Negative',
            sentence: 'Climbing the mountain was an <u>arduous</u> task, but the view from the top made it worth the effort.',
            image: './assets/images/flashcards/Set2/arduous.webp'
        },
        {
            word: 'Equivocate',   
            mnemonic: 'To use ambiguous language to conceal the truth.',   
            synonyms: 'Prevaricate, Hedge',  
            hint: 'To be deliberately vague',  
            positivity: 'Negative',  
            sentence: '"Politicians often equivocate during debates."', 
            image: './assets/images/flashcards/Set2F/Equivocate.gif'   
        },
        {
            word: 'Abjure',   
            mnemonic: 'To renounce a belief, cause, or claim.',   
            synonyms: 'Renounce, Reject',  
            hint: 'To give up',  
            positivity: 'Negative',  
            sentence: '"He decided to abjure his former beliefs."', 
            image: './assets/images/flashcards/Set2F/Abjure.webp'   
        },
        {
            word: 'burgeon',  
            mnemonic: 'To grow or increase rapidly.',  
            synonyms: 'Flourish, Expand, Thrive',  
            hint: 'The rapid growth or flourishing of something.',  
            positivity: 'Positive',  
            sentence: '"The small startup began to <u>burgeon</u> after its new product launch."', 
            image: './assets/images/flashcards/Set3/burgeon.gif'  
        },
        {
            word: 'Anomalous',
            mnemonic: 'Deviating from what is normal or expected',
            synonyms: 'Abnormal, Irregular, Atypical',
            hint: 'Something unusual or out of the ordinary',
            positivity: 'Neutral',
            sentence: 'The scientist was puzzled by the <u>Anomalous</u> results of the experiment.',
            image: './assets/images/flashcards/Others/Anomalous.gif'
        },
        {
            word: 'Antipathy',
            mnemonic: 'A strong feeling of aversion or dislike',
            synonyms: 'Hostility, Animosity, Aversion',
            hint: 'A strong negative feeling towards something',
            positivity: 'Negative',
            sentence: 'Her <u>Antipathy</u> toward the new policy was clear in her tone.',
            image: './assets/images/flashcards/Others/Antipathy.gif'
        },
        {
            word: 'Artless',
            mnemonic: 'Without guile or deception; natural and simple',
            synonyms: 'Naive, Innocent, Sincere',
            hint: 'Someone honest and without pretense',
            positivity: 'Positive',
            sentence: 'His <u>Artless</u> response made everyone trust him immediately.',
            image: './assets/images/flashcards/Others/Artless.gif'
        },
        {
            word: 'Ascetic',
            mnemonic: 'Austere, self-denying, disciplined',
            synonyms: 'Austere, Self-Denying, Disciplined',
            hint: 'Lives a minimalistic life',
            positivity: 'Neutral',
            sentence: 'He adopted an <u>Ascetic</u> lifestyle, giving up all luxuries.',
            image: './assets/images/flashcards/Others/Ascetic.gif'
        },
        {
            word: 'Assuage',
            mnemonic: 'To make an unpleasant feeling less intense',
            synonyms: 'Relieve, Ease, Mitigate',
            hint: 'Calming or reducing someone\'s distress',
            positivity: 'Positive',
            sentence: 'He tried to <u>Assuage</u> her anxiety with comforting words.',
            image: './assets/images/flashcards/Others/Assuage.gif'
        },
        {
            word: 'Betray',
            mnemonic: 'To be disloyal or reveal information',
            synonyms: 'Deceive, Expose, Reveal',
            hint: 'Breaking trust or letting out a secret',
            positivity: 'Negative',
            sentence: 'He felt hurt when his friend <u>Betrayed</u> his trust by sharing his secret.',
            image: './assets/images/flashcards/Others/Betray.gif'
        },
        {
            word: 'Bucolic',
            mnemonic: 'Relating to pleasant aspects of the countryside',
            synonyms: 'Rustic, Pastoral, Rural',
            hint: 'Peaceful, rural scenery',
            positivity: 'Positive',
            sentence: 'The artist\'s paintings reflected a <u>Bucolic</u> vision of the countryside.',
            image: './assets/images/flashcards/Others/Bucolic.gif'
        },
        {
            word: 'Cacophonous',
            mnemonic: 'Having a harsh, discordant sound',
            synonyms: 'Harsh, Jarring, Discordant',
            hint: 'Unpleasant noises clashing together',
            positivity: 'Negative',
            sentence: 'The <u>Cacophonous</u> sounds from the construction site made it hard to concentrate.',
            image: './assets/images/flashcards/Others/Cacophonous.gif'
        },
        {
            word: 'Censure',
            mnemonic: 'To express severe disapproval',
            synonyms: 'Criticize, Reprimand, Condemn',
            hint: 'A strong formal disapproval',
            positivity: 'Negative',
            sentence: 'The official faced <u>Censure</u> for his controversial actions.',
            image: './assets/images/flashcards/Others/Censure.gif'
        },
        {
            word: 'Chicanery',
            mnemonic: 'The use of trickery to achieve a purpose',
            synonyms: 'Deception, Fraud, Trickery',
            hint: 'Deceptive strategies or manipulation',
            positivity: 'Negative',
            sentence: 'The company was accused of financial <u>Chicanery</u> to avoid taxes.',
            image: './assets/images/flashcards/Others/Chicanery.gif'
        },
        {
            word: 'Coalesce',
            mnemonic: 'To come together to form one whole',
            synonyms: 'Unite, Merge, Combine',
            hint: 'Things blending or coming together',
            positivity: 'Positive',
            sentence: 'The various departments <u>Coalesced</u> to work on the joint project.',
            image: './assets/images/flashcards/Others/Coalesce.gif'
        },
        {
            word: 'Cogent',
            mnemonic: 'Clear, logical, and convincing',
            synonyms: 'Convincing, Compelling, Persuasive',
            hint: 'An argument that makes strong sense',
            positivity: 'Positive',
            sentence: 'Her <u>Cogent</u> arguments swayed many in the audience.',
            image: './assets/images/flashcards/Others/Cogent.gif'
        },
        {
            word: 'Compelling',
            mnemonic: 'Evoking interest, attention, or admiration',
            synonyms: 'Engaging, Captivating, Convincing',
            hint: 'Something hard to ignore or resist',
            positivity: 'Positive',
            sentence: 'The documentary was so <u>Compelling</u> that he watched it twice.',
            image: './assets/images/flashcards/Others/Compelling.gif'
        },
        {
            word: 'Contend',
            mnemonic: 'To struggle or assert something',
            synonyms: 'Assert, Compete, Struggle',
            hint: 'Striving or fighting for something',
            positivity: 'Neutral',
            sentence: 'The athletes <u>Contended</u> for the championship title with fierce determination.',
            image: './assets/images/flashcards/Others/Contend.gif'
        },
        {
            word: 'Copious',
            mnemonic: 'Abundant in supply or quantity',
            synonyms: 'Abundant, Plentiful, Ample',
            hint: 'An overflowing amount of something',
            positivity: 'Neutral',
            sentence: 'She took <u>Copious</u> notes during the lecture to ensure she captured everything.',
            image: './assets/images/flashcards/Others/Copious.gif'
        },
        {
            word: 'Cosmopolitan',
            mnemonic: 'Familiar with many cultures',
            synonyms: 'Worldly, Sophisticated, International',
            hint: 'At home anywhere in the world',
            positivity: 'Positive',
            sentence: 'Living in different countries made her a <u>Cosmopolitan</u> person.',
            image: './assets/images/flashcards/Others/Cosmopolitan.jpg'
        },
        {
            word: 'Deference',
            mnemonic: 'Respectful submission to others\' judgment',
            synonyms: 'Respect, Regard, Obedience',
            hint: 'Showing respect or yielding to others',
            positivity: 'Positive',
            sentence: 'In <u>Deference</u> to his mentor, he accepted the advice given.',
            image: './assets/images/flashcards/Others/Deference.gif'
        },
        {
            word: 'Desultory',
            mnemonic: 'Lacking a plan, purpose, or enthusiasm',
            synonyms: 'Aimless, Erratic, Unfocused',
            hint: 'Something scattered or lacking direction',
            positivity: 'Negative',
            sentence: 'The meeting was long and <u>Desultory</u>, with no clear outcome.',
            image: './assets/images/flashcards/Others/Desultory.gif'
        },
        {
            word: 'Diffident',
            mnemonic: 'Lacking self-confidence',
            synonyms: 'Shy, Timid, Hesitant',
            hint: 'Someone unsure of themselves',
            positivity: 'Negative',
            sentence: 'Her <u>Diffident</u> nature made her avoid speaking up in meetings.',
            image: './assets/images/flashcards/Others/Diffident.png'
        },
        {
            word: 'Dilatory',
            mnemonic: 'Slow to act; intending to delay',
            synonyms: 'Delaying, Procrastinating, Sluggish',
            hint: 'Someone who takes their time, maybe too much',
            positivity: 'Negative',
            sentence: 'The <u>Dilatory</u> tactics of the lawyer prolonged the case unnecessarily.',
            image: './assets/images/flashcards/Others/Dilatory.gif'
        },
        {
            word: 'Polarize',
            mnemonic: 'To divide into sharply opposing groups or opinions',
            synonyms: 'Divide, Split, Separate',
            hint: 'Think of creating two distinct sides',
            positivity: 'Negative',
            sentence: 'The issue of climate change tends to <u>Polarize</u> public opinion.',
            image: './assets/images/flashcards/Others/Polarize.gif'
        },
        {
            word: 'Prodigal',
            mnemonic: 'Spending money or resources recklessly',
            synonyms: 'Wasteful, Extravagant, Spendthrift',
            hint: 'Excessive, often wasteful generosity',
            positivity: 'Negative',
            sentence: 'His <u>Prodigal</u> spending habits quickly drained his inheritance.',
            image: './assets/images/flashcards/Others/Prodigal.gif'
        },
        {
            word: 'Verbose',
            mnemonic: 'Using more words than necessary',
            synonyms: 'Wordy, Lengthy, Long-winded',
            hint: 'Overly wordy or too detailed',
            positivity: 'Negative',
            sentence: 'The instructions were so <u>Verbose</u> that most people lost interest before finishing.',
            image: './assets/images/flashcards/Others/Verbose.gif'
        }
    
    ],

     //Set4
    [

    {
        word: 'punctilious',
        mnemonic: 'Showing great attention to detail or correct behavior',
        synonyms: 'Meticulous, Conscientious, Scrupulous, Exact',
        hint: 'Very detailed in attention',
        positivity: 'Neutral',
        sentence: 'He was always <u>punctilious</u> in following the rules, ensuring that every step was properly documented.',
        image: './assets/images/flashcards/Set2/punctilious.jpg'
    },
    {
        word: 'precipitate',  
        mnemonic: 'To cause something to happen suddenly or prematurely.',  
        synonyms: 'Hasten, Trigger, Accelerate',  
        hint: 'Causing something to happen quickly, often unexpectedly.',  
        positivity: 'Neutral',  
        sentence: '"The manager’s harsh words <u>precipitated</u> an immediate resignation."', 
        image: './assets/images/flashcards/Set3/precipitate.gif'  
    },
    {
        word: 'enervate',
        mnemonic: 'To weaken or drain energy',
        synonyms: 'weaken, sap',
        hint: 'To weaken',
        positivity: 'Negative',
        sentence: '"The long workout enervated him, leaving him too tired to move."',
        image: './assets/images/flashcards/Set4/enervate.gif'
    },
    {
        word: 'opaque',
        mnemonic: 'Not transparent; difficult to understand.',
        synonyms: 'Obscure, Unclear, Impenetrable',
        hint: 'Think of something hard to see through.',
        positivity: 'Negative',
        sentence: 'The instructions were so opaque that nobody could figure out how to assemble the product.',
        image: './assets/images/flashcards/Set5/opaque.gif'
    },
    {
        word: 'Abstain',
        mnemonic: 'To choose not to do or have something',
        synonyms: 'Refrain, Withhold, Forgo',
        hint: 'To avoid participating',
        positivity: 'Neutral',
        sentence: 'He decided to <u>Abstain</u> from voting on the proposal.',
        image: './assets/images/flashcards/Others/Abstain.gif'
    },
    {
        word: 'Approbation',
        mnemonic: 'Approval or praise',
        synonyms: 'Approval, Endorsement, Admiration',
        hint: 'Formal praise or acceptance',
        positivity: 'Positive',
        sentence: 'The artist\'s new work received widespread <u>Approbation</u>.',
        image: './assets/images/flashcards/Others/Approbation.gif'
    },
    {
        word: 'Cherish',
        mnemonic: 'To hold something dear or with affection',
        synonyms: 'Treasure, Appreciate, Love',
        hint: 'To value something deeply',
        positivity: 'Positive',
        sentence: 'She <u>Cherishes</u> the memories of her childhood.',
        image: './assets/images/flashcards/Others/Cherish.gif'
    },
    {
        word: 'Corroborate',
        mnemonic: 'To confirm or support a statement or theory',
        synonyms: 'Confirm, Verify, Substantiate',
        hint: 'Providing evidence to back up a claim',
        positivity: 'Neutral',
        sentence: 'The witness\'s testimony <u>Corroborated</u> the suspect\'s alibi.',
        image: './assets/images/flashcards/Others/Corroborate.gif'
    },
    {
        word: 'Disparate',
        mnemonic: 'Essentially different in kind',
        synonyms: 'Different, Distinct, Unalike',
        hint: 'Things that don’t go together easily',
        positivity: 'Neutral',
        sentence: 'The conference attracted experts from <u>Disparate</u> fields.',
        image: './assets/images/flashcards/Others/Disparate.gif'
    },
    {
        word: 'Emulate',
        mnemonic: 'To imitate or try to match',
        synonyms: 'Imitate, Copy, Mirror',
        hint: 'Trying to equal or surpass',
        positivity: 'Neutral',
        sentence: 'She tried to <u>Emulate</u> her mentor’s work ethic.',
        image: './assets/images/flashcards/Others/Emulate.gif'
    },
    {
        word: 'Ephemeral',
        mnemonic: 'Lasting for a very short time',
        synonyms: 'Short-lived, Fleeting, Transitory',
        hint: 'Think of something temporary',
        positivity: 'Neutral',
        sentence: 'The beauty of the sunset was <u>Ephemeral</u>, fading within minutes.',
        image: './assets/images/flashcards/Others/Ephemeral.gif'
    },
    {
        word: 'Fervid',
        mnemonic: 'Intensely enthusiastic or passionate',
        synonyms: 'Passionate, Ardent, Fervent',
        hint: 'Showing strong feelings or passion',
        positivity: 'Positive',
        sentence: 'His <u>Fervid</u> speeches inspired many to join the movement.',
        image: './assets/images/flashcards/Others/Fervid.gif'
    },
    {
        word: 'Incendiary',
        mnemonic: 'Intended to cause fire or stir up conflict',
        synonyms: 'Inflammatory, Provocative, Seditious',
        hint: 'Setting something ablaze, literally or figuratively',
        positivity: 'Negative',
        sentence: 'The politician’s <u>Incendiary</u> remarks sparked protests.',
        image: './assets/images/flashcards/Others/Incendiary.gif'
    },
    {
        word: 'Inimical',
        mnemonic: 'Tending to obstruct or harm',
        synonyms: 'Hostile, Adverse, Harmful',
        hint: 'Something that works against you',
        positivity: 'Negative',
        sentence: 'These policies are <u>Inimical</u> to the country’s growth.',
        image: './assets/images/flashcards/Others/Inimical.gif'
    },
    {
        word: 'Intimate',
        mnemonic: 'To suggest something subtly',
        synonyms: 'Hint, Imply, Suggest',
        hint: 'A subtle way to express something',
        positivity: 'Neutral',
        sentence: 'He <u>Intimated</u> that he might retire soon.',
        image: './assets/images/flashcards/Others/Intimate.gif'
    },
    {
        word: 'Invigorate',
        mnemonic: 'To give energy or strength to',
        synonyms: 'Energize, Refresh, Revitalize',
        hint: 'To boost someone’s energy',
        positivity: 'Positive',
        sentence: 'A brisk walk in the morning can <u>Invigorate</u> the senses.',
        image: './assets/images/flashcards/Others/Invigorate.gif'
    },
    {
        word: 'Mitigate',
        mnemonic: 'To make less severe or painful',
        synonyms: 'Alleviate, Reduce, Lessen',
        hint: 'To soften the impact',
        positivity: 'Positive',
        sentence: 'New policies were introduced to <u>Mitigate</u> the effects of inflation.',
        image: './assets/images/flashcards/Others/Assuage.gif'
    },
    {
        word: 'Obsolete',
        mnemonic: 'No longer in use or out of date',
        synonyms: 'Outdated, Archaic, Old-fashioned',
        hint: 'Something no longer relevant',
        positivity: 'Neutral',
        sentence: 'Fax machines are becoming <u>Obsolete</u> in modern offices.',
        image: './assets/images/flashcards/Others/Obsolete.gif'
    },
    {
        word: 'Paradigmatic',
        mnemonic: 'Serving as a typical example of something',
        synonyms: 'Exemplary, Typical, Standard',
        hint: 'A perfect example or model',
        positivity: 'Neutral',
        sentence: 'Her actions were <u>Paradigmatic</u> of leadership qualities.',
        image: './assets/images/flashcards/Others/Paradigmatic.gif'
    },
    {
        word: 'Pedantic',
        mnemonic: 'Overly concerned with minor details or rules',
        synonyms: 'Precise, Meticulous, Fussy',
        hint: 'Someone who focuses too much on little things',
        positivity: 'Negative',
        sentence: 'His <u>Pedantic</u> approach often slowed down the progress of the project.',
        image: './assets/images/flashcards/Others/Pedantic.gif'
    },
    {
        word: 'Placid',
        mnemonic: 'Not easily upset or excited; calm',
        synonyms: 'Calm, Tranquil, Peaceful',
        hint: 'Think of a serene lake',
        positivity: 'Positive',
        sentence: 'The <u>Placid</u> nature of the village attracted many visitors.',
        image: './assets/images/flashcards/Others/Placid.gif'
    },
    {
        word: 'Polemical',
        mnemonic: 'Involving strong arguments for or against something',
        synonyms: 'Controversial, Argumentative, Disputatious',
        hint: 'Strong debates',
        positivity: 'Negative',
        sentence: 'His <u>Polemical</u> articles often stirred up public debate.',
        image: './assets/images/flashcards/Others/Polemical.gif'
    },
    {
        word: 'Profundity',
        mnemonic: 'Great depth of knowledge or thought',
        synonyms: 'Depth, Insight, Wisdom',
        hint: 'Deep thinking or understanding',
        positivity: 'Positive',
        sentence: 'The <u>Profundity</u> of her speech left the audience in awe.',
        image: './assets/images/flashcards/Others/Profundity.gif'
    },
    {
        word: 'Prophetic',
        mnemonic: 'Accurately describing or predicting the future',
        synonyms: 'Predictive, Prescient, Foretelling',
        hint: 'Someone who can see the future',
        positivity: 'Neutral',
        sentence: 'Her <u>Prophetic</u> words about the economic downturn proved true.',
        image: './assets/images/flashcards/Others/Prophetic.gif'
    },
    {
        word: 'Prudent',
        mnemonic: 'Acting with care and thought for the future',
        synonyms: 'Wise, Sensible, Cautious',
        hint: 'Being careful and wise',
        positivity: 'Positive',
        sentence: 'He made a <u>Prudent</u> decision to save money for emergencies.',
        image: './assets/images/flashcards/Others/Prudent.gif'
    },
    {
        word: 'Recondite',
        mnemonic: 'Little known or difficult to understand',
        synonyms: 'Obscure, Complex, Abstruse',
        hint: 'Something that’s hard to grasp',
        positivity: 'Neutral',
        sentence: 'The professor’s <u>Recondite</u> explanation confused the students.',
        image: './assets/images/flashcards/Others/Recondite.gif'
    },
    {
        word: 'Scrupulous',
        mnemonic: 'Very concerned to avoid doing wrong; meticulous',
        synonyms: 'Ethical, Meticulous, Honest',
        hint: 'A person with strong moral principles',
        positivity: 'Positive',
        sentence: 'She was <u>Scrupulous</u> in ensuring fair treatment for all employees.',
        image: './assets/images/flashcards/Others/Scrupulous.gif'
    },
    {
        word: 'Tranquil',
        mnemonic: 'Free from disturbance; calm',
        synonyms: 'Peaceful, Serene, Placid',
        hint: 'A quiet, peaceful environment',
        positivity: 'Positive',
        sentence: 'The <u>Tranquil</u> setting of the park makes it perfect for relaxation.',
        image: './assets/images/flashcards/Others/Tranquil.gif'
    },
    {
        word: 'Vacillate',
        mnemonic: 'To alternate between different opinions or actions',
        synonyms: 'Waver, Hesitate, Fluctuate',
        hint: 'When you can\'t make up your mind',
        positivity: 'Neutral',
        sentence: 'She tended to <u>Vacillate</u> when faced with difficult choices.',
        image: './assets/images/flashcards/Others/Vacillate.gif'
    },
    {
        word: 'Garrulous',
        mnemonic: 'Excessively talkative, especially on trivial matters',
        synonyms: 'Talkative, Chatty, Loquacious',
        hint: 'Someone who can’t stop talking',
        positivity: 'Negative',
        sentence: 'The <u>Garrulous</u> neighbor kept everyone up with his endless stories.',
        image: './assets/images/flashcards/Others/Garrulous.gif'
    }
    



    ],
        
    //Set5
    [
        {
            word: 'Aloof',
            mnemonic: 'Not friendly or forthcoming; distant',
            synonyms: 'Detached, Reserved, Unapproachable',
            hint: 'Someone who stays apart from others',
            positivity: 'Neutral',
            sentence: 'He remained <u>Aloof</u> during the meeting, not interacting with anyone.',
            image: './assets/images/flashcards/Others/Set4/Aloof.gif'
        },
        {
            word: 'Clangor',
            mnemonic: 'A loud, resonant sound, typically a ringing noise',
            synonyms: 'Clamor, Racket, Din',
            hint: 'Think of a loud, metal-like noise',
            positivity: 'Neutral',
            sentence: 'The <u>Clangor</u> of the bells echoed through the town.',
            image: './assets/images/flashcards/Others/Set4/Clangor.gif'
        },
        {
            word: 'Conventional',
            mnemonic: 'Based on accepted norms or standards',
            synonyms: 'Traditional, Customary, Usual',
            hint: 'Following common ways or practices',
            positivity: 'Neutral',
            sentence: 'She wore a <u>Conventional</u> outfit to the formal dinner.',
            image: './assets/images/flashcards/Others/Set4/Conventional.gif'
        },
        {
            word: 'Debunk',
            mnemonic: 'To expose the falseness of a belief or idea',
            synonyms: 'Disprove, Refute, Invalidate',
            hint: 'Revealing the truth behind a myth',
            positivity: 'Positive',
            sentence: 'Scientists worked to <u>Debunk</u> the myth about the health benefits of fad diets.',
            image: './assets/images/flashcards/Others/Set4/Debunk.gif'
        },
        {
            word: 'Diminutive',
            mnemonic: 'Extremely small in size',
            synonyms: 'Tiny, Minuscule, Miniature',
            hint: 'Something noticeably small',
            positivity: 'Neutral',
            sentence: 'Despite his <u>Diminutive</u> stature, he commanded attention in the room.',
            image: './assets/images/flashcards/Others/Set4/Diminutive.gif'
        },
        {
            word: 'Discernible',
            mnemonic: 'Able to be seen, recognized, or understood',
            synonyms: 'Visible, Detectable, Observable',
            hint: 'Something that can be noticed or sensed',
            positivity: 'Neutral',
            sentence: 'There was a <u>Discernible</u> shift in his attitude after the promotion.',
            image: './assets/images/flashcards/Others/Set4/Discernible.gif'
        },
        {
            word: 'Enigmatic',
            mnemonic: 'Difficult to interpret or understand',
            synonyms: 'Mysterious, Puzzling, Cryptic',
            hint: 'Something hard to figure out',
            positivity: 'Neutral',
            sentence: 'Her <u>Enigmatic</u> smile left everyone wondering what she was thinking.',
            image: './assets/images/flashcards/Others/Set4/Enigmatic.gif'
        },
        {
            word: 'Estranged',
            mnemonic: 'No longer close or affectionate; alienated',
            synonyms: 'Separated, Alienated, Detached',
            hint: 'A relationship that has grown distant',
            positivity: 'Negative',
            sentence: 'After years of estrangement, the siblings finally reconciled.',
            image: './assets/images/flashcards/Others/Set4/Estranged.gif'
        },
        {
            word: 'Extravagant',
            mnemonic: 'Exceeding what is reasonable or appropriate; excessive',
            synonyms: 'Lavish, Excessive, Indulgent',
            hint: 'Over-the-top spending or behavior',
            positivity: 'Negative',
            sentence: 'His <u>Extravagant</u> spending habits quickly drained his savings.',
            image: './assets/images/flashcards/Others/Set4/Extravagant.webp'
        },
        {
            word: 'Fanciful',
            mnemonic: 'Overly imaginative and unrealistic',
            synonyms: 'Whimsical, Imaginative, Unrealistic',
            hint: 'Impractical or overly creative',
            positivity: 'Neutral',
            sentence: 'The architect’s designs were beautiful but a bit too <u>Fanciful</u> for practical use.',
            image: './assets/images/flashcards/Others/Set4/Fanciful.gif'
        },
        {
            word: 'Frivolous',
            mnemonic: 'Not having any serious purpose or value',
            synonyms: 'Trivial, Silly, Unimportant',
            hint: 'Lacking seriousness',
            positivity: 'Negative',
            sentence: 'She spent money on <u>Frivolous</u> purchases rather than saving for essentials.',
            image: './assets/images/flashcards/Others/Set4/Frivolous.gif'
        },
        {
            word: 'Heterogeneous',
            mnemonic: 'Composed of different or diverse elements',
            synonyms: 'Diverse, Varied, Mixed',
            hint: 'A mix of different kinds',
            positivity: 'Neutral',
            sentence: 'The neighborhood is known for its <u>Heterogeneous</u> community.',
            image: './assets/images/flashcards/Others/Set4/Heterogeneous.gif'
        },
        {
            word: 'Imperious',
            mnemonic: 'Assuming power or authority without justification',
            synonyms: 'Domineering, Overbearing, Commanding',
            hint: 'Acting as if they have more power',
            positivity: 'Negative',
            sentence: 'His <u>Imperious</u> manner made him unpopular with his colleagues.',
            image: './assets/images/flashcards/Others/Set4/Imperious.jpg'
        },
        {
            word: 'Impertinent',
            mnemonic: 'Not showing proper respect; rude',
            synonyms: 'Disrespectful, Rude, Insolent',
            hint: 'Someone who is improperly bold',
            positivity: 'Negative',
            sentence: 'The student\'s <u>Impertinent</u> question surprised the teacher.',
            image: './assets/images/flashcards/Others/Set4/Impertinent.jpg'
        },
        {
            word: 'Invasive',
            mnemonic: 'Tending to intrude or encroach',
            synonyms: 'Intrusive, Encroaching, Meddlesome',
            hint: 'Pushing into places unwanted',
            positivity: 'Negative',
            sentence: 'The new laws were seen as <u>Invasive</u> by many citizens.',
            image: './assets/images/flashcards/Others/Set4/Invasive.gif'
        },
        {
            word: 'Irresolute',
            mnemonic: 'Showing or feeling hesitancy; uncertain',
            synonyms: 'Hesitant, Undecided, Wavering',
            hint: 'Unable to decide or act firmly',
            positivity: 'Negative',
            sentence: 'She remained <u>Irresolute</u>, unable to make a final choice.',
            image: './assets/images/flashcards/Others/Set4/Irresolute.gif'
        },
        {
            word: 'Laudable',
            mnemonic: 'Worthy of praise or commendation',
            synonyms: 'Praiseworthy, Commendable, Admirable',
            hint: 'Deserving recognition or admiration',
            positivity: 'Positive',
            sentence: 'Her commitment to charity work is truly <u>Laudable</u>.',
            image: './assets/images/flashcards/Others/Set4/Laudable.gif'
        },
        {
            word: 'Lax',
            mnemonic: 'Not sufficiently strict or severe',
            synonyms: 'Careless, Negligent, Relaxed',
            hint: 'Lacking strictness or discipline',
            positivity: 'Negative',
            sentence: 'The <u>Lax</u> security allowed unauthorized access to the building.',
            image: './assets/images/flashcards/Others/Set4/Lax.gif'
        },
        {
            word: 'Marginalize',
            mnemonic: 'To treat someone or something as unimportant',
            synonyms: 'Sideline, Trivialize, Overlook',
            hint: 'Making something or someone less relevant',
            positivity: 'Negative',
            sentence: 'Certain groups feel <u>Marginalized</u> by the current policies.',
            image: './assets/images/flashcards/Others/Set4/Marginalize.gif'
        },
        {
            word: 'Panache',
            mnemonic: 'Flamboyant confidence of style or manner',
            synonyms: 'Flair, Style, Charisma',
            hint: 'Stylish, confident presentation',
            positivity: 'Positive',
            sentence: 'She performed with great <u>Panache</u>, captivating the audience.',
            image: './assets/images/flashcards/Others/Set4/Panache.gif'
        },
        {
            word: 'Plodding',
            mnemonic: 'Slow and laborious movement',
            synonyms: 'Trudging, Lumbering, Slow',
            hint: 'Moving along slowly and steadily',
            positivity: 'Neutral',
            sentence: 'His <u>Plodding</u> approach to work got the job done, albeit slowly.',
            image: './assets/images/flashcards/Others/Set4/Plodding.gif'
        },
        {
            word: 'Prosaic',
            mnemonic: 'Lacking poetic beauty; commonplace or dull',
            synonyms: 'Mundane, Ordinary, Unimaginative',
            hint: 'Plain or boring',
            positivity: 'Negative',
            sentence: 'Her explanation was thorough but <u>Prosaic</u>, lacking creativity.',
            image: './assets/images/flashcards/Others/Set4/Prosaic.gif'
        },
        {
            word: 'Remedial',
            mnemonic: 'Intended to improve or correct',
            synonyms: 'Corrective, Healing, Therapeutic',
            hint: 'Something to fix or improve',
            positivity: 'Positive',
            sentence: 'He attended <u>Remedial</u> classes to catch up with his peers.',
            image: './assets/images/flashcards/Others/Set4/Remedial.gif'
        },
        {
            word: 'Restive',
            mnemonic: 'Unable to remain still, difficult to control',
            synonyms: 'Restless, Fidgety, Uneasy',
            hint: 'Restless and hard to manage',
            positivity: 'Negative',
            sentence: 'The <u>Restive</u> crowd grew more impatient as the delay continued.',
            image: './assets/images/flashcards/Others/Set4/Restive.gif'
        },
        {
            word: 'Sporadic',
            mnemonic: 'Occurring at irregular intervals; scattered',
            synonyms: 'Occasional, Intermittent, Infrequent',
            hint: 'Random or irregular occurrences',
            positivity: 'Neutral',
            sentence: 'The city experienced <u>Sporadic</u> power outages throughout the day.',
            image: './assets/images/flashcards/Others/Set4/Sporadic.gif'
        },
        {
            word: 'Stigmatize',
            mnemonic: 'To mark with disgrace or disapproval',
            synonyms: 'Brand, Label, Condemn',
            hint: 'A negative label attached to someone',
            positivity: 'Negative',
            sentence: 'Society tends to <u>Stigmatize</u> those with mental health issues.',
            image: './assets/images/flashcards/Others/Set4/Stigmatize.gif'
        },
        {
            word: 'Undermine',
            mnemonic: 'To weaken or damage something gradually',
            synonyms: 'Weaken, Sabotage, Erode',
            hint: 'Slowly breaking down or lessening strength',
            positivity: 'Negative',
            sentence: 'The scandal served to <u>Undermine</u> his authority.',
            image: './assets/images/flashcards/Others/Set4/Undermine.gif'
        },
        {
            word: 'Utterly',
            mnemonic: 'Completely and without qualification',
            synonyms: 'Totally, Entirely, Absolutely',
            hint: 'Fully or completely',
            positivity: 'Neutral',
            sentence: 'She was <u>Utterly</u> exhausted after the long journey.',
            image: './assets/images/flashcards/Others/Set4/Utterly.gif'
        },
        {
            word: 'Weary',
            mnemonic: 'Feeling tired or worn out',
            synonyms: 'Tired, Exhausted, Fatigued',
            hint: 'A state of tiredness or fatigue',
            positivity: 'Negative',
            sentence: 'He felt <u>Weary</u> after working long hours without a break.',
            image: './assets/images/flashcards/Others/Set4/Weary.gif'
        },
        {
            word: 'Zealous',
            mnemonic: 'Showing great energy or enthusiasm in pursuit of a cause',
            synonyms: 'Passionate, Fervent, Devoted',
            hint: 'Enthusiastically committed',
            positivity: 'Positive',
            sentence: 'She was <u>Zealous</u> in her efforts to promote the environmental campaign.',
            image: './assets/images/flashcards/Others/Set4/Zealous.gif'
        }
        

        

    ],
    //Set6
    [
        {
            word: 'Admonish',
            mnemonic: 'To warn or reprimand someone firmly',
            synonyms: 'Reprimand, Caution, Scold',
            hint: 'A gentle warning or correction',
            positivity: 'Neutral',
            sentence: 'The teacher <u>Admonished</u> the student for not completing his homework.',
            image: './assets/images/flashcards/Others/Set6/Admonish.gif'
        },
        {
            word: 'Aesthetic',
            mnemonic: 'Concerned with beauty or the appreciation of beauty',
            synonyms: 'Artistic, Tasteful, Elegant',
            hint: 'Relates to appearance and style',
            positivity: 'Positive',
            sentence: 'The <u>Aesthetic</u> appeal of the building attracted many visitors.',
            image: './assets/images/flashcards/Others/Set6/Aesthetic.gif'
        },
        {
            word: 'Affectation',
            mnemonic: 'Behavior, speech, or writing that is artificial',
            synonyms: 'Pretension, Artificiality, Insincerity',
            hint: 'Trying to impress without being genuine',
            positivity: 'Negative',
            sentence: 'His accent seemed like an <u>Affectation</u> rather than natural.',
            image: './assets/images/flashcards/Others/Set6/Affectation.gif'
        },
        {
            word: 'Alleviate',
            mnemonic: 'To make suffering or a problem less severe',
            synonyms: 'Ease, Relieve, Mitigate',
            hint: 'Reducing pain or difficulty',
            positivity: 'Positive',
            sentence: 'She took painkillers to <u>Alleviate</u> her headache.',
            image: './assets/images/flashcards/Others/Assuage.gif'
        },
        {
            word: 'Analogous',
            mnemonic: 'Comparable in certain respects',
            synonyms: 'Similar, Comparable, Alike',
            hint: 'Things that can be compared',
            positivity: 'Neutral',
            sentence: 'The architecture of the two buildings is <u>Analogous</u> in design.',
            image: './assets/images/flashcards/Others/Set6/Analogous.gif'
        },
        {
            word: 'Bolster',
            mnemonic: 'To support or strengthen',
            synonyms: 'Reinforce, Support, Boost',
            hint: 'Providing extra strength',
            positivity: 'Positive',
            sentence: 'The success of his first project <u>Bolstered</u> his confidence.',
            image: './assets/images/flashcards/Others/Set6/Bolster.gif'
        },
        {
            word: 'Chauvinistic',
            mnemonic: 'Showing excessive or prejudiced loyalty or support',
            synonyms: 'Biased, Nationalistic, Intolerant',
            hint: 'Think of extreme pride for a group or cause',
            positivity: 'Negative',
            sentence: 'His <u>Chauvinistic</u> views made him intolerant of other opinions.',
            image: './assets/images/flashcards/Others/Set6/Chauvinistic.gif'
        },
        {
            word: 'Connoisseur',
            mnemonic: 'An expert judge in matters of taste',
            synonyms: 'Expert, Aficionado, Specialist',
            hint: 'Knowledgeable about a specific area',
            positivity: 'Positive',
            sentence: 'She’s a <u>Connoisseur</u> of fine wines and knows all the best labels.',
            image: './assets/images/flashcards/Others/Set6/Connoisseur.gif'
        },
        {
            word: 'Dissemble',
            mnemonic: 'To disguise or conceal true feelings or beliefs',
            synonyms: 'Pretend, Disguise, Feign',
            hint: 'Hiding one’s real intentions',
            positivity: 'Negative',
            sentence: 'He chose to <u>Dissemble</u> his intentions to avoid suspicion.',
            image: './assets/images/flashcards/Others/Set6/Dissemble.gif'
        },
        {
            word: 'Dogged',
            mnemonic: 'Showing persistent determination',
            synonyms: 'Determined, Tenacious, Persistent',
            hint: 'Sticking with something, no matter what',
            positivity: 'Positive',
            sentence: 'Her <u>Dogged</u> pursuit of justice inspired everyone around her.',
            image: './assets/images/flashcards/Others/Set6/Dogged.gif'
        },
        {
            word: 'Dupe',
            mnemonic: 'To deceive or trick someone',
            synonyms: 'Deceive, Trick, Mislead',
            hint: 'Fooling or misleading someone',
            positivity: 'Negative',
            sentence: 'He was <u>Duped</u> by a fake online advertisement.',
            image: './assets/images/flashcards/Others/Set6/Dupe.gif'
        },
        {
            word: 'Empirical',
            mnemonic: 'Based on observation or experience rather than theory',
            synonyms: 'Experimental, Observed, Factual',
            hint: 'Directly based on real-world evidence',
            positivity: 'Neutral',
            sentence: 'The study is based on <u>Empirical</u> data collected over five years.',
            image: './assets/images/flashcards/Others/Set6/Empirical.gif'
        },
        {
            word: 'Engender',
            mnemonic: 'To cause or give rise to a feeling or situation',
            synonyms: 'Produce, Generate, Create',
            hint: 'To bring something into existence',
            positivity: 'Neutral',
            sentence: 'His harsh words <u>Engendered</u> resentment among the employees.',
            image: './assets/images/flashcards/Others/Set6/Engender.gif'
        },
        {
            word: 'Entitled',
            mnemonic: 'Believing oneself to be inherently deserving of privileges',
            synonyms: 'Privileged, Deserving, Self-important',
            hint: 'Expecting special treatment',
            positivity: 'Negative',
            sentence: 'She acted as if she was <u>Entitled</u> to special treatment.',
            image: './assets/images/flashcards/Others/Set6/Entitled.gif'
        },
        {
            word: 'Pertinacious',
            mnemonic: 'Holding firmly to an opinion or course of action',
            synonyms: 'Persistent, Determined, Stubborn',
            hint: 'Not giving up on a belief',
            positivity: 'Neutral',
            sentence: 'His <u>Pertinacious</u> dedication to his research led to groundbreaking results.',
            image: './assets/images/flashcards/Others/Set6/Pertinacious.gif'
        },
        {
            word: 'Presumptuous',
            mnemonic: 'Failing to observe the limits of what is appropriate',
            synonyms: 'Overconfident, Arrogant, Forward',
            hint: 'Acting without regard for boundaries',
            positivity: 'Negative',
            sentence: 'It was <u>Presumptuous</u> of him to assume he’d get the job.',
            image: './assets/images/flashcards/Others/Set6/Presumptuous.gif'
        },
        {
            word: 'Probity',
            mnemonic: 'The quality of having strong moral principles',
            synonyms: 'Integrity, Honesty, Uprightness',
            hint: 'Think of a very honest person',
            positivity: 'Positive',
            sentence: 'Her <u>Probity</u> made her a highly respected figure in the community.',
            image: './assets/images/flashcards/Others/Set6/Probity.gif'
        },
        {
            word: 'Proliferate',
            mnemonic: 'To increase rapidly in numbers',
            synonyms: 'Multiply, Grow, Expand',
            hint: 'Rapid growth or spread',
            positivity: 'Neutral',
            sentence: 'With the advent of technology, online businesses <u>Proliferate</u> quickly.',
            image: './assets/images/flashcards/Others/Set6/Proliferate.gif'
        },
        {
            word: 'Specious',
            mnemonic: 'Appearing to be true but actually false',
            synonyms: 'Misleading, Deceptive, False',
            hint: 'Looks good on the surface but isn’t real',
            positivity: 'Negative',
            sentence: 'The argument was <u>Specious</u>, as it lacked real evidence.',
            image: './assets/images/flashcards/Others/Set6/Specious.gif'
        },
        {
            word: 'Spurious',
            mnemonic: 'Not being what it purports to be; false or fake',
            synonyms: 'Fake, False, Counterfeit',
            hint: 'Think of something that pretends to be real',
            positivity: 'Negative',
            sentence: 'The document was revealed to be <u>Spurious</u> and had been forged.',
            image: './assets/images/flashcards/Others/Set6/Spurious.gif'
        },
        {
            word: 'Subjective',
            mnemonic: 'Based on personal feelings or opinions',
            synonyms: 'Personal, Biased, Individual',
            hint: 'Different for each person',
            positivity: 'Neutral',
            sentence: 'Beauty is often considered a <u>Subjective</u> matter.',
            image: './assets/images/flashcards/Others/Set6/Subjective.gif'
        },
        {
            word: 'Subvert',
            mnemonic: 'To undermine the power or authority of something',
            synonyms: 'Undermine, Destabilize, Disrupt',
            hint: 'Working to weaken authority',
            positivity: 'Negative',
            sentence: 'The group’s mission was to <u>Subvert</u> the government’s policies.',
            image: './assets/images/flashcards/Others/Set6/Subvert.gif'
        },
        {
            word: 'Timorous',
            mnemonic: 'Showing or suffering from nervousness or fear',
            synonyms: 'Fearful, Timid, Apprehensive',
            hint: 'Lacking courage or confidence',
            positivity: 'Negative',
            sentence: 'He was <u>Timorous</u> when speaking in front of the large crowd.',
            image: './assets/images/flashcards/Others/Set6/Timorous.gif'
        },
        {
            word: 'Tortuous',
            mnemonic: 'Full of twists and turns; complicated',
            synonyms: 'Winding, Complex, Convoluted',
            hint: 'Think of something very complicated',
            positivity: 'Neutral',
            sentence: 'The road to the summit was <u>Tortuous</u>, with many sharp bends.',
            image: './assets/images/flashcards/Others/Set6/Tortuous.gif'
        },
        {
            word: 'Tractable',
            mnemonic: 'Easy to control or influence',
            synonyms: 'Manageable, Compliant, Malleable',
            hint: 'Easygoing and adaptable',
            positivity: 'Positive',
            sentence: 'The child was more <u>Tractable</u> after some gentle encouragement.',
            image: './assets/images/flashcards/Others/Set6/Tractable.gif'
        },
        {
            word: 'Transient',
            mnemonic: 'Lasting for a short time',
            synonyms: 'Temporary, Fleeting, Short-lived',
            hint: 'Think of something temporary',
            positivity: 'Neutral',
            sentence: 'The snow was <u>Transient</u>, melting by noon.',
            image: './assets/images/flashcards/Others/Set6/Transient.gif'
        },
        {
            word: 'Ubiquitous',
            mnemonic: 'Present, appearing, or found everywhere',
            synonyms: 'Widespread, Omnipresent, Universal',
            hint: 'Found in many places',
            positivity: 'Neutral',
            sentence: 'Smartphones have become <u>Ubiquitous</u> in today’s society.',
            image: './assets/images/flashcards/Others/Set6/Ubiquitous.gif'
        },
        {
            word: 'Underscore',
            mnemonic: 'To emphasize or highlight something',
            synonyms: 'Emphasize, Highlight, Stress',
            hint: 'Drawing attention to something important',
            positivity: 'Neutral',
            sentence: 'The report <u>Underscored</u> the importance of regular exercise.',
            image: './assets/images/flashcards/Others/Set6/Underscore.gif'
        },
        {
            word: 'Venal',
            mnemonic: 'Showing or motivated by susceptibility to bribery',
            synonyms: 'Corrupt, Bribable, Dishonest',
            hint: 'Think of someone easily influenced by money',
            positivity: 'Negative',
            sentence: 'The official was known to be <u>Venal</u> and often accepted bribes.',
            image: './assets/images/flashcards/Others/Set6/Venal.gif'
        },
        {
            word: 'Venerate',
            mnemonic: 'To regard with great respect',
            synonyms: 'Revere, Honor, Respect',
            hint: 'Showing deep admiration',
            positivity: 'Positive',
            sentence: 'In some cultures, ancestors are <u>Venerated</u> and remembered through rituals.',
            image: './assets/images/flashcards/Others/Set6/Venerate.gif'
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

