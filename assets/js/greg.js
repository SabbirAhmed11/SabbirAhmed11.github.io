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


  ],
  //set 9
  [
    {
        word: 'Boorish',
        mnemonic: 'Rude or unrefined in manners or behavior',
        synonyms: 'Coarse, Uncouth, Discourteous',
        hint: 'Characterized by lack of manners or elegance',
        positivity: 'Negative',
        sentence: 'His <u>boorish</u> behavior at the dinner party embarrassed his wife.',
        image: './assets/images/flashcards/Others/Boorish.gif'
    },
    {
        word: 'Brook',
        mnemonic: 'Tolerate or endure something',
        synonyms: 'Abide, Stand, Stomach',
        hint: 'The capacity to put up with something',
        positivity: 'Neutral',
        sentence: 'She would not <u>brook</u> any interruptions during her presentation.',
        image: './assets/images/flashcards/Others/Brook.gif'
    },
    {
        word: 'Circumspect',
        mnemonic: 'Cautious or wary; exhibiting care',
        synonyms: 'Wary, Chary, Guarded',
        hint: 'Being careful to consider all circumstances and possible consequences',
        positivity: 'Neutral',
        sentence: 'She was <u>circumspect</u> about sharing personal information at work.',
        image: './assets/images/flashcards/Others/Circumspect.gif'
    },
    {
        word: 'Comity',
        mnemonic: 'Mutual respect or a courteous harmony',
        synonyms: 'Amicability, Civility, Goodwill',
        hint: 'Harmony and mutual respect in relationships',
        positivity: 'Positive',
        sentence: 'The neighboring countries maintained <u>comity</u> through years of potential conflicts.',
        image: './assets/images/flashcards/Others/Comity.gif'
    },
    {
        word: 'Commensurate',
        mnemonic: 'Comparable in size, extent, or degree',
        synonyms: 'Equivalent, Corresponding, Proportional',
        hint: 'Being equal or proportional in measure',
        positivity: 'Neutral',
        sentence: 'His salary increase was <u>commensurate</u> with his additional responsibilities.',
        image: './assets/images/flashcards/Others/Commensurate.gif'
    },
    {
        word: 'Cordial',
        mnemonic: 'Characterized by warmth or sincerity',
        synonyms: 'Amiable, Affectionate, Genial',
        hint: 'Warm and friendly in manner',
        positivity: 'Positive',
        sentence: 'They shared a <u>cordial</u> handshake, signaling a positive start to the negotiations.',
        image: './assets/images/flashcards/Others/Cordial.gif'
    },
    {
        word: 'Deleterious',
        mnemonic: 'Having a harmful effect; dangerous',
        synonyms: 'Inimical, Adverse, Injurious',
        hint: 'Causing harm or damage',
        positivity: 'Negative',
        sentence: 'Smoking has a <u>deleterious</u> effect on lung health.',
        image: './assets/images/flashcards/Others/Deleterious.gif'
    },
    {
        word: 'Dichotomy',
        mnemonic: 'A split into two contrasting parts',
        synonyms: 'Chasm, Disjunction, Polarity',
        hint: 'A division or contrast between two things',
        positivity: 'Neutral',
        sentence: 'The <u>dichotomy</u> between urban and rural lifestyles was evident in the debate.',
        image: './assets/images/flashcards/Others/Dichotomy.gif'
    },
    {
        word: 'Edify',
        mnemonic: 'Enlighten or uplift through knowledge',
        synonyms: 'Educate, Cultivate, Indoctrinate',
        hint: 'To improve or instruct morally or intellectually',
        positivity: 'Positive',
        sentence: 'The seminar aimed to <u>edify</u> attendees about environmental conservation.',
        image: './assets/images/flashcards/Others/Edify.gif'
    },
    {
        word: 'Elicit',
        mnemonic: 'Extract a reply or action; provoke',
        synonyms: 'Evoke, Draw Out, Induce',
        hint: 'To bring out or call forth a reaction or response',
        positivity: 'Neutral',
        sentence: 'The interviewer’s question managed to <u>elicit</u> a candid reply from the celebrity.',
        image: './assets/images/flashcards/Others/Elicit.gif'
    },
    {
        word: 'Erudite',
        mnemonic: 'Possessing great knowledge',
        synonyms: 'Learned, Scholarly, Intellectual',
        hint: 'Being deeply knowledgeable or educated',
        positivity: 'Positive',
        sentence: 'The professor was an <u>erudite</u> scholar who authored several renowned papers.',
        image: './assets/images/flashcards/Others/Erudite.gif'
    },
    {
        word: 'Fecund',
        mnemonic: 'Fertile or highly productive',
        synonyms: 'Fruitful, Prolific, Thriving',
        hint: 'Capable of producing abundant growth or offspring',
        positivity: 'Positive',
        sentence: 'The <u>fecund</u> soil of the valley yielded bountiful harvests.',
        image: './assets/images/flashcards/Others/Fecund.gif'
    },
    {
        word: 'Feeble',
        mnemonic: 'Weak; deficient in strength',
        synonyms: 'Frail, Sickly, Enfeebled',
        hint: 'Lacking physical strength, often due to age or illness',
        positivity: 'Negative',
        sentence: 'After his illness, he felt too <u>feeble</u> to go for a walk.',
        image: './assets/images/flashcards/Others/Feeble.gif'
    },
    {
        word: 'Felicitous',
        mnemonic: 'Well-suited or apt; causing delight',
        synonyms: 'Germane, Pertinent, Favorable',
        hint: 'Suitable and pleasant',
        positivity: 'Positive',
        sentence: 'Her <u>felicitous</u> remarks made everyone at the gathering smile.',
        image: './assets/images/flashcards/Others/felicitous.gif'
    },
    {
        word: 'Forbear',
        mnemonic: 'Refrain from doing something',
        synonyms: 'Eschew, Desist, Shun',
        hint: 'Restrain or abstain from action',
        positivity: 'Neutral',
        sentence: 'She chose to <u>forbear</u> commenting until she had all the facts.',
        image: './assets/images/flashcards/Others/forbear.gif'
    },
    {
        word: 'Haphazard',
        mnemonic: 'Lacking precise plan, order, or direction',
        synonyms: 'Unsystematic, Indiscriminate, Arbitrary',
        hint: 'Random or chaotic',
        positivity: 'Negative',
        sentence: 'The files were arranged in a <u>haphazard</u> manner, making it hard to locate anything.',
        image: './assets/images/flashcards/Others/haphazard.gif'
    },
    {
        word: 'Hodgepodge',
        mnemonic: 'A mixture of different things',
        synonyms: 'Melange, Jumble, Medley',
        hint: 'A chaotic assortment',
        positivity: 'Neutral',
        sentence: 'His bedroom was a <u>hodgepodge</u> of posters, books, and random trinkets.',
        image: './assets/images/flashcards/Others/hodgepodge.gif'
    },
    {
        word: 'Impede',
        mnemonic: 'Obstruct or hinder progress',
        synonyms: 'Curb, Hamper, Check',
        hint: 'To block or slow down',
        positivity: 'Negative',
        sentence: 'The fallen tree was large enough to <u>impede</u> traffic for hours.',
        image: './assets/images/flashcards/Others/impede.gif'
    },
    {
        word: 'Impetuous',
        mnemonic: 'Rash or hasty in action or decision',
        synonyms: 'Impulsive, Reckless, Foolhardy',
        hint: 'Acting without thinking',
        positivity: 'Negative',
        sentence: 'His <u>impetuous</u> decision to buy the car led to some financial troubles.',
        image: './assets/images/flashcards/Others/impetuous.gif'
    },
    {
        word: 'Irascible',
        mnemonic: 'Easily angered or irritated',
        synonyms: 'Snappish, Waspy, Surly',
        hint: 'Quick to anger',
        positivity: 'Negative',
        sentence: 'The old man was known for his <u>irascible</u> temper, especially in the mornings.',
        image: './assets/images/flashcards/Others/irascible.gif'
    },
    {
        word: 'Mercenary',
        mnemonic: 'Motivated mainly by desire for monetary gain',
        synonyms: 'Grasping, Avaricious, Rapacious',
        hint: 'Driven by money',
        positivity: 'Negative',
        sentence: 'His <u>mercenary</u> approach to business left him with few loyal friends.',
        image: './assets/images/flashcards/Others/mercenary.gif'
    },
    {
        word: 'Meticulous',
        mnemonic: 'Exhibiting great care to detail',
        synonyms: 'Scrupulous, Punctilious, Painstaking',
        hint: 'Extremely careful and precise',
        positivity: 'Positive',
        sentence: 'Her <u>meticulous</u> notes helped her excel in exams.',
        image: './assets/images/flashcards/Others/meticulous.gif'
    },
    {
        word: 'Mordant',
        mnemonic: 'Biting or sharply critical in thought',
        synonyms: 'Trenchant, Caustic, Acerbic',
        hint: 'Sarcastically critical',
        positivity: 'Negative',
        sentence: 'His <u>mordant</u> wit often left others feeling a bit stung.',
        image: './assets/images/flashcards/Others/mordant.gif'
    },
    {
        word: 'Outstrip',
        mnemonic: 'Surpass or do better than',
        synonyms: 'Outpace, Overshadow, Eclipse',
        hint: 'To exceed or outdo',
        positivity: 'Positive',
        sentence: 'The new product quickly <u>outstripped</u> its competitors in terms of sales.',
        image: './assets/images/flashcards/Others/outstrip.gif'
    },
    {
        word: 'Precarious',
        mnemonic: 'Uncertain and likely to cause danger',
        synonyms: 'Insecure, Perilous, Treacherous',
        hint: 'A risky or unstable situation',
        positivity: 'Negative',
        sentence: 'The hiker found himself in a <u>precarious</u> position on the mountain\'s edge.',
        image: './assets/images/flashcards/Others/precarious.png'
    },
    {
        word: 'Quirky',
        mnemonic: 'Unusual in an endearing way',
        synonyms: 'Eccentric, Unorthodox, Idiosyncratic',
        hint: 'Peculiar yet charming',
        positivity: 'Neutral/Positive',
        sentence: 'Her <u>quirky</u> fashion sense always made her stand out.',
        image: './assets/images/flashcards/Others/quirky.png'
    },
    {
        word: 'Repudiate',
        mnemonic: 'Reject or refuse to accept something',
        synonyms: 'Forswear, Rebut, Disavow',
        hint: 'Deny association or acceptance',
        positivity: 'Neutral',
        sentence: 'The politician was quick to <u>repudiate</u> the rumors about his past.',
        image: './assets/images/flashcards/Others/repudiate.png'
    },
    {
        word: 'Tact',
        mnemonic: 'Skill in handling situations politely',
        synonyms: 'Delicacy, Diplomacy, Discretion',
        hint: 'A careful and considerate approach',
        positivity: 'Positive',
        sentence: 'She showed great <u>tact</u> when mediating the argument between her friends.',
        image: './assets/images/flashcards/Others/tact.png'
    },
    {
        word: 'Trifling',
        mnemonic: 'Lacking significance or importance',
        synonyms: 'Trivial, Frivolous, Incidental',
        hint: 'Not worth much attention',
        positivity: 'Negative',
        sentence: 'Don\'t waste time on <u>trifling</u> matters when the main issue remains unresolved.',
        image: './assets/images/flashcards/Others/trifling.png'
    },
    {
        word: 'Turbulent',
        mnemonic: 'Full of conflict or chaos',
        synonyms: 'Tempestuous, Tumultuous, Anarchic',
        hint: 'Marked by disturbance and disorder',
        positivity: 'Negative',
        sentence: 'The airplane experienced <u>turbulent</u> conditions during the storm.',
        image: './assets/images/flashcards/Others/turbulent.png'
    }
    

  ],
//set 10
  [
    {
        word: 'Wane',
        mnemonic: 'Decrease in power, size, or intensity',
        synonyms: 'Dwindle, Subside, Ebb',
        hint: 'To diminish gradually',
        positivity: 'Negative',
        sentence: 'As the night progressed, the party’s energy began to <u>wane</u>.',
        image: './assets/images/flashcards/Others/wane.gif'
    },
    {
        word: 'Tout',
        mnemonic: 'Promote or praise energetically',
        synonyms: 'Commend, Endorse, Urge',
        hint: 'To advertise or advocate strongly',
        positivity: 'Positive',
        sentence: 'He was always <u>touting</u> the benefits of a healthy lifestyle.',
        image: './assets/images/flashcards/Others/tout.gif'
    },
    {
        word: 'Supersede',
        mnemonic: 'Replace or take the place of',
        synonyms: 'Displace, Supplant, Succeed',
        hint: 'To substitute with something new',
        positivity: 'Neutral',
        sentence: 'New technologies often <u>supersede</u> the old ones.',
        image: './assets/images/flashcards/Others/supersede.gif'
    },
    {
        word: 'Stoic',
        mnemonic: 'Unaffected by pain; showing no emotion',
        synonyms: 'Phlegmatic, Resigned, Impassive',
        hint: 'Emotionless under stress',
        positivity: 'Neutral',
        sentence: 'Despite the challenges, she remained <u>stoic</u> and resolute.',
        image: './assets/images/flashcards/Others/stoic.gif'
    },
    {
        word: 'Somnolent',
        mnemonic: 'Sleepy or drowsy; needing rest',
        synonyms: 'Soporific, Enervated, Languorous',
        hint: 'Inducing or feeling sleepy',
        positivity: 'Negative',
        sentence: 'The lecture’s monotone delivery had a <u>somnolent</u> effect on the audience.',
        image: './assets/images/flashcards/Others/somnolent.gif'
    },
    {
        word: 'Slight',
        mnemonic: 'Treat with disrespect or neglect; insult',
        synonyms: 'Snub, Disregard, Rebuff',
        hint: 'To overlook or belittle someone',
        positivity: 'Negative',
        sentence: 'He felt <u>slighted</u> when they didn’t invite him to the party.',
        image: './assets/images/flashcards/Others/slight.gif'
    },
    {
        word: 'Sever',
        mnemonic: 'Cut off or put an end to',
        synonyms: 'Cleave, Suspend, Rupture',
        hint: 'To break or separate completely',
        positivity: 'Neutral',
        sentence: 'He decided to sever all ties with his former colleagues.',
        image: './assets/images/flashcards/Others/sever.gif'
    },
    {
        word: 'Salutary',
        mnemonic: 'Beneficial, especially in promoting health',
        synonyms: 'Productive, Valuable, Salubrious',
        hint: 'Something that improves or benefits health',
        positivity: 'Positive',
        sentence: 'A morning jog can have a salutary effect on your mood.',
        image: './assets/images/flashcards/Others/salutary.gif'
    },
    {
        word: 'Rudimentary',
        mnemonic: 'Basic or elementary; in the earliest stages of development',
        synonyms: 'Primitive, Crude, Embryonic',
        hint: 'Simple or underdeveloped form',
        positivity: 'Neutral',
        sentence: 'His understanding of the subject is still quite rudimentary.',
        image: './assets/images/flashcards/Others/rudimentary.gif'
    },
    {
        word: 'Provincial',
        mnemonic: 'Narrow in perspective; not sophisticated',
        synonyms: 'Insular, Parochial, Myopic',
        hint: 'Limited or restricted viewpoint',
        positivity: 'Negative',
        sentence: 'Despite his provincial attitudes, he was a kind-hearted man.',
        image: './assets/images/flashcards/Others/provincial.gif'
    },
    {
        word: 'Portend',
        mnemonic: 'Warn that something, often unpleasant, is going to happen',
        synonyms: 'Presage, Augur, Foreshadow',
        hint: 'To signal or predict a future event',
        positivity: 'Neutral',
        sentence: 'The dark clouds portend an approaching storm.',
        image: './assets/images/flashcards/Others/portend.gif'
    },
    {
        word: 'Pensive',
        mnemonic: 'Deep in thought',
        synonyms: 'Reflective, Introspective, Ruminative',
        hint: 'Lost in serious or quiet thought',
        positivity: 'Neutral',
        sentence: 'She sat in a pensive mood, gazing out the window.',
        image: './assets/images/flashcards/Others/pensive.gif'
    },
    {
        word: 'Partial',
        mnemonic: 'Prejudiced or biased toward one side',
        synonyms: 'Partisan, Skewed, Discriminatory',
        hint: 'Inclined to favor one over another',
        positivity: 'Neutral',
        sentence: 'He’s <u>partial</u> to chocolate desserts over fruity ones.',
        image: './assets/images/flashcards/Others/partial.gif'
    },
    {
        word: 'Nonchalant',
        mnemonic: 'Appearing casually calm or indifferent',
        synonyms: 'Collected, Blasé, Insouciant',
        hint: 'Unbothered by surroundings',
        positivity: 'Positive',
        sentence: 'Despite the chaos around her, she remained <u>nonchalant</u>.',
        image: './assets/images/flashcards/Others/nonchalant.gif'
    },
    {
        word: 'Myopic',
        mnemonic: 'Short-sighted; lacking creativity',
        synonyms: 'Narrow-minded, Insular, Parochial',
        hint: 'Lack of foresight',
        positivity: 'Negative',
        sentence: 'A <u>myopic</u> approach to environmental issues can lead to long-term problems.',
        image: './assets/images/flashcards/Others/myopic.gif'
    },
    {
        word: 'Lament',
        mnemonic: 'Express deep sorrow or regret',
        synonyms: 'Mourn, Wail, Weep',
        hint: 'Grieving over a loss',
        positivity: 'Negative',
        sentence: 'She <u>lamented</u> the loss of her cherished necklace.',
        image: './assets/images/flashcards/Others/lament.gif'
    },
    {
        word: 'Indispensable',
        mnemonic: 'Completely necessary; essential',
        synonyms: 'Crucial, Requisite, Imperative',
        hint: 'Cannot be dispensed with',
        positivity: 'Positive',
        sentence: 'Fresh water is <u>indispensable</u> for human survival.',
        image: './assets/images/flashcards/Others/indispensable.gif'
    },
    {
        word: 'Hamper',
        mnemonic: 'Obstruct or hinder progress',
        synonyms: 'Inhibit, Curb, Foil',
        hint: 'To create obstacles',
        positivity: 'Negative',
        sentence: 'The storm <u>hampered</u> our travel plans.',
        image: './assets/images/flashcards/Others/hamper.gif'
    },
    {
        word: "Furtive",
        mnemonic: "Sneaky or secretive, especially due to guilt",
        synonyms: "Surreptitious, Covert, Clandestine",
        hint: "To act in a way that avoids notice",
        positivity: "Neutral",
        sentence: "The student gave a furtive glance to his neighbor's paper during the exam.",
        image: "./assets/images/flashcards/Others/furtive.gif"
    },
    {
        word: "Feign",
        mnemonic: "Pretend or simulate; mislead",
        synonyms: "Affect, Posture, Masquerade",
        hint: "To fake an emotion or state",
        positivity: "Neutral",
        sentence: "She tried to feign surprise, but I knew she'd already heard the news.",
        image: "./assets/images/flashcards/Others/feign.gif"
    },
    {
        word: "Fastidious",
        mnemonic: "Showing great attention to detail; hard to please",
        synonyms: "Scrupulous, Punctilious, Painstaking",
        hint: "Meticulously attentive or critical",
        positivity: "Neutral",
        sentence: "She is fastidious about her appearance, ensuring every detail is perfect.",
        image: "./assets/images/flashcards/Others/fastidious.gif"
    },
    {
        word: "Expedite",
        mnemonic: "Accelerate or speed up a process or action",
        synonyms: "Hasten, Quicken, Facilitate",
        hint: "To make something happen sooner",
        positivity: "Positive",
        sentence: "We paid an extra fee to expedite the delivery of the package.",
        image: "./assets/images/flashcards/Others/expedite.gif"
    },
    {
        word: "Exculpate",
        mnemonic: "Clear from blame or guilt",
        synonyms: "Acquit, Absolve, Exonerate",
        hint: "To declare someone not guilty",
        positivity: "Positive",
        sentence: "The evidence served to exculpate the defendant from the accusations.",
        image: "./assets/images/flashcards/Others/exculpate.gif"
    },
    {
        word: "Evasive",
        mnemonic: "Indirect; avoiding confrontation",
        synonyms: "Prevaricating, Equivocal, Vague",
        hint: "To dodge or avoid directness",
        positivity: "Neutral",
        sentence: "When asked about his plans, he gave an evasive answer.",
        image: "./assets/images/flashcards/Others/evasive.gif"
    },
    {
        word: "Esoteric",
        mnemonic: "Understood by few or a small group of people",
        synonyms: "Recondite, Arcane, Abstruse",
        hint: "Known or appreciated by a limited audience",
        positivity: "Neutral",
        sentence: "The esoteric lecture was only understood by a few specialists in the audience.",
        image: "./assets/images/flashcards/Others/esoteric.png"
    },
    {
        word: "Eschew",
        mnemonic: "Intentionally avoid or abstain from",
        synonyms: "Forgo, Abjure, Renounce",
        hint: "Choosing to stay away from something deliberately",
        positivity: "Neutral",
        sentence: "He decided to eschew alcohol for a month.",
        image: "./assets/images/flashcards/Others/eschew.png"
    },
    {
        word: "Befuddled",
        mnemonic: "Confused, bewildered, or perplexed",
        synonyms: "Baffled, Stumped, Nonplussed",
        hint: "Being unable to think clearly due to confusion",
        positivity: "Negative",
        sentence: "The complex equations left him completely befuddled.",
        image: "./assets/images/flashcards/Others/befuddled.png"
    },
    {
        word: "Ascribe",
        mnemonic: "Attribute something to a particular cause",
        synonyms: "Assign, Accredit, Impute",
        hint: "Giving credit to a cause or reason",
        positivity: "Neutral",
        sentence: "The teacher ascribed his success to hard work and determination.",
        image: "./assets/images/flashcards/Others/ascribe.png"
    },
    {
        word: "Antithesis",
        mnemonic: "The direct opposite or contrast",
        synonyms: "Converse, Reverse, Inverse",
        hint: "A sharp contrast or opposition between two things",
        positivity: "Neutral",
        sentence: "Calm is the antithesis of chaos.",
        image: "./assets/images/flashcards/Others/antithesis.png"
    },
    {
        word: "Acumen",
        mnemonic: "Quickness and keenness in understanding",
        synonyms: "Shrewdness, Acuity, Sharpness",
        hint: "Exceptional insight or intelligence in a field",
        positivity: "Positive",
        sentence: "Her business acumen is evident in the company's continued growth.",
        image: "./assets/images/flashcards/Others/acumen.png"
    }

  ],
  //Set11
  [
    {
        word: 'Abhor',
        mnemonic: 'Detest or regard with deep hatred',
        synonyms: 'Loathe, Despise, Abominate',
        hint: 'Characterized by strong aversion or hatred',
        positivity: 'Negative',
        sentence: 'She abhors cruelty in any form.',
        image: './assets/images/flashcards/Others/Abhor.gif'
    },
    {
        word: 'Boisterous',
        mnemonic: 'Energetic, noisy, and lively',
        synonyms: 'Animated, Exuberant, Ebullient',
        hint: 'Marked by loud and spirited behavior',
        positivity: 'Neutral',
        sentence: 'The boisterous crowd cheered for their favorite team.',
        image: './assets/images/flashcards/Others/Boisterous.gif'
    },
    {
        word: 'Chivalrous',
        mnemonic: 'Honorable, polite, and kind towards women',
        synonyms: 'Gallant, Courteous, Gentle',
        hint: 'Exemplifies respect and politeness, especially towards women',
        positivity: 'Positive',
        sentence: 'He displayed chivalrous behavior by holding the door open for her.',
        image: './assets/images/flashcards/Others/Chivalrous.gif'
    },
    {
        word: 'Churlish',
        mnemonic: 'Rude or lacking good manners',
        synonyms: 'Boorish, Ungracious, Loutish',
        hint: 'Behavior that is unrefined or discourteous',
        positivity: 'Negative',
        sentence: 'His churlish reply caught everyone off guard.',
        image: './assets/images/flashcards/Others/Churlish.gif'
    },
    {
        word: 'Clandestine',
        mnemonic: 'Secretive; avoiding attention',
        synonyms: 'Covert, Furtive, Stealthy',
        hint: 'Involves secrecy or concealment',
        positivity: 'Neutral',
        sentence: 'They held clandestine meetings to plan the surprise party.',
        image: './assets/images/flashcards/Others/Clandestine.gif'
    },
    {
        word: 'Complacent',
        mnemonic: 'Smug or self-satisfied',
        synonyms: 'Proud, Self-congratulatory, Gloating',
        hint: 'Marked by unwarranted satisfaction or lack of awareness',
        positivity: 'Negative',
        sentence: 'The team became complacent after their early successes.',
        image: './assets/images/flashcards/Others/Complacent.gif'
    },
    {
        word: 'Cumbersome',
        mnemonic: 'Large, heavy, slow, or complicated',
        synonyms: 'Unwieldy, Ungainly, Hefty',
        hint: 'The old computer system was cumbersome and slow.',
        positivity: 'Neutral',
        sentence: 'The old computer system was cumbersome and slow.',
        image: './assets/images/flashcards/Others/Cumbersome.png'
    },
    {
        word: 'Debilitating',
        mnemonic: 'Weakening or impairing strength',
        synonyms: 'Enervating, Enfeebling, Devitalizing',
        hint: 'The disease had a debilitating effect on him.',
        positivity: 'Negative',
        sentence: 'The disease had a debilitating effect on him.',
        image: './assets/images/flashcards/Others/Debilitating.png'
    },
    {
        word: 'Deliberate',
        mnemonic: 'Think over or discuss carefully',
        synonyms: 'Ponder, Contemplate, Brood over',
        hint: 'The committee will deliberate on the matter before reaching a final decision.',
        positivity: 'Neutral',
        sentence: 'The committee will deliberate on the matter before reaching a final decision.',
        image: './assets/images/flashcards/Others/Deliberate.png'
    },
    {
        word: 'Droll',
        mnemonic: 'Amusing in a quirky or unusual way',
        synonyms: 'Mirthful, Hilarious, Humorous',
        hint: 'His droll anecdotes always made us chuckle.',
        positivity: 'Positive',
        sentence: 'His droll anecdotes always made us chuckle.',
        image: './assets/images/flashcards/Others/Droll.png'
    },
    {
        word: 'Eccentric',
        mnemonic: 'Deviating from normal behavior',
        synonyms: 'Abnormal, Aberrant, Anomalous',
        hint: 'The artist was known for his eccentric dress sense.',
        positivity: 'Neutral',
        sentence: 'The artist was known for his eccentric dress sense.',
        image: './assets/images/flashcards/Others/Eccentric.png'
    },
    {
        word: 'Fractious',
        mnemonic: 'Quarrelsome and irritable; unruly',
        synonyms: 'Grouchy, Irascible, Intractable',
        hint: 'The fractious toddler threw a tantrum in the store.',
        positivity: 'Negative',
        sentence: 'The fractious toddler threw a tantrum in the store.',
        image: './assets/images/flashcards/Others/Fractious.png'
    },
    {
        word: 'Limpid',
        mnemonic: 'Transparent, or easy to understand',
        synonyms: 'Lucid, Coherent, Comprehensible',
        hint: 'The limpid waters of the lake reflected the clear blue sky.',
        positivity: 'Positive',
        sentence: 'The limpid waters of the lake reflected the clear blue sky.',
        image: './assets/images/flashcards/Others/Limpid.png'
    },
    {
        word: 'Mawkish',
        mnemonic: 'Showing emotion; overly sentimental',
        synonyms: 'Cloying, Saccharine, Sickly',
        hint: "The movie's mawkish ending left some audience members rolling their eyes.",
        positivity: 'Negative',
        sentence: "The movie's mawkish ending left some audience members rolling their eyes.",
        image: './assets/images/flashcards/Others/Mawkish.png'
    },
    {
        word: 'Obeisance',
        mnemonic: 'Reverence for an individual',
        synonyms: 'Homage, Adoration, Veneration',
        hint: 'The knight paid obeisance to the queen.',
        positivity: 'Positive',
        sentence: 'The knight paid obeisance to the queen.',
        image: './assets/images/flashcards/Others/Obeisance.png'
    },
    {
        word: 'Ostentatious',
        mnemonic: 'Showy or designed to impress',
        synonyms: 'Pretentious, Flamboyant, Affected',
        hint: 'Her ostentatious jewelry drew many envious glances.',
        positivity: 'Negative',
        sentence: 'Her ostentatious jewelry drew many envious glances.',
        image: './assets/images/flashcards/Others/Ostentatious.png'
    },
    {
        word: 'Panacea',
        mnemonic: 'A perfect cure for something',
        synonyms: 'Cure-all, Elixir, Nostrum',
        hint: "There's no single panacea for the economic challenges we face.",
        positivity: 'Neutral',
        sentence: "There's no single panacea for the economic challenges we face.",
        image: './assets/images/flashcards/Others/Panacea.png'
    },
    {
        word: 'Perfunctory',
        mnemonic: 'Done without enthusiasm',
        synonyms: 'Cursory, Desultory, Superficial',
        hint: 'His handshake was perfunctory, lacking warmth.',
        positivity: 'Negative',
        sentence: 'His handshake was perfunctory, lacking warmth.',
        image: './assets/images/flashcards/Others/Perfunctory.png'
    },
    {
        word: 'Perilous',
        mnemonic: 'Risky and hazardous',
        synonyms: 'Treacherous, Precarious, Insecure',
        hint: 'Characterized by danger or risk',
        positivity: 'Negative',
        sentence: 'The mountain climbers faced perilous conditions.',
        image: './assets/images/flashcards/Others/Perilous.png'
    },
    {
        word: 'Pervasive',
        mnemonic: 'Spreading quickly in great numbers',
        synonyms: 'Prevalent, Rife, Ubiquitous',
        hint: 'Something that spreads throughout a group or area',
        positivity: 'Neutral',
        sentence: 'The influence of technology is pervasive in modern society.',
        image: './assets/images/flashcards/Others/Pervasive.png'
    },
    {
        word: 'Preclude',
        mnemonic: 'Prevent something from occurring',
        synonyms: 'Block, Impede, Hinder',
        hint: 'To make something impossible or prevent it from happening',
        positivity: 'Neutral',
        sentence: 'His injury precluded him from competing in the race.',
        image: './assets/images/flashcards/Others/Preclude.png'
    },
    {
        word: 'Predilection',
        mnemonic: 'Preference or bias towards something',
        synonyms: 'Fondness, Partiality, Penchant',
        hint: 'A tendency to favor something over others',
        positivity: 'Positive',
        sentence: 'He has a predilection for spicy foods.',
        image: './assets/images/flashcards/Others/Predilection.png'
    },
    {
        word: 'Rapacious',
        mnemonic: 'Excessively greedy, or grasping',
        synonyms: 'Grasping, Avaricious, Acquisitive',
        hint: 'Showing strong desire to take things, especially greedily',
        positivity: 'Negative',
        sentence: 'The rapacious corporation was always looking to expand, regardless of the consequences.',
        image: './assets/images/flashcards/Others/Rapacious.png'
    },
    {
        word: 'Relish',
        mnemonic: 'Take great pleasure or delight in',
        synonyms: 'Adore, Savor, Rejoice in',
        hint: 'To enjoy something immensely',
        positivity: 'Positive',
        sentence: 'She relished the opportunity to showcase her skills.',
        image: './assets/images/flashcards/Others/Relish.png'
    },
    {
        word: 'Satirical',
        mnemonic: 'Using humor or irony to criticize',
        synonyms: 'Sarcastic, Sardonic, Scornful',
        hint: 'Characterized by humorous or ironic criticism',
        positivity: 'Neutral',
        sentence: 'The <u>satirical</u> play poked fun at societal norms.',
        image: './assets/images/flashcards/Others/Satirical.gif'
    },
    {
        word: 'Sham',
        mnemonic: 'False, fake, or not genuine',
        synonyms: 'Bogus, Spurious, Fraudulent',
        hint: 'A deliberate deception or imitation',
        positivity: 'Negative',
        sentence: 'The man peddled <u>sham</u> remedies to a gullible clientele.',
        image: './assets/images/flashcards/Others/Sham.gif'
    },
    {
        word: 'Skirt',
        mnemonic: 'Go around or avoid something',
        synonyms: 'Evade, Sidestep, Circumvent',
        hint: 'To find a way around a problem or obstacle',
        positivity: 'Neutral',
        sentence: 'He <u>skirted</u> the difficult question by changing the topic.',
        image: './assets/images/flashcards/Others/Skirt.gif'
    },
    {
        word: 'Sluggish',
        mnemonic: 'Lacking energy; slow and listless',
        synonyms: 'Inert, Torpid, Lethargic',
        hint: 'Moving or reacting slowly',
        positivity: 'Negative',
        sentence: 'After a large meal, he felt <u>sluggish</u> and ready for a nap.',
        image: './assets/images/flashcards/Others/Sluggish.gif'
    },
    {
        word: 'Spartan',
        mnemonic: 'Marked by simplicity or frugality',
        synonyms: 'Austere, Stringent, Ascetic',
        hint: 'Minimal and without luxuries',
        positivity: 'Neutral',
        sentence: 'The monk\'s room was <u>spartan</u>, with only essential items.',
        image: './assets/images/flashcards/Others/Spartan.gif'
    },
    {
        word: 'Truculent',
        mnemonic: 'Aggressively combative',
        synonyms: 'Pugnacious, Bellicose, Obstreperous',
        hint: 'Eager or quick to argue or fight',
        positivity: 'Negative',
        sentence: 'The <u>truculent</u> student constantly challenged the teacher\'s authority.',
        image: './assets/images/flashcards/Others/Truculent.gif'
    }
      
  ],
 //Set12
  [

    {
        word: 'Acrimonious',
        mnemonic: 'Bitter and sharp in language',
        synonyms: 'Caustic, Scathing, Astringent',
        hint: 'Characterized by harsh or biting language',
        positivity: 'Negative',
        sentence: 'Their divorce was <u>acrimonious</u>, with both parties hurling insults.',
        image: './assets/images/flashcards/Acrimonious.PNG'
    },
    {
        word: 'Belligerent',
        mnemonic: 'Argumentative or threatening',
        synonyms: 'Pugnacious, Bellicose, Truculent',
        hint: 'Characterized by aggression or hostility',
        positivity: 'Negative',
        sentence: 'His <u>belligerent</u> attitude made it hard to have a calm conversation.',
        image: './assets/images/flashcards/Belligerent.PNG'
    },
    {
        word: 'Beneficent',
        mnemonic: 'Charitable, producing good results',
        synonyms: 'Altruistic, Humanitarian, Benevolent',
        hint: 'Characterized by generosity or kindness',
        positivity: 'Positive',
        sentence: 'The <u>beneficent</u> organization provided meals to the homeless.',
        image: './assets/images/flashcards/Beneficent.PNG'
    },
    {
        word: 'Canny',
        mnemonic: 'Shrewd and cautious; clever',
        synonyms: 'Astute, Discerning, Acute',
        hint: 'Characterized by intelligence and caution',
        positivity: 'Positive',
        sentence: 'Her <u>canny</u> investments made her a millionaire.',
        image: './assets/images/flashcards/Canny.PNG'
    },
    {
        word: 'Cavalier',
        mnemonic: 'Exhibiting a casual attitude; unconcerned',
        synonyms: 'Offhand, Insouciant, Dismissive',
        hint: 'Characterized by a lack of seriousness or care',
        positivity: 'Negative',
        sentence: 'His <u>cavalier</u> dismissal of the issue upset many.',
        image: './assets/images/flashcards/Cavalier.PNG'
    },
    {
        word: 'Distressed',
        mnemonic: 'Experiencing irritation or sadness',
        synonyms: 'Tormented, Perturbed, Afflicted',
        hint: 'Characterized by emotional pain or trouble',
        positivity: 'Negative',
        sentence: 'The <u>distressed</u> child sought comfort from his mother.',
        image: './assets/images/flashcards/Distressed.PNG'
    },
    {
        word: 'Dwindling',
        mnemonic: 'Decreasing steadily in size or quantity',
        synonyms: 'Diminishing, Shrinking, Contracting',
        hint: 'Characterized by gradual reduction or decline',
        positivity: 'Negative',
        sentence: 'The <u>dwindling</u> supplies made survival even more challenging.',
        image: './assets/images/flashcards/Dwindling.PNG'
    },
    {
        word: 'Eclipse',
        mnemonic: 'Overshadow or surpass',
        synonyms: 'Outshine, Outstrip, Upstage',
        hint: 'Characterized by surpassing or overshadowing others',
        positivity: 'Neutral',
        sentence: 'The success of her latest book <u>eclipsed</u> all her previous works.',
        image: './assets/images/flashcards/Eclipse.PNG'
    },
    {
        word: 'Encyclopedic',
        mnemonic: 'Thorough; comprehensive',
        synonyms: 'Exhaustive, Wide-ranging, All-inclusive',
        hint: 'Characterized by vast and detailed knowledge',
        positivity: 'Positive',
        sentence: 'His <u>encyclopedic</u> knowledge of history impressed everyone.',
        image: './assets/images/flashcards/Encyclopedic.PNG'
    },
    {
        word: 'Exacerbate',
        mnemonic: 'Make a situation or condition worse',
        synonyms: 'Inflame, Compound, Aggravate',
        hint: 'Characterized by worsening an already bad situation',
        positivity: 'Negative',
        sentence: 'His shouting only served to <u>exacerbate</u> the argument.',
        image: './assets/images/flashcards/Exacerbate.PNG'
    },
    {
        word: 'Exasperated',
        mnemonic: 'Severely irritated or angry',
        synonyms: 'Infuriated, Enraged, Vexed',
        hint: 'Characterized by extreme frustration or annoyance',
        positivity: 'Negative',
        sentence: 'She was <u>exasperated</u> by the constant interruptions.',
        image: './assets/images/flashcards/Exasperated.PNG'
    },
    {
        word: 'Fungible',
        mnemonic: 'Interchangeable for another item',
        synonyms: 'Exchangeable, Equivalent, Indistinguishable',
        hint: 'Characterized by the ability to be exchanged for something else',
        positivity: 'Neutral',
        sentence: 'Oil and cash are considered <u>fungible</u> commodities.',
        image: './assets/images/flashcards/Fungible.PNG'
    },
    {
        word: 'Hackneyed',
        mnemonic: 'Lacking creativity; derivative and overused',
        synonyms: 'Trite, Banal, Pedestrian',
        hint: 'Often used to describe clichés or overdone expressions',
        positivity: 'Neutral',
        sentence: '"Love at first sight" is a <u>hackneyed</u> plot in romance novels.',
        image: './assets/images/flashcards/Hackneyed.PNG'
    },
    {
        word: 'Incongruous',
        mnemonic: 'Out of place or lacking harmony',
        synonyms: 'Clashing, Jarring, Discordant',
        hint: 'Refers to something that seems unsuitable or inconsistent',
        positivity: 'Neutral',
        sentence: 'The modern building looked <u>incongruous</u> in the historic district.',
        image: './assets/images/flashcards/Incongruous.PNG'
    },
    {
        word: 'Interchangeable',
        mnemonic: 'Capable of being used in place of each other',
        synonyms: 'Fungible, Uniform, Homogeneous',
        hint: 'Describes items or concepts that can substitute for one another',
        positivity: 'Neutral',
        sentence: 'The parts are <u>interchangeable</u> between the different models.',
        image: './assets/images/flashcards/Interchangeable.PNG'
    },
    {
        word: 'Laconic',
        mnemonic: 'Economical with words; quiet',
        synonyms: 'Terse, Pithy, Taciturn',
        hint: 'Describes brief and to-the-point speech',
        positivity: 'Neutral',
        sentence: 'His <u>laconic</u> reply was simply, "No."',
        image: './assets/images/flashcards/Laconic.PNG'
    },
    {
        word: 'Lucrative',
        mnemonic: 'Producing a significant amount of money',
        synonyms: 'Gainful, Remunerative, Fruitful',
        hint: 'Often refers to a highly profitable venture',
        positivity: 'Positive',
        sentence: 'Selling rare antiques can be a <u>lucrative</u> business.',
        image: './assets/images/flashcards/Lucrative.PNG'
    },
    {
        word: 'Magisterial',
        mnemonic: 'Possessing great authority',
        synonyms: 'Masterful, Authoritative, Lordly',
        hint: 'Used to describe authoritative or commanding behavior',
        positivity: 'Neutral',
        sentence: 'The judge spoke in a <u>magisterial</u> tone.',
        image: './assets/images/flashcards/Magisterial.PNG'
    },

    {
        word: 'Onerous',
        mnemonic: 'Involving a heavy burden; challenging',
        synonyms: 'Formidable, Taxing, Herculean',
        hint: 'Characterized by being oppressively difficult or demanding',
        positivity: 'Negative',
        sentence: 'The <u>onerous</u> task of cleaning the entire house was left to her.',
        image: './assets/images/flashcards/Onerous.PNG'
    },
    {
        word: 'Opprobrium',
        mnemonic: 'Severe criticism or public shame',
        synonyms: 'Vilification, Vituperation, Obloquy',
        hint: 'Characterized by extreme disapproval or disgrace',
        positivity: 'Negative',
        sentence: 'He faced <u>opprobrium</u> for his unethical actions.',
        image: './assets/images/flashcards/Opprobrium.PNG'
    },
    {
        word: 'Parsimonious',
        mnemonic: 'Extremely frugal or stingy',
        synonyms: 'Miserly, Stinting, Penurious',
        hint: 'Characterized by extreme unwillingness to spend money',
        positivity: 'Negative',
        sentence: 'His <u>parsimonious</u> habits meant he rarely treated others.',
        image: './assets/images/flashcards/Parsimonious.PNG'
    },
    {
        word: 'Peripheral',
        mnemonic: 'Of marginal importance; minor',
        synonyms: 'Subsidiary, Tangential, Trivial',
        hint: 'Characterized by being secondary or non-essential',
        positivity: 'Neutral',
        sentence: 'The issue was only of <u>peripheral</u> importance to the main discussion.',
        image: './assets/images/flashcards/Peripheral.PNG'
    },
    {
        word: 'Provocative',
        mnemonic: 'Causing irritation, often intentionally',
        synonyms: 'Goading, Affronting, Galling',
        hint: 'Characterized by arousing strong emotions, often deliberately',
        positivity: 'Negative',
        sentence: 'His <u>provocative</u> statements stirred up controversy.',
        image: './assets/images/flashcards/Provocative.PNG'
    },
    {
        word: 'Renounce',
        mnemonic: 'Firmly reject or give up',
        synonyms: 'Forswear, Abjure, Disavow',
        hint: 'Characterized by a formal or deliberate rejection',
        positivity: 'Neutral',
        sentence: 'She decided to <u>renounce</u> her citizenship.',
        image: './assets/images/flashcards/Renounce.PNG'
    },
    {
        word: 'Tempestuous',
        mnemonic: 'Unrestrained and turbulent',
        synonyms: 'Heated, Hysterical, Feverish',
        hint: 'Characterized by intense, stormy emotions or actions',
        positivity: 'Negative',
        sentence: 'Their relationship was <u>tempestuous</u>, with frequent arguments.',
        image: './assets/images/flashcards/Tempestuous.PNG'
    },
    {
        word: 'Tenable',
        mnemonic: '(Of an idea or method) Justifiable and rational',
        synonyms: 'Sound, Plausible, Sustainable',
        hint: 'Characterized by being defensible or reasonable',
        positivity: 'Positive',
        sentence: 'His argument was hardly <u>tenable</u> in the face of clear evidence.',
        image: './assets/images/flashcards/Tenable.PNG'
    },
    {
        word: 'Transgression',
        mnemonic: 'A violation of a law, rule, or social norm',
        synonyms: 'Peccadillo, Misdemeanor, Indiscretion',
        hint: 'Characterized by overstepping boundaries or breaking rules',
        positivity: 'Negative',
        sentence: 'For his <u>transgressions</u>, he was sentenced to community service.',
        image: './assets/images/flashcards/Transgression.PNG'
    },
    {
        word: 'Urbane',
        mnemonic: 'Refined, sophisticated, and courteous',
        synonyms: 'Suave, Debonair, Cultivated',
        hint: 'Characterized by polished, worldly manners',
        positivity: 'Positive',
        sentence: 'He was <u>urbane</u> in manner, making everyone feel comfortable.',
        image: './assets/images/flashcards/Urbane.PNG'
    },
    {
        word: 'Verisimilitude',
        mnemonic: 'Semblance of truth; believability',
        synonyms: 'Authenticity, Credibility, Lifelikeness',
        hint: 'Characterized by appearing real or true',
        positivity: 'Positive',
        sentence: 'The film had an impressive <u>verisimilitude</u> due to its attention to detail.',
        image: './assets/images/flashcards/Verisimilitude.PNG'
    },
    {
        word: 'Vitiate',
        mnemonic: 'Impair or corrupt the quality of something',
        synonyms: 'Taint, Contaminate, Sully',
        hint: 'Characterized by diminishing value or effectiveness',
        positivity: 'Negative',
        sentence: 'Excessive use of clichés will <u>vitiate</u> the effectiveness of a speech.',
        image: './assets/images/flashcards/Vitiate.PNG'
    }
    
  ],
//Set13
  [
    {
        word: 'Affinity',
        mnemonic: 'A natural liking for a person, thing, idea',
        synonyms: 'Penchant, Accord, Inclination toward',
        hint: 'Characterized by a personal or emotional connection',
        positivity: 'Positive',
        sentence: 'He has an <u>affinity</u> for painting, spending hours in his studio.',
        image: './assets/images/flashcards/Affinity.PNG'
    },
    {
        word: 'Altruistic',
        mnemonic: "Show concern for other's welfare",
        synonyms: 'Noble, Benevolent, Magnanimous',
        hint: 'Characterized by selfless care for others',
        positivity: 'Positive',
        sentence: 'The <u>altruistic</u> volunteer spent weekends helping at the homeless shelter.',
        image: './assets/images/flashcards/Altruistic.PNG'
    },
    {
        word: 'Baroque',
        mnemonic: 'Overly detailed or ornamental',
        synonyms: 'Ornate, Extravagant, Rococo',
        hint: 'Characterized by excessive decoration or detail',
        positivity: 'Neutral',
        sentence: 'The dress she wore was <u>baroque</u>, with frills and embroideries everywhere.',
        image: './assets/images/flashcards/Baroque.PNG'
    },
    {
        word: 'Byzantine',
        mnemonic: 'Excessively complicated',
        synonyms: 'Convoluted, Involved, Serpentine',
        hint: 'Characterized by complexity and intricacy',
        positivity: 'Negative',
        sentence: 'Navigating the <u>byzantine</u> regulations required the help of an expert.',
        image: './assets/images/flashcards/Byzantine.PNG'
    },
    {
        word: 'Compromise',
        mnemonic: 'Weaken or diminish in quality or value',
        synonyms: 'Undermine, Jeopardize, Imperil',
        hint: 'Characterized by a reduction in quality or standards',
        positivity: 'Negative',
        sentence: 'Using low-quality ingredients can <u>compromise</u> the dish\'s flavor.',
        image: './assets/images/flashcards/Compromise.PNG'
    },
    {
        word: 'Conciliatory',
        mnemonic: 'Intended to appease or calm someone',
        synonyms: 'Placatory, Pacifying, Mollifying',
        hint: 'Characterized by efforts to reduce tension or hostility',
        positivity: 'Positive',
        sentence: 'His <u>conciliatory</u> gesture helped to resolve the argument.',
        image: './assets/images/flashcards/Conciliatory.PNG'
    },
    {
        word: 'Countenance',
        mnemonic: 'Accept or permit something',
        synonyms: 'Tolerate, Endure, Brook',
        hint: 'Usually relates to approval or tolerance',
        positivity: 'Neutral',
        sentence: 'He wouldn’t <u>countenance</u> any criticism of his decision.',
        image: './assets/images/flashcards/Countenance.PNG'
    },
    {
        word: 'Covert',
        mnemonic: 'Hidden, or not openly practiced',
        synonyms: 'Furtive, Surreptitious, Clandestine',
        hint: 'Relates to something secretive or concealed',
        positivity: 'Neutral',
        sentence: 'The spy was involved in several <u>covert</u> missions.',
        image: './assets/images/flashcards/Covert.PNG'
    },
    {
        word: 'Credible',
        mnemonic: 'Able to be trusted; persuasive',
        synonyms: 'Valid, Tenable, Compelling',
        hint: 'Often used in arguments or evidence',
        positivity: 'Positive',
        sentence: 'The evidence was <u>credible</u> enough to support her case.',
        image: './assets/images/flashcards/Credible.PNG'
    },
    {
        word: 'Diffuse',
        mnemonic: 'Spread or disperse widely',
        synonyms: 'Scatter, Disseminate, Promulgate',
        hint: 'Refers to spreading ideas, light, or substances',
        positivity: 'Neutral',
        sentence: 'The fragrance <u>diffused</u> throughout the room.',
        image: './assets/images/flashcards/Diffuse.PNG'
    },
    {
        word: 'Documentary',
        mnemonic: 'Based on real events or facts',
        synonyms: 'Recorded, Chronicled, Archived',
        hint: 'Commonly associated with films or literature',
        positivity: 'Neutral',
        sentence: 'The film was <u>documentary</u> in nature, capturing the reality of life in that region.',
        image: './assets/images/flashcards/Documentary.PNG'
    },
    {
        word: 'Exhaustive',
        mnemonic: 'Thorough and comprehensive',
        synonyms: 'All-inclusive, Encyclopedic, All-encompassing',
        hint: 'Related to extensive or complete coverage',
        positivity: 'Neutral',
        sentence: 'She conducted an <u>exhaustive</u> review of the literature on the topic.',
        image: './assets/images/flashcards/Exhaustive.PNG'
    },
    {
        word: 'Exhilarating',
        mnemonic: 'Intensely exciting and happy',
        synonyms: 'Thrilling, Intoxicating, Invigorating',
        hint: 'Associated with an exciting and joyful experience',
        positivity: 'Positive',
        sentence: 'The roller coaster ride was an <u>exhilarating</u> experience.',
        image: './assets/images/flashcards/Exhilarating.PNG'
    },
    {
        word: 'Extraneous',
        mnemonic: 'Lacking relevance; unnecessary',
        synonyms: 'Immaterial, Inapposite, Incidental',
        hint: 'Anything irrelevant or not essential',
        positivity: 'Negative',
        sentence: 'Please remove any <u>extraneous</u> information from the report.',
        image: './assets/images/flashcards/Extraneous.PNG'
    },
    {
        word: 'Fervor',
        mnemonic: 'Intense enthusiasm toward something',
        synonyms: 'Ardor, Zeal, Keenness',
        hint: 'Strong emotional excitement or passion',
        positivity: 'Positive',
        sentence: 'The crowd\'s <u>fervor</u> was evident during the final match.',
        image: './assets/images/flashcards/Fervor.PNG'
    },
    {
        word: 'Futile',
        mnemonic: 'Incapable of achieving anything',
        synonyms: 'Fruitless, Ineffectual, Vain',
        hint: 'Something that is pointless or ineffective',
        positivity: 'Negative',
        sentence: 'Despite their efforts, the search proved <u>futile</u>.',
        image: './assets/images/flashcards/Futile.PNG'
    },
    {
        word: 'Illusory',
        mnemonic: 'Unreal or based on illusion',
        synonyms: 'Delusional, Bogus, Sham',
        hint: 'Something that deceives or creates a false perception',
        positivity: 'Negative',
        sentence: 'His sense of victory was <u>illusory</u>, as new challenges awaited.',
        image: './assets/images/flashcards/Illusory.PNG'
    },
    {
        word: 'Invidious',
        mnemonic: 'Likely to cause resentment; unfair',
        synonyms: 'Awkward, Unpleasant, Undesirable',
        hint: 'Actions or words that generate envy or resentment',
        positivity: 'Negative',
        sentence: 'Making an <u>invidious</u> comparison between the two siblings was unfair.',
        image: './assets/images/flashcards/Invidious.PNG'
    },
    {
        word: 'Lethargic',
        mnemonic: 'Sluggish; tired or having little energy',
        synonyms: 'Torpid, Inert, Languid',
        hint: 'Describes a lack of energy or enthusiasm',
        positivity: 'Negative',
        sentence: 'After the heavy meal, he felt <u>lethargic</u> and drowsy.',
        image: './assets/images/flashcards/Lethargic.PNG'
    },
    {
        word: 'Metaphorical',
        mnemonic: 'Symbolic rather than literal',
        synonyms: 'Figurative, Allegorical, Allusive',
        hint: 'Used to represent ideas indirectly',
        positivity: 'Neutral',
        sentence: '"A sea of troubles" is a <u>metaphorical</u> expression.',
        image: './assets/images/flashcards/Metaphorical.PNG'
    },
    {
        word: 'Mimic',
        mnemonic: 'Imitate or copy someone',
        synonyms: 'Emulate, Caricature, Satirize',
        hint: 'Often used to replicate someone’s actions or behavior',
        positivity: 'Neutral',
        sentence: 'He could <u>mimic</u> his favorite actors perfectly.',
        image: './assets/images/flashcards/Mimic.PNG'
    },
    {
        word: 'Numinous',
        mnemonic: 'Having a spiritual or divine quality',
        synonyms: 'Sacred, Otherworldly, Transcendent',
        hint: 'Related to a sense of awe or the divine',
        positivity: 'Positive',
        sentence: 'The church had a <u>numinous</u> aura that calmed the visitors.',
        image: './assets/images/flashcards/Numinous.PNG'
    },
    {
        word: 'Obscure',
        mnemonic: 'Making something unclear and vague',
        synonyms: 'Cloud, Muddy, Obfuscate',
        hint: 'Associated with difficulty in understanding or clarity',
        positivity: 'Neutral',
        sentence: 'He made an <u>obscure</u> reference to an old movie.',
        image: './assets/images/flashcards/Obscure.PNG'
    },
    {
        word: 'Overt',
        mnemonic: 'Observable; not hidden or secret',
        synonyms: 'Plain, Manifest, Patent',
        hint: 'Clearly visible or openly displayed',
        positivity: 'Neutral',
        sentence: 'Her <u>overt</u> criticism was surprising to many.',
        image: './assets/images/flashcards/Overt.PNG'
    },
    {
        word: 'Pellucid',
        mnemonic: 'Transparent; clear and understandable',
        synonyms: 'Limpid, Translucent, Unambiguous',
        hint: 'Associated with clarity or transparency',
        positivity: 'Positive',
        sentence: 'Lake Tahoe is famous for its <u>pellucid</u> water.',
        image: './assets/images/flashcards/Pellucid.PNG'
    },
    {
        word: 'Perpetuate',
        mnemonic: 'Make something continue',
        synonyms: 'Sustain, Maintain, Prolong',
        hint: 'To keep something going or preserve',
        positivity: 'Neutral',
        sentence: 'The movie served to <u>perpetuate</u> the myth of the noble outlaw.',
        image: './assets/images/flashcards/Perpetuate.PNG'
    },
    {
        word: 'Rational',
        mnemonic: 'Based on clear thought or reason',
        synonyms: 'Cogent, Coherent, Judicious',
        hint: 'Related to logical reasoning',
        positivity: 'Positive',
        sentence: 'He made a <u>rational</u> decision after considering all options.',
        image: './assets/images/flashcards/Rational.PNG'
    },
    {
        word: 'Scathing',
        mnemonic: 'Harshly or bitterly critical; vitriolic',
        synonyms: 'Mordant, Blistering, Caustic',
        hint: 'Associated with severe criticism',
        positivity: 'Negative',
        sentence: 'The review was <u>scathing</u>, criticizing every aspect of the product.',
        image: './assets/images/flashcards/Scathing.PNG'
    },
    {
        word: 'Subtle',
        mnemonic: 'Delicate or slight; not obvious',
        synonyms: 'Minute, Understated, Subdued',
        hint: 'Describes something not immediately apparent',
        positivity: 'Positive',
        sentence: 'The dish had a <u>subtle</u> hint of rosemary.',
        image: './assets/images/flashcards/Subtle.PNG'
    },
    {
        word: 'Superficial',
        mnemonic: 'Not profound or thorough',
        synonyms: 'Cursory, Desultory, Perfunctory',
        hint: 'Associated with a lack of depth',
        positivity: 'Negative',
        sentence: 'Sarah gave the car merely a <u>superficial</u> cleaning.',
        image: './assets/images/flashcards/Superficial.PNG'
    }

  ],
//Set14
   [
    
    
        {
            word: 'Acquiesce',
            mnemonic: 'Agree quietly without objection',
            synonyms: 'Abide by, Countenance, Brook',
            hint: 'Implying a quiet or reluctant agreement',
            positivity: 'Neutral',
            sentence: 'Though unhappy with the decision, she chose to <u>acquiesce</u> rather than argue.',
            image: './assets/images/flashcards/Others/abbu.png'
        },
        {
            word: 'Adroit',
            mnemonic: 'Deft, dexterous, or skillful',
            synonyms: 'Agile, Nimble, Quick-witted',
            hint: 'Indicating physical or mental skillfulness',
            positivity: 'Positive',
            sentence: 'The <u>adroit</u> artist created a masterpiece with just a few strokes of paint.',
            image: './assets/images/flashcards/Others/deft.gif'
        },
        {
            word: 'Amend',
            mnemonic: 'Change a document, law, or statement',
            synonyms: 'Revise, Alter, Revamp',
            hint: 'Associated with making improvements or corrections',
            positivity: 'Neutral',
            sentence: 'The company decided to <u>amend</u> its policies to be more environmentally friendly.',
            image: './assets/images/flashcards/Others/change a doccument.png'
        },
        {
            word: 'Animus',
            mnemonic: 'Strong dislike or enmity',
            synonyms: 'Animosity, Malice, Enmity',
            hint: 'Used to describe hostility or ill will',
            positivity: 'Negative',
            sentence: 'There was clear <u>animus</u> between the two rival politicians.',
            image: './assets/images/flashcards/Others/hate.gif'
        },
        {
            word: 'Apologist',
            mnemonic: 'A person who defends or supports something',
            synonyms: 'Advocate, Proponent, Apostle',
            hint: 'Refers to a defender of a cause or idea',
            positivity: 'Neutral',
            sentence: 'As an <u>apologist</u> for the movement, he spent time explaining its principles.',
            image: './assets/images/flashcards/Others/support.gif'
        },
        {
            word: 'Astringent',
            mnemonic: 'Sharp or harsh in demeanor or style',
            synonyms: 'Trenchant, Acerbic, Caustic',
            hint: 'Refers to a tone or manner that is cutting or strict',
            positivity: 'Negative',
            sentence: 'Her critique was <u>astringent</u> but fair.',
            image: './assets/images/flashcards/Others/gali dea.gif'
        },
        {
            word: 'Collaborate',
            mnemonic: 'Work together on a project',
            synonyms: 'Ally, Integrate, Cooperate',
            hint: 'To join forces for a common goal',
            positivity: 'Positive',
            sentence: 'The two authors decided to <u>collaborate</u> on a novel.',
            image: './assets/images/flashcards/Others/Work together.png'
        },
        {
            word: 'Competent',
            mnemonic: 'Having sufficient skill, or qualifications',
            synonyms: 'Adept, Capable, Adroit',
            hint: 'Indicates adequacy or proficiency in a task',
            positivity: 'Positive',
            sentence: 'She is highly <u>competent</u> in her field and respected by her peers.',
            image: './assets/images/flashcards/Others/deft.gif'
        },
        {
            word: 'Correlate',
            mnemonic: 'Show a mutual  mutual relationship',
            synonyms: 'Correspond, Harmonize, Square',
            hint: 'Demonstrates a connection or relation between two things',
            positivity: 'Neutral',
            sentence: 'The study aimed to <u>correlate</u> income levels with educational attainment.',
            image: './assets/images/flashcards/Others/a mutual relation.png'
        },
        {
            word: 'Deride',
            mnemonic: 'Ridicule or mock; make fun of',
            synonyms: 'Jeer at, Pillory, Disparage',
            hint: 'To mock or criticize someone in a dismissive way',
            positivity: 'Negative',
            sentence: 'Critics <u>derided</u> his performance as amateurish.',
            image: './assets/images/flashcards/Others/make fun of something.png'
        },
        {
            word: 'Dictate',
            mnemonic: 'Give orders or commands',
            synonyms: 'Domineer, Lord over, Browbeat',
            hint: 'To command or control decisively',
            positivity: 'Neutral',
            sentence: 'He <u>dictated</u> a letter to his secretary.',
            image: './assets/images/flashcards/Others/dominating over someone.jpg'
        },
        {
            word: 'Discreet',
            mnemonic: 'Respectful of privacy or secrecy',
            synonyms: 'Chary, Circumspect, Unobtrusive',
            hint: 'Someone cautious and reserved in speech or action',
            positivity: 'Positive',
            sentence: 'He made a <u>discreet</u> inquiry about the job opening.',
            image: './assets/images/flashcards/Others/Secrect.gif'
        },
        
        {
            word: 'Divorced',
            mnemonic: 'Separate from something',
            synonyms: 'Disjointed, Severed, Alienated',
            hint: 'Describes a separation or detachment',
            positivity: 'Neutral',
            sentence: 'The author\'s work is completely <u>divorced</u> from reality.',
            image: './assets/images/flashcards/Others/Separate from something.png'
        },
        {
            word: 'Elitist',
            mnemonic: 'A person who believes in the rule of an elite',
            synonyms: 'Snob, Aristocrat, Supremacist',
            hint: 'Refers to exclusivity or privilege based on status',
            positivity: 'Negative',
            sentence: 'As an <u>elitist</u>, he looked down on those he considered unrefined.',
            image: './assets/images/flashcards/Others/elites should be the ruler.png'
        },
        {
            word: 'Exacting',
            mnemonic: 'Requiring a lot of effort or attention',
            synonyms: 'Stringent, Demanding, Onerous',
            hint: 'Implies high standards or great demands',
            positivity: 'Negative',
            sentence: 'The <u>exacting</u> task required precision and patience.',
            image: './assets/images/flashcards/Others/demanding.png'
        },
        {
            word: 'Flummoxed',
            mnemonic: 'Completely unable to understand',
            synonyms: 'Baffled, Bemused, Nonplussed',
            hint: 'Describes a state of confusion or bewilderment',
            positivity: 'Negative',
            sentence: 'The complex equation left the students <u>flummoxed</u>.',
            image: './assets/images/flashcards/Others/diificulat to understand.gif'
        },
        {
            word: 'Fruitful',
            mnemonic: 'Producing good or abundant results',
            synonyms: 'Productive, Gainful, Effectual',
            hint: 'Indicates success or positive outcomes',
            positivity: 'Positive',
            sentence: 'Their partnership proved to be <u>fruitful</u>, leading to many successful projects.',
            image: './assets/images/flashcards/Others/productive.png'
        },
        {
            word: 'Inborn',
            mnemonic: 'Present from birth; innate',
            synonyms: 'Congenital, Inherent, Ingrained',
            hint: 'Describes natural abilities or traits',
            positivity: 'Positive',
            sentence: 'Her <u>inborn</u> talent for music was evident at a young age.',
            image: './assets/images/flashcards/Others/by born talent.png'
        },
        {
            word: 'Polymath',
            mnemonic: 'A person with broad knowledge',
            synonyms: 'Savant, Multi-disciplinarian, Erudite',
            hint: 'Excelling in various fields of study',
            positivity: 'Positive',
            sentence: 'Leonardo da Vinci was a true <u>polymath</u>, excelling in art, science, and engineering.',
            image: './assets/images/flashcards/Others/deep knowledge.gif'
        },
        {
            word: 'Reticent',
            mnemonic: "Keeping one's opinions to oneself; reserved",
            synonyms: 'Inhibited, Diffident, Unassuming',
            hint: 'Describes someone who avoids sharing personal thoughts',
            positivity: 'Neutral',
            sentence: 'Though an expert in his field, he was <u>reticent</u> about his own achievements.',
            image: './assets/images/flashcards/Others/lamia.png'
        },
        {
            word: 'Stringent',
            mnemonic: 'Strict or severe; tight',
            synonyms: 'Rigid, Exacting, Draconian',
            hint: 'Relates to strict rules or conditions',
            positivity: 'Neutral',
            sentence: 'The company has <u>stringent</u> guidelines for safety.',
            image: './assets/images/flashcards/Others/Stern.gif'
        },
        {
            word: 'Subservient',
            mnemonic: 'Obedient to other people; minor',
            synonyms: 'Submissive, Deferential, Servile',
            hint: 'Indicates a lack of independence or authority',
            positivity: 'Negative',
            sentence: 'He had a <u>subservient</u> attitude that made him an easy target for manipulation.',
            image: './assets/images/flashcards/Others/Onner kotha moto chola.png'
        },
        {
            word: 'Surreptitious',
            mnemonic: 'Done secretly or stealthily',
            synonyms: 'Clandestine, Furtive, Covert',
            hint: 'Something done in secrecy to avoid notice',
            positivity: 'Neutral',
            sentence: 'He took a <u>surreptitious</u> glance at his watch during the meeting.',
            image: './assets/images/flashcards/Others/Secrect.gif'
        },
        {
            word: 'Tantalizing',
            mnemonic: 'Arousing desire without fulfillment',
            synonyms: 'Teasing, Tormenting, Enticing',
            hint: 'Something that excites but remains out of reach',
            positivity: 'Neutral',
            sentence: 'The smell of freshly baked cookies was <u>tantalizing</u>.',
            image: './assets/images/flashcards/Others/asa jagano kintu na hoa.png'
        },
        {
            word: 'Tantamount',
            mnemonic: 'Equivalent in effect or value',
            synonyms: 'On par with, Amounting to, Commensurate with',
            hint: 'Having the same impact or meaning as something else',
            positivity: 'Neutral',
            sentence: 'His silence was <u>tantamount</u> to an admission of guilt.',
            image: './assets/images/flashcards/Others/equal to something.png'
        },
        {
            word: 'Torpor',
            mnemonic: 'A state of apathy or lethargy',
            synonyms: 'Inertia, Languor, Idleness',
            hint: 'A feeling of sluggishness or lack of energy',
            positivity: 'Neutral',
            sentence: 'The long, hot summer days led to a general <u>torpor</u> among the town\'s residents.',
            image: './assets/images/flashcards/Others/Soporific.gif'
        },
        {
            word: 'Trenchant',
            mnemonic: 'Keen and biting; vigorously articulate',
            synonyms: 'Cutting, Penetrating, Mordant',
            hint: 'A sharp, incisive, or vigorous way of expression',
            positivity: 'Neutral',
            sentence: 'She was known for her <u>trenchant</u> wit and clever repartees.',
            image: './assets/images/flashcards/Others/rude behave.jpg'
        },
        {
            word: 'Umbrage',
            mnemonic: 'A feeling of anger or annoyance',
            synonyms: 'Indignation, Vexation, Chagrin',
            hint: 'Feeling offended or annoyed at something',
            positivity: 'Negative',
            sentence: 'She took <u>umbrage</u> at his rude comment.',
            image: './assets/images/flashcards/Others/Anger.gif'
        },
        {
            word: 'Versatile',
            mnemonic: 'Capable of doing many things',
            synonyms: 'Adaptable, Multifaceted, Protean',
            hint: 'Ability to adapt to many functions or activities',
            positivity: 'Positive',
            sentence: 'He\'s a <u>versatile</u> actor who has played roles in both comedies and dramas.',
            image: './assets/images/flashcards/Others/Multitasking.png'
        },
        {
            word: 'Wayward',
            mnemonic: 'difficult to control or predict because of self wilful or perverse behaviour',
            synonyms: 'Bullheaded, Dogged, Incalcitrant',
            hint: 'Behaving unpredictably, often against expectations',
            positivity: 'Negative',
            sentence: 'The <u>wayward</u> child often disobeyed and wandered off on his own.',
            image: './assets/images/flashcards/Others/stubborn.gif'
        }


   ],
//Set15
   [
    {
        word: 'Alienate',
        mnemonic: 'Make someone feel isolated',
        synonyms: 'Sever, Drive a Wedge, Disunite',
        hint: 'Characterized by creating separation or isolation',
        positivity: 'Negative',
        sentence: 'His behavior began to alienate his friends and family.',
        image: './assets/images/flashcards/Others/Onner kotha moto chola.png'
    },
    {
        word: 'Apathy',
        mnemonic: 'Lack of interest towards something',
        synonyms: 'Indifference, Passivity, Phlegm',
        hint: 'Characterized by lack of concern or feeling',
        positivity: 'Negative',
        sentence: 'The team\'s losing streak led to apathy among the fans.',
        image: './assets/images/flashcards/Others/careless.gif'
    },
    {
        word: 'Apropos',
        mnemonic: 'Appropriate to the situation',
        synonyms: 'Pertinent, Apt, Apposite',
        hint: 'Characterized by relevance or appropriateness',
        positivity: 'Positive',
        sentence: 'The quote she used in her speech was apropos for the current events.',
        image: './assets/images/flashcards/Others/something that is appropriate.png'
    },
    {
        word: 'Apt',
        mnemonic: '(1) Suitable; (2) Skilled; (3) Likely to do',
        synonyms: 'Applicable, Adept, Liable',
        hint: 'Characterized by suitability or likelihood',
        positivity: 'Positive',
        sentence: 'The documentary was an apt choice for the history class.',
        image: './assets/images/flashcards/Others/deft.gif'
    },
    {
        word: 'Cloak',
        mnemonic: 'Hide something; conceal or disguise',
        synonyms: 'Veil, Shroud, Mask',
        hint: 'Characterized by concealment or disguise',
        positivity: 'Neutral',
        sentence: 'The spy used a fake identity to cloak his true intentions.',
        image: './assets/images/flashcards/Others/hide something.png'
    },
    {
        word: 'Consensus',
        mnemonic: 'General agreement among a group',
        synonyms: 'Concord, Accord, Harmony',
        hint: 'Characterized by unity in decision-making',
        positivity: 'Positive',
        sentence: 'The group reached a consensus after much debate.',
        image: './assets/images/flashcards/Others/agreement.png'
    },
    {
        word: 'Distort',
        mnemonic: 'Give a false or misleading account',
        synonyms: 'Manipulate, Skew, Warp',
        hint: 'Characterized by misrepresentation or alteration',
        positivity: 'Negative',
        sentence: 'The article distorts the truth to push an agenda.',
        image: './assets/images/flashcards/Others/false aquision.gif'
    },
    {
        word: 'Divergent',
        mnemonic: 'Growing further apart; disagreeing',
        synonyms: 'Disparate, Antithetical, Clashing',
        hint: 'Characterized by differences or dissimilarity',
        positivity: 'Neutral',
        sentence: 'They held divergent opinions on the issue.',
        image: './assets/images/flashcards/Others/diverge.gif'
    },
    {
        word: 'Elated',
        mnemonic: 'Immensely happy or proud',
        synonyms: 'Ecstatic, Jubilant, Euphoric',
        hint: 'Characterized by extreme joy or pride',
        positivity: 'Positive',
        sentence: 'She was elated after getting the promotion.',
        image: './assets/images/flashcards/Others/alacrity.gif'
    },
    {
        word: 'Enchant',
        mnemonic: 'Capture the attention; to charm',
        synonyms: 'Captivate, Dazzle, Beguile',
        hint: 'Characterized by charm or fascination',
        positivity: 'Positive',
        sentence: 'The music seemed to enchant her, as she lost herself in its melody.',
        image: './assets/images/flashcards/Others/Compelling.gif'
    },
    {
        word: 'Entrenched',
        mnemonic: 'Firmly ingrained; unlikely to change',
        synonyms: 'Rooted, Indelible, Immutable',
        hint: 'Characterized by deep-rootedness or permanence',
        positivity: 'Neutral',
        sentence: 'His opinions were so entrenched that no one could change his mind.',
        image: './assets/images/flashcards/Others/constant.png'
    },
    {
        word: 'Exotic',
        mnemonic: 'Foreign, especially in an exciting way',
        synonyms: 'Striking, Unconventional, Peculiar',
        hint: 'Characterized by unfamiliarity or rarity',
        positivity: 'Positive',
        sentence: 'The garden was filled with exotic flowers.',
        image: './assets/images/flashcards/Others/exotic.gif'
    },
    {
        word: 'Exploitative',
        mnemonic: 'Take advantage of someone unfairly',
        synonyms: 'Predatory, Opportunistic, Extortionate',
        hint: 'Characterized by taking unfair advantage',
        positivity: 'Negative',
        sentence: 'The company was criticized for its exploitative practices.',
        image: './assets/images/flashcards/Others/take advantage of something.png'
    },
    {
        word: 'Foreseeable',
        mnemonic: 'Able to be predicted or expected',
        synonyms: 'Anticipated, Projected, Presumable',
        hint: 'Characterized by predictability',
        positivity: 'Neutral',
        sentence: 'No solution was in the foreseeable future, so they decided to pause and reconsider.',
        image: './assets/images/flashcards/Others/describe future.gif'
    },
    {
        word: 'Forsake',
        mnemonic: 'Abandon or give up completely',
        synonyms: 'Shun, Renounce, Forgo',
        hint: 'Characterized by leaving behind or giving up',
        positivity: 'Negative',
        sentence: 'He decided to forsake his old habits.',
        image: './assets/images/flashcards/Others/giveup something.png'
    },
    {
        word: 'Gratify',
        mnemonic: 'Please or satisfy; make content',
        synonyms: 'Gladden, Indulge, Quench',
        hint: 'Characterized by fulfillment or satisfaction',
        positivity: 'Positive',
        sentence: 'Seeing his students succeed was enough to gratify the old teacher.',
        image: './assets/images/flashcards/Others/please or satisfy someone.png'
    },
    {
        word: 'Heed',
        mnemonic: 'Mind or regard with care; pay attention',
        synonyms: 'Mind, Follow, Consider',
        hint: 'Characterized by careful attention or observance',
        positivity: 'Neutral',
        sentence: 'The hiker failed to heed warnings about the dangerous trail.',
        image: './assets/images/flashcards/Others/pay attention.png'
    },
    {
        word: 'Judicious',
        mnemonic: 'Characterized by good judgment',
        synonyms: 'Prudent, Shrewd, Canny',
        hint: 'Characterized by wise decision-making',
        positivity: 'Positive',
        sentence: 'In handling the dispute, her judicious approach was appreciated by all parties involved.',
        image: './assets/images/flashcards/Others/good judgement.png'
    },
    {
        word: 'Lucid',
        mnemonic: 'Clear and easy to understand',
        synonyms: 'Intelligible, Cogent, Articulate',
        hint: 'Characterized by clarity',
        positivity: 'Positive',
        sentence: 'The explanation was lucid and concise.',
        image: './assets/images/flashcards/Others/able to understand.gif'
    },
    {
        word: 'Pertinent',
        mnemonic: 'Important; relevant to the matter',
        synonyms: 'Material, Apt, Germane',
        hint: 'Characterized by relevance',
        positivity: 'Neutral',
        sentence: 'She provided data pertinent to the case, shedding light on the mystery.',
        image: './assets/images/flashcards/Others/something that is appropriate.png'
    },
    {
        word: 'Propriety',
        mnemonic: 'Conformity to proper behavior',
        synonyms: 'Decorum, Etiquette, Discretion',
        hint: 'Characterized by social correctness or appropriateness',
        positivity: 'Positive',
        sentence: 'In the royal court, one had to act with the utmost propriety.',
        image: './assets/images/flashcards/Others/Decorum.gif'
    },
    {
        word: 'Scintillating',
        mnemonic: 'Impressively clever, exciting, amusing',
        synonyms: 'Vivacious, Dazzling, Coruscating',
        hint: 'Characterized by brilliance or liveliness',
        positivity: 'Positive',
        sentence: 'She gave a scintillating performance on stage.',
        image: './assets/images/flashcards/Others/Compelling.gif'
    },
    {
        word: 'Sensational',
        mnemonic: 'Exaggerated for effect',
        synonyms: 'Overdramatized, Lurid, Melodramatic',
        hint: 'Characterized by drama or exaggeration',
        positivity: 'Neutral',
        sentence: 'The magazine is known for its sensational headlines.',
        image: './assets/images/flashcards/Others/til re tal banano.png'
    },
    {
        word: 'Sophisticated',
        mnemonic: 'Experienced, worldly, cultured',
        synonyms: 'Cosmopolitan, Cultivated, Urbane',
        hint: 'Characterized by elegance or refinement',
        positivity: 'Positive',
        sentence: 'His sophisticated taste in art and music suggested a worldly sensibility.',
        image: './assets/images/flashcards/Others/smart.gif'
    },
    {
        word: 'Strife',
        mnemonic: 'Conflict or struggle',
        synonyms: 'Friction, Discord, Dissension',
        hint: 'Characterized by contention or rivalry',
        positivity: 'Negative',
        sentence: 'The political strife in the country was concerning.',
        image: './assets/images/flashcards/Others/conflict.gif'
    },
    {
        word: 'Understated',
        mnemonic: 'Expressed in subtle, restrained manners',
        synonyms: 'Reserved, Modest, Discreet',
        hint: 'Characterized by subtlety or understatement',
        positivity: 'Positive',
        sentence: 'His understated charm was often more appealing than overt gestures.',
        image: './assets/images/flashcards/Others/lamia.png'
    },
    {
        word: 'Unscrupulous',
        mnemonic: 'Without moral principles',
        synonyms: 'Amoral, Reprobate, Shameless',
        hint: 'Characterized by lack of integrity',
        positivity: 'Negative',
        sentence: 'The unscrupulous merchant was known to overcharge unsuspecting tourists.',
        image: './assets/images/flashcards/Others/morally bad.png'
    },
    {
        word: 'Veracity',
        mnemonic: 'Conformity to truth or accuracy',
        synonyms: 'Exactness, Authenticity, Fidelity',
        hint: 'Characterized by truthfulness or accuracy',
        positivity: 'Positive',
        sentence: 'The journalist questioned the veracity of the politician\'s claims.',
        image: './assets/images/flashcards/Others/naniiiiii.gif'
    },
    {
        word: 'Virulent',
        mnemonic: 'Extremely hostile or malicious',
        synonyms: 'Vitriolic, Malevolent, Spiteful',
        hint: 'Characterized by intense hostility',
        positivity: 'Negative',
        sentence: 'The article had a virulent tone, attacking everyone with a differing opinion.',
        image: './assets/images/flashcards/Others/rude behave.jpg'
    },
    {
        word: 'Volatile',
        mnemonic: 'Likely to change unpredictably',
        synonyms: 'Explosive, Fraught, Turbulent',
        hint: 'Characterized by instability or rapid change',
        positivity: 'Neutral',
        sentence: 'The situation at the border remained volatile, with tensions rising daily.',
        image: './assets/images/flashcards/Others/changable not fixed.png'
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

