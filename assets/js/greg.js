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
            image: './assets/images/flashcards/Others/abound.webp'  
        },
        
        {
            word: 'amorphous',  
            mnemonic: 'without a clearly defined shape or form.',  
            synonyms: 'Shapeless, Formless, Vague',  
            hint: 'Samu always bluffs that a dark, strangely amorphous shadow filled the room.',  
            positivity: 'Neutral',  
            sentence: '"The concept was still <u>amorphous</u> in the designer’s mind, lacking any clear direction."', 
            image: './assets/images/flashcards/Others/amorphous.gif'  
        },
             
        {
            word: 'austere',  
            mnemonic: 'Avoid Luxary extremely stern or strict or Plain Life',  
            synonyms: 'Unadorned,Asectic,Sober,Spartan',  
            hint: 'Cadets life in their campus.',  
            positivity: 'Neutral/Negative',  
            sentence: '"Her <u>austere</u> lifestyle reflected her minimalist beliefs, with only the essentials in her home."', 
            image: './assets/images/flashcards/Others/monk.jpg'  
        },
        
        {
            word: 'belie',  
            mnemonic: 'fail to give a true notion or impression of (something); disguise or contradict.',  
            synonyms: 'Disguise, Misrepresent, Falsif,Debunk,Controvert',  
            hint: 'ami mukhe ak vitore arek',  
            positivity: 'Negative',  
            sentence: '"His calm demeanor <u>belied</u> the anger he felt inside."', 
            image: './assets/images/flashcards/Others/belie.jpg'  
        },
        
        {
            word: 'capricious',  
            mnemonic: 'given to sudden and unaccountable changes of mood or behavior.',  
            synonyms: 'Fickle, Unpredictable, Whimsical',  
            hint: 'Shamim Dulavai',  
            positivity: 'Neutral/Negative',  
            sentence: '"Her <u>capricious</u> nature made it hard to predict what she would do next."', 
            image: './assets/images/flashcards/Others/mood change.webp'  
        },
        
        {
            word: 'cerebral',  
            mnemonic: 'intellectual rather than emotional or physical.',  
            synonyms: 'Intellectual, Academic, Rational',  
            hint: 'He is known for his cerebral approach to problem-solving.',  
            positivity: 'Neutral',  
            sentence: '"The movie was too <u>cerebral</u> for a casual Friday night, requiring deep thought to understand."', 
            image: './assets/images/flashcards/Others/cerebral.gif'  
        },
        
        {
            word: 'congenial',  
            mnemonic: 'pleasant because of a personality, qualities, or interests that are similar to one\'s own.',  
            synonyms: 'Friendly, Agreeable, Compatible',  
            hint: 'Oly vai',  
            positivity: 'Positive',  
            sentence: '"She found her coworkers to be <u>congenial</u>, making the workplace feel more like a family."', 
            image: './assets/images/flashcards/Others/friendly.webp'  
        },
        {
            word: 'conspicuous',  
            mnemonic: 'standing out so as to be clearly visible.',  
            synonyms: 'Noticeable, Prominent, Obvious',  
            hint: 'Her red dress made her conspicuous at the event.',  
            positivity: 'Neutral',  
            sentence: '"Her bright red dress made her <u>conspicuous</u> at the otherwise formal event."', 
            image: './assets/images/flashcards/Others/conspicuous.webp'  
        },
        
        {
            word: 'cursory',  
            mnemonic: 'Lacking of Effort,hasty and therefore not thorough or detailed.',  
            synonyms: 'Superficial, Perfunctory, Quick,Casual,Token',  
            hint: 'Delivery Dear age final jokhn check dei',  
            positivity: 'Neutral',  
            sentence: '"His <u>cursory</u> review of the contract led to several mistakes being overlooked."', 
            image: './assets/images/flashcards/Others/cursory.gif'  
        },
        
        {
            word: 'daunting',  
            mnemonic: 'seeming difficult to deal with in anticipation; intimidating.',  
            synonyms: 'Intimidating, Alarming, Formidable',  
            hint: 'Amr Kisu Relative der sathe kotha bola',  
            positivity: 'Negative',  
            sentence: '"The idea of moving to a new city was <u>daunting</u>, but also exciting."',
            image: './assets/images/flashcards/Others/daunting.jpg'  
        },
        
        {
            word: 'deify',  
            mnemonic: 'worship, regard, or treat (someone or something) as a god.',  
            synonyms: 'Idolize, Revere, Worship,Venerate',  
            hint: 'Many people deify celebrities.',  
            positivity: 'Neutral',  
            sentence: '"In ancient times, people often <u>deified</u> the sun and the moon."', 
            image: './assets/images/flashcards/Others/deify.webp'  
        },
        
        
        {
            word: 'didactic',  
            mnemonic: 'intended to teach, particularly in having moral instruction as an ulterior motive.',  
            synonyms: 'Instructive, Educational, Pedagogic,Informative',  
            hint: 'The novel was didactic in nature, meant to teach moral lessons.',  
            positivity: 'Neutral',  
            sentence: '"The book was more <u>didactic</u> than entertaining, focusing heavily on moral lessons."', 
            image: './assets/images/flashcards/Others/didactic.webp'  
        },
        
        {
            word: 'disseminate',  
            mnemonic: 'spread (something, especially information) widely.',  
            synonyms: 'Distribute, Circulate, Broadcast',  
            hint: 'Ammu bonder moddhe new ja kore',  
            positivity: 'Neutral',  
            sentence: '"The company used social media to <u>disseminate</u> information about the new product launch."', 
            image: './assets/images/flashcards/Others/spread.png'  
        },
        
        {
            word: 'feasible',  
            mnemonic: 'possible to do easily or conveniently.',  
            synonyms: 'Possible, Practicable, Viable',  
            hint: 'The plan was feasible ',  
            positivity: 'Positive',  
            sentence: '"After reviewing the budget, they concluded the project was <u>feasible</u>."', 
            image: './assets/images/flashcards/Others/feasible.jpg'  
        },
        
        {
            word: 'flout',  
            mnemonic: 'openly disregard (a rule, law, or convention).',  
            synonyms: 'Defy, Disdain, Disregrad',  
            hint: 'office vabe ami office er sob rules k ja kori',  
            positivity: 'Negative',  
            sentence: '"Many people openly <u>flout</u> the new regulations, seeing them as unnecessary."', 
            image: './assets/images/flashcards/Others/flout.webp'  
        },
        
        {
            word: 'homogeneous',  
            mnemonic: 'of the same kind; alike.',  
            synonyms: 'Uniform, Similar, Consistent',  
            hint: 'Mou r or gustir behaviour',  
            positivity: 'Neutral',  
            sentence: '"The neighborhood is quite <u>homogeneous</u>, with most houses having the same design."', 
            image: './assets/images/flashcards/Others/homogeneous.webp'  
        },
        
        {
            word: 'humdrum',  
            mnemonic: 'lacking excitement or variety; dull; monotonous.',  
            synonyms: 'Dull, Boring, Mundane, Banal',  
            hint: 'bura ra',  
            positivity: 'Negative',  
            sentence: '"His daily routine had become <u>humdrum</u>, with little excitement or variety."', 
            image: './assets/images/flashcards/Others/boring.gif'  
        },
        
        {
            word: 'insipid',  
            mnemonic: 'lacking flavor; lacking vigor or interest.',  
            synonyms: 'Tasteless, Bland, Uninspired,Anemic,Dull',  
            hint: 'Lamiar Americano coffee',  
            positivity: 'Negative',  
            sentence: '"The soup was so <u>insipid</u> that it needed a lot more seasoning to make it palatable."', 
            image: './assets/images/flashcards/Others/boring.gif'   
        },
        
        {
            word: 'loquacious',  
            mnemonic: 'tending to talk a great deal; talkative.',  
            synonyms: 'Voluble,Talkative, Prolix, Garrulous',  
            hint: 'Lamia jokhn karo sathe friendly hye jay',  
            positivity: 'Neutral',  
            sentence: '"The <u>loquacious</u> host kept the guests entertained throughout the evening."'
, 
            image: './assets/images/flashcards/Others/loquacious.gif'  
        },
        
        {
            word: 'misanthropic',  
            mnemonic: 'disliking humankind and avoiding human society.',  
            synonyms: 'Anti-social, Cynical, Reclusive',  
            hint: 'Amr relativeder upor intereset',  
            positivity: 'Negative',  
            sentence: '"He became increasingly <u>misanthropic</u> after years of being let down by others."', 
            image: './assets/images/flashcards/Others/misanthropic.jpg'  
        },
        
        {
            word: 'misnomer',  
            mnemonic: 'a wrong or inaccurate name or designation.',  
            synonyms: 'Mislabeling, Inaccuracy, Misnaming',  
            hint: 'Jepser Kala',  
            positivity: 'Neutral',  
            sentence: '"Calling him a ‘doctor’ is a <u>misnomer</u>, as he hasn’t completed his medical degree yet."', 
            image: './assets/images/flashcards/Others/wrong.jpeg'  
        },
        
        {
            word: 'negligent',  
            mnemonic: 'failing to take proper care in doing something.',  
            synonyms: 'Careless, Remiss, Negligence,Lax,Sloopy',  
            hint: 'Ami namaz k ja kori, Allah maf koruk',  
            positivity: 'Negative',  
            sentence: '"The company was found <u>negligent</u> in its failure to properly inspect the safety equipment."', 
            image: './assets/images/flashcards/Others/negligent.png'  
        },
        
        {
            word: 'obsequious',  
            mnemonic: 'obedient or attentive to an excessive or servile degree.',  
            synonyms: 'Servile, Ingratiating, Submissive,Sycophantic',  
            hint: 'Setu mama, niloy',  
            positivity: 'Negative',  
            sentence: '"His <u>obsequious</u> behavior around the boss made his colleagues uncomfortable."', 
            image: './assets/images/flashcards/Others/obsequious.webp'  
        },
        
        {
            word: 'placate',  
            mnemonic: 'make (someone) less angry or hostile.',  
            synonyms: 'Pacify, Soothe, Calm',  
            hint: 'She tried to placate the angry customer with a refund.',  
            positivity: 'Positive',  
            sentence: '"The manager tried to <u>placate</u> the angry customer with a discount."', 
            image: './assets/images/flashcards/Others/keep clam.webp'  
        },
        
        {
            word: 'proclivity',  
            mnemonic: 'a tendency to choose or do something regularly; an inclination or predisposition toward a particular thing.',  
            synonyms: 'Inclination, Tendency, Predisposition,Inclination',  
            hint: 'Office joar khetre amr Mirpur 14 root select kora',  
            positivity: 'Neutral',  
            sentence: '"He has a <u>proclivity</u> for solving complex problems, even in stressful situations."', 
            image: './assets/images/flashcards/Others/choose.gif'  
        },
        
        {
            word: 'puerile',  
            mnemonic: 'childishly silly and trivial.',  
            synonyms: 'Childish, Immature, Juvenile',  
            hint: 'Lamiar behaviour maje maje',  
            positivity: 'Negative',  
            sentence: '"His <u>puerile</u> jokes were out of place in the serious meeting."', 
            image: './assets/images/flashcards/Others/puerile.webp'  
        },
        
        {
            word: 'quixotic',  
            mnemonic: 'exceedingly idealistic; unrealistic and impractical.',  
            synonyms: 'Unrealistic, Idealistic, Impractical',  
            hint: 'Choto Khalu BNP nie ja vabe',  
            positivity: 'Neutral',  
            sentence: '"His <u>quixotic</u> plan to save the world is unrealistic."', 
            image: './assets/images/flashcards/Others/impossible.png'  
        },
        
        {
            word: 'spendthrift',  
            mnemonic: 'a person who spends money in an extravagant, irresponsible way.',  
            synonyms: 'Profligate, Extravagant, Squanderer,Wastrel',  
            hint: 'Ami proti mashe',  
            positivity: 'Negative',  
            sentence: '"Her <u>spendthrift</u> habits quickly drained her savings account."', 
            image: './assets/images/flashcards/Others/spendthrift.gif'  
        },
        
        {
            word: 'taciturn',  
            mnemonic: 'a reserved or uncommunicative in speech; saying little.',  
            synonyms: 'Reticent, Reserved, Silent,Laconic,Taciturnity(n)',  
            hint: 'Lamia Other unknown Personer Khetre',  
            positivity: 'Neutral',  
            sentence: '"The usually <u>taciturn</u> boy surprised everyone by speaking up in the meeting."', 
            image: './assets/images/flashcards/Others/abbu.png'  
        },
        
        {
            word: 'wary',  
            mnemonic: 'feeling or showing caution about possible dangers or problems.',  
            synonyms: 'Cautious, Careful, Watchful',  
            hint: 'Ammu sob somoy kno topic e.',  
            positivity: 'Neutral',  
            sentence: '"He was <u>wary</u>of making investments in the volatile stock market."', 
            image: './assets/images/flashcards/Others/Careful.gif'  
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
            image: './assets/images/flashcards/Others/alacrity.gif'  
        },
        {
            word: 'banal',
            mnemonic: 'Lacking in originality, boring',
            synonyms: 'Trite, Cliché,Bland, Hackneyed',
            hint: 'Roj Tue Dim kahabar thake Kite e',
            positivity: 'Negative',
            sentence: 'The conversation turned <u>banal</u>, with no one adding anything new or interesting.',
            image: './assets/images/flashcards/Others/boring.gif'  
        },
        {
            word: 'incredulous',
            mnemonic: 'Unwilling or unable to believe something',
            synonyms: 'Skeptical, Doubtful, Disbelieving, Suspicious',
            hint: 'Baba k awmilig er ku kirti bojaile',
            positivity: 'Neutral',
            sentence: 'She looked at him with an <u>incredulous</u> expression when he claimed to have seen a UFO.',
            image: './assets/images/flashcards/Others/unbelieveable.gif'
        },
        {
            word: 'construe',
            mnemonic: 'Interpret or understand something in a particular way',
            synonyms: 'Interpret, Analyze, Decipher, Translate',
            hint: 'How you understand something',
            positivity: 'Neutral',
            sentence: 'His silence was <u>construed</u> as agreement, though he never actually said yes.',
            image: './assets/images/flashcards/Others/construe.jpg'
        },
        {
            word: 'amenable',
            mnemonic: 'Open and responsive to suggestion; easily persuaded or controlled',
            synonyms: 'Agreeable, Compliant, Receptive, Cooperative',
            hint: 'Willing to agree',
            positivity: 'Positive',
            sentence: 'The manager was <u>amenable</u> to the changes proposed by the team, making the transition smooth.',
            image: './assets/images/flashcards/Others/okay.gif'
        },
        {
            word: 'ameliorate',
            mnemonic: 'To make something better',
            synonyms: 'Improve, Ease, Rectify, Alleviate',
            hint: 'Making something less bad',
            positivity: 'Positive',
            sentence: 'The government tried to <u>ameliorate</u> the effects of the disaster by providing aid to affected families.',
            image: './assets/images/flashcards/Others/kharap valo.jpeg'
        },
        {
            word: 'derivative',
            mnemonic: 'Imitative of someone else’s work and usually disapproved of as unoriginal',
            synonyms: 'Imitative, Copied, Unoriginal, Borrowed',
            hint: 'Reijon er Design Style',
            positivity: 'Negative',
            sentence: 'The artist\'s new work was criticized for being too <u>derivative</u> of his earlier, more famous pieces.',
            image: './assets/images/flashcards/Others/derivative.webp'
        },
        {
            word: 'deft',
            mnemonic: 'Skillful and quick in movement or action',
            synonyms: 'Skillful, Nimble, Agile, Adroit',
            hint: 'messi',
            positivity: 'Positive',
            sentence: 'With a <u>deft</u> motion, the chef chopped the vegetables at lightning speed.',
            image: './assets/images/flashcards/Others/deft.gif'
        },
        {
            word: 'audacious',
            mnemonic: 'Showing a willingness to take surprisingly bold risks',
            synonyms: 'Bold, Daring, Valiant,Impudent,Intrepid',
            hint: 'Bold and willing to take risks',
            positivity: 'Positive',
            sentence: 'His <u>audacious</u> plan to start his own business surprised everyone, but it turned out to be a huge success.',
            image: './assets/images/flashcards/Others/bold.jpeg'
        },
        {
            word: 'ambivalent',
            mnemonic: 'Having mixed feelings or contradictory ideas about something',
            synonyms: 'Uncertain, Wavering,Irresoulute,Equivocal',
            hint: 'Ammu kno decision near somoy',
            positivity: 'Neutral',
            sentence: 'She felt <u>ambivalent</u> about moving to a new city; she was excited but also nervous about the change.',
            image: './assets/images/flashcards/Others/not sure.gif'
        },
        {
            word: 'contrite',
            mnemonic: 'Feeling or expressing remorse or penitence',
            synonyms: 'Remorseful, Apologetic, Penitent,Rueful',
            hint: 'Feeling sorry',
            positivity: 'Positive',
            sentence: 'After realizing the harm he had caused, he became deeply <u>contrite</u> and apologized sincerely.',
            image: './assets/images/flashcards/Others/sorry.jpg'
        },
        {
            word: 'desiccate',  
            mnemonic: 'To remove moisture from something, usually to preserve it.',  
            synonyms: 'Dry out, Deplete, Dehydrate, Parch',  
            hint: 'What happens when food is dried to preserve it.',  
            positivity: 'Neutral',  
            sentence: '"The <u>desiccated</u> fruits were packed for long-term storage."', 
            image: './assets/images/flashcards/Others/desiccate.jpg'  
        },

        {
            word: 'adulterate',
            mnemonic: 'To make something impure by adding inferior substances',
            synonyms: 'Degrade, Debase, Spoil',
            hint: 'Adding something that worsens the quality',
            positivity: 'Negative',
            sentence: 'The company was fined heavily for adulterating its products with harmful chemicals.',
            image: './assets/images/flashcards/Others/adulterate.webp'
        },
        {
            word: 'advocate',
            mnemonic: 'To support or recommend publicly',
            synonyms: 'Support, Endorse, Champion',
            hint: 'Someone who speaks on behalf of something',
            positivity: 'Positive',
            sentence: 'She has always been an advocate for equal rights and justice.',
            image: './assets/images/flashcards/Others/support.gif'
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
            synonyms: 'Antiquated,Archaic, Obsolete',
            hint: 'Out of place in time',
            positivity: 'Neutral',
            sentence: 'Using a typewriter today feels anachronistic in an age of computers.',
            image: './assets/images/flashcards/Others/Anachronistic.gif'
        },
        {
            word: 'avaricious',
            mnemonic: 'Having or showing extreme greed for wealth',
            synonyms: 'Greedy, Acquisitive, Covetous,Rapacious',
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
            image: './assets/images/flashcards/Others/harmless.gif'
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
            synonyms: 'Aspersions,Denigartion,Defamation, Libel,calumnious(n)',
            hint: 'Damaging someone’s reputation with lies',
            positivity: 'Negative',
            sentence: 'He suffered from the calumny spread by his former colleagues.',
            image: './assets/images/flashcards/Others/false aquision.gif'
        },
        {
            word: 'candid',
            mnemonic: 'Truthful and straightforward',
            synonyms: 'Blunt, Frank, Open',
            hint: 'Someone who doesn’t hide their thoughts',
            positivity: 'Positive',
            sentence: 'She appreciated his candid feedback on her performance.',
            image: './assets/images/flashcards/Others/Candid.gif'
        },
        {
            word: 'castigate',
            mnemonic: 'To reprimand someone severely',
            synonyms: 'Rebuke,Chide, Reprimand, Castigation(n)',
            hint: 'Harsh criticism or punishment',
            positivity: 'Negative',
            sentence: 'The manager did not hesitate to castigate the team for missing the deadline.',
            image: './assets/images/flashcards/Others/boka.gif'
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
            image: './assets/images/flashcards/Others/diificulat to understand.gif'
        },
        {
            word: 'covet',
            mnemonic: 'To yearn to possess something',
            synonyms: 'Desire, Envy, Crave',
            hint: 'Something you wish was yours',
            positivity: 'Negative',
            sentence: 'He couldn’t help but covet his neighbor’s new car.',
            image: './assets/images/flashcards/Others/I wish.gif'
        },
        {
            word: 'craven',
            mnemonic: 'Lacking in courage, cowardly',
            synonyms: 'Cowardly, Timid, Fearful',
            hint: 'Afraid to take risks',
            positivity: 'Negative',
            sentence: 'His craven behavior during the crisis disappointed his team.',
            image: './assets/images/flashcards/Others/Coward.gif'
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
            image: './assets/images/flashcards/Others/not sure.gif'
        },
        {
            word: 'diatribe',
            mnemonic: 'A forceful and bitter verbal attack',
            synonyms: 'Tirade, Rant, Condemnation,Harangue, Invective',
            hint: 'Harsh and lengthy criticism',
            positivity: 'Negative',
            sentence: 'The politician launched into a diatribe against the media.',
            image: './assets/images/flashcards/Others/gali dea.gif'
        },
        {
            word: 'ingenuous',
            mnemonic: 'Innocent and unsuspecting',
            synonyms: 'Naive, Innocent, Trusting',
            hint: 'Someone who is too trusting or unaware',
            positivity: 'Positive',
            sentence: 'Her ingenuous nature made it easy for people to take advantage of her.',
            image: './assets/images/flashcards/Others/harmless.gif'
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
            image: './assets/images/flashcards/Others/kharap valo.jpeg'  
        },
        {
            word: 'arcane',
            mnemonic: 'Known or understood by very few people',
            synonyms: 'Mysterious, Esoteric, Obscure, Enigmatic',
            hint: 'what\'s happened behind the revolution',
            positivity: 'Neutral',
            sentence: 'The professor\'s lecture on the <u>arcane</u> rituals of ancient civilizations left the students puzzled.',
            image: './assets/images/flashcards/Others/Secrect.gif'
        },
        {
            word: 'canonize',
            mnemonic: 'Officially declare someone a saint, or regard someone highly',
            synonyms: 'Deify, Idolize, Sanctify, Glorify',
            hint: 'Hzt Muhammad Sallahu Alaihi Oa Sallam',
            positivity: 'Positive',
            sentence: 'The critics practically <u>canonized</u> her after the performance, calling her one of the greatest of all time.',
            image: './assets/images/flashcards/Others/deify.webp'
        },
        {
            word: 'arduous',
            mnemonic: 'Involving or requiring strenuous effort; difficult and tiring',
            synonyms: 'Difficult, Laborious, Onerous, Grueling',
            hint: 'Something very difficult',
            positivity: 'Negative',
            sentence: 'Climbing the mountain was an <u>arduous</u> task, but the view from the top made it worth the effort.',
            image: './assets/images/flashcards/Others/arduous.webp'
        },
        {
            word: 'Equivocate',   
            mnemonic: 'To use ambiguous language to conceal the truth.',   
            synonyms: 'Prevaricate, Hedge',  
            hint: 'To be deliberately vague',  
            positivity: 'Negative',  
            sentence: '"Politicians often equivocate during debates."', 
            image: './assets/images/flashcards/Others/ulta palta kotha.gif'   
        },
        {
            word: 'Abjure',   
            mnemonic: 'To renounce a belief, cause, or claim.',   
            synonyms: 'Renounce, Reject',  
            hint: 'To give up',  
            positivity: 'Negative',  
            sentence: '"He decided to abjure his former beliefs."', 
            image: './assets/images/flashcards/Others/No.gif'   
        },
        {
            word: 'burgeon',  
            mnemonic: 'To grow or increase rapidly.',  
            synonyms: 'Flourish, Expand, Thrive',  
            hint: 'The rapid growth or flourishing of something.',  
            positivity: 'Positive',  
            sentence: '"The small startup began to <u>burgeon</u> after its new product launch."', 
            image: './assets/images/flashcards/Others/grow rapidly.gif'  
        },
        {
            word: 'Anomalous',
            mnemonic: 'Deviating from what is normal or expected',
            synonyms: 'Abnormal, Irregular, Atypical',
            hint: 'Something unusual or out of the ordinary',
            positivity: 'Neutral',
            sentence: 'The scientist was puzzled by the <u>Anomalous</u> results of the experiment.',
            image: './assets/images/flashcards/Others/abnormal.gif'
        },
        {
            word: 'Antipathy',
            mnemonic: 'A strong feeling of aversion or dislike',
            synonyms: 'Hostility, Animosity, Aversion',
            hint: 'A strong negative feeling towards something',
            positivity: 'Negative',
            sentence: 'Her <u>Antipathy</u> toward the new policy was clear in her tone.',
            image: './assets/images/flashcards/Others/hate.gif'
        },
        {
            word: 'Artless',
            mnemonic: 'Without guile or deception; natural and simple',
            synonyms: 'Naive, Innocent, Sincere',
            hint: 'Someone honest and without pretense',
            positivity: 'Positive',
            sentence: 'His <u>Artless</u> response made everyone trust him immediately.',
            image: './assets/images/flashcards/Others/abbu.png'
        },
        {
            word: 'Ascetic',
            mnemonic: 'Very Strick about Life and Live with No Luxury',
            synonyms: 'Austere, Self-Denying, Disciplined',
            hint: 'Lives a minimalistic life',
            positivity: 'Neutral',
            sentence: 'He adopted an <u>Ascetic</u> lifestyle, giving up all luxuries.',
            image: './assets/images/flashcards/Others/monk.jpg'
        },
        {
            word: 'Assuage',
            mnemonic: 'To make an unpleasant feeling less intense',
            synonyms: 'Relieve, Ease, Mitigate',
            hint: 'Calming or reducing someone\'s distress',
            positivity: 'Positive',
            sentence: 'He tried to <u>Assuage</u> her anxiety with comforting words.',
            image: './assets/images/flashcards/Others/kharap valo.jpeg'
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
            image: './assets/images/flashcards/Others/rural peace.gif'
        },
        {
            word: 'Cacophonous',
            mnemonic: 'Extremely nosiy, discordant sound',
            synonyms: 'Harsh, Jarring, Discordant',
            hint: 'Unpleasant noises clashing together',
            positivity: 'Negative',
            sentence: 'The <u>Cacophonous</u> sounds from the construction site made it hard to concentrate.',
            image: './assets/images/flashcards/Others/noisy.gif'
        },
        {
            word: 'Censure',
            mnemonic: 'To express severe disapproval or criticize',
            synonyms: 'Criticize, Reprimand, Condemn',
            hint: 'A strong formal disapproval',
            positivity: 'Negative',
            sentence: 'The official faced <u>Censure</u> for his controversial actions.',
            image: './assets/images/flashcards/Others/boka.gif'
        },
        {
            word: 'Chicanery',
            mnemonic: 'The use of trickery to achieve a purpose',
            synonyms: 'Deception, Fraud, Trickery',
            hint: 'Deceptive strategies or manipulation',
            positivity: 'Negative',
            sentence: 'The company was accused of financial <u>Chicanery</u> to avoid taxes.',
            image: './assets/images/flashcards/Others/fraud trick.gif'
        },
        {
            word: 'Coalesce',
            mnemonic: 'To come together to form one whole',
            synonyms: 'Unite, Merge, Combine',
            hint: 'Things blending or coming together',
            positivity: 'Positive',
            sentence: 'The various departments <u>Coalesced</u> to work on the joint project.',
            image: './assets/images/flashcards/Others/unite.gif'
        },
        {
            word: 'Cogent',
            mnemonic: 'an argument or case) clear, logical, and convincing.',
            synonyms: 'Convincing, Compelling, Persuasive',
            hint: 'An argument that makes strong sense',
            positivity: 'Positive',
            sentence: 'Her <u>Cogent</u> arguments swayed many in the audience.',
            image: './assets/images/flashcards/Others/thats true.gif'
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
            image: './assets/images/flashcards/Others/abound.webp'
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
            mnemonic: 'Respectful submission to others judgment',
            synonyms: 'Respect, Regard, Obedience',
            hint: 'Showing respect or yielding to others',
            positivity: 'Positive',
            sentence: 'In <u>Deference</u> to his mentor, he accepted the advice given.',
            image: './assets/images/flashcards/Others/show respect.gif'
        },
        {
            word: 'Desultory',
            mnemonic: 'Lacking a plan, purpose, or enthusiasm',
            synonyms: 'Aimless, Erratic, Unfocused',
            hint: 'Something scattered or lacking direction',
            positivity: 'Negative',
            sentence: 'The meeting was long and <u>Desultory</u>, with no clear outcome.',
            image: './assets/images/flashcards/Others/aim less.gif'
        },
        {
            word: 'Diffident',
            mnemonic: 'Lacking self-confidence',
            synonyms: 'Shy, Timid, Hesitant',
            hint: 'Someone unsure of themselves',
            positivity: 'Negative',
            sentence: 'Her <u>Diffident</u> nature made her avoid speaking up in meetings.',
            image: './assets/images/flashcards/Others/lamia.png'
        },
        {
            word: 'Dilatory',
            mnemonic: 'Slow to act; intending to delay',
            synonyms: 'Delaying, Procrastinating, Sluggish',
            hint: 'Someone who takes their time, maybe too much',
            positivity: 'Negative',
            sentence: 'The <u>Dilatory</u> tactics of the lawyer prolonged the case unnecessarily.',
            image: './assets/images/flashcards/Others/slow.gif'
        },
        {
            word: 'Polarize',
            mnemonic: 'To divide into sharply opposing groups or opinions',
            synonyms: 'Divide, Split, Separate',
            hint: 'Think of creating two distinct sides',
            positivity: 'Negative',
            sentence: 'The issue of climate change tends to <u>Polarize</u> public opinion.',
            image: './assets/images/flashcards/Others/divide opposite.gif'
        },
        {
            word: 'Prodigal',
            mnemonic: 'Spending money or resources recklessly',
            synonyms: 'Wasteful, Extravagant, Spendthrift',
            hint: 'Excessive, often wasteful generosity',
            positivity: 'Negative',
            sentence: 'His <u>Prodigal</u> spending habits quickly drained his inheritance.',
            image: './assets/images/flashcards/Others/spendthrift.gif'
        },
        {
            word: 'Verbose',
            mnemonic: 'Using more words than necessary',
            synonyms: 'Wordy, Lengthy, Long-winded',
            hint: 'Overly wordy or too detailed',
            positivity: 'Negative',
            sentence: 'The instructions were so <u>Verbose</u> that most people lost interest before finishing.',
            image: './assets/images/flashcards/Others/loquacious.gif'
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
        image: './assets/images/flashcards/Others/punctilious.jpg'
    },
    {
        word: 'precipitate',  
        mnemonic: 'To cause something to happen suddenly or prematurely.',  
        synonyms: 'Hasten, Trigger, Accelerate',  
        hint: 'Causing something to happen quickly, often unexpectedly.',  
        positivity: 'Neutral',  
        sentence: '"The manager’s harsh words <u>precipitated</u> an immediate resignation."', 
        image: './assets/images/flashcards/Others/suddenly.gif'  
    },
    {
        word: 'enervate',
        mnemonic: 'To weaken or drain energy',
        synonyms: 'weaken, sap,Exhaust',
        hint: 'To weaken',
        positivity: 'Negative',
        sentence: '"The long workout enervated him, leaving him too tired to move."',
        image: './assets/images/flashcards/Others/drain enerry.gif'
    },
    {
        word: 'opaque',
        mnemonic: 'Not transparent; difficult to understand.',
        synonyms: 'Obscure, Unclear, Impenetrable',
        hint: 'Think of something hard to see through.',
        positivity: 'Negative',
        sentence: 'The instructions were so opaque that nobody could figure out how to assemble the product.',
        image: './assets/images/flashcards/Others/diificulat to understand.gif'
    },
    {
        word: 'Abstain',
        mnemonic: 'To choose not to do or have something',
        synonyms: 'Refrain, Withhold, Forgo,Refrain',
        hint: 'To avoid participating',
        positivity: 'Neutral',
        sentence: 'He decided to <u>Abstain</u> from voting on the proposal.',
        image: './assets/images/flashcards/Others/Avoid Something.gif'
    },
    {
        word: 'Approbation',
        mnemonic: 'Appreciation towards someone',
        synonyms: 'Approval, Endorsement, Admiration',
        hint: 'Formal praise or acceptance',
        positivity: 'Positive',
        sentence: 'The artist\'s new work received widespread <u>Approbation</u>.',
        image: './assets/images/flashcards/Others/praise.gif'
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
        image: './assets/images/flashcards/Others/thats true.gif'
    },
    {
        word: 'Disparate',
        mnemonic: 'Essentially different in kind',
        synonyms: 'Different, Distinct, Unalike',
        hint: 'Things that don’t go together easily',
        positivity: 'Neutral',
        sentence: 'The conference attracted experts from <u>Disparate</u> fields.',
        image: './assets/images/flashcards/Others/different.gif'
    },
    {
        word: 'Emulate',
        mnemonic: 'To imitate or try to match',
        synonyms: 'Imitate, Copy, Mirror',
        hint: 'Trying to equal or surpass',
        positivity: 'Neutral',
        sentence: 'She tried to <u>Emulate</u> her mentor’s work ethic.',
        image: './assets/images/flashcards/Others/Copy something.gif'
    },
    {
        word: 'Ephemeral',
        mnemonic: 'Lasting for a very short time',
        synonyms: 'Short-lived, Fleeting, Transitory',
        hint: 'Think of something temporary',
        positivity: 'Neutral',
        sentence: 'The beauty of the sunset was <u>Ephemeral</u>, fading within minutes.',
        image: './assets/images/flashcards/Others/lasts for a shorttime.gif'
    },
    {
        word: 'Fervid',
        mnemonic: 'Intensely enthusiastic or passionate',
        synonyms: 'Passionate, Ardent, Fervent',
        hint: 'Showing strong feelings or passion',
        positivity: 'Positive',
        sentence: 'His <u>Fervid</u> speeches inspired many to join the movement.',
        image: './assets/images/flashcards/Others/passionate worker.gif'
    },
    {
        word: 'Incendiary',
        mnemonic: 'Intended to cause fire or stir up conflict',
        synonyms: 'Inflammatory, Provocative, Seditious',
        hint: 'Setting something ablaze, literally or figuratively',
        positivity: 'Negative',
        sentence: 'The politician’s <u>Incendiary</u> remarks sparked protests.',
        image: './assets/images/flashcards/Others/Jamela lagay deya.gif'
    },
    {
        word: 'Inimical',
        mnemonic: 'Tending to obstruct or harm',
        synonyms: 'Hostile, Adverse, Harmful',
        hint: 'Something that works against you',
        positivity: 'Negative',
        sentence: 'These policies are <u>Inimical</u> to the country’s growth.',
        image: './assets/images/flashcards/Others/something thats harmful.gif'
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
        image: './assets/images/flashcards/Others/Give Energy.gif'
    },
    {
        word: 'Mitigate',
        mnemonic: 'To make less severe or painful',
        synonyms: 'Alleviate, Reduce, Lessen',
        hint: 'To soften the impact',
        positivity: 'Positive',
        sentence: 'New policies were introduced to <u>Mitigate</u> the effects of inflation.',
        image: './assets/images/flashcards/Others/kharap valo.jpeg'
    },
    {
        word: 'Obsolete',
        mnemonic: 'No longer in use or out of date',
        synonyms: 'Outdated, Archaic, Old-fashioned',
        hint: 'Something no longer relevant',
        positivity: 'Neutral',
        sentence: 'Fax machines are becoming <u>Obsolete</u> in modern offices.',
        image: './assets/images/flashcards/Others/Anachronistic.gif'
    },
    {
        word: 'Paradigmatic',
        mnemonic: 'Serving as a typical example of something',
        synonyms: 'Exemplary, Typical, Standard',
        hint: 'A perfect example or model',
        positivity: 'Neutral',
        sentence: 'Her actions were <u>Paradigmatic</u> of leadership qualities.',
        image: './assets/images/flashcards/Others/perfect example.gif'
    },
    {
        word: 'Pedantic',
        mnemonic: 'Overly concerned with minor details or rules',
        synonyms: 'Precise, Meticulous, Fussy',
        hint: 'Someone who focuses too much on little things',
        positivity: 'Negative',
        sentence: 'His <u>Pedantic</u> approach often slowed down the progress of the project.',
        image: './assets/images/flashcards/Others/punctilious.jpg'
    },
    {
        word: 'Placid',
        mnemonic: 'Not easily upset or excited; calm',
        synonyms: 'Calm, Tranquil, Peaceful',
        hint: 'Think of a serene lake',
        positivity: 'Positive',
        sentence: 'The <u>Placid</u> nature of the village attracted many visitors.',
        image: './assets/images/flashcards/Others/keep clam.webp'
    },
    {
        word: 'Polemical',
        mnemonic: 'Involving strong arguments for or against something',
        synonyms: 'Controversial, Argumentative, Disputatious',
        hint: 'Strong debates',
        positivity: 'Negative',
        sentence: 'His <u>Polemical</u> articles often stirred up public debate.',
        image: './assets/images/flashcards/Others/Controversial arguments.gif'
    },
    {
        word: 'Profundity',
        mnemonic: 'Great depth of knowledge or thought',
        synonyms: 'Depth, Insight, Wisdom',
        hint: 'Deep thinking or understanding',
        positivity: 'Positive',
        sentence: 'The <u>Profundity</u> of her speech left the audience in awe.',
        image: './assets/images/flashcards/Others/deep knowledge.gif'
    },
    {
        word: 'Prophetic',
        mnemonic: 'Accurately describing or predicting the future',
        synonyms: 'Predictive, Prescient, Foretelling',
        hint: 'Someone who can see the future',
        positivity: 'Neutral',
        sentence: 'Her <u>Prophetic</u> words about the economic downturn proved true.',
        image: './assets/images/flashcards/Others/describe future.gif'
    },
    {
        word: 'Prudent',
        mnemonic: 'Acting with care and thought for the future',
        synonyms: 'Wise, Sensible, Cautious',
        hint: 'Being careful and wise',
        positivity: 'Positive',
        sentence: 'He made a <u>Prudent</u> decision to save money for emergencies.',
        image: './assets/images/flashcards/Others/deep knowledge.gif'
    },
    {
        word: 'Recondite',
        mnemonic: 'Little known or difficult to understand',
        synonyms: 'Obscure, Complex, Abstruse',
        hint: 'Something that’s hard to grasp',
        positivity: 'Neutral',
        sentence: 'The professor’s <u>Recondite</u> explanation confused the students.',
        image: './assets/images/flashcards/Others/diificulat to understand.gif'
    },
    {
        word: 'Scrupulous',
        mnemonic: 'Very concerned to avoid doing wrong; meticulous',
        synonyms: 'Ethical, Meticulous, Honest',
        hint: 'A person with strong moral principles',
        positivity: 'Positive',
        sentence: 'She was <u>Scrupulous</u> in ensuring fair treatment for all employees.',
        image: './assets/images/flashcards/Others/punctilious.jpg'
    },
    {
        word: 'Tranquil',
        mnemonic: 'Free from disturbance; calm',
        synonyms: 'Peaceful, Serene, Placid',
        hint: 'A quiet, peaceful environment',
        positivity: 'Positive',
        sentence: 'The <u>Tranquil</u> setting of the park makes it perfect for relaxation.',
        image: './assets/images/flashcards/Others/rural peace.gif'
    },
    {
        word: 'Vacillate',
        mnemonic: 'To alternate between different opinions or actions',
        synonyms: 'Waver, Hesitate, Fluctuate',
        hint: 'When you can\'t make up your mind',
        positivity: 'Neutral',
        sentence: 'She tended to <u>Vacillate</u> when faced with difficult choices.',
        image: './assets/images/flashcards/Others/not sure.gif'
    },
    {
        word: 'Garrulous',
        mnemonic: 'Excessively talkative, especially on trivial matters',
        synonyms: 'Talkative, Chatty, Loquacious',
        hint: 'Someone who can’t stop talking',
        positivity: 'Negative',
        sentence: 'The <u>Garrulous</u> neighbor kept everyone up with his endless stories.',
        image: './assets/images/flashcards/Others/loquacious.gif'
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
            image: './assets/images/flashcards/Others/unfriendly.gif'
        },
        {
            word: 'Clangor',
            mnemonic: 'A loud, resonant sound, typically a ringing noise',
            synonyms: 'Clamor, Racket, Din',
            hint: 'Think of a loud, metal-like noise',
            positivity: 'Neutral',
            sentence: 'The <u>Clangor</u> of the bells echoed through the town.',
            image: './assets/images/flashcards/Others/noisy.gif'
        },
        {
            word: 'Conventional',
            mnemonic: 'Based on accepted norms or standards',
            synonyms: 'Traditional, Customary, Usual',
            hint: 'Following common ways or practices',
            positivity: 'Neutral',
            sentence: 'She wore a <u>Conventional</u> outfit to the formal dinner.',
            image: './assets/images/flashcards/Others/usual standard.gif'
        },
        {
            word: 'Debunk',
            mnemonic: 'To expose the falseness of a belief or idea',
            synonyms: 'Disprove, Refute, Invalidate',
            hint: 'Revealing the truth behind a myth',
            positivity: 'Positive',
            sentence: 'Scientists worked to <u>Debunk</u> the myth about the health benefits of fad diets.',
            image: './assets/images/flashcards/Others/expose truth.gif'
        },
        {
            word: 'Diminutive',
            mnemonic: 'Extremely small in size',
            synonyms: 'Tiny, Minuscule, Miniature',
            hint: 'Something noticeably small',
            positivity: 'Neutral',
            sentence: 'Despite his <u>Diminutive</u> stature, he commanded attention in the room.',
            image: './assets/images/flashcards/Others/small in size.gif'
        },
        {
            word: 'Discernible',
            mnemonic: 'Able to be seen, recognized, or understood',
            synonyms: 'Visible, Detectable, Observable',
            hint: 'Something that can be noticed or sensed',
            positivity: 'Neutral',
            sentence: 'There was a <u>Discernible</u> shift in his attitude after the promotion.',
            image: './assets/images/flashcards/Others/able to understand.gif'
        },
        {
            word: 'Enigmatic',
            mnemonic: 'Difficult to interpret or understand',
            synonyms: 'Mysterious, Puzzling, Cryptic',
            hint: 'Something hard to figure out',
            positivity: 'Neutral',
            sentence: 'Her <u>Enigmatic</u> smile left everyone wondering what she was thinking.',
            image: './assets/images/flashcards/Others/diificulat to understand.gif'
        },
        {
            word: 'Estranged',
            mnemonic: 'No longer close or affectionate; alienated',
            synonyms: 'Separated, Alienated, Detached',
            hint: 'A relationship that has grown distant',
            positivity: 'Negative',
            sentence: 'After years of estrangement, the siblings finally reconciled.',
            image: './assets/images/flashcards/Others/live far away.gif'
        },
        {
            word: 'Extravagant',
            mnemonic: 'Exceeding what is reasonable or appropriate; excessive',
            synonyms: 'Lavish, Excessive, Indulgent',
            hint: 'Over-the-top spending or behavior',
            positivity: 'Negative',
            sentence: 'His <u>Extravagant</u> spending habits quickly drained his savings.',
            image: './assets/images/flashcards/Others/spendthrift.gif'
        },
        {
            word: 'Fanciful',
            mnemonic: 'Overly imaginative and unrealistic',
            synonyms: 'Whimsical, Imaginative, Unrealistic',
            hint: 'Impractical or overly creative',
            positivity: 'Neutral',
            sentence: 'The architect’s designs were beautiful but a bit too <u>Fanciful</u> for practical use.',
            image: './assets/images/flashcards/Others/impossible.png'
        },
        {
            word: 'Frivolous',
            mnemonic: 'Not having any serious purpose or value',
            synonyms: 'Trivial, Silly, Unimportant',
            hint: 'Lacking seriousness',
            positivity: 'Negative',
            sentence: 'She spent money on <u>Frivolous</u> purchases rather than saving for essentials.',
            image: './assets/images/flashcards/Others/not serious.gif'
        },
        {
            word: 'Heterogeneous',
            mnemonic: 'Composed of different or diverse elements',
            synonyms: 'Diverse, Varied, Mixed',
            hint: 'A mix of different kinds',
            positivity: 'Neutral',
            sentence: 'The neighborhood is known for its <u>Heterogeneous</u> community.',
            image: './assets/images/flashcards/Others/different.gif'
        },
        {
            word: 'Imperious',
            mnemonic: 'Assuming power or authority without justification',
            synonyms: 'Domineering, Overbearing, Commanding',
            hint: 'Acting as if they have more power',
            positivity: 'Negative',
            sentence: 'His <u>Imperious</u> manner made him unpopular with his colleagues.',
            image: './assets/images/flashcards/Others/dominating over someone.jpg'
        },
        {
            word: 'Impertinent',
            mnemonic: 'Not showing proper respect; rude',
            synonyms: 'Disrespectful, Rude, Insolent',
            hint: 'Someone who is improperly bold',
            positivity: 'Negative',
            sentence: 'The student\'s <u>Impertinent</u> question surprised the teacher.',
            image: './assets/images/flashcards/Others/rude behave.jpg'
        },
        {
            word: 'Invasive',
            mnemonic: 'Tending to intrude others privacy',
            synonyms: 'Intrusive, Encroaching, Meddlesome',
            hint: 'Pushing into places unwanted',
            positivity: 'Negative',
            sentence: 'The new laws were seen as <u>Invasive</u> by many citizens.',
            image: './assets/images/flashcards/Others/intrude someone.gif'
        },
        {
            word: 'Irresolute',
            mnemonic: 'Showing or feeling hesitancy; uncertain',
            synonyms: 'Hesitant, Undecided, Wavering',
            hint: 'Unable to decide or act firmly',
            positivity: 'Negative',
            sentence: 'She remained <u>Irresolute</u>, unable to make a final choice.',
            image: './assets/images/flashcards/Others/not sure.gif'
        },
        {
            word: 'Laudable',
            mnemonic: 'Worthy of praise or commendation',
            synonyms: 'Praiseworthy, Commendable, Admirable',
            hint: 'Deserving recognition or admiration',
            positivity: 'Positive',
            sentence: 'Her commitment to charity work is truly <u>Laudable</u>.',
            image: './assets/images/flashcards/Others/praise.gif'
        },
        {
            word: 'Lax',
            mnemonic: 'Not sufficiently strict or severe',
            synonyms: 'Careless, Negligent, Relaxed',
            hint: 'Lacking strictness or discipline',
            positivity: 'Negative',
            sentence: 'The <u>Lax</u> security allowed unauthorized access to the building.',
            image: './assets/images/flashcards/Others/careless.gif'
        },
        {
            word: 'Marginalize',
            mnemonic: 'To treat someone or something as unimportant',
            synonyms: 'Sideline, Trivialize, Overlook',
            hint: 'Making something or someone less relevant',
            positivity: 'Negative',
            sentence: 'Certain groups feel <u>Marginalized</u> by the current policies.',
            image: './assets/images/flashcards/Others/negligent.png'
        },
        {
            word: 'Panache',
            mnemonic: 'Flamboyant confidence of style or manner',
            synonyms: 'Flair, Style, Charisma',
            hint: 'Stylish, confident presentation',
            positivity: 'Positive',
            sentence: 'She performed with great <u>Panache</u>, captivating the audience.',
            image: './assets/images/flashcards/Others/Style.gif'
        },
        {
            word: 'Plodding',
            mnemonic: 'Slow and laborious movement',
            synonyms: 'Trudging, Lumbering, Slow',
            hint: 'Moving along slowly and steadily',
            positivity: 'Neutral',
            sentence: 'His <u>Plodding</u> approach to work got the job done, albeit slowly.',
            image: './assets/images/flashcards/Others/slow.gif'
        },
        {
            word: 'Prosaic',
            mnemonic: 'Lacking poetic beauty; commonplace or dull',
            synonyms: 'Mundane, Ordinary, Unimaginative',
            hint: 'Plain or boring',
            positivity: 'Negative',
            sentence: 'Her explanation was thorough but <u>Prosaic</u>, lacking creativity.',
            image: './assets/images/flashcards/Others/boring.gif'
        },
        {
            word: 'Remedial',
            mnemonic: 'Intended to improve or correct',
            synonyms: 'Corrective, Healing, Therapeutic',
            hint: 'Something to fix or improve',
            positivity: 'Positive',
            sentence: 'He attended <u>Remedial</u> classes to catch up with his peers.',
            image: './assets/images/flashcards/Others/cure something.gif'
        },
        {
            word: 'Restive',
            mnemonic: 'Unable to remain still, difficult to control',
            synonyms: 'Restless, Fidgety, Uneasy',
            hint: 'Restless and hard to manage',
            positivity: 'Negative',
            sentence: 'The <u>Restive</u> crowd grew more impatient as the delay continued.',
            image: './assets/images/flashcards/Others/cant remain still.gif'
        },
        {
            word: 'Sporadic',
            mnemonic: 'Occurring at irregular intervals; scattered',
            synonyms: 'Occasional, Intermittent, Infrequent',
            hint: 'Random or irregular occurrences',
            positivity: 'Neutral',
            sentence: 'The city experienced <u>Sporadic</u> power outages throughout the day.',
            image: './assets/images/flashcards/Others/random.gif'
        },
        {
            word: 'Stigmatize',
            mnemonic: 'To mark with disgrace or disapproval',
            synonyms: 'Brand, Label, Condemn',
            hint: 'A negative label attached to someone',
            positivity: 'Negative',
            sentence: 'Society tends to <u>Stigmatize</u> those with mental health issues.',
            image: './assets/images/flashcards/Others/No.gif'
        },
        {
            word: 'Undermine',
            mnemonic: 'To weaken or damage something gradually',
            synonyms: 'Weaken, Sabotage, Erode,Subvert',
            hint: 'Slowly breaking down or lessening strength',
            positivity: 'Negative',
            sentence: 'The scandal served to <u>Undermine</u> his authority.',
            image: './assets/images/flashcards/Others/undermine.jpg'
        },
        {
            word: 'Utterly',
            mnemonic: 'Completely and without qualification',
            synonyms: 'Totally, Entirely, Absolutely',
            hint: 'Fully or completely',
            positivity: 'Neutral',
            sentence: 'She was <u>Utterly</u> exhausted after the long journey.',
            image: './assets/images/flashcards/Others/Absolutely.gif'
        },
        {
            word: 'Weary',
            mnemonic: 'Feeling tired or worn out',
            synonyms: 'Tired, Exhausted, Fatigued',
            hint: 'A state of tiredness or fatigue',
            positivity: 'Negative',
            sentence: 'He felt <u>Weary</u> after working long hours without a break.',
            image: './assets/images/flashcards/Others/drain enerry.gif'
        },
        {
            word: 'Zealous',
            mnemonic: 'Showing great energy or enthusiasm in pursuit of a cause',
            synonyms: 'Passionate, Fervent, Devoted',
            hint: 'Enthusiastically committed',
            positivity: 'Positive',
            sentence: 'She was <u>Zealous</u> in her efforts to promote the environmental campaign.',
            image: './assets/images/flashcards/Others/passionate worker.gif'
        }
        

        

    ],
    //Set6
    [
        {
            word: 'Admonish',
            mnemonic: 'To warn or reprimand someone firmly',
            synonyms: 'Reprimand, Chide, Rebuke',
            hint: 'A gentle warning or correction',
            positivity: 'Neutral',
            sentence: 'The teacher <u>Admonished</u> the student for not completing his homework.',
            image: './assets/images/flashcards/Others/boka.gif'
        },
        {
            word: 'Aesthetic',
            mnemonic: 'Concerned with beauty or the appreciation of beauty',
            synonyms: 'Artistic, Tasteful, Elegant',
            hint: 'Relates to appearance and style',
            positivity: 'Positive',
            sentence: 'The <u>Aesthetic</u> appeal of the building attracted many visitors.',
            image: './assets/images/flashcards/Others/Style.gif'
        },
        {
            word: 'Affectation',
            mnemonic: 'Behavior, speech, or writing that is artificial',
            synonyms: 'Pretension, Artificiality, Insincerity',
            hint: 'Trying to impress without being genuine',
            positivity: 'Negative',
            sentence: 'His accent seemed like an <u>Affectation</u> rather than natural.',
            image: './assets/images/flashcards/Others/Showoff to impress.gif'
        },
        {
            word: 'Alleviate',
            mnemonic: 'To make suffering or a problem less severe',
            synonyms: 'Ease, Relieve, Mitigate',
            hint: 'Reducing pain or difficulty',
            positivity: 'Positive',
            sentence: 'She took painkillers to <u>Alleviate</u> her headache.',
            image: './assets/images/flashcards/Others/kharap valo.jpeg'
        },
        {
            word: 'Analogous',
            mnemonic: 'Comparable in certain respects',
            synonyms: 'Similar, Comparable, Alike',
            hint: 'Things that can be compared',
            positivity: 'Neutral',
            sentence: 'The architecture of the two buildings is <u>Analogous</u> in design.',
            image: './assets/images/flashcards/Others/same same comparable.gif'
        },
        {
            word: 'Bolster',
            mnemonic: 'To support or strengthen',
            synonyms: 'Reinforce, Support, Boost',
            hint: 'Providing extra strength',
            positivity: 'Positive',
            sentence: 'The success of his first project <u>Bolstered</u> his confidence.',
            image: './assets/images/flashcards/Others/give support.png'
        },
        {
            word: 'Chauvinistic',
            mnemonic: 'Showing excessive or prejudiced loyalty or support',
            synonyms: 'Biased, Nationalistic, Intolerant',
            hint: 'Think of extreme pride for a group or cause',
            positivity: 'Negative',
            sentence: 'His <u>Chauvinistic</u> views made him intolerant of other opinions.',
            image: './assets/images/flashcards/Others/biased person.webp'
        },
        {
            word: 'Connoisseur',
            mnemonic: 'An expert judge in matters of taste',
            synonyms: 'Expert, Aficionado, Specialist',
            hint: 'Knowledgeable about a specific area',
            positivity: 'Positive',
            sentence: 'She’s a <u>Connoisseur</u> of fine wines and knows all the best labels.',
            image: './assets/images/flashcards/Others/expert in food tasting.gif'
        },
        {
            word: 'Dissemble',
            mnemonic: 'To disguise or conceal true feelings or beliefs',
            synonyms: 'Pretend, Disguise, Feign',
            hint: 'Hiding one’s real intentions',
            positivity: 'Negative',
            sentence: 'He chose to <u>Dissemble</u> his intentions to avoid suspicion.',
            image: './assets/images/flashcards/Others/hide true feelings.gif'
        },
        {
            word: 'Dogged',
            mnemonic: 'Showing persistent determination',
            synonyms: 'Determined, Tenacious, Persistent',
            hint: 'Sticking with something, no matter what',
            positivity: 'Positive',
            sentence: 'Her <u>Dogged</u> pursuit of justice inspired everyone around her.',
            image: './assets/images/flashcards/Others/determind person.gif'
        },
        {
            word: 'Dupe',
            mnemonic: 'To deceive or trick someone',
            synonyms: 'Deceive, Trick, Hoodwink',
            hint: 'Fooling or misleading someone',
            positivity: 'Negative',
            sentence: 'He was <u>Duped</u> by a fake online advertisement.',
            image: './assets/images/flashcards/Others/fraud trick.gif'
        },
        {
            word: 'Empirical',
            mnemonic: 'Based on observation or experience rather than theory',
            synonyms: 'Experimental, Observed, Factual',
            hint: 'Directly based on real-world evidence',
            positivity: 'Neutral',
            sentence: 'The study is based on <u>Empirical</u> data collected over five years.',
            image: './assets/images/flashcards/Others/Empirical.gif'
        },
        {
            word: 'Engender',
            mnemonic: 'To cause or give rise to a feeling or situation',
            synonyms: 'Produce, Generate, Create',
            hint: 'To bring something into existence',
            positivity: 'Neutral',
            sentence: 'His harsh words <u>Engendered</u> resentment among the employees.',
            image: './assets/images/flashcards/Others/to cause something,jpg'
        },
        {
            word: 'Entitled',
            mnemonic: 'Believing oneself to be inherently deserving of privileges',
            synonyms: 'Privileged, Deserving, Self-important',
            hint: 'Expecting special treatment',
            positivity: 'Negative',
            sentence: 'She acted as if she was <u>Entitled</u> to special treatment.',
            image: './assets/images/flashcards/Others/self importance.gif'
        },
        {
            word: 'Pertinacious',
            mnemonic: 'Holding firmly to an opinion or course of action',
            synonyms: 'Persistent, Determined, Stubborn',
            hint: 'Not giving up on a belief',
            positivity: 'Neutral',
            sentence: 'His <u>Pertinacious</u> dedication to his research led to groundbreaking results.',
            image: './assets/images/flashcards/Others/determind person.gif'
        },
        {
            word: 'Presumptuous',
            mnemonic: 'Failing to observe the limits of what is appropriate',
            synonyms: 'Overconfident, Arrogant, Forward',
            hint: 'Acting without regard for boundaries',
            positivity: 'Negative',
            sentence: 'It was <u>Presumptuous</u> of him to assume he’d get the job.',
            image: './assets/images/flashcards/Others/overconfidently presumme.webp'
        },
        {
            word: 'Probity',
            mnemonic: 'The quality of having strong moral principles',
            synonyms: 'Integrity, Honesty, Uprightness',
            hint: 'Think of a very honest person',
            positivity: 'Positive',
            sentence: 'Her <u>Probity</u> made her a highly respected figure in the community.',
            image: './assets/images/flashcards/Others/strong moral.png'
        },
        {
            word: 'Proliferate',
            mnemonic: 'To increase rapidly in numbers',
            synonyms: 'Multiply, Grow, Expand',
            hint: 'Rapid growth or spread',
            positivity: 'Neutral',
            sentence: 'With the advent of technology, online businesses <u>Proliferate</u> quickly.',
            image: './assets/images/flashcards/Others/increasing rapidly.webp'
        },
        {
            word: 'Specious',
            mnemonic: 'Appearing to be true but actually false',
            synonyms: 'Misleading, Deceptive, False',
            hint: 'Looks good on the surface but isn’t real',
            positivity: 'Negative',
            sentence: 'The argument was <u>Specious</u>, as it lacked real evidence.',
            image: './assets/images/flashcards/Others/hide true feelings.jpg'
        },
        {
            word: 'Spurious',
            mnemonic: 'Not being what it purports to be; false or fake',
            synonyms: 'Fake, False, Counterfeit',
            hint: 'Think of something that pretends to be real',
            positivity: 'Negative',
            sentence: 'The document was revealed to be <u>Spurious</u> and had been forged.',
            image: './assets/images/flashcards/Others/hide true feelings.jpg'
        },
        {
            word: 'Subjective',
            mnemonic: 'Based on personal feelings or opinions',
            synonyms: 'Personal, Biased, Individual',
            hint: 'Different for each person',
            positivity: 'Neutral',
            sentence: 'Beauty is often considered a <u>Subjective</u> matter.',
            image: './assets/images/flashcards/Others/something that is personal.gif'
        },
        {
            word: 'Subvert',
            mnemonic: 'To undermine the power or authority of something',
            synonyms: 'Undermine, Destabilize, Disrupt',
            hint: 'Working to weaken authority',
            positivity: 'Negative',
            sentence: 'The group’s mission was to <u>Subvert</u> the government’s policies.',
            image: './assets/images/flashcards/Others/somonnoyok ra ja korse.jpg'
        },
        {
            word: 'Timorous',
            mnemonic: 'Showing or suffering from nervousness or fear',
            synonyms: 'Fearful, Timid, Apprehensive',
            hint: 'Lacking courage or confidence',
            positivity: 'Negative',
            sentence: 'He was <u>Timorous</u> when speaking in front of the large crowd.',
            image: './assets/images/flashcards/Others/daunting.jpg'
        },
        {
            word: 'Tortuous',
            mnemonic: 'Full of twists and turns; complicated',
            synonyms: 'Winding, Complex, Convoluted',
            hint: 'Think of something very complicated',
            positivity: 'Neutral',
            sentence: 'The road to the summit was <u>Tortuous</u>, with many sharp bends.',
            image: './assets/images/flashcards/Others/tortuous.jpg'
        },
        {
            word: 'Tractable',
            mnemonic: 'Easy to control or influence',
            synonyms: 'Manageable, Compliant, Malleable',
            hint: 'Easygoing and adaptable',
            positivity: 'Positive',
            sentence: 'The child was more <u>Tractable</u> after some gentle encouragement.',
            image: './assets/images/flashcards/Others/easy controllable.gif'
        },
        {
            word: 'Transient',
            mnemonic: 'Lasting for a short time',
            synonyms: 'Temporary, Fleeting, Short-lived',
            hint: 'Think of something temporary',
            positivity: 'Neutral',
            sentence: 'The snow was <u>Transient</u>, melting by noon.',
            image: './assets/images/flashcards/Others/lasts for a shorttime.gif'
        },
        {
            word: 'Ubiquitous',
            mnemonic: 'Present, appearing, or found everywhere',
            synonyms: 'Widespread, Omnipresent, Universal',
            hint: 'Found in many places',
            positivity: 'Neutral',
            sentence: 'Smartphones have become <u>Ubiquitous</u> in today’s society.',
            image: './assets/images/flashcards/Others/found everywhere.jpg'
        },
        {
            word: 'Underscore',
            mnemonic: 'To emphasize or highlight something',
            synonyms: 'Emphasize, Highlight, Stress',
            hint: 'Drawing attention to something important',
            positivity: 'Neutral',
            sentence: 'The report <u>Underscored</u> the importance of regular exercise.',
            image: './assets/images/flashcards/Others/highlight something.jpg'
        },
        {
            word: 'Venal',
            mnemonic: 'Showing or motivated by susceptibility to bribery',
            synonyms: 'Corrupt, Bribable, Dishonest',
            hint: 'Think of someone easily influenced by money',
            positivity: 'Negative',
            sentence: 'The official was known to be <u>Venal</u> and often accepted bribes.',
            image: './assets/images/flashcards/Others/corrupt.jpg'
        },
        {
            word: 'Venerate',
            mnemonic: 'To regard with great respect',
            synonyms: 'Revere, Honor, Respect',
            hint: 'Showing deep admiration',
            positivity: 'Positive',
            sentence: 'In some cultures, ancestors are <u>Venerated</u> and remembered through rituals.',
            image: './assets/images/flashcards/Others/show respect.gif'
        }
        
    ],
          //Set7
    [
        
    {
        word: 'tendentious',
        mnemonic: 'Expressing or promoting a particular cause or point of view.',
        synonyms: 'Biased, Partisan, Prejudiced',
        hint: 'Think of someone with an agenda.',
        positivity: 'Negative',
        sentence: 'The tendentious article clearly favored one side of the debate.',
        image: './assets/images/flashcards/Others/biased person.webp'
    },
    {
        word: 'Appease',
        mnemonic: 'To pacify or placate by acceding to demands',
        synonyms: 'Soothe, Calm, Placate',
        hint: 'Calming or satisfying someone’s anger',
        positivity: 'Positive',
        sentence: 'She tried to <u>Appease</u> her angry client with a discount.',
        image: './assets/images/flashcards/Others/keep clam.webp'
    },
    {
        word: 'Arbitrary',
        mnemonic: 'Based on random choice or personal whim',
        synonyms: 'Random, Capricious, Whimsical',
        hint: 'Without reason or plan',
        positivity: 'Negative',
        sentence: 'The decision to fire him seemed <u>Arbitrary</u> and unfair.',
        image: './assets/images/flashcards/Others/random.gif'
    },
    {
        word: 'Archaic',
        mnemonic: 'Very old or outdated',
        synonyms: 'Outdated, Old-fashioned, Antiquated',
        hint: 'Belonging to the past',
        positivity: 'Neutral',
        sentence: 'The company replaced its <u>Archaic</u> computer systems.',
        image: './assets/images/flashcards/Others/Anachronistic.gif'
    },
    {
        word: 'Clamorous',
        mnemonic: 'Making a loud and confused noise',
        synonyms: 'Noisy, Loud, Uproarious',
        hint: 'A lot of loud noise',
        positivity: 'Negative',
        sentence: 'The <u>Clamorous</u> crowd demanded immediate action.',
        image: './assets/images/flashcards/Others/noisy.gif'
    },
    {
        word: 'Dearth',
        mnemonic: 'A scarcity or lack of something',
        synonyms: 'Shortage, Lack, Deficiency',
        hint: 'Not enough of something',
        positivity: 'Negative',
        sentence: 'The <u>Dearth</u> of fresh water in the region was concerning.',
        image: './assets/images/flashcards/Others/scarcity of something.jpg'
    },
    {
        word: 'Explicable',
        mnemonic: 'Able to be explained or understood',
        synonyms: 'Understandable, Explainable, Interpretable',
        hint: 'Something that makes sense',
        positivity: 'Neutral',
        sentence: 'Her behavior was <u>Explicable</u> given the circumstances.',
        image: './assets/images/flashcards/Others/able to understand.gif'
    },
    {
        word: 'Hyperbole',
        mnemonic: 'Exaggerated statements or claims not meant literally',
        synonyms: 'Exaggeration, Overstatement, Embellishment',
        hint: 'An over-the-top claim',
        positivity: 'Neutral',
        sentence: 'Saying she waited an eternity was pure <u>Hyperbole</u>.',
        image: './assets/images/flashcards/Others/loquacious.gif'
    },
    {
        word: 'Immutable',
        mnemonic: 'Unchanging over time or unable to be changed',
        synonyms: 'Fixed, Unchangeable, Constant',
        hint: 'Something that doesn’t change',
        positivity: 'Neutral',
        sentence: 'The laws of physics are often considered <u>Immutable</u>.',
        image: './assets/images/flashcards/Others/constant.png'
    },
    {
        word: 'Indefatigable',
        mnemonic: 'Persisting tirelessly',
        synonyms: 'Tireless, Unflagging, Persistent',
        hint: 'Someone who never gets tired',
        positivity: 'Positive',
        sentence: 'His <u>Indefatigable</u> efforts eventually led to success.',
        image: './assets/images/flashcards/Others/full of energy.gif'
    },
    {
        word: 'Indolent',
        mnemonic: 'Wanting to avoid activity or exertion',
        synonyms: 'Lazy, Idle, Sluggish',
        hint: 'Someone who avoids work or effort',
        positivity: 'Negative',
        sentence: 'Her <u>Indolent</u> approach made her miss several deadlines.',
        image: './assets/images/flashcards/Others/lazy.gif'
    },
    {
        word: 'Insular',
        mnemonic: 'Ignorant of or uninterested in cultures outside one’s experience',
        synonyms: 'Narrow-minded, Isolated, Inward-looking',
        hint: 'Closed off or inward-looking',
        positivity: 'Negative',
        sentence: 'His <u>Insular</u> perspective made it difficult for him to work in a diverse environment.',
        image: './assets/images/flashcards/narrow minded.webp'
    },
    {
        word: 'Intransigent',
        mnemonic: 'Unwilling to change one\'s views or agree',
        synonyms: 'Stubborn, Inflexible, Unyielding',
        hint: 'Refusing to compromise',
        positivity: 'Negative',
        sentence: 'Their <u>Intransigent</u> stance caused negotiations to fail.',
        image: './assets/images/flashcards/Others/stubborn.gif'
    },
    {
        word: 'Intrepid',
        mnemonic: 'Fearless; adventurous',
        synonyms: 'Courageous, Daring, Bold',
        hint: 'Someone who isn’t afraid',
        positivity: 'Positive',
        sentence: 'The <u>Intrepid</u> explorers braved the harsh conditions to reach the summit.',
        image: './assets/images/flashcards/Others/bold.jpeg'
    },
    {
        word: 'Irreverent',
        mnemonic: 'Showing a lack of respect for people or things',
        synonyms: 'Disrespectful, Mocking, Flippant',
        hint: 'Not showing respect',
        positivity: 'Negative',
        sentence: 'His <u>Irreverent</u> jokes were not well-received by the audience.',
        image: './assets/images/flashcards/Others/rude behave.jpg'
    },
    {
        word: 'Loathe',
        mnemonic: 'To feel intense dislike or disgust for',
        synonyms: 'Detest, Abhor, Despise',
        hint: 'A strong feeling of dislike',
        positivity: 'Negative',
        sentence: 'She <u>Loathes</u> being in crowded places.',
        image: './assets/images/flashcards/Others/hate.gif'
    },
    {
        word: 'Malign',
        mnemonic: 'To speak about someone in a spitefully critical manner',
        synonyms: 'Defame, Slander, Vilify',
        hint: 'Talking badly about someone',
        positivity: 'Negative',
        sentence: 'His reputation was unfairly <u>Maligned</u> by false rumors.',
        image: './assets/images/flashcards/Others/rude behave.jpg'
    },
    {
        word: 'Malleable',
        mnemonic: 'Easily influenced or pliable',
        synonyms: 'Flexible, Adaptable, Pliable',
        hint: 'Something that can be shaped',
        positivity: 'Neutral',
        sentence: 'Children’s minds are <u>Malleable</u> and learn things quickly.',
        image: './assets/images/flashcards/Others/Malleable.gif'
    },
    {
        word: 'Neophyte',
        mnemonic: 'A person who is new to a subject or activity',
        synonyms: 'Beginner, Novice, Rookie',
        hint: 'Someone just starting',
        positivity: 'Neutral',
        sentence: 'As a <u>Neophyte</u> in programming, she needed guidance on basic concepts.',
        image: './assets/images/flashcards/Others/first time.gif'
    },
    {
        word: 'Plastic',
        mnemonic: 'Easily shaped or molded',
        synonyms: 'Malleable, Flexible, Adaptable',
        hint: 'Something that can be changed or formed',
        positivity: 'Neutral',
        sentence: 'Clay is <u>Plastic</u> and can be shaped into many forms.',
        image: './assets/images/flashcards/Others/Others/Malleable.gif'
    },
    {
        word: 'Platitude',
        mnemonic: 'A remark that is used too often to be interesting',
        synonyms: 'Cliché, Banality, Truism',
        hint: 'An overused saying',
        positivity: 'Negative',
        sentence: 'His speech was filled with <u>Platitudes</u> that added little value.',
        image: './assets/images/flashcards/Others/loquacious.gif'
    },
    {
        word: 'Prescient',
        mnemonic: 'Having or showing knowledge of events before they take place',
        synonyms: 'Prophetic, Visionary, Foresighted',
        hint: 'Foreseeing future events',
        positivity: 'Positive',
        sentence: 'Her <u>Prescient</u> insights saved the company from a financial crisis.',
        image: './assets/images/flashcards/Others/describe future.gif'
    },
    {
        word: 'Pristine',
        mnemonic: 'In its original condition; unspoiled',
        synonyms: 'Unspoiled, Pure, Untouched',
        hint: 'Fresh, clean, or untouched',
        positivity: 'Positive',
        sentence: 'The beach was <u>Pristine</u>, with clear water and untouched sand.',
        image: './assets/images/flashcards/Others/pure unspoiled.gif'
    },
    {
        word: 'Reproach',
        mnemonic: 'To express disapproval or disappointment',
        synonyms: 'Rebuke, Scold, Criticize',
        hint: 'To criticize or scold',
        positivity: 'Negative',
        sentence: 'He had no reason to <u>Reproach</u> her for being late.',
        image: './assets/images/flashcards/Others/boka.gif'
    },
    {
        word: 'Robust',
        mnemonic: 'Strong and healthy; vigorous',
        synonyms: 'Sturdy, Powerful, Resilient',
        hint: 'Strong and full of energy',
        positivity: 'Positive',
        sentence: 'The plant was <u>Robust</u> and survived the harsh winter.',
        image: './assets/images/flashcards/Others/strong.gif'
    },
    {
        word: 'Salubrious',
        mnemonic: 'Health-giving; healthy',
        synonyms: 'Beneficial, Wholesome, Healthful',
        hint: 'Something good for your health',
        positivity: 'Positive',
        sentence: 'They moved to a more <u>Salubrious</u> climate to improve their health.',
        image: './assets/images/flashcards/Others/something that is healthy.jpeg'
    },
    {
        word: 'Sanction',
        mnemonic: 'To impose a penalty as a form of punishment, usually for violating a rule or law',
        synonyms: 'Punish, Penalize, Restrict',
        hint: 'An official endorsement or penalty',
        positivity: 'Negative',
        sentence: 'The committee <u>Sanctioned</u> the new research project.',
        image: './assets/images/flashcards/Others/give penalty.jpeg'
    },
    {
        word: 'Sedulous',
        mnemonic: 'Showing dedication and diligence',
        synonyms: 'Diligent, Hard-working, Meticulous',
        hint: 'Carefully attentive',
        positivity: 'Positive',
        sentence: 'Her <u>Sedulous</u> efforts led to a promotion.',
        image: './assets/images/flashcards/Others/passionate worker.gif'
    },
    {
        word: 'Soporific',
        mnemonic: 'Tending to induce drowsiness or sleep',
        synonyms: 'Sleep-inducing, Sedative, Somnolent',
        hint: 'Something that makes you sleepy',
        positivity: 'Neutral',
        sentence: 'The lecture was so <u>Soporific</u> that several students dozed off.',
        image: './assets/images/flashcards/Others/Soporific.gif'
    },
    {
        word: 'Stern',
        mnemonic: 'Serious and unrelenting, especially in authority',
        synonyms: 'Strict, Harsh, Severe',
        hint: 'Firm and not easily swayed',
        positivity: 'Neutral',
        sentence: 'The teacher’s <u>Stern</u> voice silenced the class.',
        image: './assets/images/flashcards/Others/Stern.gif'
    }
  ],
//set 8
  [
{
    word: 'Accentuate',
    mnemonic: 'To make something more noticeable or prominent',
    synonyms: 'Emphasize, Highlight, Stress',
    hint: 'Making something stand out',
    positivity: 'Positive',
    sentence: 'She used makeup to <u>Accentuate</u> her cheekbones.',
    image: './assets/images/flashcards/Others/highlight something.jpg'
},
{
    word: 'Conjectural',
    mnemonic: 'Based on guesswork or incomplete information',
    synonyms: 'Speculative, Hypothetical, Uncertain',
    hint: 'A guess without full proof',
    positivity: 'Neutral',
    sentence: 'His theory about alien life was purely <u>Conjectural</u>.',
    image: './assets/images/flashcards/Others/guess.webp'
},
{
    word: 'Convivial',
    mnemonic: 'Friendly, lively, and enjoyable',
    synonyms: 'Sociable, Cheerful, Festive',
    hint: 'Lively and enjoyable atmosphere',
    positivity: 'Positive',
    sentence: 'They enjoyed a <u>Convivial</u> evening with friends.',
    image: './assets/images/flashcards/Others/friendly.webp'
},
{
    word: 'Decadent',
    mnemonic: 'Reflecting a state of moral or cultural decline',
    synonyms: 'Self-indulgent, Degenerate, Corrupt',
    hint: 'Overly self-indulgent',
    positivity: 'Negative',
    sentence: 'The city’s <u>Decadent</u> lifestyle led to financial troubles.',
    image: './assets/images/flashcards/Others/corrupt.jpg'
},
{
    word: 'Egregious',
    mnemonic: 'Outstandingly bad; shocking',
    synonyms: 'Shocking, Appalling, Terrible',
    hint: 'Really bad or outrageous',
    positivity: 'Negative',
    sentence: 'His <u>Egregious</u> mistake cost the company millions.',
    image: './assets/images/flashcards/Others/shocking.gif'
},
{
    word: 'Evanescent',
    mnemonic: 'Quickly fading or disappearing',
    synonyms: 'Fleeting, Ephemeral, Brief',
    hint: 'Something that vanishes quickly',
    positivity: 'Neutral',
    sentence: 'The beauty of the rainbow was <u>Evanescent</u>, lasting only a few moments.',
    image: './assets/images/flashcards/Others/lasts for a shorttime.gif'
},
{
    word: 'Flamboyant',
    mnemonic: 'Tending to attract attention because of exuberance',
    synonyms: 'Showy, Flashy, Ostentatious',
    hint: 'Very bright or flashy',
    positivity: 'Neutral',
    sentence: 'His <u>Flamboyant</u> style made him stand out in every crowd.',
    image: './assets/images/flashcards/Others/Style.gif'
},
{
    word: 'Forestall',
    mnemonic: 'To prevent or obstruct by taking action in advance',
    synonyms: 'Preempt, Prevent, Hinder',
    hint: 'To stop something before it happens',
    positivity: 'Neutral',
    sentence: 'They took measures to <u>Forestall</u> any disruptions.',
    image: './assets/images/flashcards/Others/describe future.gif'
},
{
    word: 'Gainsay',
    mnemonic: 'To deny or contradict a fact or statement',
    synonyms: 'Deny, Dispute, Contradict',
    hint: 'Challenging or refusing a statement',
    positivity: 'Neutral',
    sentence: 'It’s hard to <u>Gainsay</u> the evidence presented by the scientists.',
    image: './assets/images/flashcards/Others/No.gif'
},
{
    word: 'Galvanize',
    mnemonic: 'To shock or excite someone into action',
    synonyms: 'Motivate, Inspire, Spur',
    hint: 'Encouraging immediate action',
    positivity: 'Positive',
    sentence: 'The speech was intended to <u>Galvanize</u> the crowd into action.',
    image: './assets/images/flashcards/Others/motivae.gif'
},
{
    word: 'Indiscriminate',
    mnemonic: 'Done at random or without careful judgment',
    synonyms: 'Random, Haphazard, Aimless',
    hint: 'Lacking in careful selection',
    positivity: 'Negative',
    sentence: 'The <u>Indiscriminate</u> use of pesticides has harmed the ecosystem.',
     image: './assets/images/flashcards/Others/random.gif'
},
{
    word: 'Innocuous',
    mnemonic: 'Not harmful or offensive',
    synonyms: 'Harmless, Safe, Inoffensive',
    hint: 'Something that won’t cause harm',
    positivity: 'Positive',
    sentence: 'His comment was <u>Innocuous</u>, but she took it personally.',
    image: './assets/images/flashcards/Others/harmless.gif'
},
{
    word: 'Momentary',
    mnemonic: 'Lasting for a very short time',
    synonyms: 'Brief, Short-lived, Fleeting',
    hint: 'Very brief or passing',
    positivity: 'Neutral',
    sentence: 'She felt a <u>Momentary</u> pang of regret after making her decision.',
    image: './assets/images/flashcards/Others/lasts for a shorttime.gif'
},
{
    word: 'Mundane',
    mnemonic: 'Lacking excitement; dull or ordinary',
    synonyms: 'Ordinary, Routine, Banal',
    hint: 'Boring or everyday',
    positivity: 'Negative',
    sentence: 'She found the office work <u>Mundane</u> and uninspiring.',
    image: './assets/images/flashcards/Others/boring.gif'
},
{
    word: 'Nettlesome',
    mnemonic: 'Causing annoyance or difficulty',
    synonyms: 'Irritating, Bothersome, Troublesome',
    hint: 'Something that irritates',
    positivity: 'Negative',
    sentence: 'The <u>Nettlesome</u> delays made everyone impatient.',
    image: './assets/images/flashcards/Others/not serious.gif'
},
{
    word: 'Nullify',
    mnemonic: 'To make legally null and void; invalidate',
    synonyms: 'Cancel, Annul, Void',
    hint: 'To cancel out or invalidate',
    positivity: 'Neutral',
    sentence: 'His contract was <u>Nullified</u> due to breach of terms.',
    image: './assets/images/flashcards/Others/cancelledf'
},
{
    word: 'Obviate',
    mnemonic: 'Sidestep or bypass a potential problem',
    synonyms: 'Prevent,Remove,Avert,Preclude',
    hint: 'To make something unnecessary',
    positivity: 'Positive',
    sentence: 'The new treatment <u>Obviates</u> the need for surgery.',
    image: './assets/images/flashcards/Others/prevent something to happen.gif'
},
{
    word: 'Omnipresent',
    mnemonic: 'Widely or constantly encountered; present everywhere',
    synonyms: 'Ubiquitous, Ever-present, Pervasive',
    hint: 'Everywhere at once',
    positivity: 'Neutral',
    sentence: 'Technology has become an <u>Omnipresent</u> part of our lives.',
    image: './assets/images/flashcards/Others/found everywhere.jpg'
},
{
    word: 'Oust',
    mnemonic: 'To drive out or expel someone from a position or place',
    synonyms: 'Remove, Eject, Expel',
    hint: 'Forcing someone out',
    positivity: 'Negative',
    sentence: 'The board voted to <u>Oust</u> the CEO after the scandal.',
    image: './assets/images/flashcards/Others/remove someone from post.gif'
},
{
    word: 'Palpable',
    mnemonic: 'clearly noticeable and obvious',
    synonyms: 'Tangible, Noticeable, Clear',
    hint: 'Something you can feel or easily notice',
    positivity: 'Neutral',
    sentence: 'There was a <u>Palpable</u> sense of excitement in the room.',
    image: './assets/images/flashcards/Others/conspicuous.webp'
},
{
    word: 'Perfidy',
    mnemonic: 'Deceitfulness; untrustworthiness',
    synonyms: 'Treachery, Betrayal, Disloyalty',
    hint: 'Being unfaithful or dishonest',
    positivity: 'Negative',
    sentence: 'His <u>Perfidy</u> cost him the trust of his colleagues.',
    image: './assets/images/flashcards/Others/Betray.gif'
},
{
    word: 'Profuse',
    mnemonic: 'Abundant or plentiful',
    synonyms: 'Abundant, Copious, Ample',
    hint: 'Lots of something',
    positivity: 'Positive',
    sentence: 'She expressed her <u>Profuse</u> thanks to everyone who helped.',
    image: './assets/images/flashcards/Others/abound.webp'
},
{
    word: 'Pugnacious',
    mnemonic: 'Eager or quick to argue or fight',
    synonyms: 'Combative, Bellicose, Belligerent',
    hint: 'Someone who loves to argue or fight',
    positivity: 'Negative',
    sentence: 'His <u>Pugnacious</u> attitude often got him into trouble.',
    image: './assets/images/flashcards/Others/ready to fight.gif'
},
{
    word: 'Sagacious',
    mnemonic: 'Having or showing keen mental discernment and good judgment',
    synonyms: 'Wise, Insightful, Discerning',
    hint: 'Very wise or intelligent',
    positivity: 'Positive',
    sentence: 'Her <u>Sagacious</u> advice helped me make the right decision.',
    image: './assets/images/flashcards/Others/deep knowledge.gif'
},
{
    word: 'Sanguine',
    mnemonic: 'Optimistic or positive, especially in a difficult situation',
    synonyms: 'Hopeful, Optimistic, Cheerful',
    hint: 'Positive even in tough times',
    positivity: 'Positive',
    sentence: 'Despite the setbacks, she remained <u>Sanguine</u> about the future.',
    image: './assets/images/flashcards/Others/optimistic thinking.jpeg'
},
{
    word: 'Scant',
    mnemonic: 'Barely sufficient or adequate',
    synonyms: 'Limited, Sparse, Insufficient',
    hint: 'Very little of something',
    positivity: 'Neutral',
    sentence: 'There was <u>Scant</u> evidence to support the claim.',
    image: './assets/images/flashcards/Others/small in size.gif'
},
{
    word: 'Skullduggery',
    mnemonic: 'Underhanded or unscrupulous behavior; trickery',
    synonyms: 'Deceit, Trickery, Chicanery',
    hint: 'Dishonest actions',
    positivity: 'Negative',
    sentence: 'The politician was accused of <u>Skullduggery</u> to win the election.',
    image: './assets/images/flashcards/Others/fraud trick.gif'
},
{
    word: 'Trivial',
    mnemonic: 'Of little value or importance',
    synonyms: 'Insignificant, Minor, Petty',
    hint: 'Unimportant or small matters',
    positivity: 'Negative',
    sentence: 'Don’t waste time on <u>Trivial</u> details.',
    image: './assets/images/flashcards/Others/not that important.png'
},
{
    word: 'Utilitarian',
    mnemonic: 'Designed to be useful or practical rather than attractive',
    synonyms: 'Practical, Functional, Pragmatic',
    hint: 'All about function over style',
    positivity: 'Neutral',
    sentence: 'The building’s <u>Utilitarian</u> design focused on efficiency over aesthetics.',
    image: './assets/images/flashcards/Others/useful something.webp'
},
{
    word: 'Vapid',
    mnemonic: 'Lack of Spark,something uninteresting ',
    synonyms: 'Dull, Insipid, Anemic',
    hint: 'Lacking in excitement or interest',
    positivity: 'Negative',
    sentence: 'The book was so <u>Vapid</u> that she couldn’t finish it.',
    image: './assets/images/flashcards/Others/boring.gif'
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

