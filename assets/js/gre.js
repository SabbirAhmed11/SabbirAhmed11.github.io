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
            hint: 'Safwan er cancer current status',  
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
            hint: 'Mirpur 10 no Metro Station Currently',  
            positivity: 'Neutral',  
            sentence: '"The project was held in <u>abeyance</u> until funding could be secured."', 
            image: './assets/images/flashcards/Set1/abeyance.jpg'  
        },
        
        {
            word: 'abscond',  
            mnemonic: 'leave hurriedly and secretly, typically to avoid detection.',  
            synonyms: 'Flee, Escape, Bolt',  
            hint: 'Seikh Hasina',  
            positivity: 'Negative',  
            sentence: '"The thief <u>absconded</u> with the jewels before anyone noticed."', 
            image: './assets/images/flashcards/Set1/abscond.gif'  
        },
        
        {
            word: 'abstemious',  
            mnemonic: 'self-indulgent, especially when eating and drinking.',  
            synonyms: 'Moderate, Temperate, Restrained',  
            hint: 'MAksim viaa Khabaer khetre',  
            positivity: 'Neutral',  
            sentence: '"He lived an <u>abstemious</u> life, avoiding all forms of indulgence."', 
            image: './assets/images/flashcards/Set1/abstemious.jpg'  
        },
        
        {
            word: 'admonish',  
            mnemonic: 'warn or reprimand someone firmly.',  
            synonyms: 'Rebuke, Scold, Reprimand',  
            hint: 'Ammu amke chotobelay kisu hoiele',  
            positivity: 'Neutral/Negative',  
            sentence: '"The teacher <u>admonished</u> the students for their lack of attention in class."', 
            image: './assets/images/flashcards/Set1/admonish.gif'  
        },
        
        {
            word: 'aggregate',  
            mnemonic: 'a whole formed by combining several (typically disparate) elements.',  
            synonyms: 'Total, Sum, Collection',  
            hint: 'Farewell upolokkhe Chanda Tola ',  
            positivity: 'Neutral',  
            sentence: '"The data was <u>aggregated</u> from multiple sources to provide a comprehensive report."', 
            image: './assets/images/flashcards/Set1/aggregate.jpeg'  
        },
        
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
            word: 'defy',  
            mnemonic: 'openly resist or refuse to obey.',  
            synonyms: 'Resist, Confront, Challenge',  
            hint: 'ami hr jkhno rules dile ja kori',  
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
            word: 'soothe',  
            mnemonic: 'gently calm (a person or their feelings).',  
            synonyms: 'Calm, Pacify, Comfort',  
            hint: 'bachha kadle ja kore sobai',  
            positivity: 'Positive',  
            sentence: '"She played soft music to <u>soothe</u> the crying baby."', 
            image: './assets/images/flashcards/Set1/soothe.gif'  
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
            word: 'perverse',  
            mnemonic: 'showing a deliberate and obstinate desire to behave in a way that is unreasonable or unacceptable.',  
            synonyms: 'Contrary, Awkward, Difficult',  
            hint: 'Mouer blood Onnoke Choto kre Nijek Ja mne kore',  
            positivity: 'Negative',  
            sentence: '"She took a <u>perverse</u> pleasure in proving everyone wrong."', 
            image: './assets/images/flashcards/Set1/perverse.gif'  
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
            word: 'hyperbole',
            mnemonic: 'Exaggerated statements not meant to be taken literally',
            synonyms: 'Exaggeration, Overstatement, Amplification',
            hint: 'mansuer matha manus khaitese',
            positivity: 'Neutral',
            sentence: 'His description of the event was filled with <u>hyperbole</u>, claiming it was the most amazing thing ever.',
            image: './assets/images/flashcards/Set2/hyperbole.gif'
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
            word: 'stoic',
            mnemonic: 'Enduring pain or hardship without showing feelings or complaining',
            synonyms: 'Resilient, Unemotional, Impassive, Indifferent',
            hint: 'Abbu',
            positivity: 'Positive',
            sentence: 'Despite the injury, she remained <u>stoic</u>, refusing to let the pain overwhelm her.',
            image: './assets/images/flashcards/Set2/stoic.gif'
        },
        {
            word: 'omnipresent',
            mnemonic: 'Present everywhere at the same time',
            synonyms: 'Ubiquitous, Pervasive, Universal',
            hint: 'Allah',
            positivity: 'Neutral',
            sentence: 'In the modern world, technology seems <u>omnipresent</u>, from homes to workplaces.',
            image: './assets/images/flashcards/Set2/omnipresent.jpg'
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
            word: 'indefatigable',
            mnemonic: 'Incapable of being tired out, persistently energetic',
            synonyms: 'Tireless, Unflagging, Unrelenting',
            hint: 'yousuf',
            positivity: 'Positive',
            sentence: 'Her <u>indefatigable</u> efforts to raise funds for the charity inspired everyone around her.',
            image: './assets/images/flashcards/Set2/Indefatigable.gif'
        },
        {
            word: 'accentuate',
            mnemonic: 'Make more noticeable or prominent',
            synonyms: 'Highlight, Emphasize, Stress, Amplify',
            hint: 'Boi ami jmn vabe portam',
            positivity: 'Positive',
            sentence: 'The lighting <u>accentuated</u> the dramatic features of the painting, making it the center of attention.',
            image: './assets/images/flashcards/Set2/accentuate.jpeg'
        },
        {
            word: 'wane',
            mnemonic: 'To decrease in size, extent, or degree',
            synonyms: 'Diminish, Decline, Fade, Recede',
            hint: 'Fading or shrinking away',
            positivity: 'Neutral',
            sentence: 'As the night progressed, his enthusiasm for the party began to <u>wane</u>.',
            image: './assets/images/flashcards/Set2/wane.gif'
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
            word: 'fastidious',
            mnemonic: 'Very attentive to detail and accuracy',
            synonyms: 'Meticulous, Picky, Perfectionist, Exacting',
            hint: 'Ammu jkno jinis e',
            positivity: 'Negative',
            sentence: 'She was <u>fastidious</u> about organizing her desk, ensuring that every item was in its proper place.',
            image: './assets/images/flashcards/Set2/fastidious.jpeg'
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
            word: 'indiscriminate',
            mnemonic: 'Done at random or without careful judgment',
            synonyms: 'Random, Haphazard, Arbitrary, Unselective',
            hint: 'Without careful choice',
            positivity: 'Negative',
            sentence: 'The <u>indiscriminate</u> firing of employees led to confusion and resentment throughout the company.',
            image: './assets/images/flashcards/Set2/indiscriminate.jpg'
        },
        {
            word: 'malleable',
            mnemonic: 'Easily shaped or molded',
            synonyms: 'Flexible, Adaptable, Pliable',
            hint: 'Water',
            positivity: 'Neutral',
            sentence: 'A <u>malleable</u> metal can be beaten into a sheet.',
            image: './assets/images/flashcards/Set2/malleable.gif'
        },
        {
            word: 'indispensable',
            mnemonic: 'Absolutely necessary or essential',
            synonyms: 'Essential, Crucial, Vital, Imperative',
            hint: 'Lamia to me',
            positivity: 'Positive',
            sentence: 'Good communication skills are <u>indispensable</u> for a successful career in management.',
            image: './assets/images/flashcards/Set2/indispensable.gif'
        },
        {
            word: 'hodgepodge',
            mnemonic: 'A confused mixture',
            synonyms: 'Mixture, Jumble, Medley, Patchwork',
            hint: 'Keka Ferdowsy\'s Recipe',
            positivity: 'Neutral',
            sentence: 'The drawer was a <u>hodgepodge</u> of random objects, from old batteries to receipts.',
            image: './assets/images/flashcards/Set2/hodgepodge.gif'
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
            word: 'elicit',
            mnemonic: 'To draw out a response or reaction',
            synonyms: 'Evoke, Extract, Bring out, Obtain',
            hint: 'Getting an answer or response',
            positivity: 'Neutral',
            sentence: 'The detective\'s questions were designed to <u>elicit</u> more details about the suspect\'s whereabouts.',
            image: './assets/images/flashcards/Set2/elict.gif'
        },
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
            word: 'transient',
            mnemonic: 'Lasting only for a short time',
            synonyms: 'Temporary, Fleeting, Short-lived, Ephemeral',
            hint: 'Something short-lived',
            positivity: 'Neutral',
            sentence: 'The drug may have <u>transient</u> side effects.',
            image: './assets/images/flashcards/Set2/transient.gif'
        },
        {
            word: 'imperious',
            mnemonic: 'Arrogantly domineering or overbearing',
            synonyms: 'Authoritative, Commanding, Overbearing, Bossy',
            hint: 'Ami to others',
            positivity: 'Negative',
            sentence: 'His <u>imperious</u> tone made it clear that he expected everyone to follow his orders without question.',
            image: './assets/images/flashcards/Set2/imperiosu.jpg'
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
            word: 'timorous',
            mnemonic: 'Showing or suffering from nervousness or lack of confidence',
            synonyms: 'Fearful, Shy, Apprehensive, Hesitant',
            hint: 'Lamia pakhi khola dekhle',
            positivity: 'Negative',
            sentence: 'The <u>timorous</u> rabbit stayed hidden under the bush, afraid to venture out into the open.',
            image: './assets/images/flashcards/Set2/timorous.jpg'
        },
        {
            word: 'circumspect',
            mnemonic: 'Wary and unwilling to take risks',
            synonyms: 'Cautious, Prudent, Careful, Vigilant',
            hint: 'Ammu jkno jinis e',
            positivity: 'Neutral',
            sentence: 'She was <u>circumspect</u> in her approach to the negotiations, making sure not to give away too much too soon.',
            image: './assets/images/flashcards/Set2/circumspect.webp'
        },
        {
            word: 'tortuous',
            mnemonic: 'Full of twists and turns',
            synonyms: 'Winding, Twisting, Meandering, Convoluted',
            hint: 'sajeker Rasta',
            positivity: 'Neutral',
            sentence: 'The <u>tortuous</u> road through the mountains made for a challenging drive.',
            image: './assets/images/flashcards/Set2/tortuous.jpg'
        },
        {
            word: 'extravagant',
            mnemonic: 'Lacking restraint in spending money or using resources',
            synonyms: 'Lavish, Excessive, Immoderate, Over-the-top',
            hint: 'Spending or using too much',
            positivity: 'Negative',
            sentence: 'His <u>extravagant</u> lifestyle, filled with luxury cars and private jets, soon led to financial trouble.',
            image: './assets/images/flashcards/Set2/extravagant.webp'
        },
        {
            word: 'robust',
            mnemonic: 'Strong and healthy',
            synonyms: 'Strong, Sturdy, Vigorous, Hardy',
            hint: 'Full of strength',
            positivity: 'Positive',
            sentence: 'The old oak tree was still <u>robust</u> despite standing for over a hundred years.',
            image: './assets/images/flashcards/Set2/robust.gif'
        },
        {
            word: 'utterly',
            mnemonic: 'Completely or absolutely',
            synonyms: 'Completely, Totally, Fully, Entirely',
            hint: 'To the fullest extent',
            positivity: 'Neutral',
            sentence: 'She was <u>utterly</u> exhausted after working all night to finish the project.',
            image: './assets/images/flashcards/Set2/utterly.gif'
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
            word: 'evasive',
            mnemonic: 'Avoiding direct answers or actions',
            synonyms: 'Elusive, Vague, Ambiguous, Indirect',
            hint: 'Avoiding directness',
            positivity: 'Negative',
            sentence: 'The politician gave an <u>evasive</u> answer when asked about her stance on the controversial issue.',
            image: './assets/images/flashcards/Set2/evasive.gif'
        },
        {
            word: 'sanguine',
            mnemonic: 'Optimistic or positive, especially in difficult situations',
            synonyms: 'Optimistic, Hopeful, Confident, Upbeat',
            hint: 'Always seeing the positive side',
            positivity: 'Positive',
            sentence: 'Even during the crisis, he remained <u>sanguine</u>, confident that things would eventually improve.',
            image: './assets/images/flashcards/Set2/sanguine.gif'
        },
        {
            word: 'copious',
            mnemonic: 'Abundant in supply or quantity',
            synonyms: 'Abundant, Plentiful, Ample, Overflowing',
            hint: 'A lot of something',
            positivity: 'Positive',
            sentence: 'The <u>copious</u> amount of information in the report made it difficult to sort through all the details.',
            image: './assets/images/flashcards/Set2/copious.jpeg'
        },
        {
            word: 'forestall',
            mnemonic: 'Prevent or obstruct by taking action ahead of time',
            synonyms: 'Prevent, Preempt, Obstruct, Hinder',
            hint: 'Taking action to stop something before it happens',
            positivity: 'Neutral',
            sentence: 'The government took steps to <u>forestall</u> a recession by enacting new fiscal policies.',
            image: './assets/images/flashcards/Set2/forestall.jpeg'
        },
        {
            word: 'dearth',
            mnemonic: 'A scarcity or lack of something',
            synonyms: 'Shortage, Lack, Deficiency, Scarcity',
            hint: 'Not enough of something',
            positivity: 'Negative',
            sentence: 'There is a <u>dearth</u> of affordable housing in the city, leaving many people struggling to find homes.',
            image: './assets/images/flashcards/Set2/dearth.jpg'
        }
        
        


    ],
    // Set 2 // Akahne Code Paste korba. Demo 2 ta kora ase
    [
        {
            word: 'Shackle',   
            mnemonic: 'A device that restricts movement; to restrain.',   
            synonyms: 'Restraint, Bond',  
            hint: 'To bind or restrict',  
            positivity: 'Negative',  
            sentence: '"The prisoner was held in a shackle."', 
            image: './assets/images/flashcards/Set2F/shackle.gif'   
        },
        {
            word: 'Roster',   
            mnemonic: 'A list of names; a schedule of duties.',   
            synonyms: 'List, Schedule',  
            hint: 'A lineup',  
            positivity: 'Neutral',  
            sentence: '"The team’s roster was posted on the wall."', 
            image: './assets/images/flashcards/Set2F/roster.gif'   
        },
        {
            word: 'Hypocritical',   
            mnemonic: 'Behaving in a way that suggests one has higher standards than is the case.',   
            synonyms: 'Two-faced, Insincere',  
            hint: 'False appearance',  
            positivity: 'Negative',  
            sentence: '"It was hypocritical of him to criticize her actions while doing the same."', 
            image: './assets/images/flashcards/Set2F/hypocritical.gif'   
        },
        {
            word: 'Allegiance',   
            mnemonic: 'Loyalty or commitment to a group or cause.',   
            synonyms: 'Loyalty, Fidelity',  
            hint: 'A bond of loyalty',  
            positivity: 'Positive',  
            sentence: '"The soldiers swore allegiance to their country."', 
            image: './assets/images/flashcards/Set2F/Allegiance.gif'   
        },
        {
            word: 'Homage',   
            mnemonic: 'Respect or honor shown publicly.',   
            synonyms: 'Tribute, Respect',  
            hint: 'A public display of honor',  
            positivity: 'Positive',  
            sentence: '"The statue was built as a homage to the heroes."', 
            image: './assets/images/flashcards/Set2F/Homage.gif'   
        },
        {
            word: 'Odorous',   
            mnemonic: 'Having a strong smell, often unpleasant.',   
            synonyms: 'Fragrant, Scented',  
            hint: 'Smelly',  
            positivity: 'Negative',  
            sentence: '"The garbage was odorous and needed to be taken out."', 
            image: './assets/images/flashcards/Set2F/Odorous.gif'   
        },
        {
            word: 'Scorch',   
            mnemonic: 'To burn the surface of something; to criticize severely.',   
            synonyms: 'Burn, Sear',  
            hint: 'To singe',  
            positivity: 'Negative',  
            sentence: '"The sun can scorch your skin if you\'re not careful."', 
            image: './assets/images/flashcards/Set2F/Scorch.gif'   
        },
        {
            word: 'Dismantle',   
            mnemonic: 'To take apart; to remove machinery or equipment.',   
            synonyms: 'Disassemble, Deconstruct',  
            hint: 'To break down',  
            positivity: 'Neutral',  
            sentence: '"They decided to dismantle the old playground."', 
            image: './assets/images/flashcards/Set2F/Dismantle.gif'   
        },
        {
            word: 'Lavish',   
            mnemonic: 'Sumptuously rich, elaborate, or luxurious.',   
            synonyms: 'Extravagant, Sumptuous',  
            hint: 'Luxuriously abundant',  
            positivity: 'Positive',  
            sentence: '"They hosted a lavish party for their anniversary."', 
            image: './assets/images/flashcards/Set2F/Lavish.gif'   
        },
        {
            word: 'Assimilate',   
            mnemonic: 'To absorb and integrate new ideas or culture.',   
            synonyms: 'Integrate, Absorb',  
            hint: 'To blend into',  
            positivity: 'Positive',  
            sentence: '"Immigrants often assimilate into their new communities."', 
            image: './assets/images/flashcards/Set2F/Assimilate.gif'   
        },
        {
            word: 'Pliant',   
            mnemonic: 'Easily bent or flexible; adaptable.',   
            synonyms: 'Flexible, Compliant',  
            hint: 'Easily influenced',  
            positivity: 'Positive',  
            sentence: '"The pliant material was perfect for crafting."', 
            image: './assets/images/flashcards/Set2F/Pliant.gif'   
        },
        {
            word: 'Distrait',   
            mnemonic: 'Inattentive or preoccupied; distracted.',   
            synonyms: 'Absent-minded, Preoccupied',  
            hint: 'Lost in thought',  
            positivity: 'Neutral',  
            sentence: '"She seemed distrait during the meeting."', 
            image: './assets/images/flashcards/Set2F/Distrait.gif'   
        },
        {
            word: 'Disheveled',   
            mnemonic: 'Untidy or disordered in appearance.',   
            synonyms: 'Unkempt, Messy',  
            hint: 'Disorganized',  
            positivity: 'Negative',  
            sentence: '"He arrived looking disheveled after the long trip."', 
            image: './assets/images/flashcards/Set2F/Disheveled.gif'   
        },
        {
            word: 'Address',   
            mnemonic: 'To speak to; to direct a speech or written communication to someone.',   
            synonyms: 'Speak to, Direct',  
            hint: 'To speak formally',  
            positivity: 'Neutral',  
            sentence: '"The president will address the nation tonight."', 
            image: './assets/images/flashcards/Set2F/Address.gif'   
        },
        {
            word: 'Replicate',   
            mnemonic: 'To make an exact copy of something.',   
            synonyms: 'Duplicate, Reproduce',  
            hint: 'To recreate',  
            positivity: 'Neutral',  
            sentence: '"Scientists aim to replicate the experiment\'s results."', 
            image: './assets/images/flashcards/Set2F/Replicate.gif'   
        },
        {
            word: 'Incommodious',   
            mnemonic: 'Causing inconvenience or discomfort; cramped.',   
            synonyms: 'Uncomfortable, Cramped',  
            hint: 'Not spacious',  
            positivity: 'Negative',  
            sentence: '"The incommodious room was hard to move around in."', 
            image: './assets/images/flashcards/Set2F/Incommodious.jfif'   
        },
        {
            word: 'Deviate',   
            mnemonic: 'To depart from an established course or norm.',   
            synonyms: 'Diverge, Stray',  
            hint: 'To veer off path',  
            positivity: 'Neutral',  
            sentence: '"It\'s okay to deviate from the plan if needed."', 
            image: './assets/images/flashcards/Set2F/Deviate.gif'   
        },
        {
            word: 'Skirmish',   
            mnemonic: 'A minor battle or conflict.',   
            synonyms: 'Clash, Altercation',  
            hint: 'A small fight',  
            positivity: 'Neutral',  
            sentence: '"The two teams had a skirmish during practice."', 
            image: './assets/images/flashcards/Set2F/Skirmish.gif'   
        },
        {
            word: 'Serendipity',   
            mnemonic: 'The occurrence of events by chance in a happy way.',   
            synonyms: 'Luck, Fortune',  
            hint: 'Happy accident',  
            positivity: 'Positive',  
            sentence: '"Finding a $20 bill in an old coat was pure serendipity."', 
            image: './assets/images/flashcards/Set2F/Serendipity.webp'   
        },
        {
            word: 'Knead',   
            mnemonic: 'To work dough or clay by pressing and folding.',   
            synonyms: 'Massage, Mold',  
            hint: 'To manipulate',  
            positivity: 'Neutral',  
            sentence: '"She loves to knead the dough for her bread."', 
            image: './assets/images/flashcards/Set2F/Knead.gif'   
        },
        {
            word: 'Precise',   
            mnemonic: 'Clearly defined or identified; exact.',   
            synonyms: 'Exact, Accurate',  
            hint: 'Sharp in detail',  
            positivity: 'Positive',  
            sentence: '"The measurements need to be precise for the project."', 
            image: './assets/images/flashcards/Set2F/Precise.webp'   
        },
        {
            word: 'Loom',   
            mnemonic: 'To appear indistinctly; to come into view.',   
            synonyms: 'Emerge, Materialize',  
            hint: 'To appear large',  
            positivity: 'Neutral',  
            sentence: '"Dark clouds began to loom on the horizon."', 
            image: './assets/images/flashcards/Set2F/Loom.gif'   
        },
        {
            word: 'Rationale',   
            mnemonic: 'The underlying reason or explanation for something.',   
            synonyms: 'Reasoning, Justification',  
            hint: 'The logic behind',  
            positivity: 'Neutral',  
            sentence: '"The rationale for her decision was well thought out."', 
            image: './assets/images/flashcards/Set2F/Rationale.gif'   
        },
        {
            word: 'Imponderable',   
            mnemonic: 'Difficult to assess or evaluate; impossible to measure.',   
            synonyms: 'Uncertain, Incalculable',  
            hint: 'Not able to weigh',  
            positivity: 'Neutral',  
            sentence: '"The future remains imponderable in these times."', 
            image: './assets/images/flashcards/Set2F/Imponderable.gif'   
        },
        {
            word: 'Perceptive',   
            mnemonic: 'Having or showing sensitive insight; observant.',   
            synonyms: 'Insightful, Astute',  
            hint: 'Quick to notice',  
            positivity: 'Positive',  
            sentence: '"She is perceptive and understands people\'s feelings."', 
            image: './assets/images/flashcards/Set2F/Perceptive.gif'   
        },
        {
            word: 'Cog',   
            mnemonic: 'A wheel or bar with a series of projections on its edge.',   
            synonyms: 'Gear, Wheel',  
            hint: 'A part of a machine',  
            positivity: 'Neutral',  
            sentence: '"The cog was essential for the machine to function."', 
            image: './assets/images/flashcards/Set2F/Cog.gif'   
        },
        {
            word: 'Conjecture',   
            mnemonic: 'An opinion or conclusion formed on the basis of incomplete information.',   
            synonyms: 'Guess, Speculation',  
            hint: 'An educated guess',  
            positivity: 'Neutral',  
            sentence: '"His conjecture about the outcome was later proven wrong."', 
            image: './assets/images/flashcards/Set2F/Conjecture.gif'   
        },
        {
            word: 'Mortify',   
            mnemonic: 'To cause someone to feel embarrassed or ashamed.',   
            synonyms: 'Embarrass, Humiliate',  
            hint: 'To shame',  
            positivity: 'Negative',  
            sentence: '"He was mortified by his mistake during the presentation."', 
            image: './assets/images/flashcards/Set2F/Mortify.gif'   
        },
        {
            word: 'Calamity',   
            mnemonic: 'An event causing great damage or distress.',   
            synonyms: 'Disaster, Catastrophe',  
            hint: 'Major misfortune',  
            positivity: 'Negative',  
            sentence: '"The earthquake was a calamity for the entire region."', 
            image: './assets/images/flashcards/Set2F/Calamity.gif'   
        },
        {
            word: 'Gale',   
            mnemonic: 'A strong wind; a burst of laughter.',   
            synonyms: 'Windstorm, Blast',  
            hint: 'A powerful gust',  
            positivity: 'Neutral',  
            sentence: '"The gale knocked over trees during the storm."', 
            image: './assets/images/flashcards/Set2F/Gale.gif'   
        },
        {
            word: 'Egalitarian',   
            mnemonic: 'Advocating for the principle that all people are equal.',   
            synonyms: 'Equal, Fair',  
            hint: 'Promoting equality',  
            positivity: 'Positive',  
            sentence: '"The movement was founded on egalitarian principles."', 
            image: './assets/images/flashcards/Set2F/Egalitarian.png'   
        },
        {
            word: 'Motif',   
            mnemonic: 'A recurring theme or subject in literature or art.',   
            synonyms: 'Theme, Pattern',  
            hint: 'A repeated idea',  
            positivity: 'Neutral',  
            sentence: '"The motif of love appeared throughout the novel."', 
            image: './assets/images/flashcards/Set2F/Motif.gif'   
        },
        {
            word: 'Babble',   
            mnemonic: 'To talk rapidly and continuously in a foolish way.',   
            synonyms: 'Chatter, Prattle',  
            hint: 'To talk incoherently',  
            positivity: 'Neutral',  
            sentence: '"The children began to babble excitedly after the show."', 
            image: './assets/images/flashcards/Set2F/Babble.gif'
        },
        {
            word: 'Declivity',   
            mnemonic: 'A downward slope.',   
            synonyms: 'Decline, Slope',  
            hint: 'A slope downwards',  
            positivity: 'Neutral',  
            sentence: '"The trail led down a steep declivity."', 
            image: './assets/images/flashcards/Set2F/Declivity.jfif'   
        },
        {
            word: 'Comatose',   
            mnemonic: 'In a state of deep unconsciousness; inactive.',   
            synonyms: 'Unconscious, Insensible',  
            hint: 'Unresponsive',  
            positivity: 'Negative',  
            sentence: '"He was comatose after the accident for weeks."', 
            image: './assets/images/flashcards/Set2F/Comatose.gif'   
        },
        {
            word: 'Crux',   
            mnemonic: 'The decisive or most important point.',   
            synonyms: 'Core, Essence',  
            hint: 'The main point',  
            positivity: 'Neutral',  
            sentence: '"The crux of the argument was hard to identify."', 
            image: './assets/images/flashcards/Set2F/Crux.gif'   
        },
        {
            word: 'Leave-taking',   
            mnemonic: 'The act of saying goodbye.',   
            synonyms: 'Farewell, Departure',  
            hint: 'Saying goodbye',  
            positivity: 'Neutral',  
            sentence: '"Their leave-taking was emotional and heartfelt."', 
            image: './assets/images/flashcards/Set2F/Leave-taking.gif'   
        },
        {
            word: 'Brittle',   
            mnemonic: 'Easily broken or fragile.',   
            synonyms: 'Fragile, Breakable',  
            hint: 'Delicate',  
            positivity: 'Negative',  
            sentence: '"The brittle glass shattered on the floor."', 
            image: './assets/images/flashcards/Set2F/Brittle.gif'   
        },
        {
            word: 'Isthmus',   
            mnemonic: 'A narrow strip of land connecting two larger land areas.',   
            synonyms: 'Narrow land, Connector',  
            hint: 'A land bridge',  
            positivity: 'Neutral',  
            sentence: '"The isthmus connected the two continents."', 
            image: './assets/images/flashcards/Set2F/Isthmus.webp'   
        },
        {
            word: 'Pragmatist',   
            mnemonic: 'A person who is practical and focused on results.',   
            synonyms: 'Realist, Doer',  
            hint: 'A practical thinker',  
            positivity: 'Positive',  
            sentence: '"As a pragmatist, she always looks for solutions."', 
            image: './assets/images/flashcards/Set2F/Pragmatist.gif'   
        },
        {
            word: 'Eddy',   
            mnemonic: 'A circular movement of water or air.',   
            synonyms: 'Swirl, Whirlpool',  
            hint: 'A small whirlpool',  
            positivity: 'Neutral',  
            sentence: '"The boat spun in the eddy created by the current."', 
            image: './assets/images/flashcards/Set2F/Eddy.gif'   
        },
        {
            word: 'Nexus',   
            mnemonic: 'A connection or series of connections linking two or more things.',   
            synonyms: 'Link, Connection',  
            hint: 'A network',  
            positivity: 'Neutral',  
            sentence: '"The internet is a nexus of information."', 
            image: './assets/images/flashcards/Set2F/Nexus.webp'   
        },
        {
            word: 'Acme',   
            mnemonic: 'The peak or highest point.',   
            synonyms: 'Pinnacle, Summit',  
            hint: 'The top',  
            positivity: 'Positive',  
            sentence: '"The acme of her career was winning the award."', 
            image: './assets/images/flashcards/Set2F/Acme.gif'   
        },
        {
            word: 'Sumptuous',   
            mnemonic: 'Splendid and expensive-looking.',   
            synonyms: 'Lavish, Luxurious',  
            hint: 'Richly adorned',  
            positivity: 'Positive',  
            sentence: '"The hotel offered a sumptuous breakfast."', 
            image: './assets/images/flashcards/Set2F/Sumptuous.gif'   
        },
        {
            word: 'Doom',   
            mnemonic: 'Death or ruin; to condemn to certain destruction.',   
            synonyms: 'Destruction, Ruin',  
            hint: 'Inevitable destruction',  
            positivity: 'Negative',  
            sentence: '"The prophecy spoke of doom for the kingdom."', 
            image: './assets/images/flashcards/Set2F/Doom.png'   
        },
        {
            word: 'Consternation',   
            mnemonic: 'Feelings of anxiety or dismay, typically at something unexpected.',   
            synonyms: 'Dismay, Confusion',  
            hint: 'Sudden alarm',  
            positivity: 'Negative',  
            sentence: '"The news of the layoffs caused consternation among workers."', 
            image: './assets/images/flashcards/Set2F/Consternation.gif'   
        },
        {
            word: 'Appease',   
            mnemonic: 'To pacify or placate someone by giving in to their demands.',   
            synonyms: 'Satisfy, Calm',  
            hint: 'To soothe',  
            positivity: 'Positive',  
            sentence: '"The government tried to appease the protesters."', 
            image: './assets/images/flashcards/Set2F/Appease.gif'   
        },
        {
            word: 'Stout',   
            mnemonic: 'Strong and thick; also refers to a type of beer.',   
            synonyms: 'Strong, Thick',  
            hint: 'Robust',  
            positivity: 'Neutral',  
            sentence: '"He was a stout man, known for his strength."', 
            image: './assets/images/flashcards/Set2F/Stout.gif'   
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
            word: 'Beneficent',   
            mnemonic: 'Generous or doing good.',   
            synonyms: 'Charitable, Generous',  
            hint: 'Kind-hearted',  
            positivity: 'Positive',  
            sentence: '"The beneficent donor helped many families."', 
            image: './assets/images/flashcards/Set2F/Beneficent.jfif'   
        },
        {
            word: 'Snicker',   
            mnemonic: 'To give a smothered or half-suppressed laugh.',   
            synonyms: 'Giggle, Chuckle',  
            hint: 'A quiet laugh',  
            positivity: 'Neutral',  
            sentence: '"She couldn\'t help but snicker at the joke."', 
            image: './assets/images/flashcards/Set2F/Snicker.gif'   
        },
        {
            word: 'Callous',   
            mnemonic: 'Showing or having an insensitive and cruel disregard for others.',   
            synonyms: 'Heartless, Insensitive',  
            hint: 'Emotionally indifferent',  
            positivity: 'Negative',  
            sentence: '"His callous remarks hurt her feelings."', 
            image: './assets/images/flashcards/Set2F/Callous.jfif'   
        },
        {
            word: 'Depose',   
            mnemonic: 'To remove from office suddenly and forcefully.',   
            synonyms: 'Oust, Overthrow',  
            hint: 'To dethrone',  
            positivity: 'Negative',  
            sentence: '"The leader was deposed in a military coup."', 
            image: './assets/images/flashcards/Set2F/Depose.gif'   
        },
        {
            word: 'Zenith',   
            mnemonic: 'The highest point reached by a celestial or other object.',   
            synonyms: 'Peak, Summit',  
            hint: 'The top',  
            positivity: 'Positive',  
            sentence: '"The sun was at its zenith during midday."', 
            image: './assets/images/flashcards/Set2F/Zenith.jfif'   
        },
        {
            word: 'Adorn',   
            mnemonic: 'To make more beautiful or attractive.',   
            synonyms: 'Decorate, Enhance',  
            hint: 'To embellish',  
            positivity: 'Positive',  
            sentence: '"They chose to adorn their home with beautiful art."', 
            image: './assets/images/flashcards/Set2F/Adorn.jfif'   
        },
        {
            word: 'Shangri-la',   
            mnemonic: 'An ideal or idyllic place, often referring to a paradise.',   
            synonyms: 'Paradise, Utopia',  
            hint: 'A perfect place',  
            positivity: 'Positive',  
            sentence: '"They dreamed of retiring in their own Shangri-la."', 
            image: './assets/images/flashcards/Set2F/Shangri-la.gif'   
        },
        {
            word: 'Haughty',   
            mnemonic: 'Arrogantly superior and disdainful.',   
            synonyms: 'Arrogant, Conceited',  
            hint: 'Overly proud',  
            positivity: 'Negative',  
            sentence: '"Her haughty attitude made her unpopular."', 
            image: './assets/images/flashcards/Set2F/Haughty.gif'   
        },
        {
            word: 'Incorporate',   
            mnemonic: 'To take in or contain as part of a whole; to include.',   
            synonyms: 'Include, Integrate',  
            hint: 'To combine',  
            positivity: 'Neutral',  
            sentence: '"The new policy will incorporate feedback from employees."', 
            image: './assets/images/flashcards/Set2F/Incorporate.jfif'   
        },
        {
            word: 'Acquiesce',   
            mnemonic: 'To accept something reluctantly but without protest.',   
            synonyms: 'Comply, Submit',  
            hint: 'To agree quietly',  
            positivity: 'Neutral',  
            sentence: '"She acquiesced to his demands after much debate."', 
            image: './assets/images/flashcards/Set2F/Acquiesce.gif'   
        },
        {
            word: 'Jaunty',   
            mnemonic: 'Having a lively, cheerful, and self-confident manner.',   
            synonyms: 'Cheerful, Sprightly',  
            hint: 'Stylishly carefree',  
            positivity: 'Positive',  
            sentence: '"He walked in a jaunty manner, full of energy."', 
            image: './assets/images/flashcards/Set2F/Jaunty.gif'   
        },
        {
            word: 'Refrain',   
            mnemonic: 'To stop oneself from doing something.',   
            synonyms: 'Abstain, Desist',  
            hint: 'To hold back',  
            positivity: 'Neutral',  
            sentence: '"Please refrain from talking during the movie."', 
            image: './assets/images/flashcards/Set2F/Refrain.gif'   
        },
        {
            word: 'Sleeper',   
            mnemonic: 'A person or thing that is not recognized or anticipated to be successful.',   
            synonyms: 'Underdog, Dark horse',  
            hint: 'Hidden potential',  
            positivity: 'Neutral',  
            sentence: '"The movie was a sleeper hit, gaining popularity over time."', 
            image: './assets/images/flashcards/Set2F/Sleeper.gif'   
        },
        {
            word: 'Propellant',   
            mnemonic: 'A substance that propels or causes motion.',   
            synonyms: 'Fuel, Engine',  
            hint: 'Driving force',  
            positivity: 'Neutral',  
            sentence: '"Rocket engines use liquid propellant to launch."', 
            image: './assets/images/flashcards/Set2F/Propellant.png'   
        },
        {
            word: 'Prosper',   
            mnemonic: 'To succeed or thrive, especially in financial terms.',   
            synonyms: 'Succeed, Flourish',  
            hint: 'To do well',  
            positivity: 'Positive',  
            sentence: '"Businesses tend to prosper in a good economy."', 
            image: './assets/images/flashcards/Set2F/Prosper.gif'   
        },
        {
            word: 'Soluble',   
            mnemonic: 'Capable of being dissolved, especially in water.',   
            synonyms: 'Dissolvable, Solvable',  
            hint: 'Able to mix',  
            positivity: 'Neutral',  
            sentence: '"Sugar is soluble in water."', 
            image: './assets/images/flashcards/Set2F/Soluble.gif'   
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
            word: 'Gnome',   
            mnemonic: 'A mythical creature typically represented as a small, old man.',   
            synonyms: 'Dwarf, Goblin',  
            hint: 'A small earth-dweller',  
            positivity: 'Neutral',  
            sentence: '"The garden was decorated with gnome statues."', 
            image: './assets/images/flashcards/Set2F/Gnome.jfif'   
        },
        {
            word: 'Ashen',   
            mnemonic: 'Pale or grey in color, typically due to shock or fear.',   
            synonyms: 'Pale, Livid',  
            hint: 'Color of fear',  
            positivity: 'Negative',  
            sentence: '"Her ashen face showed her shock at the news."', 
            image: './assets/images/flashcards/Set2F/Ashen.jfif'   
        },
        {
            word: 'Susceptible',   
            mnemonic: 'Likely or liable to be influenced or harmed by a particular thing.',   
            synonyms: 'Vulnerable, Prone',  
            hint: 'Open to influence',  
            positivity: 'Negative',  
            sentence: '"He was susceptible to colds in winter."', 
            image: './assets/images/flashcards/Set2F/Susceptible.jfif'   
        },
        {
            word: 'Revert',   
            mnemonic: 'To return to a previous state or condition.',   
            synonyms: 'Return, Go back',  
            hint: 'To go back',  
            positivity: 'Neutral',  
            sentence: '"They decided to revert to the old policy."', 
            image: './assets/images/flashcards/Set2F/Revert.gif'   
        },
        {
            word: 'Marrow',   
            mnemonic: 'The soft, fatty tissue in the center of bones; essential for blood cell production.',   
            synonyms: 'Core, Essence',  
            hint: 'Inner substance',  
            positivity: 'Neutral',  
            sentence: '"The marrow in the bone is crucial for health."', 
            image: './assets/images/flashcards/Set2F/Marrow.gif'   
        },
        {
            word: 'Meticulous',   
            mnemonic: 'Showing great attention to detail; very careful and precise.',   
            synonyms: 'Careful, Thorough',  
            hint: 'Attention to detail',  
            positivity: 'Positive',  
            sentence: '"She is meticulous in her work, ensuring accuracy."', 
            image: './assets/images/flashcards/Set2F/Meticulous.gif'   
        },
        {
            word: 'Infallible',   
            mnemonic: 'Incapable of making mistakes or being wrong.',   
            synonyms: 'Unfailing, Flawless',  
            hint: 'Always right',  
            positivity: 'Positive',  
            sentence: '"The plan seemed infallible until unexpected issues arose."', 
            image: './assets/images/flashcards/Set2F/Infallible.gif'   
        },
        {
            word: 'Assurance',   
            mnemonic: 'A positive declaration intended to give confidence.',   
            synonyms: 'Guarantee, Promise',  
            hint: 'A statement of certainty',  
            positivity: 'Positive',  
            sentence: '"She gave him her assurance that everything would be fine."', 
            image: './assets/images/flashcards/Set2F/Assurance.gif'   
        },
        {
            word: 'Ration',   
            mnemonic: 'A fixed amount of a commodity allowed to each person during a time of shortage.',   
            synonyms: 'Allowance, Portion',  
            hint: 'Limited supply',  
            positivity: 'Neutral',  
            sentence: '"During the war, food was rationed to ensure fairness."', 
            image: './assets/images/flashcards/Set2F/Ration.gif'   
        },
        {
            word: 'Gregarious',   
            mnemonic: 'Fond of company; sociable.',   
            synonyms: 'Sociable, Outgoing',  
            hint: 'Enjoying being with others',  
            positivity: 'Positive',  
            sentence: '"He was a gregarious person, always surrounded by friends."', 
            image: './assets/images/flashcards/Set2F/Gregarious.gif'   
        },
        {
            word: 'Elixir',   
            mnemonic: 'A magical or medicinal potion.',   
            synonyms: 'Potion, Remedy',  
            hint: 'A healing liquid',  
            positivity: 'Positive',  
            sentence: '"The herbal elixir promised to restore youth."', 
            image: './assets/images/flashcards/Set2F/Elixir.gif'   
        },
        {
            word: 'Imprecation',   
            mnemonic: 'A spoken curse.',   
            synonyms: 'Curse, Malediction',  
            hint: 'A wish for misfortune',  
            positivity: 'Negative',  
            sentence: '"He uttered an imprecation against his enemies."', 
            image: './assets/images/flashcards/Set2F/Imprecation.gif'   
        },
        {
            word: 'Mellifluous',   
            mnemonic: 'Sweet or musical; pleasant to hear.',   
            synonyms: 'Harmonious, Sweet',  
            hint: 'Smoothly flowing',  
            positivity: 'Positive',  
            sentence: '"Her mellifluous voice charmed everyone at the concert."', 
            image: './assets/images/flashcards/Set2F/Mellifluous.jfif'   
        },
        {
            word: 'Ursine',   
            mnemonic: 'Relating to or resembling bears.',   
            synonyms: 'Bear-like, Grizzly',  
            hint: 'Bear characteristics',  
            positivity: 'Neutral',  
            sentence: '"The ursine features of the statue made it lifelike."', 
            image: './assets/images/flashcards/Set2F/Ursine.jfif'   
        },
        {
            word: 'Appellation',   
            mnemonic: 'A name or title.',   
            synonyms: 'Name, Designation',  
            hint: 'A formal title',  
            positivity: 'Neutral',  
            sentence: '"The appellation of the town reflects its history."', 
            image: './assets/images/flashcards/Set2F/Appellation.jpg'   
        },
        {
            word: 'Supplant',   
            mnemonic: 'To replace or substitute.',   
            synonyms: 'Replace, Displace',  
            hint: 'To take the place of',  
            positivity: 'Neutral',  
            sentence: '"Smartphones have supplanted traditional cameras."', 
            image: './assets/images/flashcards/Set2F/Supplant.gif'   
        },
        {
            word: 'Avert',   
            mnemonic: 'To prevent or turn away.',   
            synonyms: 'Prevent, Avoid',  
            hint: 'To keep away',  
            positivity: 'Positive',  
            sentence: '"She took measures to avert disaster."', 
            image: './assets/images/flashcards/Set2F/Avert.gif'   
        },
        {
            word: 'Impalpable',   
            mnemonic: 'Unable to be felt by touch; intangible.',   
            synonyms: 'Intangible, Unseen',  
            hint: 'Not able to touch',  
            positivity: 'Neutral',  
            sentence: '"The tension in the room was almost impalpable."', 
            image: './assets/images/flashcards/Set2F/Impalpable.jfif'   
        },
        {
            word: 'Carapace',   
            mnemonic: 'The hard upper shell of a turtle or other animals.',   
            synonyms: 'Shell, Cover',  
            hint: 'A protective shell',  
            positivity: 'Neutral',  
            sentence: '"The turtle withdrew into its carapace for safety."', 
            image: './assets/images/flashcards/Set2F/Carapace.gif'   
        },
        {
            word: 'Reminiscence',   
            mnemonic: 'A recollection or memory of the past.',   
            synonyms: 'Memory, Reflection',  
            hint: 'A memory',  
            positivity: 'Neutral',  
            sentence: '"The film was a reminiscence of her childhood."', 
            image: './assets/images/flashcards/Set2F/Reminiscence.gif'   
        },
        {
            word: 'Thrall',   
            mnemonic: 'The state of being in someone\'s power or control; a slave.',   
            synonyms: 'Servitude, Bondage',  
            hint: 'Under control',  
            positivity: 'Negative',  
            sentence: '"He was in thrall to his addiction for years."', 
            image: './assets/images/flashcards/Set2F/Thrall.jfif'   
        },
        {
            word: 'Splice',   
            mnemonic: 'To join or connect (especially two pieces of film or tape) together.',   
            synonyms: 'Join, Connect',  
            hint: 'To bind together',  
            positivity: 'Neutral',  
            sentence: '"They spliced the two film reels to create a complete movie."', 
            image: './assets/images/flashcards/Set2F/Splice.gif'   
        },
        {
            word: 'Loiter',   
            mnemonic: 'To stand or wait around idly or without purpose.',   
            synonyms: 'Linger, Dawdle',  
            hint: 'To hang around',  
            positivity: 'Negative',  
            sentence: '"Don’t loiter outside the store; it’s not allowed."', 
            image: './assets/images/flashcards/Set2F/Loiter.jfif'   
        },
        {
            word: 'Spawn',   
            mnemonic: 'To produce or generate; often used for fish or amphibians.',   
            synonyms: 'Produce, Generate',  
            hint: 'To give birth',  
            positivity: 'Neutral',  
            sentence: '"The fish spawn in the spring, laying eggs in the river."', 
            image: './assets/images/flashcards/Set2F/Spawn.gif'   
        },
        {
            word: 'Caucus',   
            mnemonic: 'A meeting of members of a political party to make decisions.',   
            synonyms: 'Meeting, Assembly',  
            hint: 'A political gathering',  
            positivity: 'Neutral',  
            sentence: '"The party held a caucus to discuss their strategy."', 
            image: './assets/images/flashcards/Set2F/Caucus.gif'   
        },
        {
            word: 'Garish',   
            mnemonic: 'Obtrusively bright and showy; gaudy.',   
            synonyms: 'Gaudy, Flashy',  
            hint: 'Excessively bright',  
            positivity: 'Negative',  
            sentence: '"The garish colors of the building were hard to miss."', 
            image: './assets/images/flashcards/Set2F/Garish.webp'   
        },
        {
            word: 'Panache',   
            mnemonic: 'Distinctive and stylish flair.',   
            synonyms: 'Flair, Style',  
            hint: 'A unique style',  
            positivity: 'Positive',  
            sentence: '"She wore her hat with great panache."', 
            image: './assets/images/flashcards/Set2F/Panache.gif'   
        },
        {
            word: 'Antler',   
            mnemonic: 'A branched horn on the head of an animal, typically a deer.',   
            synonyms: 'Horn, Branch',  
            hint: 'Deer horns',  
            positivity: 'Neutral',  
            sentence: '"The deer had magnificent antlers during the mating season."', 
            image: './assets/images/flashcards/Set2F/Antler.gif'   
        },
        {
            word: 'Affliction',   
            mnemonic: 'Something that causes pain or suffering.',   
            synonyms: 'Misery, Distress',  
            hint: 'A source of trouble',  
            positivity: 'Negative',  
            sentence: '"His long-term affliction made it difficult to work."', 
            image: './assets/images/flashcards/Set2F/Affliction.gif'   
        },
        {
            word: 'Nourishment',   
            mnemonic: 'Food or other substances necessary for growth and health.',   
            synonyms: 'Sustenance, Nutrition',  
            hint: 'Essential food',  
            positivity: 'Positive',  
            sentence: '"Proper nourishment is vital for children\'s development."', 
            image: './assets/images/flashcards/Set2F/Nourishment.gif'   
        },
        {
            word: 'Console',   
            mnemonic: 'To comfort someone in grief or disappointment.',   
            synonyms: 'Comfort, Soothe',  
            hint: 'To provide relief',  
            positivity: 'Positive',  
            sentence: '"I tried to console her after the bad news."', 
            image: './assets/images/flashcards/Set2F/Console.gif'   
        }


    ],

    // Set 3

    [
            {
                word: 'incrustation',  
                mnemonic: 'A hard outer layer or covering formed on something.',  
                synonyms: 'Coating, Crust, Layer',  
                hint: 'Think of the protective crust formed on old objects.',  
                positivity: 'Neutral',  
                sentence: '"The building had an ancient look due to the <u>incrustation</u> on its walls."', 
                image: './assets/images/flashcards/Set3/incrustation.jfif'  
            },
            {
                word: 'jurisprudence',  
                mnemonic: 'The theory or philosophy of law.',  
                synonyms: 'Law, Legal theory, Legal philosophy',  
                hint: 'A deeper understanding of how legal systems work.',  
                positivity: 'Neutral',  
                sentence: '"He studied <u>jurisprudence</u> to better understand court systems."', 
                image: './assets/images/flashcards/Set3/jurisprudence.gif'  
            },
            {
                word: 'usurp',  
                mnemonic: 'To take power or control without legal right.',  
                synonyms: 'Seize, Commandeer, Take over',  
                hint: 'A general may attempt to take control unethically.',  
                positivity: 'Negative',  
                sentence: '"The military tried to <u>usurp</u> the government."', 
                image: './assets/images/flashcards/Set3/usurp.gif'  
            },
            {
                word: 'pessimism',  
                mnemonic: 'A belief that things will turn out badly.',  
                synonyms: 'Negativity, Cynicism, Hopelessness',  
                hint: 'Expecting the worst to happen.',  
                positivity: 'Negative',  
                sentence: '"His <u>pessimism</u> made the situation seem even worse."', 
                image: './assets/images/flashcards/Set3/pessimism.gif'  
            },
            {
                word: 'renege',  
                mnemonic: 'To go back on a promise or agreement.',  
                synonyms: 'Retract, Break, Default',  
                hint: 'Backing out after agreeing to something.',  
                positivity: 'Negative',  
                sentence: '"He decided to <u>renege</u> on his agreement at the last moment."', 
                image: './assets/images/flashcards/Set3/renege.gif'  
            },
            {
                word: 'pang',  
                mnemonic: 'A sudden sharp pain or painful emotion.',  
                synonyms: 'Ache, Twinge, Stab',  
                hint: 'A brief but intense feeling of discomfort or emotional pain.',  
                positivity: 'Negative',  
                sentence: '"She felt a <u>pang</u> of guilt after speaking harshly to her friend."', 
                image: './assets/images/flashcards/Set3/pang.jfif'  
            },
            {
                word: 'seep',  
                mnemonic: 'To leak slowly through small openings.',  
                synonyms: 'Trickle, Ooze, Leak',  
                hint: 'What happens when water leaks slowly through a crack.',  
                positivity: 'Neutral',  
                sentence: '"Water began to <u>seep</u> through the cracks in the basement wall."', 
                image: './assets/images/flashcards/Set3/seep.jfif'  
            },
            {
                word: 'deface',  
                mnemonic: 'To spoil or ruin the surface or appearance of something.',  
                synonyms: 'Vandalize, Mar, Disfigure',  
                hint: 'When someone ruins a surface or appearance, often intentionally.',  
                positivity: 'Negative',  
                sentence: '"The vandals <u>defaced</u> the public mural with graffiti."', 
                image: './assets/images/flashcards/Set3/deface.gif'  
            },
            {
                word: 'humid',  
                mnemonic: 'Having a high amount of moisture in the air.',  
                synonyms: 'Muggy, Damp, Moist',  
                hint: 'Common in tropical climates with high moisture.',  
                positivity: 'Neutral',  
                sentence: '"The air was so <u>humid</u> that it felt hard to breathe."', 
                image: './assets/images/flashcards/Set3/humid.gif'  
            },
            {
                word: 'politic',  
                mnemonic: 'Prudent and diplomatic in dealing with people.',  
                synonyms: 'Tactful, Diplomatic, Prudent',  
                hint: 'Being wise in how you navigate tricky situations.',  
                positivity: 'Positive',  
                sentence: '"She was always <u>politic</u> in handling workplace disputes."', 
                image: './assets/images/flashcards/Set3/politic.jfif'  
            },
            {
                word: 'enunciate',  
                mnemonic: 'To pronounce words clearly.',  
                synonyms: 'Articulate, Pronounce, Declare',  
                hint: 'Making sure every word is pronounced clearly.',  
                positivity: 'Neutral',  
                sentence: '"The teacher asked the student to <u>enunciate</u> the words clearly during the presentation."', 
                image: './assets/images/flashcards/Set3/enunciate.gif'  
            },
            {
                word: 'germane',  
                mnemonic: 'Relevant or applicable to a particular matter.',  
                synonyms: 'Relevant, Pertinent, Applicable',  
                hint: 'When something is highly relevant to the current issue.',  
                positivity: 'Neutral',  
                sentence: '"Her comments were <u>germane</u> to the discussion and added valuable insight."', 
                image: './assets/images/flashcards/Set3/germane.gif'  
            },
            {
                word: 'seminal',  
                mnemonic: 'Highly influential in an original way; important.',  
                synonyms: 'Influential, Groundbreaking, Foundational',  
                hint: 'An idea or work that has a profound influence on future developments.',  
                positivity: 'Positive',  
                sentence: '"His research was <u>seminal</u>, shaping the future of the field."', 
                image: './assets/images/flashcards/Set3/seminal.webp'  
            },
            {
                word: 'nascent',  
                mnemonic: 'Just coming into existence or starting to develop.',  
                synonyms: 'Developing, Budding, Emerging',  
                hint: 'Describing something at the very beginning of its development.',  
                positivity: 'Positive',  
                sentence: '"The company was still in its <u>nascent</u> stages, with much work left to do."', 
                image: './assets/images/flashcards/Set3/nascent.gif'  
            },
            {
                word: 'putrescent',  
                mnemonic: 'Undergoing the process of decay or becoming rotten.',  
                synonyms: 'Decaying, Decomposing, Rotting',  
                hint: 'The process of something becoming rotten.',  
                positivity: 'Negative',  
                sentence: '"The <u>putrescent</u> odor of the decaying fruit was unbearable."', 
                image: './assets/images/flashcards/Set3/putrescent.gif'  
            },
            {
                word: 'abash',  
                mnemonic: 'To cause someone to feel embarrassed or ashamed.',  
                synonyms: 'Embarrass, Shame, Disconcert',  
                hint: 'How you feel after being publicly embarrassed.',  
                positivity: 'Negative',  
                sentence: '"The student was <u>abashed</u> after being corrected in front of the whole class."', 
                image: './assets/images/flashcards/Set3/abash.gif'  
            },
            {
                word: 'missive',  
                mnemonic: 'A written communication or letter, especially a formal one.',  
                synonyms: 'Letter, Message, Communication',  
                hint: 'A formal or official letter.',  
                positivity: 'Neutral',  
                sentence: '"The CEO sent a <u>missive</u> to the board outlining his vision for the company."', 
                image: './assets/images/flashcards/Set3/missive.gif'  
            },
            {
                word: 'condign',  
                mnemonic: 'Deserved or appropriate, usually of a punishment.',  
                synonyms: 'Deserved, Appropriate, Fitting',  
                hint: 'A punishment that fits the crime.',  
                positivity: 'Neutral',  
                sentence: '"The judge believed the sentence was <u>condign</u> for the crime committed."', 
                image: './assets/images/flashcards/Set3/condign.gif'  
            },
            {
                word: 'braggart',  
                mnemonic: 'Someone who boasts or brags about achievements.',  
                synonyms: 'Boaster, Show-off, Egotist',  
                hint: 'Someone who constantly talks about their own achievements.',  
                positivity: 'Negative',  
                sentence: '"The <u>braggart</u> couldn\'t stop talking about his latest promotion."', 
                image: './assets/images/flashcards/Set3/braggart.gif'  
            },
            {
                word: 'cynical',  
                mnemonic: 'Believing that people are motivated by self-interest.',  
                synonyms: 'Skeptical, Distrustful, Pessimistic',  
                hint: 'Someone who doesn\'t believe in the sincerity of others\' intentions.',  
                positivity: 'Negative',  
                sentence: '"His <u>cynical</u> outlook made it hard for him to trust anyone\'s motives."', 
                image: './assets/images/flashcards/Set3/cynical.gif'  
            },
            {
                word: 'leniency',  
                mnemonic: 'The quality of being more merciful or tolerant than expected.',  
                synonyms: 'Mercy, Tolerance, Compassion',  
                hint: 'What judges show when they reduce a harsh sentence.',  
                positivity: 'Positive',  
                sentence: '"The judge showed <u>leniency</u> by reducing the defendant\'s sentence."', 
                image: './assets/images/flashcards/Set3/leniency.gif'  
            },
            {
                word: 'delirium',  
                mnemonic: 'A disturbed state of mind, often accompanied by confusion and hallucinations.',  
                synonyms: 'Confusion, Frenzy, Madness',  
                hint: 'A state of mind where reality becomes blurred.',  
                positivity: 'Negative',  
                sentence: '"He was in a state of <u>delirium</u> after days of high fever."', 
                image: './assets/images/flashcards/Set3/delirium.gif'  
            },
            {
                word: 'crotchety',  
                mnemonic: 'Irritable or easily angered.',  
                synonyms: 'Grumpy, Irritable, Cranky',  
                hint: 'When someone\'s mood is constantly irritable.',  
                positivity: 'Negative',  
                sentence: '"The <u>crotchety</u> old man complained about everything in the neighborhood."', 
                image: './assets/images/flashcards/Set3/crotchety.gif'  
            },
            {
                word: 'allocate',  
                mnemonic: 'To distribute resources or duties for a particular purpose.',  
                synonyms: 'Assign, Distribute, Allot',  
                hint: 'What a project manager does to distribute resources.',  
                positivity: 'Neutral',  
                sentence: '"The manager needs to <u>allocate</u> more funds to the marketing department."', 
                image: './assets/images/flashcards/Set3/allocate.webp'  
            },
            {
                word: 'heyday',  
                mnemonic: 'The period of greatest success or popularity.',  
                synonyms: 'Prime, Peak, Zenith',  
                hint: 'The best days of a person\'s or thing\'s career.',  
                positivity: 'Positive',  
                sentence: '"In her <u>heyday</u>, she was the most famous singer in the world."', 
                image: './assets/images/flashcards/Set3/heyday.gif'  
            },
            {
                word: 'query',  
                mnemonic: 'A question, especially one addressed to an official or organization.',  
                synonyms: 'Inquiry, Question, Request',  
                hint: 'A formal word for a question.',  
                positivity: 'Neutral',  
                sentence: '"The customer sent a <u>query</u> to inquire about the product availability."', 
                image: './assets/images/flashcards/Set3/query.gif'  
            },
            {
                word: 'idyllic',  
                mnemonic: 'Extremely peaceful or picturesque, typically used to describe a place.',  
                synonyms: 'Picturesque, Peaceful, Serene',  
                hint: 'A perfectly peaceful countryside scene.',  
                positivity: 'Positive',  
                sentence: '"The cottage was nestled in an <u>idyllic</u> setting by the lake."', 
                image: './assets/images/flashcards/Set3/idyllic.gif'  
            },
            {
                word: 'compound',  
                mnemonic: 'A thing consisting of two or more separate elements combined together.',  
                synonyms: 'Mixture, Blend, Combination',  
                hint: 'A combination of different elements forming something new.',  
                positivity: 'Neutral',  
                sentence: '"The company created a new <u>compound</u> by mixing two chemicals."', 
                image: './assets/images/flashcards/Set3/compound.gif'  
            },
            {
                word: 'plait',  
                mnemonic: 'A braid of hair or other material.',  
                synonyms: 'Braid, Twist, Interweave',  
                hint: 'A way to arrange hair into a braid.',  
                positivity: 'Neutral',  
                sentence: '"She braided her hair into a neat <u>plait</u> for the occasion."', 
                image: './assets/images/flashcards/Set3/plait.gif'  
            },
            {
                word: 'odium',  
                mnemonic: 'Widespread hatred or disgust towards someone or something.',  
                synonyms: 'Disgust, Hatred, Loathing',  
                hint: 'The feeling people have when they detest something or someone.',  
                positivity: 'Negative',  
                sentence: '"The <u>odium</u> surrounding the scandal destroyed his reputation."', 
                image: './assets/images/flashcards/Set3/odium.gif'  
            },
            {
                word: 'circlet',  
                mnemonic: 'A small circular band or ring, especially for the head.',  
                synonyms: 'Ring, Band, Loop',  
                hint: 'A decorative ring worn on the head.',  
                positivity: 'Neutral',  
                sentence: '"She wore a silver <u>circlet</u> as part of her wedding attire."', 
                image: './assets/images/flashcards/Set3/circlet.jfif'  
            },
            {
                word: 'meteoric',  
                mnemonic: 'Relating to meteors or something that happens very quickly.',  
                synonyms: 'Rapid, Swift, Sudden',  
                hint: 'Describing a quick rise or something that happens fast like a meteor.',  
                positivity: 'Neutral',  
                sentence: '"The startup\'s <u>meteoric</u> rise surprised everyone in the industry."', 
                image: './assets/images/flashcards/Set3/meteoric.gif'  
            },
            {
                word: 'interpolate',  
                mnemonic: 'To insert something (especially words) into a text or conversation.',  
                synonyms: 'Insert, Introduce, Add',  
                hint: 'Inserting something extra into a conversation or document.',  
                positivity: 'Neutral',  
                sentence: '"He decided to <u>interpolate</u> a few more comments into his presentation."', 
                image: './assets/images/flashcards/Set3/interpolate.gif'  
            },
            {
                word: 'scrutinize',  
                mnemonic: 'To examine or inspect closely.',  
                synonyms: 'Inspect, Examine, Analyze',  
                hint: 'Looking at something with great attention.',  
                positivity: 'Neutral',  
                sentence: '"The detective had to <u>scrutinize</u> the evidence to find the hidden clues."', 
                image: './assets/images/flashcards/Set3/scrutinize.gif'  
            },
            {
                word: 'elusive',  
                mnemonic: 'Difficult to find, catch, or achieve.',  
                synonyms: 'Evasive, Tricky, Fleeting',  
                hint: 'When something keeps slipping away or is hard to pin down.',  
                positivity: 'Negative',  
                sentence: '"The criminal remained <u>elusive</u> despite the ongoing manhunt."', 
                image: './assets/images/flashcards/Set3/elusive.gif'  
            },
            {
                word: 'grumble',  
                mnemonic: 'To complain or mutter in a discontented way.',  
                synonyms: 'Complain, Mutter, Moan',  
                hint: 'Complaining under your breath about something.',  
                positivity: 'Negative',  
                sentence: '"He continued to <u>grumble</u> about the long wait time at the restaurant."', 
                image: './assets/images/flashcards/Set3/grumble.gif'  
            },
            {
                word: 'intolerant',  
                mnemonic: 'Unwilling to accept views, beliefs, or behaviors different from one\'s own.',  
                synonyms: 'Bigoted, Prejudiced, Narrow-minded',  
                hint: 'Someone who can’t tolerate different opinions or behaviors.',  
                positivity: 'Negative',  
                sentence: '"His <u>intolerant</u> attitude made it difficult for him to get along with others."', 
                image: './assets/images/flashcards/Set3/intolerant.jpg'  
            },
            {
                word: 'ultimatum',  
                mnemonic: 'A final demand or statement of terms.',  
                synonyms: 'Demand, Requirement, Condition',  
                hint: 'A final warning or demand.',  
                positivity: 'Neutral',  
                sentence: '"The company gave the worker an <u>ultimatum</u>: improve performance or face dismissal."', 
                image: './assets/images/flashcards/Set3/ultimatum.gif'  
            },
            {
                word: 'staccato',  
                mnemonic: 'Performed with each sound or note sharply separated from the others.',  
                synonyms: 'Sharp, Detached, Abrupt',  
                hint: 'A musical term for notes that are sharply disconnected.',  
                positivity: 'Neutral',  
                sentence: '"The pianist played the piece with sharp, <u>staccato</u> notes."', 
                image: './assets/images/flashcards/Set3/staccato.jpg'  
            },
            {
                word: 'illusory',  
                mnemonic: 'Based on illusion; not real.',  
                synonyms: 'Deceptive, False, Misleading',  
                hint: 'Something that only seems real but isn’t.',  
                positivity: 'Negative',  
                sentence: '"Her dreams of success proved to be <u>illusory</u> and hard to attain."', 
                image: './assets/images/flashcards/Set3/illusory.gif'  
            },
            {
                word: 'wilt',  
                mnemonic: 'To become limp or droop due to heat or lack of water.',  
                synonyms: 'Droop, Sag, Wither',  
                hint: 'What happens to a flower without water.',  
                positivity: 'Negative',  
                sentence: '"The flowers began to <u>wilt</u> under the scorching sun."', 
                image: './assets/images/flashcards/Set3/wilt.gif'  
            },
            {
                word: 'ogle',  
                mnemonic: 'To stare at someone in a way that shows excessive interest or desire.',  
                synonyms: 'Gawk, Leer, Stare',  
                hint: 'The way someone might stare inappropriately at another person.',  
                positivity: 'Negative',  
                sentence: '"He couldn’t help but <u>ogle</u> at the celebrity when she walked by."', 
                image: './assets/images/flashcards/Set3/ogle.gif'  
            },
            {
                word: 'rampant',  
                mnemonic: 'Flourishing or spreading unchecked.',  
                synonyms: 'Widespread, Uncontrolled, Unrestrained',  
                hint: 'When something grows without control.',  
                positivity: 'Negative',  
                sentence: '"Corruption was <u>rampant</u> in the city government."', 
                image: './assets/images/flashcards/Set3/rampant.jfif'  
            },
            {
                word: 'skulduggery',  
                mnemonic: 'Underhanded or unscrupulous behavior.',  
                synonyms: 'Deception, Trickery, Fraud',  
                hint: 'Shady or deceitful behavior, often involving dishonesty.',  
                positivity: 'Negative',  
                sentence: '"The politician’s <u>skulduggery</u> was eventually exposed by the media."', 
                image: './assets/images/flashcards/Set3/skulduggery.gif'  
            },
            {
                word: 'benediction',  
                mnemonic: 'A blessing or expression of good wishes.',  
                synonyms: 'Blessing, Approval, Grace',  
                hint: 'A blessing given during a religious or formal ceremony.',  
                positivity: 'Positive',  
                sentence: '"The priest gave the final <u>benediction</u> to bless the gathering."', 
                image: './assets/images/flashcards/Set3/benediction.gif'  
            },
            {
                word: 'Machiavellian',  
                mnemonic: 'Cunning, scheming, and unscrupulous, especially in politics.',  
                synonyms: 'Scheming, Cunning, Devious',  
                hint: 'Describing someone who manipulates others for personal gain, often in politics.',  
                positivity: 'Negative',  
                sentence: '"His <u>Machiavellian</u> tactics helped him gain power at the expense of others."', 
                image: './assets/images/flashcards/Set3/Machiavellian.gif'  
            },
            {
                word: 'anecdote',  
                mnemonic: 'A short, amusing or interesting story about a real incident or person.',  
                synonyms: 'Story, Tale, Account',  
                hint: 'A brief and interesting story, often shared in conversations.',  
                positivity: 'Positive',  
                sentence: '"She shared a funny <u>anecdote</u> from her childhood during the meeting."', 
                image: './assets/images/flashcards/Set3/anecdote.gif'  
            },
            {
                word: 'limbo',  
                mnemonic: 'An uncertain period of awaiting a decision or resolution.',  
                synonyms: 'Uncertainty, Pause, In-between',  
                hint: 'Being stuck in a situation without clear resolution.',  
                positivity: 'Neutral',  
                sentence: '"The decision was stuck in <u>limbo</u> as both sides failed to reach an agreement."', 
                image: './assets/images/flashcards/Set3/limbo.gif'  
            },
            {
                word: 'centrifugal',  
                mnemonic: 'Moving or tending to move away from a center.',  
                synonyms: 'Outward-moving, Radiating, Divergent',  
                hint: 'What a spinning wheel does when it throws objects outward.',  
                positivity: 'Neutral',  
                sentence: '"The <u>centrifugal</u> force pushed the water droplets outward from the spinning disk."', 
                image: './assets/images/flashcards/Set3/centrifugal.gif'  
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
                word: 'implausible',  
                mnemonic: 'Not seeming reasonable or probable.',  
                synonyms: 'Unlikely, Improbable, Doubtful',  
                hint: 'Something hard to believe or unlikely to happen.',  
                positivity: 'Negative',  
                sentence: '"The story he told was so <u>implausible</u> that no one believed him."', 
                image: './assets/images/flashcards/Set3/implausible.gif'  
            },
            {
                word: 'pillory',  
                mnemonic: 'A device or a means of public punishment and humiliation.',  
                synonyms: 'Stock, Scaffold, Gibbet',  
                hint: 'A tool once used for public humiliation or punishment.',  
                positivity: 'Negative',  
                sentence: '"The criminal was publicly shamed in the <u>pillory</u> for his crimes."', 
                image: './assets/images/flashcards/Set3/pillory.gif'  
            },
            {
                word: 'receptive',  
                mnemonic: 'Willing to consider or accept new suggestions and ideas.',  
                synonyms: 'Open-minded, Responsive, Accepting',  
                hint: 'Being willing to listen to new ideas or suggestions.',  
                positivity: 'Positive',  
                sentence: '"She was <u>receptive</u> to all the new ideas proposed by the team."', 
                image: './assets/images/flashcards/Set3/receptive.gif'  
            },
            {
                word: 'sleigh',  
                mnemonic: 'A type of vehicle for traveling on snow, pulled by animals.',  
                synonyms: 'Sled, Toboggan, Snow vehicle',  
                hint: 'A vehicle for traveling on snow, often used in winter sports.',  
                positivity: 'Neutral',  
                sentence: '"They rode the <u>sleigh</u> down the snowy hill, laughing all the way."', 
                image: './assets/images/flashcards/Set3/sleigh.gif'  
            },
            {
                word: 'impersonal',  
                mnemonic: 'Not influenced by personal feelings; neutral.',  
                synonyms: 'Neutral, Detached, Objective',  
                hint: 'Describing an action or decision free from personal bias.',  
                positivity: 'Neutral',  
                sentence: '"The report was written in an <u>impersonal</u> tone to avoid bias."', 
                image: './assets/images/flashcards/Set3/impersonal.gif'  
            },
            {
                word: 'placebo',  
                mnemonic: 'A harmless pill or treatment given for psychological benefit.',  
                synonyms: 'Dummy, Sham, Fake treatment',  
                hint: 'A treatment given to make someone think they are being treated.',  
                positivity: 'Neutral',  
                sentence: '"The doctor gave the patient a <u>placebo</u> to ease their anxiety."', 
                image: './assets/images/flashcards/Set3/placebo.png'  
            },
            {
                word: 'amend',  
                mnemonic: 'To make corrections or improvements in a text.',  
                synonyms: 'Correct, Revise, Improve',  
                hint: 'Making changes to improve a written document.',  
                positivity: 'Neutral',  
                sentence: '"The editor worked hard to <u>amend</u> the manuscript before publication."', 
                image: './assets/images/flashcards/Set3/amend.jfif'  
            },
            {
                word: 'dolorous',  
                mnemonic: 'Feeling or expressing great sorrow or distress.',  
                synonyms: 'Mournful, Sorrowful, Anguished',  
                hint: 'Feeling a great sense of sorrow or sadness.',  
                positivity: 'Negative',  
                sentence: '"The <u>dolorous</u> tune of the violin moved the audience to tears."', 
                image: './assets/images/flashcards/Set3/dolorous.gif'  
            },
            {
                word: 'guffaw',  
                mnemonic: 'A loud and boisterous laugh.',  
                synonyms: 'Laugh, Chuckle, Roar',  
                hint: 'A loud laugh that bursts out uncontrollably.',  
                positivity: 'Positive',  
                sentence: '"He let out a loud <u>guffaw</u> after hearing the joke."', 
                image: './assets/images/flashcards/Set3/guffaw.gif'  
            },
            {
                word: 'tract',  
                mnemonic: 'A large area of land or a leaflet for distribution.',  
                synonyms: 'Area, Field, Brochure',  
                hint: 'A large piece of land or a written pamphlet.',  
                positivity: 'Neutral',  
                sentence: '"The farmer owned a large <u>tract</u> of land outside the city."', 
                image: './assets/images/flashcards/Set3/tract.jfif'  
            },
            {
                word: 'bent',  
                mnemonic: 'A natural talent or inclination for something.',  
                synonyms: 'Inclination, Tendency, Talent',  
                hint: 'A talent or interest that comes naturally to someone.',  
                positivity: 'Neutral',  
                sentence: '"She had a <u>bent</u> for creative writing from a young age."', 
                image: './assets/images/flashcards/Set3/bent.gif'  
            },
            {
                word: 'discourse',  
                mnemonic: 'Written or spoken communication or debate.',  
                synonyms: 'Conversation, Dialogue, Discussion',  
                hint: 'A formal discussion or communication of ideas.',  
                positivity: 'Neutral',  
                sentence: '"The professor’s <u>discourse</u> on ancient philosophy was enlightening."', 
                image: './assets/images/flashcards/Set3/discourse.gif'  
            },
            {
                word: 'defer',  
                mnemonic: 'To put off to a later time or to yield to someone’s wishes.',  
                synonyms: 'Postpone, Delay, Yield',  
                hint: 'When you delay or yield to someone else’s opinion.',  
                positivity: 'Neutral',  
                sentence: '"They decided to <u>defer</u> the meeting until everyone was available."', 
                image: './assets/images/flashcards/Set3/defer.gif'  
            },
            {
                word: 'chary',  
                mnemonic: 'Cautious or wary about something.',  
                synonyms: 'Cautious, Wary, Careful',  
                hint: 'Being extra careful or reluctant to do something.',  
                positivity: 'Negative',  
                sentence: '"She was <u>chary</u> of investing in a risky venture."', 
                image: './assets/images/flashcards/Set3/chary.gif'  
            },
            {
                word: 'don',  
                mnemonic: 'To put on (an article of clothing).',  
                synonyms: 'Wear, Put on, Dress',  
                hint: 'The act of putting on a piece of clothing.',  
                positivity: 'Neutral',  
                sentence: '"He <u>donned</u> his jacket before stepping outside into the cold."', 
                image: './assets/images/flashcards/Set3/don.gif'  
            },
            {
                word: 'primal',  
                mnemonic: 'Relating to an early stage of development; fundamental.',  
                synonyms: 'Basic, Fundamental, Primary',  
                hint: 'Relating to something fundamental or early in development.',  
                positivity: 'Neutral',  
                sentence: '"The <u>primal</u> instincts of survival are deeply ingrained in all living beings."', 
                image: './assets/images/flashcards/Set3/primal.gif'  
            },
            {
                word: 'beleaguer',  
                mnemonic: 'To trouble or harass someone persistently.',  
                synonyms: 'Harass, Pester, Trouble',  
                hint: 'When someone is persistently bothered by problems or difficulties.',  
                positivity: 'Negative',  
                sentence: '"The city was <u>beleaguered</u> by constant traffic jams."', 
                image: './assets/images/flashcards/Set3/beleaguer.gif'  
            },
            {
                word: 'physiognomy',  
                mnemonic: 'A person’s facial features or expression, especially indicative of character.',  
                synonyms: 'Features, Face, Expression',  
                hint: 'The facial features that often hint at a person’s character.',  
                positivity: 'Neutral',  
                sentence: '"His stern <u>physiognomy</u> made him look unapproachable."', 
                image: './assets/images/flashcards/Set3/physiognomy.gif'  
            },
            {
                word: 'nausea',  
                mnemonic: 'A feeling of sickness with an inclination to vomit.',  
                synonyms: 'Queasiness, Sickness, Discomfort',  
                hint: 'The feeling you get when you’re about to vomit.',  
                positivity: 'Negative',  
                sentence: '"The constant motion of the boat made her feel intense <u>nausea</u>."', 
                image: './assets/images/flashcards/Set3/nausea.gif'  
            },
            {
                word: 'ovoid',  
                mnemonic: 'Egg-shaped or oval.',  
                synonyms: 'Oval, Egg-shaped, Elliptical',  
                hint: 'Something shaped like an egg.',  
                positivity: 'Neutral',  
                sentence: '"The <u>ovoid</u> shape of the sculpture made it stand out in the gallery."', 
                image: './assets/images/flashcards/Set3/ovoid.gif'  
            },
            {
                word: 'concoct',  
                mnemonic: 'To create or invent something, especially by combining ingredients.',  
                synonyms: 'Create, Invent, Devise',  
                hint: 'Creating something by mixing various ingredients or ideas.',  
                positivity: 'Neutral',  
                sentence: '"She <u>concocted</u> a delicious meal with ingredients from her garden."', 
                image: './assets/images/flashcards/Set3/concoct.gif'  
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
                word: 'perversion',  
                mnemonic: 'The alteration of something from its original course or meaning, often in a negative way.',  
                synonyms: 'Corruption, Distortion, Deviation',  
                hint: 'When something good is twisted or corrupted into something wrong.',  
                positivity: 'Negative',  
                sentence: '"The <u>perversion</u> of justice in the case shocked the public."', 
                image: './assets/images/flashcards/Set3/perversion.gif'  
            },
            {
                word: 'unsullied',  
                mnemonic: 'Not spoiled or made impure; spotless.',  
                synonyms: 'Pure, Pristine, Untarnished',  
                hint: 'Something that remains perfectly clean or pure.',  
                positivity: 'Positive',  
                sentence: '"The <u>unsullied</u> snow stretched across the field, untouched by footprints."', 
                image: './assets/images/flashcards/Set3/unsullied.gif'  
            },
            {
                word: 'disembark',  
                mnemonic: 'To leave a ship, aircraft, or other vehicle.',  
                synonyms: 'Alight, Debark, Get off',  
                hint: 'The opposite of \'embark\'.',  
                positivity: 'Neutral',  
                sentence: '"The passengers <u>disembarked</u> the ship as it reached the dock."', 
                image: './assets/images/flashcards/Set3/disembark.gif'  
            },
            {
                word: 'chassis',  
                mnemonic: 'The frame or structure of a motor vehicle or other complex structure.',  
                synonyms: 'Frame, Structure, Skeleton',  
                hint: 'The structure that supports vehicles or machines.',  
                positivity: 'Neutral',  
                sentence: '"The car’s <u>chassis</u> was damaged after the accident, but the engine was fine."', 
                image: './assets/images/flashcards/Set3/chassis.gif'  
            },
            {
                word: 'rivulet',  
                mnemonic: 'A small stream of water.',  
                synonyms: 'Streamlet, Brook, Creek',  
                hint: 'A small stream that flows into a larger body of water.',  
                positivity: 'Neutral',  
                sentence: '"A tiny <u>rivulet</u> ran through the forest, feeding into the larger river downstream."', 
                image: './assets/images/flashcards/Set3/rivulet.gif'  
            },
            {
                word: 'exemplify',  
                mnemonic: 'To be a typical example of something.',  
                synonyms: 'Illustrate, Typify, Represent',  
                hint: 'When you give a clear example of something.',  
                positivity: 'Positive',  
                sentence: '"Her actions <u>exemplify</u> the true meaning of kindness."', 
                image: './assets/images/flashcards/Set3/exemplify.gif'  
            },
            {
                word: 'embellish',  
                mnemonic: 'To decorate or add details to something, often to make it more attractive.',  
                synonyms: 'Adorn, Decorate, Enhance',  
                hint: 'What you do to make a story or object more attractive.',  
                positivity: 'Neutral',  
                sentence: '"He <u>embellished</u> his travel stories, making them sound more exciting than they were."', 
                image: './assets/images/flashcards/Set3/embellish.gif'  
            },
            {
                word: 'obsidian',  
                mnemonic: 'A type of volcanic glass with a dark, glassy appearance.',  
                synonyms: 'Volcanic glass, Black stone',  
                hint: 'A naturally occurring dark volcanic glass.',  
                positivity: 'Neutral',  
                sentence: '"The sharp edge of the <u>obsidian</u> gleamed in the sunlight."', 
                image: './assets/images/flashcards/Set3/obsidian.jfif'  
            },
            {
                word: 'bedizen',  
                mnemonic: 'To dress or adorn gaudily.',  
                synonyms: 'Dress up, Adorn, Bedeck',  
                hint: 'To decorate yourself or something in a flashy, over-the-top way.',  
                positivity: 'Negative',  
                sentence: '"She <u>bedizened</u> herself with jewelry before the party."', 
                image: './assets/images/flashcards/Set3/bedizen.gif'  
            },
            {
                word: 'morgue',  
                mnemonic: 'A place where bodies are kept, especially to be examined.',  
                synonyms: 'Mortuary, Morgue house, Funeral home',  
                hint: 'Where bodies are kept for examination.',  
                positivity: 'Neutral',  
                sentence: '"The police visited the <u>morgue</u> to identify the victim\'s body."', 
                image: './assets/images/flashcards/Set3/morgue.gif'  
            },
            {
                word: 'prosody',  
                mnemonic: 'The patterns of rhythm and sound used in poetry.',  
                synonyms: 'Rhythm, Meter, Versification',  
                hint: 'The way rhythm and sound are used in poems.',  
                positivity: 'Neutral',  
                sentence: '"The poet used beautiful <u>prosody</u> to make the verses come alive."', 
                image: './assets/images/flashcards/Set3/prosody.gif'  
            },
            {
                word: 'abrogate',  
                mnemonic: 'To repeal or do away with a law, right, or formal agreement.',  
                synonyms: 'Revoke, Abolish, Annul',  
                hint: 'When a law is officially canceled or revoked.',  
                positivity: 'Neutral',  
                sentence: '"The government decided to <u>abrogate</u> the outdated law."', 
                image: './assets/images/flashcards/Set3/abrogate.gif'  
            },
            {
                word: 'deciduous',  
                mnemonic: 'Referring to trees or shrubs that shed their leaves annually.',  
                synonyms: 'Shedding, Falling, Seasonal',  
                hint: 'Describing trees that lose their leaves in autumn.',  
                positivity: 'Neutral',  
                sentence: '"<u>Deciduous</u> trees shed their leaves each fall and grow new ones in the spring."', 
                image: './assets/images/flashcards/Set3/deciduous.gif'  
            },
            {
                word: 'paradox',  
                mnemonic: 'A seemingly contradictory statement that may nonetheless be true.',  
                synonyms: 'Contradiction, Puzzle, Anomaly',  
                hint: 'A statement that seems contradictory but reveals truth.',  
                positivity: 'Neutral',  
                sentence: '"It was a <u>paradox</u> that he was both wealthy and unhappy."', 
                image: './assets/images/flashcards/Set3/paradox.gif'  
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
                word: 'bigotry',  
                mnemonic: 'Intolerance toward those who are different or hold different opinions.',  
                synonyms: 'Intolerance, Prejudice, Racism',  
                hint: 'Prejudice or intolerance toward a group of people.',  
                positivity: 'Negative',  
                sentence: '"<u>Bigotry</u> has no place in a society that values equality."', 
                image: './assets/images/flashcards/Set3/bigotry.gif'  
            },
            {
                word: 'obtuse',  
                mnemonic: 'Annoyingly insensitive or slow to understand.',  
                synonyms: 'Dull, Slow, Dim',  
                hint: 'Someone who is slow to understand or grasp concepts.',  
                positivity: 'Negative',  
                sentence: '"His <u>obtuse</u> behavior frustrated everyone at the meeting."', 
                image: './assets/images/flashcards/Set3/obtuse.gif'  
            },
            {
                word: 'catapult',  
                mnemonic: 'A device or structure used to launch objects, often with great force.',  
                synonyms: 'Launch, Hurl, Fling',  
                hint: 'A medieval device that hurls objects at enemies.',  
                positivity: 'Neutral',  
                sentence: '"The soldiers used a <u>catapult</u> to launch stones at the enemy fort."', 
                image: './assets/images/flashcards/Set3/catapult.gif'  
            },
            {
                word: 'derogatory',  
                mnemonic: 'Showing a critical or disrespectful attitude.',  
                synonyms: 'Disparaging, Belittling, Critical',  
                hint: 'A negative or insulting comment aimed at someone.',  
                positivity: 'Negative',  
                sentence: '"His <u>derogatory</u> comments upset the entire team."', 
                image: './assets/images/flashcards/Set3/derogatory.gif'  
            },
            {
                word: 'rally',  
                mnemonic: 'To come together again after a break or to bring together for a common cause.',  
                synonyms: 'Gather, Reunite, Assemble',  
                hint: 'When people come together again after a break.',  
                positivity: 'Positive',  
                sentence: '"The group <u>rallied</u> around their leader after the difficult decision was made."', 
                image: './assets/images/flashcards/Set3/rally.gif'  
            },
            {
                word: 'salacious',  
                mnemonic: 'Having or conveying undue interest in sexual matters.',  
                synonyms: 'Lewd, Lascivious, Indecent',  
                hint: 'A word to describe something with inappropriate sexual content.',  
                positivity: 'Negative',  
                sentence: '"The novel was criticized for its <u>salacious</u> content."', 
                image: './assets/images/flashcards/Set3/salacious.gif'  
            },
            {
                word: 'rasp',  
                mnemonic: 'A harsh, grating sound.',  
                synonyms: 'Grate, Scrape, Grind',  
                hint: 'The sound made when metal scrapes against metal.',  
                positivity: 'Negative',  
                sentence: '"The <u>rasp</u> of the knife against the stone filled the quiet room."', 
                image: './assets/images/flashcards/Set3/rasp.gif'  
            },
            {
                word: 'coin',  
                mnemonic: 'To invent a new word or phrase, or to create something new.',  
                synonyms: 'Invent, Create, Devise',  
                hint: 'To create or invent something, especially a new word.',  
                positivity: 'Neutral',  
                sentence: '"Shakespeare <u>coined</u> many new words that we still use today."', 
                image: './assets/images/flashcards/Set3/coin.gif'  
            }
            
            
            
            
    ],

    // set 4

    [
            {
                word: 'disavow',
                mnemonic: 'To deny responsibility or association with something',
                synonyms: 'reject, repudiate',
                hint: 'To reject responsibility',
                positivity: 'Neutral',
                sentence: '"He tried to disavow any connection to the crime."',
                image: './assets/images/flashcards/Set4/disavow.gif'
                },
                {
                    word: 'jingoist',
                    mnemonic: 'A person who shows extreme patriotism, often with an aggressive stance',
                    synonyms: 'chauvinist, nationalist',
                    hint: 'Aggressive patriotism',
                    positivity: 'Negative',
                    sentence: '"The jingoist insisted that his country was superior to all others."',
                    image: './assets/images/flashcards/Set4/jingoist.jfif'
                },
                {
                    word: 'legerdemain',
                    mnemonic: 'Sleight of hand; trickery',
                    synonyms: 'trickery, deception',
                    hint: 'Magic trick',
                    positivity: 'Negative',
                    sentence: '"The magician\'s legerdemain left the audience astonished."',
                    image: './assets/images/flashcards/Set4/legerdemain.gif'
                },
                {
                    word: 'secrete',
                    mnemonic: 'To produce and release a substance',
                    synonyms: 'excrete, discharge',
                    hint: 'Biological secretion',
                    positivity: 'Neutral',
                    sentence: '"The plant secretes a sticky substance to trap insects."',
                    image: './assets/images/flashcards/Set4/secrete.jfif'
                },
                {
                    word: 'renown',
                    mnemonic: 'Fame or great respect',
                    synonyms: 'fame, prestige',
                    hint: 'Famous or well-known',
                    positivity: 'Positive',
                    sentence: '"Her renown as a scientist earned her many awards."',
                    image: './assets/images/flashcards/Set4/renown.gif'
                },
                {
                    word: 'unwieldy',
                    mnemonic: 'Difficult to handle due to size or shape',
                    synonyms: 'clumsy, cumbersome',
                    hint: 'Difficult to manage',
                    positivity: 'Negative',
                    sentence: '"The unwieldy package was difficult to carry through the door."',
                    image: './assets/images/flashcards/Set4/unwieldy.jfif'
                },
                {
                    word: 'presumptuous',
                    mnemonic: 'Overly bold or forward',
                    synonyms: 'arrogant, overconfident',
                    hint: 'Overconfident or bold',
                    positivity: 'Negative',
                    sentence: '"It was presumptuous of him to assume he would be promoted."',
                    image: './assets/images/flashcards/Set4/presumptuous.gif'
                },
                {
                    word: 'clout',
                    mnemonic: 'Influence or power',
                    synonyms: 'influence, power',
                    hint: 'Influence over people',
                    positivity: 'Positive',
                    sentence: '"The politician used his clout to influence decisions in his favor."',
                    image: './assets/images/flashcards/Set4/clout.gif'
                },
                {
                    word: 'transcendental',
                    mnemonic: 'Beyond ordinary experience',
                    synonyms: 'mystical, supernatural',
                    hint: 'Beyond normal experiences',
                    positivity: 'Positive',
                    sentence: '"Her transcendental experience during meditation was life-changing."',
                    image: './assets/images/flashcards/Set4/transcendental.gif'
                },
                {
                    word: 'studied',
                    mnemonic: 'Carefully thought out or planned',
                    synonyms: 'calculated, deliberate',
                    hint: 'Deliberately planned',
                    positivity: 'Neutral',
                    sentence: '"His studied approach to the problem led to a successful solution."',
                    image: './assets/images/flashcards/Set4/studied.gif'
                },
        
                {
                        word: 'diadem',
                        mnemonic: 'A crown or headband, symbolizing authority',
                        synonyms: 'crown, circlet',
                        hint: 'A symbol of royalty',
                        positivity: 'Positive',
                        sentence: '"The queen\'s diadem sparkled in the light of the ceremony."',
                        image: './assets/images/flashcards/Set4/diadem.gif'
                },
                {
                        word: 'temporal',
                        mnemonic: 'Related to worldly, rather than spiritual matters',
                        synonyms: 'earthly, worldly',
                        hint: 'Earthly, not spiritual',
                        positivity: 'Neutral',
                        sentence: '"Temporal concerns often distract us from spiritual growth."',
                        image: './assets/images/flashcards/Set4/temporal.jfif'
                },
                {
                        word: 'irresolute',
                        mnemonic: 'Uncertain or hesitant',
                        synonyms: 'hesitant, doubtful',
                        hint: 'Unsure of decision',
                        positivity: 'Negative',
                        sentence: '"She remained irresolute about which college to attend."',
                        image: './assets/images/flashcards/Set4/irresolute.gif'
                },
                {
                        word: 'complement',
                        mnemonic: 'Something that completes or enhances something else',
                        synonyms: 'supplement, enhancement',
                        hint: 'Complements or enhances',
                        positivity: 'Positive',
                        sentence: '"The new software is a perfect complement to the hardware system."',
                        image: './assets/images/flashcards/Set4/complement.gif'
                },
                {
                        word: 'concise',
                        mnemonic: 'Brief and to the point',
                        synonyms: 'terse, succinct',
                        hint: 'Short and direct',
                        positivity: 'Positive',
                        sentence: '"His concise explanation made the topic easy to understand."',
                        image: './assets/images/flashcards/Set4/concise.gif'
                },
                {
                        word: 'paleontology',
                        mnemonic: 'Study of fossils and ancient life forms',
                        synonyms: 'fossil study, paleobiology',
                        hint: 'Study of ancient life',
                        positivity: 'Neutral',
                        sentence: '"Paleontology helps us understand the history of life on Earth."',
                        image: './assets/images/flashcards/Set4/paleontology.gif'
                },
                {
                        word: 'termination',
                        mnemonic: 'The action of ending something',
                        synonyms: 'end, conclusion',
                        hint: 'Ending of something',
                        positivity: 'Negative',
                        sentence: '"The termination of the contract left many employees without jobs."',
                        image: './assets/images/flashcards/Set4/termination.gif'
                },
                {
                        word: 'platonic',
                        mnemonic: 'Non-sexual, idealized love',
                        synonyms: 'non-romantic, ideal',
                        hint: 'Non-romantic love',
                        positivity: 'Neutral',
                        sentence: '"They shared a platonic friendship based on mutual respect."',
                        image: './assets/images/flashcards/Set4/platonic.gif'
                },
                {
                        word: 'disbar',
                        mnemonic: 'To officially remove a lawyer from their position',
                        synonyms: 'expel, disqualify',
                        hint: 'Disqualifying a lawyer',
                        positivity: 'Negative',
                        sentence: '"The lawyer was disbarred for unethical practices."',
                        image: './assets/images/flashcards/Set4/disbar.jfif'
                },
                {
                        word: 'canvass',
                        mnemonic: 'To solicit votes or opinions',
                        synonyms: 'survey, poll',
                        hint: 'Collecting opinions',
                        positivity: 'Neutral',
                        sentence: '"The candidates canvassed the neighborhood for votes."',
                        image: './assets/images/flashcards/Set4/canvass.gif'
                },
                {
                        word: 'inordinate',
                        mnemonic: 'Excessive or beyond normal limits',
                        synonyms: 'excessive, exorbitant',
                        hint: 'Too much',
                        positivity: 'Negative',
                        sentence: '"The project faced inordinate delays due to unforeseen issues."',
                        image: './assets/images/flashcards/Set4/inordinate.gif'
                },
                {
                        word: 'testator',
                        mnemonic: 'A person who makes a will',
                        synonyms: 'will maker, estate planner',
                        hint: 'Someone making a will',
                        positivity: 'Neutral',
                        sentence: '"The testator made sure to leave detailed instructions in the will."',
                        image: './assets/images/flashcards/Set4/testator.gif'
                },
                {
                        word: 'trunk',
                        mnemonic: 'A large, central part of something, especially a tree',
                        synonyms: 'stem, core',
                        hint: 'Central part of a tree',
                        positivity: 'Positive',
                        sentence: '"The elephant used its trunk to grab the food."',
                        image: './assets/images/flashcards/Set4/trunk.gif'
                },
                {
                        word: 'inimitable',
                        mnemonic: 'So unique that it cannot be imitated',
                        synonyms: 'unique, matchless',
                        hint: 'Cannot be imitated',
                        positivity: 'Negative',
                        sentence: '"Her inimitable style of writing sets her apart from other authors."',
                        image: './assets/images/flashcards/Set4/inimitable.gif'
                },
                {
                        word: 'pusillanimous',
                        mnemonic: 'Lacking courage; cowardly',
                        synonyms: 'cowardly, timid',
                        hint: 'Cowardly in nature',
                        positivity: 'Negative',
                        sentence: '"His pusillanimous attitude prevented him from standing up for his beliefs."',
                        image: './assets/images/flashcards/Set4/pusillanimous.gif'
                },
                {
                        word: 'entree',
                        mnemonic: 'The main course of a meal',
                        synonyms: 'main course, meal',
                        hint: 'A part of a meal',
                        positivity: 'Neutral',
                        sentence: '"The chef served the entree with a side of vegetables."',
                        image: './assets/images/flashcards/Set4/entree.gif'
                },
                {
                        word: 'acidulous',
                        mnemonic: 'Slightly sour or sharp in taste or manner',
                        synonyms: 'tart, sharp',
                        hint: 'Slightly sour',
                        positivity: 'Negative',
                        sentence: '"Her acidulous remarks stung more than expected."',
                        image: './assets/images/flashcards/Set4/acidulous.gif'
                },
                {
                        word: 'monetary',
                        mnemonic: 'Related to money',
                        synonyms: 'financial, economic',
                        hint: 'Related to finances',
                        positivity: 'Neutral',
                        sentence: '"The monetary policy aims to stabilize the economy."',
                        image: './assets/images/flashcards/Set4/monetary.gif'
                },
                {
                        word: 'churlish',
                        mnemonic: 'Rude or unfriendly',
                        synonyms: 'rude, ill-mannered',
                        hint: 'Rude and unfriendly',
                        positivity: 'Negative',
                        sentence: '"His churlish behavior made him unpopular among his peers."',
                        image: './assets/images/flashcards/Set4/churlish.gif'
                },
                {
                        word: 'grouch',
                        mnemonic: 'A habitually grumpy person',
                        synonyms: 'grump, crank',
                        hint: 'A grumpy person',
                        positivity: 'Negative',
                        sentence: '"The grouch next door never smiled at anyone."',
                        image: './assets/images/flashcards/Set4/grouch.gif'
                },
                {
                        word: 'riveting',
                        mnemonic: 'Extremely engaging or fascinating',
                        synonyms: 'captivating, fascinating',
                        hint: 'Extremely interesting',
                        positivity: 'Positive',
                        sentence: '"The documentary was so riveting that no one left their seat."',
                        image: './assets/images/flashcards/Set4/riveting.gif'
                },
                {
                        word: 'complaisant',
                        mnemonic: 'Willing to please others',
                        synonyms: 'obliging, agreeable',
                        hint: 'Willing to please',
                        positivity: 'Positive',
                        sentence: '"The complaisant waiter catered to all our needs with a smile."',
                        image: './assets/images/flashcards/Set4/complaisant.gif'
                },
                {
                        word: 'sordid',
                        mnemonic: 'Dirty or morally degraded',
                        synonyms: 'filthy, squalid',
                        hint: 'Morally corrupt',
                        positivity: 'Negative',
                        sentence: '"The sordid details of the scandal shocked everyone."',
                        image: './assets/images/flashcards/Set4/sordid.gif'
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
                            word: 'rail',
                            mnemonic: 'To criticize or complain angrily',
                            synonyms: 'scold, rant',
                            hint: 'Complains angrily',
                            positivity: 'Negative',
                            sentence: '"He railed against the new regulations at the town hall meeting."',
                            image: './assets/images/flashcards/Set4/rail.gif'
                    },
                    {
                            word: 'Occident',
                            mnemonic: 'The western world or countries',
                            synonyms: 'West, Western countries',
                            hint: 'Western world',
                            positivity: 'Neutral',
                            sentence: '"The Occident has a different cultural history compared to the Orient."',
                            image: './assets/images/flashcards/Set4/Occident.gif'
                    },
                    {
                            word: 'proxy',
                            mnemonic: 'A person authorized to act on behalf of someone else',
                            synonyms: 'representative, substitute',
                            hint: 'Someone acting on behalf of another',
                            positivity: 'Neutral',
                            sentence: '"She acted as his proxy during the meeting while he was away."',
                            image: './assets/images/flashcards/Set4/proxy.gif'
                    },
                    {
                            word: 'nomadic',
                            mnemonic: 'Moving from place to place',
                            synonyms: 'wandering, roving',
                            hint: 'Travels frequently',
                            positivity: 'Neutral',
                            sentence: '"Nomadic tribes often move according to the seasons."',
                            image: './assets/images/flashcards/Set4/nomadic.gif'
                    },
                    {
                            word: 'amnesty',
                            mnemonic: 'A pardon for past offenses',
                            synonyms: 'pardon, forgiveness',
                            hint: 'Pardon for offenses',
                            positivity: 'Positive',
                            sentence: '"The government granted amnesty to those who surrendered."',
                            image: './assets/images/flashcards/Set4/amnesty.gif'
                        },
                        {
                            word: 'orient',
                            mnemonic: 'The eastern world or countries',
                            synonyms: 'East, Eastern countries',
                            hint: 'Eastern world',
                            positivity: 'Neutral',
                            sentence: '"The Orient is rich in ancient traditions and culture."',
                            image: './assets/images/flashcards/Set4/orient.jfif'
                        },
                        {
                            word: 'sanctimonious',
                            mnemonic: 'Pretending to be morally superior',
                            synonyms: 'self-righteous, hypocritical',
                            hint: 'Pretending to be morally superior',
                            positivity: 'Negative',
                            sentence: '"His sanctimonious attitude annoyed everyone in the room."',
                            image: './assets/images/flashcards/Set4/sanctimonious.gif'
                        },
                        {
                            word: 'rustle',
                            mnemonic: 'A soft sound of things brushing against each other',
                            synonyms: 'whisper, swish',
                            hint: 'Soft brushing sound',
                            positivity: 'Neutral',
                            sentence: '"The rustle of leaves could be heard in the silent forest."',
                            image: './assets/images/flashcards/Set4/rustle.jfif'
                        },
                        {
                            word: 'coddle',
                            mnemonic: 'To treat gently or overprotect',
                            synonyms: 'pamper, baby',
                            hint: 'To pamper someone',
                            positivity: 'Neutral',
                            sentence: '"She coddled her puppy, carrying it everywhere she went."',
                            image: './assets/images/flashcards/Set4/coddle.gif'
                        },
                        {
                            word: 'acetic',
                            mnemonic: 'Relating to vinegar or acidic in nature',
                            synonyms: 'vinegary, sour',
                            hint: 'Related to vinegar',
                            positivity: 'Neutral',
                            sentence: '"The acetic smell of vinegar filled the room."',
                            image: './assets/images/flashcards/Set4/acetic.gif'
                        },
                        {
                            word: 'omnivorous',
                            mnemonic: 'Eating both plants and animals',
                            synonyms: 'all-eating, indiscriminate',
                            hint: 'Eats both plants and animals',
                            positivity: 'Neutral',
                            sentence: '"Humans are omnivorous, able to eat both plants and meat."',
                            image: './assets/images/flashcards/Set4/omnivorous.gif'
                        },
                        {
                            word: 'misconduct',
                            mnemonic: 'Improper or unethical behavior',
                            synonyms: 'misbehavior, wrongdoing',
                            hint: 'Improper behavior',
                            positivity: 'Negative',
                            sentence: '"The CEO was fired for gross misconduct."',
                            image: './assets/images/flashcards/Set4/misconduct.gif'
                        },
                        {
                            word: 'dank',
                            mnemonic: 'Damp, musty, and cold',
                            synonyms: 'damp, moist',
                            hint: 'Cold and damp',
                            positivity: 'Negative',
                            sentence: '"The basement was dank and smelled of mildew."',
                            image: './assets/images/flashcards/Set4/dank.gif'
                        },
                        {
                            word: 'dilemma',
                            mnemonic: 'A situation requiring a difficult choice',
                            synonyms: 'predicament, quandary',
                            hint: 'Difficult choice',
                            positivity: 'Neutral',
                            sentence: '"She faced a dilemma when choosing between two job offers."',
                            image: './assets/images/flashcards/Set4/dilemma.gif'
                        },
                        {
                            word: 'prize',
                            mnemonic: 'To highly value or consider as a reward',
                            synonyms: 'reward, treasure',
                            hint: 'Highly valued',
                            positivity: 'Positive',
                            sentence: '"The gold medal was the prize for winning the competition."',
                            image: './assets/images/flashcards/Set4/prize.gif'
                        },
                        {
                            word: 'attenuate',
                            mnemonic: 'To reduce in force or intensity',
                            synonyms: 'diminish, reduce',
                            hint: 'To reduce force',
                            positivity: 'Neutral',
                            sentence: '"The medication helped to attenuate the symptoms of the disease."',
                            image: './assets/images/flashcards/Set4/attenuate.gif'
                        },
                        {
                            word: 'annuity',
                            mnemonic: 'A fixed sum of money paid regularly',
                            synonyms: 'pension, stipend',
                            hint: 'Regular payment',
                            positivity: 'Neutral',
                            sentence: '"He receives an annuity from his investment every year."',
                            image: './assets/images/flashcards/Set4/annuity.gif'
                        },
                        {
                            word: 'sparse',
                            mnemonic: 'Thinly dispersed or scattered',
                            synonyms: 'scant, meager',
                            hint: 'Thinly scattered',
                            positivity: 'Neutral',
                            sentence: '"The sparse population made the town feel empty."',
                            image: './assets/images/flashcards/Set4/sparse.gif'
                        },
                        {
                            word: 'consonance',
                            mnemonic: 'Agreement or harmony',
                            synonyms: 'accord, harmony',
                            hint: 'Harmony or agreement',
                            positivity: 'Positive',
                            sentence: '"The consonance of their ideas helped them work well together."',
                            image: './assets/images/flashcards/Set4/consonance.gif'
                        },
                        {
                            word: 'livid',
                            mnemonic: 'Furiously angry',
                            synonyms: 'furious, enraged',
                            hint: 'Extremely angry',
                            positivity: 'Negative',
                            sentence: '"She was livid when she found out about the betrayal."',
                            image: './assets/images/flashcards/Set4/livid.gif'
                        },
                        {
                            word: 'indict',
                            mnemonic: 'To formally accuse someone of a serious crime',
                            synonyms: 'accuse, charge',
                            hint: 'To charge someone with a crime',
                            positivity: 'Negative',
                            sentence: '"The jury decided to indict the suspect for fraud."',
                            image: './assets/images/flashcards/Set4/indict.gif'
                        },
                        {
                            word: 'wangle',
                            mnemonic: 'To obtain something through trickery',
                            synonyms: 'finagle, manipulate',
                            hint: 'To obtain something by trick',
                            positivity: 'Negative',
                            sentence: '"He wangled his way into the exclusive party by pretending to know the host."',
                            image: './assets/images/flashcards/Set4/wangle.gif'
                        },
                        {
                            word: 'gazette',
                            mnemonic: 'An official publication or newspaper',
                            synonyms: 'journal, newspaper',
                            hint: 'Official newspaper',
                            positivity: 'Neutral',
                            sentence: '"The latest government announcements were published in the gazette."',
                            image: './assets/images/flashcards/Set4/gazette.gif'
                        },
                        {
                            word: 'hulking',
                            mnemonic: 'Large, heavy, or clumsy',
                            synonyms: 'massive, bulky',
                            hint: 'Big and clumsy',
                            positivity: 'Negative',
                            sentence: '"The hulking truck took up most of the narrow street."',
                            image: './assets/images/flashcards/Set4/hulking.gif'
                        },
                        {
                            word: 'shrivel',
                            mnemonic: 'To shrink or wither',
                            synonyms: 'wilt, wither',
                            hint: 'To shrink',
                            positivity: 'Negative',
                            sentence: '"The flowers began to shrivel under the intense heat."',
                            image: './assets/images/flashcards/Set4/shrivel.gif'
                        },
                        {
                            word: 'offensive',
                            mnemonic: 'Causing someone to feel hurt or upset',
                            synonyms: 'insulting, rude',
                            hint: 'Rude or insulting',
                            positivity: 'Negative',
                            sentence: '"His offensive remarks caused the meeting to end abruptly."',
                            image: './assets/images/flashcards/Set4/offensive.gif'
                        },
                        {
                            word: 'entourage',
                            mnemonic: 'A group of people accompanying an important person',
                            synonyms: 'retinue, escort',
                            hint: 'Group accompanying an important person',
                            positivity: 'Neutral',
                            sentence: '"The celebrity\'s entourage followed closely behind her."',
                            image: './assets/images/flashcards/Set4/entourage.gif'
                        },
                        {
                            word: 'sagacious',
                            mnemonic: 'Having or showing keen mental discernment',
                            synonyms: 'wise, prudent',
                            hint: 'Very wise',
                            positivity: 'Positive',
                            sentence: '"His sagacious advice helped us avoid a major mistake."',
                            image: './assets/images/flashcards/Set4/sagacious.jfif'
                        },
                        {
                            word: 'subsequent',
                            mnemonic: 'Coming after something in time',
                            synonyms: 'following, consequent',
                            hint: 'Following an event',
                            positivity: 'Neutral',
                            sentence: '"Subsequent events proved that her prediction was correct."',
                            image: './assets/images/flashcards/Set4/subsequent.gif'
                        },
                        {
                            word: 'blandishment',
                            mnemonic: 'Flattering speech or actions used to persuade someone',
                            synonyms: 'flattery, cajolery',
                            hint: 'Flattering to persuade',
                            positivity: 'Negative',
                            sentence: '"Despite her blandishment, he refused to lend her any money."',
                            image: './assets/images/flashcards/Set4/blandishment.gif'
                        },
                        {
                            word: 'exotic',
                            mnemonic: 'Attractively strange or unusual',
                            synonyms: 'foreign, unusual',
                            hint: 'Foreign and unusual',
                            positivity: 'Positive',
                            sentence: '"The exotic flowers attracted visitors from all over."',
                            image: './assets/images/flashcards/Set4/exotic.gif'
                        },
                        {
                            word: 'precipitous',
                            mnemonic: 'Dangerously high or steep',
                            synonyms: 'sheer, steep',
                            hint: 'Very steep',
                            positivity: 'Negative',
                            sentence: '"The mountain\'s precipitous cliffs were both dangerous and beautiful."',
                            image: './assets/images/flashcards/Set4/precipitous.gif'
                        },
                        {
                            word: 'exemplary',
                            mnemonic: 'Serving as a desirable model',
                            synonyms: 'ideal, model',
                            hint: 'A perfect example',
                            positivity: 'Positive',
                            sentence: '"Her exemplary conduct earned her a promotion."',
                            image: './assets/images/flashcards/Set4/exemplary.gif'
                        },
                        {
                            word: 'unassailable',
                            mnemonic: 'Impossible to challenge or defeat',
                            synonyms: 'invincible, indomitable',
                            hint: 'Unable to be challenged',
                            positivity: 'Positive',
                            sentence: '"Their position was unassailable after they gained control of the market."',
                            image: './assets/images/flashcards/Set4/unassailable.gif'
                        },
                        {
                            word: 'aseptic',
                            mnemonic: 'Free from contamination',
                            synonyms: 'sterile, hygienic',
                            hint: 'Germ-free',
                            positivity: 'Neutral',
                            sentence: '"The tools were kept in an aseptic environment to prevent contamination."',
                            image: './assets/images/flashcards/Set4/aseptic.gif'
                        },
                        {
                            word: 'cohabit',
                            mnemonic: 'To live together',
                            synonyms: 'live together, share quarter',
                            hint: 'Living together',
                            positivity: 'Neutral',
                            sentence: '"They decided to cohabit in the city to save on rent."',
                            image: './assets/images/flashcards/Set4/cohabit.gif'
                        },
                        {
                            word: 'steep',
                            mnemonic: 'Soak thoroughly',
                            synonyms: 'soak, drench',
                            hint: 'Soaked thoroughly',
                            positivity: 'Neutral',
                            sentence: '"The rain steeped the ground, leaving large puddles everywhere."',
                            image: './assets/images/flashcards/Set4/steep.gif'
                        },
                        {
                            word: 'timidity',
                            mnemonic: 'Lack of courage or confidence',
                            synonyms: 'shyness, bashfulness',
                            hint: 'Shyness',
                            positivity: 'Negative',
                            sentence: '"His timidity made it difficult for him to speak up in meetings."',
                            image: './assets/images/flashcards/Set4/timidity.gif'
                        },
                        {
                            word: 'domineer',
                            mnemonic: 'To assert one\'s will over another in an arrogant way',
                            synonyms: 'bully, tyrannize',
                            hint: 'To dominate someone',
                            positivity: 'Negative',
                            sentence: '"She tried to domineer over her coworkers, but they resisted."',
                            image: './assets/images/flashcards/Set4/domineer.gif'
                        },
                        {
                            word: 'hoard',
                            mnemonic: 'A stockpile of valuable items',
                            synonyms: 'store, stash',
                            hint: 'A stockpile of items',
                            positivity: 'Neutral',
                            sentence: '"He had a secret hoard of old comic books hidden in his attic."',
                            image: './assets/images/flashcards/Set4/hoard.gif'
                        },
                        {
                            word: 'miscellany',
                            mnemonic: 'A mixture of various things',
                            synonyms: 'assortment, variety',
                            hint: 'A mixture of things',
                            positivity: 'Neutral',
                            sentence: '"The museum displayed a miscellany of artifacts from different cultures."',
                            image: './assets/images/flashcards/Set4/miscellany.gif'
                        },
                        {
                            word: 'panacea',
                            mnemonic: 'A solution to all problems',
                            synonyms: 'cure-all, remedy',
                            hint: 'A solution for everything',
                            positivity: 'Positive',
                            sentence: '"The new policy was seen as a panacea for the company\'s financial issues."',
                            image: './assets/images/flashcards/Set4/panacea.gif'
                        },
                        {
                            word: 'puzzle',
                            mnemonic: 'Something difficult to understand or solve',
                            synonyms: 'enigma, conundrum',
                            hint: 'Something confusing',
                            positivity: 'Neutral',
                            sentence: '"The puzzle was so complex that it took hours to solve."',
                            image: './assets/images/flashcards/Set4/puzzle.gif'
                        },
                        {
                            word: 'detrimental',
                            mnemonic: 'Causing harm or damage',
                            synonyms: 'harmful, damaging',
                            hint: 'Causing harm',
                            positivity: 'Negative',
                            sentence: '"The detrimental effects of smoking are well documented."',
                            image: './assets/images/flashcards/Set4/detrimental.gif'
                        },
                        {
                            word: 'ambrosia',
                            mnemonic: 'Something extremely pleasing to taste or smell',
                            synonyms: 'delight, nectar',
                            hint: 'Delicious food',
                            positivity: 'Positive',
                            sentence: '"The dessert was a true ambrosia, loved by all."',
                            image: './assets/images/flashcards/Set4/ambrosia.gif'
                        },
                        {
                            word: 'ordination',
                            mnemonic: 'The act of conferring holy orders',
                            synonyms: 'consecration, anointing',
                            hint: 'Religious ceremony',
                            positivity: 'Neutral',
                            sentence: '"His ordination as a priest was a significant event."',
                            image: './assets/images/flashcards/Set4/ordination.gif'
                        },
                        {
                            word: 'shun',
                            mnemonic: 'To deliberately avoid or reject',
                            synonyms: 'avoid, eschew',
                            hint: 'To avoid someone',
                            positivity: 'Negative',
                            sentence: '"She decided to shun negative influences in her life."',
                            image: './assets/images/flashcards/Set4/shun.gif'
                        },
                        {
                            word: 'beatitude',
                            mnemonic: 'A state of utmost happiness',
                            synonyms: 'happiness, joy',
                            hint: 'State of happiness',
                            positivity: 'Positive',
                            sentence: '"He found beatitude in meditation and peace."',
                            image: './assets/images/flashcards/Set4/beatitude.gif'
                        },
                        {
                            word: 'provident',
                            mnemonic: 'Showing foresight or planning for the future',
                            synonyms: 'frugal, thrifty',
                            hint: 'Planning ahead',
                            positivity: 'Positive',
                            sentence: '"Being provident, she saved money for her education."',
                            image: './assets/images/flashcards/Set4/provident.gif'
                        },
                        {
                            word: 'demean',
                            mnemonic: 'To lower in dignity or stature',
                            synonyms: 'degrade, belittle',
                            hint: 'To belittle someone',
                            positivity: 'Negative',
                            sentence: '"His comments were meant to demean her achievements."',
                            image: './assets/images/flashcards/Set4/demean.gif'
                        },
                        {
                            word: 'aspirant',
                            mnemonic: 'A person who aspires to a particular position',
                            synonyms: 'candidate, hopeful',
                            hint: 'A hopeful candidate',
                            positivity: 'Neutral',
                            sentence: '"The aspirant worked hard to gain admission to the program."',
                            image: './assets/images/flashcards/Set4/aspirant.gif'
                        },
                        {
                            word: 'inhibit',
                            mnemonic: 'To restrain or prevent',
                            synonyms: 'restrain, prevent',
                            hint: 'To hold back',
                            positivity: 'Negative',
                            sentence: '"Fear can inhibit our ability to take risks."',
                            image: './assets/images/flashcards/Set4/inhibit.gif'
                        },
                        {
                            word: 'hysteria',
                            mnemonic: 'An uncontrollable outburst of emotion',
                            synonyms: 'panic, frenzy',
                            hint: 'Outburst of emotion',
                            positivity: 'Negative',
                            sentence: '"The crowd\'s hysteria was alarming during the concert."',
                            image: './assets/images/flashcards/Set4/hysteria.gif'
                        },
                        {
                            word: 'untoward',
                            mnemonic: 'Unexpected or inappropriate',
                            synonyms: 'unfortunate, unlucky',
                            hint: 'Unexpected issue',
                            positivity: 'Negative',
                            sentence: '"His untoward behavior shocked everyone at the party."',
                            image: './assets/images/flashcards/Set4/untoward.gif'
                        },
                        {
                            word: 'inconsistency',
                            mnemonic: 'Lack of consistency',
                            synonyms: 'inconsistency, variability',
                            hint: 'Lack of stability',
                            positivity: 'Negative',
                            sentence: '"The inconsistency in her work raised concerns."',
                            image: './assets/images/flashcards/Set4/inconsistency.gif'
                        },
                        {
                            word: 'plumb',
                            mnemonic: 'To measure the depth of something',
                            synonyms: 'explore, examine',
                            hint: 'To measure depth',
                            positivity: 'Neutral',
                            sentence: '"He decided to plumb the depths of the ocean."',
                            image: './assets/images/flashcards/Set4/plumb.gif'
                        },
                        {
                            word: 'discredit',
                            mnemonic: 'To harm someone\'s reputation',
                            synonyms: 'disparage, belittle',
                            hint: 'Harm someone\'s reputation',
                            positivity: 'Negative',
                            sentence: '"The scandal served to discredit his reputation."',
                            image: './assets/images/flashcards/Set4/discredit.gif'
                        },
                        {
                            word: 'migrant',
                            mnemonic: 'A person who moves from one place to another',
                            synonyms: 'refugee, traveler',
                            hint: 'A person moving places',
                            positivity: 'Neutral',
                            sentence: '"The migrant faced many challenges in the new country."',
                            image: './assets/images/flashcards/Set4/migrant.gif'
                        },
                        {
                            word: 'acclaim',
                            mnemonic: 'To praise enthusiastically',
                            synonyms: 'praise, applause',
                            hint: 'To praise loudly',
                            positivity: 'Positive',
                            sentence: '"The author received wide acclaim for his latest book."',
                            image: './assets/images/flashcards/Set4/acclaim.gif'
                        },
                        {
                            word: 'adversity',
                            mnemonic: 'Difficulties or misfortunes',
                            synonyms: 'difficulty, struggle',
                            hint: 'Facing challenges',
                            positivity: 'Negative',
                            sentence: '"She faced adversity but remained strong."',
                            image: './assets/images/flashcards/Set4/adversity.gif'
                        },
                        {
                            word: 'spat',
                            mnemonic: 'A quarrel or argument',
                            synonyms: 'fight, argument',
                            hint: 'A minor argument',
                            positivity: 'Negative',
                            sentence: '"Their spat was quickly resolved."',
                            image: './assets/images/flashcards/Set4/spat.gif'
                        },
                        {
                            word: 'contingent',
                            mnemonic: 'Dependent upon or conditional',
                            synonyms: 'conditional, dependent',
                            hint: 'Dependent situation',
                            positivity: 'Neutral',
                            sentence: '"The project is contingent upon funding approval."',
                            image: './assets/images/flashcards/Set4/contingent.gif'
                        },
                        {
                            word: 'irrefutable',
                            mnemonic: 'Not able to be denied or disputed',
                            synonyms: 'undeniable, unquestionable',
                            hint: 'Cannot be denied',
                            positivity: 'Positive',
                            sentence: '"The evidence provided was irrefutable."',
                            image: './assets/images/flashcards/Set4/irrefutable.gif'
                        }

    ],

    // set 5

    [
        {
            word: 'subjective',  
            mnemonic: 'Based on personal feelings or opinions.',  
            synonyms: 'Biased, Personal, Partial',  
            hint: 'Think of personal opinions.',  
            positivity: 'Neutral',  
            sentence: 'The article\'s viewpoint was highly subjective, reflecting the writer\'s personal experience.', 
            image: './assets/images/flashcards/Set5/subjective.gif'
        },
        {
            word: 'infiltrate',  
            mnemonic: 'Enter or gain access to secretly.',  
            synonyms: 'Penetrate, Invade, Intrude',  
            hint: 'Think of sneaky entry.',  
            positivity: 'Negative',  
            sentence: 'The detective managed to infiltrate the criminal organization without raising suspicion.', 
            image: './assets/images/flashcards/Set5/infiltrate.gif'
        },
        {
            word: 'repertoire',  
            mnemonic: 'A stock of skills or types of behavior.',  
            synonyms: 'Collection, Range, Inventory',  
            hint: 'Think of a set of abilities.',  
            positivity: 'Neutral',  
            sentence: 'The singer\'s repertoire included a wide variety of genres, from classical to pop.', 
            image: './assets/images/flashcards/Set5/repertoire.gif'
        },
        {
            word: 'delude',  
            mnemonic: 'To deceive or mislead.',  
            synonyms: 'Deceive, Mislead, Fool',  
            hint: 'Think of false beliefs.',  
            positivity: 'Negative',  
            sentence: 'He was deluded into thinking that his plan would work, despite clear evidence to the contrary.', 
            image: './assets/images/flashcards/Set5/delude.gif'
        },
        {
            word: 'carnal',  
            mnemonic: 'Related to physical needs or desires.',  
            synonyms: 'Sensual, Fleshly, Bodily',  
            hint: 'Think of physical pleasures.',  
            positivity: 'Neutral',  
            sentence: 'The story explored the carnal instincts that drive human behavior.', 
            image: './assets/images/flashcards/Set5/carnal.gif'
        },
        {
            word: 'percussion',  
            mnemonic: 'Musical instruments that are struck.',  
            synonyms: 'Drumming, Striking, Beating',  
            hint: 'Think of drums or rhythmic sounds.',  
            positivity: 'Neutral',  
            sentence: 'The band’s percussion section added a powerful rhythm to the performance.', 
            image: './assets/images/flashcards/Set5/percussion.gif'
        },
        {
            word: 'communal',  
            mnemonic: 'Shared by a group or community.',  
            synonyms: 'Shared, Collective, Public',  
            hint: 'Think of something shared.',  
            positivity: 'Positive',  
            sentence: 'The villagers worked together in the communal garden, growing food for everyone.', 
            image: './assets/images/flashcards/Set5/communal.gif'
        },
        {
            word: 'ensue',  
            mnemonic: 'To follow as a result.',  
            synonyms: 'Follow, Proceed, Result',  
            hint: 'Think of something that comes next.',  
            positivity: 'Neutral',  
            sentence: 'After the heated argument, silence ensued in the room.', 
            image: './assets/images/flashcards/Set5/ensue.gif'
        },
        {
            word: 'sleazy',  
            mnemonic: 'Morally degraded or dirty.',  
            synonyms: 'Sordid, Seedy, Shabby',  
            hint: 'Think of something dirty or low-class.',  
            positivity: 'Negative',  
            sentence: 'The journalist uncovered the sleazy dealings of the corrupt politician.', 
            image: './assets/images/flashcards/Set5/sleazy.gif'
        },
        {
            word: 'escapade',  
            mnemonic: 'A reckless adventure.',  
            synonyms: 'Adventure, Stunt, Antic',  
            hint: 'Think of a wild or daring event.',  
            positivity: 'Neutral',  
            sentence: 'Their weekend escapade to the mountains turned into a dangerous adventure when a storm hit.', 
            image: './assets/images/flashcards/Set5/escapade.gif'
        },
        {
            word: 'avalanche',
            mnemonic: 'A mass of snow or ice falling down.',
            synonyms: 'Landslide, Snowfall, Cascade',
            hint: 'Think of falling snow.',
            positivity: 'Neutral',
            sentence: 'The sudden avalanche buried the hikers\' camp under tons of snow.',
            image: './assets/images/flashcards/Set5/avalanche.gif'
        },
        {
            word: 'diverge',
            mnemonic: 'To separate or move apart.',
            synonyms: 'Split, Divide, Separate',
            hint: 'Think of something splitting.',
            positivity: 'Neutral',
            sentence: 'Their career paths began to diverge after graduation, with one entering academia and the other starting a business.',
            image: './assets/images/flashcards/Set5/diverge.gif'
        },
        {
            word: 'pernicious',
            mnemonic: 'Having a harmful effect.',
            synonyms: 'Harmful, Destructive, Noxious',
            hint: 'Think of something dangerous.',
            positivity: 'Negative',
            sentence: 'The pernicious influence of social media on young minds is a growing concern.',
            image: './assets/images/flashcards/Set5/pernicious.jfif'
        },
        {
            word: 'alms',
            mnemonic: 'Money or food given to the poor.',
            synonyms: 'Charity, Donations, Offerings',
            hint: 'Think of charitable giving.',
            positivity: 'Positive',
            sentence: 'The wealthy businessman regularly distributed alms to the homeless in his city.',
            image: './assets/images/flashcards/Set5/alms.gif'
        },
        {
            word: 'microcosm',
            mnemonic: 'A small version of something larger.',
            synonyms: 'Miniature, Representation, Example',
            hint: 'Think of a small world.',
            positivity: 'Neutral',
            sentence: 'The classroom is a microcosm of society, with its own rules and hierarchies.',
            image: './assets/images/flashcards/Set5/microcosm.gif'
        },
        {
            word: 'legend',
            mnemonic: 'A traditional story or myth.',
            synonyms: 'Myth, Tale, Fable',
            hint: 'Think of famous old stories.',
            positivity: 'Neutral',
            sentence: 'The legend of King Arthur has inspired countless books, films, and works of art.',
            image: './assets/images/flashcards/Set5/legend.gif'
        },
        {
            word: 'sentinel',
            mnemonic: 'A guard or watchman.',
            synonyms: 'Guard, Watchman, Lookout',
            hint: 'Think of someone standing watch.',
            positivity: 'Neutral',
            sentence: 'The sentinel stood at his post all night, keeping watch over the castle gates.',
            image: './assets/images/flashcards/Set5/sentinel.gif'
        },
        {
            word: 'cumulative',
            mnemonic: 'Increasing or growing by accumulation.',
            synonyms: 'Total, Collective, Aggregate',
            hint: 'Think of something that builds up.',
            positivity: 'Neutral',
            sentence: 'The cumulative effect of years of stress finally took a toll on his health.',
            image: './assets/images/flashcards/Set5/cumulative.gif'
        },
        {
            word: 'demagogue',
            mnemonic: 'A leader who seeks support by appealing to desires and prejudices.',
            synonyms: 'Agitator, Instigator, Rabble-rouser',
            hint: 'Think of someone stirring up emotions.',
            positivity: 'Negative',
            sentence: 'The demagogue manipulated the crowd\'s fears to gain political power.',
            image: './assets/images/flashcards/Set5/demagogue.gif'
        },
        {
            word: 'suture',
            mnemonic: 'A stitch holding together a wound.',
            synonyms: 'Stitch, Seam, Closure',
            hint: 'Think of surgical stitches.',
            positivity: 'Neutral',
            sentence: 'The doctor used a suture to close the deep cut on the patient\'s arm.',
            image: './assets/images/flashcards/Set5/suture.gif'
        },
        {
            word: 'arroyo',
            mnemonic: 'A dry creek or riverbed that temporarily fills with water.',
            synonyms: 'Stream, Brook, Creek',
            hint: 'Think of a seasonal watercourse.',
            positivity: 'Neutral',
            sentence: 'After the rain, the dry arroyo became a rushing stream.',
            image: './assets/images/flashcards/Set5/arroyo.gif'
        },
        {
            word: 'scrap',
            mnemonic: 'A small piece or fragment.',
            synonyms: 'Fragment, Piece, Bit',
            hint: 'Think of a leftover piece.',
            positivity: 'Neutral',
            sentence: 'He used a scrap of metal to fix the broken hinge.',
            image: './assets/images/flashcards/Set5/scrap.gif'
        },
        {
            word: 'quarantine',
            mnemonic: 'Isolation to prevent the spread of disease.',
            synonyms: 'Isolation, Seclusion, Detainment',
            hint: 'Think of isolating to protect others.',
            positivity: 'Neutral',
            sentence: 'After traveling abroad, he was placed in quarantine for two weeks.',
            image: './assets/images/flashcards/Set5/quarantine.gif'
        },
        {
            word: 'mercenary',
            mnemonic: 'A professional soldier hired to serve in a foreign army.',
            synonyms: 'Soldier, Hired Gun, Fighter',
            hint: 'Think of a hired soldier.',
            positivity: 'Negative',
            sentence: 'The mercenary fought not for loyalty, but for the highest bidder.',
            image: './assets/images/flashcards/Set5/mercenary.gif'
        },
        {
            word: 'trifling',
            mnemonic: 'Unimportant or trivial.',
            synonyms: 'Petty, Insignificant, Minor',
            hint: 'Think of something small or unimportant.',
            positivity: 'Negative',
            sentence: 'The argument was over a trifling matter, but it escalated quickly.',
            image: './assets/images/flashcards/Set5/trifling.jfif'
        },
        {
            word: 'pertinent',
            mnemonic: 'Relevant or applicable to a particular matter.',
            synonyms: 'Relevant, Applicable, Related',
            hint: 'Think of something important to the matter.',
            positivity: 'Positive',
            sentence: 'Her questions were all pertinent to the ongoing discussion.',
            image: './assets/images/flashcards/Set5/pertinent.gif'
        },
        {
            word: 'proverb',
            mnemonic: 'A short, commonly known saying that expresses a truth.',
            synonyms: 'Saying, Maxim, Aphorism',
            hint: 'Think of a wise saying.',
            positivity: 'Neutral',
            sentence: '"Actions speak louder than words" is a well-known proverb.',
            image: './assets/images/flashcards/Set5/proverb.gif'
        },
        {
            word: 'erroneous',
            mnemonic: 'Incorrect or wrong.',
            synonyms: 'Incorrect, False, Mistaken',
            hint: 'Think of something that\'s wrong.',
            positivity: 'Negative',
            sentence: 'The report was filled with erroneous data, which led to incorrect conclusions.',
            image: './assets/images/flashcards/Set5/erroneous.gif'
        },
        {
            word: 'chaste',
            mnemonic: 'Morally pure or abstaining from sexual activity.',
            synonyms: 'Pure, Virtuous, Innocent',
            hint: 'Think of moral purity.',
            positivity: 'Positive',
            sentence: 'She lived a chaste life, dedicated to her religious beliefs.',
            image: './assets/images/flashcards/Set5/chaste.gif'
        },
        {
            word: 'bequeath',
            mnemonic: 'To leave something to someone in a will.',
            synonyms: 'Give, Bestow, Leave',
            hint: 'Think of inheritance.',
            positivity: 'Positive',
            sentence: 'She bequeathed her jewelry collection to her granddaughter.',
            image: './assets/images/flashcards/Set5/bequeath.gif'
        },
        {
            word: 'quash',
            mnemonic: 'To reject or suppress forcibly.',
            synonyms: 'Suppress, Revoke, Nullify',
            hint: 'Think of stopping something by force.',
            positivity: 'Negative',
            sentence: 'The government moved quickly to quash the rebellion.',
            image: './assets/images/flashcards/Set5/quash.gif'
        },
        {
            word: 'semblance',
            mnemonic: 'The outward appearance or apparent form.',
            synonyms: 'Appearance, Likeness, Facade',
            hint: 'Think of something that looks like something else.',
            positivity: 'Neutral',
            sentence: 'Despite the chaos, he maintained a semblance of calm.',
            image: './assets/images/flashcards/Set5/semblance.jfif'
        },
        {
            word: 'growl',
            mnemonic: 'A low, guttural sound, typically by an animal.',
            synonyms: 'Snarl, Roar, Grumble',
            hint: 'Think of an animal sound.',
            positivity: 'Negative',
            sentence: 'The dog let out a low growl as the stranger approached.',
            image: './assets/images/flashcards/Set5/growl.gif'
        },
        {
            word: 'cardinal',
            mnemonic: 'Most important; chief.',
            synonyms: 'Fundamental, Primary, Essential',
            hint: 'Think of something of utmost importance.',
            positivity: 'Positive',
            sentence: 'The cardinal rule of the game is to always respect your opponent.',
            image: './assets/images/flashcards/Set5/cardinal.gif'
        },
        {
            word: 'suffuse',
            mnemonic: 'To spread over or through something.',
            synonyms: 'Spread, Pervade, Fill',
            hint: 'Think of something spreading like a color or feeling.',
            positivity: 'Neutral',
            sentence: 'The evening sky was suffused with shades of pink and orange.',
            image: './assets/images/flashcards/Set5/suffuse.gif'
        },
        {
            word: 'supplicant',
            mnemonic: 'A person who prays or begs humbly.',
            synonyms: 'Beggar, Pleader, Petitioner',
            hint: 'Think of someone asking for something humbly.',
            positivity: 'Neutral',
            sentence: 'The supplicant knelt before the king, asking for mercy.',
            image: './assets/images/flashcards/Set5/supplicant.gif'
        },
        {
            word: 'crabbed',
            mnemonic: 'Irritable and difficult to understand.',
            synonyms: 'Cross, Grumpy, Ill-tempered',
            hint: 'Think of someone cranky.',
            positivity: 'Negative',
            sentence: 'His crabbed handwriting made the letter nearly impossible to read.',
            image: './assets/images/flashcards/Set5/crabbed.gif'
        },
        {
            word: 'tremulous',
            mnemonic: 'Shaking or quivering slightly.',
            synonyms: 'Shaky, Quivering, Trembling',
            hint: 'Think of someone or something trembling.',
            positivity: 'Negative',
            sentence: 'Her voice was tremulous as she gave her first public speech.',
            image: './assets/images/flashcards/Set5/tremulous.gif'
        },
        {
            word: 'glaze',
            mnemonic: 'A glossy surface finish or a blank look.',
            synonyms: 'Gloss, Shine, Coat',
            hint: 'Think of a shiny surface.',
            positivity: 'Neutral',
            sentence: 'The artist applied a final glaze to the pottery, making it shine.',
            image: './assets/images/flashcards/Set5/glaze.jfif'
        },
        {
            word: 'gambit',
            mnemonic: 'A strategic move where something is sacrificed to gain advantage.',
            synonyms: 'Tactic, Strategy, Maneuver',
            hint: 'Think of a clever move.',
            positivity: 'Neutral',
            sentence: 'His opening gambit in the chess match caught his opponent off guard.',
            image: './assets/images/flashcards/Set5/gambit.gif'
        },
        {
            word: 'submissive',
            mnemonic: 'Ready to conform or obey.',
            synonyms: 'Obedient, Compliant, Yielding',
            hint: 'Think of someone yielding to authority.',
            positivity: 'Negative',
            sentence: 'The dog was submissive, rolling onto its back when approached.',
            image: './assets/images/flashcards/Set5/submissive.gif'
        },
        {
            word: 'bane',
            mnemonic: 'A cause of great distress or annoyance.',
            synonyms: 'Curse, Scourge, Plague',
            hint: 'Think of something that causes suffering.',
            positivity: 'Negative',
            sentence: 'Traffic jams are the bane of my daily commute.',
            image: './assets/images/flashcards/Set5/bane.jfif'
        },
        {
            word: 'parity',
            mnemonic: 'The state of being equal.',
            synonyms: 'Equality, Balance, Equivalence',
            hint: 'Think of equality in status or amount.',
            positivity: 'Neutral',
            sentence: 'The company aimed to achieve parity between male and female employees in leadership roles.',
            image: './assets/images/flashcards/Set5/parity.gif'
        },
        {
            word: 'compunction',
            mnemonic: 'A feeling of guilt or moral scruple.',
            synonyms: 'Regret, Remorse, Contrition',
            hint: 'Think of feeling guilty.',
            positivity: 'Negative',
            sentence: 'He felt no compunction about lying to get the job.',
            image: './assets/images/flashcards/Set5/compunction.gif'
        },
        {
            word: 'curmudgeon',
            mnemonic: 'A bad-tempered or surly person.',
            synonyms: 'Grump, Crank, Grouch',
            hint: 'Think of a grumpy old person.',
            positivity: 'Negative',
            sentence: 'The old man next door was a curmudgeon who yelled at kids for playing in his yard.',
            image: './assets/images/flashcards/Set5/curmudgeon.gif'
        },
        {
            word: 'incarnation',
            mnemonic: 'A person or thing regarded as embodying a quality or idea.',
            synonyms: 'Embodiment, Manifestation, Personification',
            hint: 'Think of someone representing an idea.',
            positivity: 'Neutral',
            sentence: 'She was the very incarnation of kindness, always helping others.',
            image: './assets/images/flashcards/Set5/incarnation.gif'
        },
        {
            word: 'carnage',
            mnemonic: 'The killing of a large number of people.',
            synonyms: 'Slaughter, Massacre, Bloodshed',
            hint: 'Think of mass destruction.',
            positivity: 'Negative',
            sentence: 'The battlefield was a scene of unimaginable carnage after the war.',
            image: './assets/images/flashcards/Set5/carnage.gif'
        },
        {
            word: 'boon',
            mnemonic: 'A thing that is helpful or beneficial.',
            synonyms: 'Blessing, Advantage, Benefit',
            hint: 'Think of something that helps.',
            positivity: 'Positive',
            sentence: 'The new highway was a boon for the small town’s economy.',
            image: './assets/images/flashcards/Set5/boon.jfif'
        },
        {
            word: 'cataclysm',
            mnemonic: 'A large-scale and violent event in the natural world.',
            synonyms: 'Disaster, Catastrophe, Calamity',
            hint: 'Think of a major disaster.',
            positivity: 'Negative',
            sentence: 'The earthquake was a cataclysm that devastated the city.',
            image: './assets/images/flashcards/Set5/cataclysm.gif'
        },
        {
            word: 'potentate',
            mnemonic: 'A monarch or ruler with great power.',
            synonyms: 'Sovereign, Ruler, Emperor',
            hint: 'Think of a powerful ruler.',
            positivity: 'Neutral',
            sentence: 'The potentate ruled his kingdom with an iron fist.',
            image: './assets/images/flashcards/Set5/potentate.gif'
        },
        {
            word: 'respiration',
            mnemonic: 'The process of breathing.',
            synonyms: 'Breathing, Inhalation, Exhalation',
            hint: 'Think of the act of breathing.',
            positivity: 'Neutral',
            sentence: 'The doctor checked the patient\'s respiration to ensure they were breathing properly.',
            image: './assets/images/flashcards/Set5/respiration.gif'
        },
        {
            word: 'deleterious',
            mnemonic: 'Causing harm or damage.',
            synonyms: 'Harmful, Damaging, Detrimental',
            hint: 'Think of something bad for health.',
            positivity: 'Negative',
            sentence: 'The deleterious effects of pollution are becoming more apparent.',
            image: './assets/images/flashcards/Set5/deleterious.gif'
        },
        {
            word: 'cognizance',
            mnemonic: 'Knowledge or awareness.',
            synonyms: 'Awareness, Knowledge, Perception',
            hint: 'Think of being aware.',
            positivity: 'Neutral',
            sentence: 'The committee took full cognizance of the environmental impact before proceeding with the project.',
            image: './assets/images/flashcards/Set5/cognizance.gif'
        },
        {
            word: 'tinge',
            mnemonic: 'A slight degree of something.',
            synonyms: 'Hint, Trace, Touch',
            hint: 'Think of a small amount.',
            positivity: 'Neutral',
            sentence: 'There was a tinge of sadness in her voice as she said goodbye.',
            image: './assets/images/flashcards/Set5/tinge.jfif'
        },
        {
            word: 'apogee',
            mnemonic: 'The highest point in the development of something.',
            synonyms: 'Peak, Climax, Summit',
            hint: 'Think of the highest point.',
            positivity: 'Neutral',
            sentence: 'His career reached its apogee when he won the Nobel Prize.',
            image: './assets/images/flashcards/Set5/apogee.gif'
        },
        {
            word: 'indissoluble',
            mnemonic: 'Unable to be destroyed or undone.',
            synonyms: 'Permanent, Unbreakable, Enduring',
            hint: 'Think of something that lasts forever.',
            positivity: 'Positive',
            sentence: 'Their friendship was an indissoluble bond, forged over years of shared experiences.',
            image: './assets/images/flashcards/Set5/indissoluble.jfif'
        },
        {
            word: 'enthrall',
            mnemonic: 'To captivate or charm completely.',
            synonyms: 'Fascinate, Captivate, Mesmerize',
            hint: 'Think of something fascinating.',
            positivity: 'Positive',
            sentence: 'The magician’s performance enthralled the audience, leaving them in awe.',
            image: './assets/images/flashcards/Set5/enthrall.gif'
        },
        {
            word: 'hallucination',
            mnemonic: 'An experience of seeing or hearing something that is not there.',
            synonyms: 'Illusion, Delusion, Vision',
            hint: 'Think of seeing things that aren’t real.',
            positivity: 'Neutral',
            sentence: 'After days without sleep, he began to have vivid hallucinations of voices and shadows.',
            image: './assets/images/flashcards/Set5/hallucination.gif'
        },
        {
            word: 'quotidian',
            mnemonic: 'Occurring daily; commonplace.',
            synonyms: 'Daily, Everyday, Routine',
            hint: 'Think of something happening every day.',
            positivity: 'Neutral',
            sentence: 'Their quotidian routine of coffee and newspapers brought them comfort each morning.',
            image: './assets/images/flashcards/Set5/quotidian.gif'
        },
        {
            word: 'citadel',
            mnemonic: 'A fortress, typically on high ground.',
            synonyms: 'Stronghold, Fortress, Bastion',
            hint: 'Think of a protected place.',
            positivity: 'Neutral',
            sentence: 'The soldiers retreated to the citadel to defend against the invaders.',
            image: './assets/images/flashcards/Set5/citadel.jfif'
        },
        {
            word: 'repast',
            mnemonic: 'A meal.',
            synonyms: 'Feast, Meal, Banquet',
            hint: 'Think of eating a meal.',
            positivity: 'Neutral',
            sentence: 'After a long day of work, the family sat down to a hearty repast.',
            image: './assets/images/flashcards/Set5/repast.gif'
        },
        {
            word: 'confiscate',
            mnemonic: 'To take possession of something officially.',
            synonyms: 'Seize, Impound, Expropriate',
            hint: 'Think of taking something away.',
            positivity: 'Neutral',
            sentence: 'The police confiscated the illegal weapons during the raid.',
            image: './assets/images/flashcards/Set5/confiscate.gif'
        },
        {
            word: 'tendentious',
            mnemonic: 'Expressing or promoting a particular cause or point of view.',
            synonyms: 'Biased, Partisan, Prejudiced',
            hint: 'Think of someone with an agenda.',
            positivity: 'Negative',
            sentence: 'The tendentious article clearly favored one side of the debate.',
            image: './assets/images/flashcards/Set5/tendentious.jpg'
        },
        {
            word: 'glib',
            mnemonic: 'Fluent but insincere or shallow in speech.',
            synonyms: 'Slick, Superficial, Insincere',
            hint: 'Think of smooth but shallow talk.',
            positivity: 'Negative',
            sentence: 'His glib response to the serious question irritated everyone in the room.',
            image: './assets/images/flashcards/Set5/glib.gif'
        },
        {
            word: 'matrix',
            mnemonic: 'An environment or structure within which something develops.',
            synonyms: 'Framework, Structure, Grid',
            hint: 'Think of a framework for growth.',
            positivity: 'Neutral',
            sentence: 'The city served as a matrix for the cultural movement to thrive.',
            image: './assets/images/flashcards/Set5/matrix.gif'
        },
        {
            word: 'overweening',
            mnemonic: 'Excessive pride or confidence.',
            synonyms: 'Arrogant, Conceited, Overconfident',
            hint: 'Think of someone overconfident.',
            positivity: 'Negative',
            sentence: 'His overweening ambition led him to make reckless decisions.',
            image: './assets/images/flashcards/Set5/overweening.gif'
        },
        {
            word: 'aboriginal',
            mnemonic: 'Native to a region; original inhabitants.',
            synonyms: 'Indigenous, Native, Original',
            hint: 'Think of something native to a place.',
            positivity: 'Neutral',
            sentence: 'The aboriginal people of the island had lived there for thousands of years.',
            image: './assets/images/flashcards/Set5/aboriginal.gif'
        },
        {
            word: 'meager',
            mnemonic: 'Lacking in quantity or quality.',
            synonyms: 'Insufficient, Scant, Paltry',
            hint: 'Think of something small in amount.',
            positivity: 'Negative',
            sentence: 'His meager earnings were barely enough to cover his rent.',
            image: './assets/images/flashcards/Set5/meager.gif'
        },
        {
            word: 'acquittal',
            mnemonic: 'A judgment that a person is not guilty of a crime.',
            synonyms: 'Clearing, Exoneration, Vindication',
            hint: 'Think of being found not guilty.',
            positivity: 'Positive',
            sentence: 'The defendant’s acquittal came as a surprise after the long trial.',
            image: './assets/images/flashcards/Set5/acquittal.gif'
        },
        {
            word: 'steadfast',
            mnemonic: 'Resolutely firm and unwavering.',
            synonyms: 'Loyal, Faithful, Committed',
            hint: 'Think of someone who never changes their position.',
            positivity: 'Positive',
            sentence: 'Her steadfast loyalty to her friends was admired by everyone.',
            image: './assets/images/flashcards/Set5/steadfast.gif'
        },
        {
            word: 'throes',
            mnemonic: 'Intense or violent pain and struggle.',
            synonyms: 'Agony, Struggle, Anguish',
            hint: 'Think of a person in extreme pain.',
            positivity: 'Negative',
            sentence: 'He was in the throes of a fierce battle with his illness.',
            image: './assets/images/flashcards/Set5/throes.gif'
        },
        {
            word: 'larder',
            mnemonic: 'A place where food is stored.',
            synonyms: 'Pantry, Storage, Cupboard',
            hint: 'Think of a food storage area.',
            positivity: 'Neutral',
            sentence: 'The larder was well-stocked with preserves and fresh produce.',
            image: './assets/images/flashcards/Set5/larder.gif'
        },
        {
            word: 'lust',
            mnemonic: 'A strong desire for something.',
            synonyms: 'Craving, Desire, Yearning',
            hint: 'Think of an intense craving.',
            positivity: 'Negative',
            sentence: 'His lust for power drove him to betray his closest allies.',
            image: './assets/images/flashcards/Set5/lust.gif'
        },
        {
            word: 'apparent',
            mnemonic: 'Clearly visible or understood.',
            synonyms: 'Obvious, Evident, Clear',
            hint: 'Think of something that is easily seen.',
            positivity: 'Neutral',
            sentence: 'It was apparent that she was upset by the way she avoided eye contact.',
            image: './assets/images/flashcards/Set5/apparent.gif'
        },
        {
            word: 'invalidate',
            mnemonic: 'To make something invalid or null.',
            synonyms: 'Nullify, Discredit, Void',
            hint: 'Think of making something useless.',
            positivity: 'Negative',
            sentence: 'The discovery of new evidence may invalidate the previous conclusion.',
            image: './assets/images/flashcards/Set5/invalidate.gif'
        },
        {
            word: 'choleric',
            mnemonic: 'Easily angered; bad-tempered.',
            synonyms: 'Irritable, Hot-tempered, Cranky',
            hint: 'Think of someone quick to anger.',
            positivity: 'Negative',
            sentence: 'His choleric outburst at the meeting shocked everyone.',
            image: './assets/images/flashcards/Set5/choleric.gif'
        },
        {
            word: 'sojourn',
            mnemonic: 'A temporary stay.',
            synonyms: 'Visit, Stopover, Stay',
            hint: 'Think of a short visit.',
            positivity: 'Neutral',
            sentence: 'Their sojourn in Paris was brief but memorable.',
            image: './assets/images/flashcards/Set5/sojourn.gif'
        },
        {
            word: 'temerity',
            mnemonic: 'Excessive confidence or boldness.',
            synonyms: 'Audacity, Boldness, Recklessness',
            hint: 'Think of being overly bold.',
            positivity: 'Negative',
            sentence: 'He had the temerity to question the professor’s authority in front of the entire class.',
            image: './assets/images/flashcards/Set5/temerity.gif'
        },
        {
            word: 'obsessive',
            mnemonic: 'Having an obsession with something.',
            synonyms: 'Fixated, Compulsive, Fanatical',
            hint: 'Think of a strong, uncontrollable focus.',
            positivity: 'Negative',
            sentence: 'His obsessive attention to detail caused him to miss the bigger picture.',
            image: './assets/images/flashcards/Set5/obsessive.gif'
        },
        {
            word: 'monotony',
            mnemonic: 'Lack of variety and interest.',
            synonyms: 'Dullness, Repetitiveness, Sameness',
            hint: 'Think of something boring or repetitive.',
            positivity: 'Negative',
            sentence: 'The monotony of the job made her lose motivation.',
            image: './assets/images/flashcards/Set5/monotony.gif'
        },
        {
            word: 'taut',
            mnemonic: 'Stretched or pulled tight.',
            synonyms: 'Tight, Tense, Strained',
            hint: 'Think of something stretched.',
            positivity: 'Neutral',
            sentence: 'The rope was pulled taut between the two poles.',
            image: './assets/images/flashcards/Set5/taut.gif'
        },
        {
            word: 'beneficial',
            mnemonic: 'Producing good results or advantageous.',
            synonyms: 'Advantageous, Helpful, Useful',
            hint: 'Think of something good for you.',
            positivity: 'Positive',
            sentence: 'Regular exercise is beneficial to your health.',
            image: './assets/images/flashcards/Set5/beneficial.gif'
        },
        {
            word: 'retiring',
            mnemonic: 'Shy and fond of being alone.',
            synonyms: 'Reserved, Shy, Withdrawn',
            hint: 'Think of someone who prefers to be alone.',
            positivity: 'Neutral',
            sentence: 'She was a retiring person, rarely seen at social events.',
            image: './assets/images/flashcards/Set5/retiring.gif'
        },
        {
            word: 'ichthyology',
            mnemonic: 'The branch of zoology that deals with fish.',
            synonyms: 'Fish science, Fish studies, Marine biology',
            hint: 'Think of the study of fish.',
            positivity: 'Neutral',
            sentence: 'His passion for ichthyology led him to discover several new species of fish.',
            image: './assets/images/flashcards/Set5/ichthyology.gif'
        },
        {
            word: 'hygiene',
            mnemonic: 'Practices conducive to maintaining health.',
            synonyms: 'Cleanliness, Sanitation, Clean living',
            hint: 'Think of cleanliness habits.',
            positivity: 'Positive',
            sentence: 'Good hygiene is essential to prevent the spread of disease.',
            image: './assets/images/flashcards/Set5/hygiene.gif'
        },
        {
            word: 'compatible',
            mnemonic: 'Able to exist or work together without conflict.',
            synonyms: 'Harmonious, Consistent, Congruent',
            hint: 'Think of things that work well together.',
            positivity: 'Positive',
            sentence: 'The software was compatible with both Windows and Mac systems.',
            image: './assets/images/flashcards/Set5/compatible.gif'
        },
        {
            word: 'tangential',
            mnemonic: 'Only slightly related to the main point.',
            synonyms: 'Peripheral, Incidental, Divergent',
            hint: 'Think of something off-topic.',
            positivity: 'Neutral',
            sentence: 'His comments were tangential to the main issue, diverting the discussion.',
            image: './assets/images/flashcards/Set5/tangential.gif'
        },
        {
            word: 'palatable',
            mnemonic: 'Pleasant to taste or acceptable.',
            synonyms: 'Tasty, Agreeable, Acceptable',
            hint: 'Think of something easy to accept or enjoy.',
            positivity: 'Positive',
            sentence: 'The chef’s new dish was palatable to even the pickiest diners.',
            image: './assets/images/flashcards/Set5/palatable.gif'
        },
        {
            word: 'confine',
            mnemonic: 'To keep or restrict within certain limits.',
            synonyms: 'Restrict, Limit, Restrain',
            hint: 'Think of something kept within boundaries.',
            positivity: 'Negative',
            sentence: 'The prisoner was confined to his cell for 23 hours a day.',
            image: './assets/images/flashcards/Set5/confine.gif'
        },
        {
            word: 'delusion',
            mnemonic: 'A false belief despite strong evidence.',
            synonyms: 'Illusion, Misconception, Fallacy',
            hint: 'Think of a false belief.',
            positivity: 'Negative',
            sentence: 'He lived under the delusion that he was invincible.',
            image: './assets/images/flashcards/Set5/delusion.gif'
        },
        {
            word: 'postulate',
            mnemonic: 'To suggest or assume the existence of something.',
            synonyms: 'Assume, Hypothesize, Propose',
            hint: 'Think of suggesting a theory.',
            positivity: 'Neutral',
            sentence: 'The scientist postulated that the planet could support life.',
            image: './assets/images/flashcards/Set5/postulate.jfif'
        },
        {
            word: 'protean',
            mnemonic: 'Able to change or adapt easily.',
            synonyms: 'Versatile, Adaptable, Flexible',
            hint: 'Think of something that changes forms.',
            positivity: 'Positive',
            sentence: 'His protean ability to shift between different roles made him a valuable actor.',
            image: './assets/images/flashcards/Set5/protean.gif'
        },
        {
            word: 'debilitate',
            mnemonic: 'To weaken or make something less effective.',
            synonyms: 'Weaken, Cripple, Drain',
            hint: 'Think of something losing strength.',
            positivity: 'Negative',
            sentence: 'The long illness debilitated him, leaving him bedridden for weeks.',
            image: './assets/images/flashcards/Set5/debilitate.gif'
        },
        {
            word: 'maneuver',
            mnemonic: 'A movement requiring skill and care.',
            synonyms: 'Tactic, Move, Strategy',
            hint: 'Think of a careful or strategic move.',
            positivity: 'Neutral',
            sentence: 'The pilot executed a tricky maneuver to avoid the storm.',
            image: './assets/images/flashcards/Set5/maneuver.gif'
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
            word: 'indoctrinate',
            mnemonic: 'To teach someone to fully accept certain beliefs.',
            synonyms: 'Brainwash, Teach, Inculcate',
            hint: 'Think of intense teaching with a bias.',
            positivity: 'Negative',
            sentence: 'The regime sought to indoctrinate the population with its ideology.',
            image: './assets/images/flashcards/Set5/indoctrinate.gif'
        },
        {
            word: 'molt',
            mnemonic: 'To shed old feathers, hair, or skin to allow new growth.',
            synonyms: 'Shed, Cast off, Lose',
            hint: 'Think of animals shedding their outer layer.',
            positivity: 'Neutral',
            sentence: 'The snake molted its skin, leaving behind a dry shell.',
            image: './assets/images/flashcards/Set5/molt.gif'
        }
        
        
        
    ],

    // set 6
    [
        {
            word: 'manifold',
            mnemonic: 'many and varied; having many features or forms.',
            synonyms: 'numerous, multiple, diverse',
            hint: 'Think of many different parts.',
            positivity: 'Neutral',
            sentence: 'The solutions to the problem were manifold, offering many different approaches.',
            image: './assets/images/flashcards/Set6/manifold.webp'
        },
        {
            word: 'indubitable',
            mnemonic: 'Impossible to doubt.',
            synonyms: 'unquestionable, certain, undeniable',
            hint: 'Without a doubt.',
            positivity: 'Positive',
            sentence: 'Her success was indubitable after the stellar presentation.',
            image: './assets/images/flashcards/Set6/indubitable.gif'
        },
        {
            word: 'aghast',
            mnemonic: 'Filled with horror or shock.',
            synonyms: 'horrified, stunned, appalled',
            hint: 'A feeling of extreme surprise.',
            positivity: 'Negative',
            sentence: 'He was aghast at the thought of missing the deadline.',
            image: './assets/images/flashcards/Set6/aghast.gif'
        },
        {
            word: 'headlong',
            mnemonic: 'In a rush; with reckless haste.',
            synonyms: 'reckless, hasty, impulsive',
            hint: 'Moving forward without thinking.',
            positivity: 'Negative',
            sentence: 'They made a headlong dive into the project without proper planning.',
            image: './assets/images/flashcards/Set6/headlong.gif'
        },
        {
            word: 'stench',
            mnemonic: 'A strong, unpleasant smell.',
            synonyms: 'odor, reek, smell',
            hint: 'Something that smells very bad.',
            positivity: 'Negative',
            sentence: 'The stench of rotten food filled the room.',
            image: './assets/images/flashcards/Set6/stench.gif'
        },
        {
            word: 'mediate',
            mnemonic: 'Intervene in a dispute to resolve it.',
            synonyms: 'arbitrate, negotiate, intercede',
            hint: 'Someone who helps resolve a conflict.',
            positivity: 'Positive',
            sentence: 'She was called in to mediate the dispute between the two companies.',
            image: './assets/images/flashcards/Set6/mediate.png'
        },
        {
            word: 'coeval',
            mnemonic: 'Of the same age or date.',
            synonyms: 'contemporary, simultaneous, synchronous',
            hint: 'Occurring at the same time.',
            positivity: 'Neutral',
            sentence: 'The two artists were coeval, producing works in the same era.',
            image: './assets/images/flashcards/Set6/coeval.jpg'
        },
        {
            word: 'cartographer',
            mnemonic: 'A person who makes maps.',
            synonyms: 'mapmaker, surveyor, chartist',
            hint: 'Someone who creates maps.',
            positivity: 'Neutral',
            sentence: 'The cartographer spent months charting the new territory.',
            image: './assets/images/flashcards/Set6/cartographer.jpeg'
        },
        {
            word: 'expropriate',
            mnemonic: 'Take away property from its owner.',
            synonyms: 'seize, confiscate, appropriate',
            hint: 'To take something, often land or property.',
            positivity: 'Negative',
            sentence: 'The government moved to expropriate the land for a new highway.',
            image: './assets/images/flashcards/Set6/expropriate.gif'
        },
        {
            word: 'mesmerize',
            mnemonic: 'Hold the attention of someone.',
            synonyms: 'enthrall, fascinate, captivate',
            hint: 'To completely grab someone\'s attention.',
            positivity: 'Neutral',
            sentence: 'The dancer\'s performance was so beautiful that it mesmerized the audience.',
            image: './assets/images/flashcards/Set6/mesmerize.gif'
        },
        {
            word: 'ghastly',
            mnemonic: 'Causing great horror or fear.',
            synonyms: 'horrible, terrifying, frightful',
            hint: 'Something shockingly bad or horrific.',
            positivity: 'Negative',
            sentence: 'The sight of the accident was ghastly, leaving everyone in shock.',
            image: './assets/images/flashcards/Set6/ghastly.gif'
        },
        {
            word: 'inveigle',
            mnemonic: 'Persuade someone by deception or flattery.',
            synonyms: 'entice, lure, manipulate',
            hint: 'Persuading by flattery or trickery.',
            positivity: 'Negative',
            sentence: 'She managed to inveigle him into lending her his car.',
            image: './assets/images/flashcards/Set6/inveigle.gif'
        },
        {
            word: 'purport',
            mnemonic: 'Appear to be or do something, especially falsely.',
            synonyms: 'claim, profess, imply',
            hint: 'Claiming to be something, often falsely.',
            positivity: 'Neutral',
            sentence: 'The document purports to be the official report on the case.',
            image: './assets/images/flashcards/Set6/purport.jpeg'
        },
        {
            word: 'warren',
            mnemonic: 'A network of interconnected rabbit burrows or a densely populated area.',
            synonyms: 'maze, labyrinth, network',
            hint: 'A place that is crowded or complex.',
            positivity: 'Neutral',
            sentence: 'The old city was a warren of narrow streets and alleyways.',
            image: './assets/images/flashcards/Set6/warren.jpeg'
        },
        {
            word: 'dexterous',
            mnemonic: 'Demonstrating neat skill, especially with the hands.',
            synonyms: 'nimble, agile, skilled',
            hint: 'Skillful with hands or mind.',
            positivity: 'Positive',
            sentence: 'The dexterous artist sculpted a masterpiece in just hours.',
            image: './assets/images/flashcards/Set6/dexterous.gif'
        },
        {
            word: 'lounge',
            mnemonic: 'A room in a public place for relaxing.',
            synonyms: 'recline, rest, relax',
            hint: 'A comfortable area for resting.',
            positivity: 'Neutral',
            sentence: 'They sat in the airport lounge, waiting for their flight to be called.',
            image: './assets/images/flashcards/Set6/lounge.jpeg'
        },
        {
            word: 'denouement',
            mnemonic: 'The final resolution of a plot.',
            synonyms: 'resolution, finale, conclusion',
            hint: 'The outcome or ending of a story.',
            positivity: 'Neutral',
            sentence: 'The film\'s denouement was both unexpected and satisfying.',
            image: './assets/images/flashcards/Set6/denouement.png'
        },
        {
            word: 'squash',
            mnemonic: 'Crush or squeeze something.',
            synonyms: 'crush, flatten, squeeze',
            hint: 'To press something down.',
            positivity: 'Neutral',
            sentence: 'He tried to squash the spider under his shoe.',
            image: './assets/images/flashcards/Set6/squash.gif'
        },
        {
            word: 'impregnable',
            mnemonic: 'Unable to be captured or broken into.',
            synonyms: 'invincible, unassailable, secure',
            hint: 'Something that cannot be defeated.',
            positivity: 'Positive',
            sentence: 'The fortress was considered impregnable after years of fortification.',
            image: './assets/images/flashcards/Set6/impregnable.gif'
        },
        {
            word: 'insuperable',
            mnemonic: 'Impossible to overcome.',
            synonyms: 'insurmountable, unbeatable, invincible',
            hint: 'A challenge that seems too great.',
            positivity: 'Negative',
            sentence: 'The task appeared insuperable, but the team managed to complete it.',
            image: './assets/images/flashcards/Set6/insuperable.gif'
        },
        {
            word: 'sustain',
            mnemonic: 'Strengthen or support.',
            synonyms: 'maintain, support, nourish',
            hint: 'To keep something going.',
            positivity: 'Positive',
            sentence: 'The team worked hard to sustain the company\'s growth over the years.',
            image: './assets/images/flashcards/Set6/sustain.png'
        },
        {
            word: 'hackneyed',
            mnemonic: 'Lacking significance due to overuse.',
            synonyms: 'overused, trite',
            hint: 'Something used too often.',
            positivity: 'Negative',
            sentence: 'The movie was filled with hackneyed plot twists.',
            image: './assets/images/flashcards/Set6/hackneyed.jpeg'
        },
        {
            word: 'anchor',
            mnemonic: 'A device used to secure a ship to the bottom of a body of water.',
            synonyms: 'secure, stabilize, moor',
            hint: 'Used to hold something in place.',
            positivity: 'Neutral',
            sentence: 'The anchor kept the ship steady despite the strong winds.',
            image: './assets/images/flashcards/Set6/anchor.webp'
        },
        {
            word: 'pastiche',
            mnemonic: 'An artistic work that imitates others.',
            synonyms: 'imitation, parody, copy',
            hint: 'A blend or imitation of various works.',
            positivity: 'Neutral',
            sentence: 'The building\'s design is a pastiche of classical and modern styles.',
            image: './assets/images/flashcards/Set6/pastiche.gif'
        },
        {
            word: 'privy',
            mnemonic: 'Sharing in the knowledge of something secret.',
            synonyms: 'informed, aware, cognizant',
            hint: 'To be in on a secret.',
            positivity: 'Neutral',
            sentence: 'Only a few trusted employees were privy to the company\'s future plans.',
            image: './assets/images/flashcards/Set6/privy.gif'
        },
        {
            word: 'disgorge',
            mnemonic: 'To pour out forcefully.',
            synonyms: 'eject, emit, expel',
            hint: 'To forcefully release something.',
            positivity: 'Negative',
            sentence: 'The volcano disgorged lava down its slopes.',
            image: './assets/images/flashcards/Set6/disgorge.gif'
        },
        {
            word: 'cubicle',
            mnemonic: 'A small partitioned-off area in an office.',
            synonyms: 'booth, chamber, compartment',
            hint: 'A small enclosed workspace.',
            positivity: 'Neutral',
            sentence: 'She spent the day working in her cubicle, away from the noise.',
            image: './assets/images/flashcards/Set6/cubicle.gif'
        },
        {
            word: 'denigrate',
            mnemonic: 'Criticize unfairly.',
            synonyms: 'belittle, defame, disparage',
            hint: 'Speaking badly about someone.',
            positivity: 'Negative',
            sentence: 'He often denigrated his colleagues to make himself look better.',
            image: './assets/images/flashcards/Set6/denigrate.gif'
        },
        {
            word: 'constrain',
            mnemonic: 'Restrict the scope or freedom of.',
            synonyms: 'restrict, limit, confine',
            hint: 'To hold back or limit.',
            positivity: 'Negative',
            sentence: 'The tight deadline constrained their ability to complete the project.',
            image: './assets/images/flashcards/Set6/constrain.gif'
        },
        {
            word: 'compress',
            mnemonic: 'To press together.',
            synonyms: 'condense, compact, squeeze',
            hint: 'To make something smaller or tighter.',
            positivity: 'Neutral',
            sentence: 'He compressed the files to save space on his computer.',
            image: './assets/images/flashcards/Set6/compress.gif'
        },
        {
            word: 'meditation',
            mnemonic: 'The practice of focusing the mind for relaxation or spiritual purposes.',
            synonyms: 'contemplation, reflection, thought',
            hint: 'A practice for calmness and focus.',
            positivity: 'Positive',
            sentence: 'Daily meditation helped her manage stress and remain focused.',
            image: './assets/images/flashcards/Set6/meditation.gif'
        },
        {
            word: 'levee',
            mnemonic: 'An embankment built to prevent the overflow of a river.',
            synonyms: 'dam, embankment, dike',
            hint: 'A structure to hold back water.',
            positivity: 'Neutral',
            sentence: 'The levee protected the town from potential floods.',
            image: './assets/images/flashcards/Set6/levee.jpeg'
        },
        {
            word: 'embody',
            mnemonic: 'To give a tangible or visible form to an idea.',
            synonyms: 'represent, symbolize, manifest',
            hint: 'To represent something in a visible form.',
            positivity: 'Positive',
            sentence: 'The new law embodied the principles of fairness and equality.',
            image: './assets/images/flashcards/Set6/embody.jpg'
        },
        {
            word: 'elegy',
            mnemonic: 'A poem or song expressing sorrow for someone deceased.',
            synonyms: 'lament, dirge, requiem',
            hint: 'A sad poem for someone who has died.',
            positivity: 'Neutral',
            sentence: 'She recited an elegy at the funeral in honor of her late friend.',
            image: './assets/images/flashcards/Set6/elegy.jpg'
        },
        {
            word: 'corrode',
            mnemonic: 'To destroy or damage slowly by chemical action.',
            synonyms: 'erode, deteriorate, rust',
            hint: 'To wear away or damage gradually.',
            positivity: 'Negative',
            sentence: 'The constant exposure to water corroded the metal pipes over time.',
            image: './assets/images/flashcards/Set6/corrode.jpg'
        },
        {
            word: 'agitate',
            mnemonic: 'Make someone troubled or nervous.',
            synonyms: 'disturb, upset, unsettle',
            hint: 'To cause someone to feel uneasy.',
            positivity: 'Negative',
            sentence: 'The loud noises from the construction site agitated the residents.',
            image: './assets/images/flashcards/Set6/agitate.jpeg'
        },
        {
            word: 'scheme',
            mnemonic: 'A large-scale systematic plan.',
            synonyms: 'plan, strategy, plot',
            hint: 'A well-organized plan.',
            positivity: 'Neutral',
            sentence: 'The marketing team devised a scheme to attract more customers.',
            image: './assets/images/flashcards/Set6/scheme.gif'
        },
        {
            word: 'sedulous',
            mnemonic: 'Showing dedication and diligence.',
            synonyms: 'diligent, persevering, industrious',
            hint: 'Hard-working and committed.',
            positivity: 'Positive',
            sentence: 'She was sedulous in her studies, ensuring she mastered every subject.',
            image: './assets/images/flashcards/Set6/sedulous.gif'
        },
        {
            word: 'dogged',
            mnemonic: 'Having or showing tenacity.',
            synonyms: 'determined, persistent, tenacious',
            hint: 'Someone who doesn\'t give up easily.',
            positivity: 'Positive',
            sentence: 'His dogged determination helped him overcome all the obstacles.',
            image: './assets/images/flashcards/Set6/dogged.gif'
        },
        {
            word: 'mundane',
            mnemonic: 'Lacking interest or excitement.',
            synonyms: 'dull, boring, monotonous',
            hint: 'Something ordinary or everyday.',
            positivity: 'Negative',
            sentence: 'She was tired of her mundane routine and longed for adventure.',
            image: './assets/images/flashcards/Set6/mundane.gif'
        },
        {
            word: 'snub',
            mnemonic: 'To ignore or treat with disdain.',
            synonyms: 'ignore, shun, reject',
            hint: 'To treat someone coldly.',
            positivity: 'Negative',
            sentence: 'She felt hurt when her efforts were snubbed by her colleagues.',
            image: './assets/images/flashcards/Set6/snub.gif'
        },
        {
            word: 'impertinent',
            mnemonic: 'Not showing proper respect.',
            synonyms: 'rude, insolent, disrespectful',
            hint: 'Showing a lack of manners.',
            positivity: 'Negative',
            sentence: 'The impertinent student interrupted the teacher during the lesson.',
            image: './assets/images/flashcards/Set6/impertinent.jpg'
        },
        {
            word: 'quirk',
            mnemonic: 'A peculiar behavioral habit.',
            synonyms: 'oddity, eccentricity, peculiarity',
            hint: 'A strange or unique trait.',
            positivity: 'Neutral',
            sentence: 'His habit of tapping his foot was just one of his many quirks.',
            image: './assets/images/flashcards/Set6/quirk.gif'
        },
        {
            word: 'tawdry',
            mnemonic: 'Showy but cheap and of poor quality.',
            synonyms: 'gaudy, flashy, garish',
            hint: 'Something that looks cheap.',
            positivity: 'Negative',
            sentence: 'The necklace looked tawdry, despite its bright appearance.',
            image: './assets/images/flashcards/Set6/tawdry.gif'
        },
        {
            word: 'sanguinary',
            mnemonic: 'Involving or causing much bloodshed.',
            synonyms: 'bloody, gory, bloodstained',
            hint: 'Something violent.',
            positivity: 'Negative',
            sentence: 'The sanguinary battle left the fields covered in blood.',
            image: './assets/images/flashcards/Set6/sanguinary.gif'
        },
        {
            word: 'religious',
            mnemonic: 'Relating to or believing in a religion.',
            synonyms: 'spiritual, devout, pious',
            hint: 'Related to belief systems.',
            positivity: 'Neutral',
            sentence: 'She was raised in a very religious household.',
            image: './assets/images/flashcards/Set6/religious.gif'
        },
        {
            word: 'impiety',
            mnemonic: 'Lack of reverence for a god.',
            synonyms: 'blasphemy, irreverence, ungodliness',
            hint: 'A lack of religious respect.',
            positivity: 'Negative',
            sentence: 'His impiety shocked the congregation during the service.',
            image: './assets/images/flashcards/Set6/impiety.gif'
        },
        {
            word: 'trepidation',
            mnemonic: 'A feeling of fear or anxiety.',
            synonyms: 'fear, apprehension, dread',
            hint: 'A feeling of unease.',
            positivity: 'Negative',
            sentence: 'She entered the room with trepidation, unsure of what to expect.',
            image: './assets/images/flashcards/Set6/trepidation.webp'
        },
        {
            word: 'betoken',
            mnemonic: 'Be a sign of.',
            synonyms: 'indicate, signify, foreshadow',
            hint: 'To give a hint about something.',
            positivity: 'Neutral',
            sentence: 'The dark clouds betokened an approaching storm.',
            image: './assets/images/flashcards/Set6/betoken.gif'
        },
        {
            word: 'mystic',
            mnemonic: 'Involving otherworldly or spiritual powers.',
            synonyms: 'spiritual, esoteric, mysterious',
            hint: 'Something mysterious or spiritual.',
            positivity: 'Neutral',
            sentence: 'The mystic rituals of the tribe fascinated the explorers.',
            image: './assets/images/flashcards/Set6/mystic.gif'
        },
        {
            word: 'refraction',
            mnemonic: 'The bending of light as it passes through a medium.',
            synonyms: 'bending, deflection, diversion',
            hint: 'A scientific phenomenon involving light.',
            positivity: 'Neutral',
            sentence: 'The scientist explained the refraction of light through the prism.',
            image: './assets/images/flashcards/Set6/refraction.gif'
        },
        {
            word: 'pedant',
            mnemonic: 'A person who is excessively concerned with minor details.',
            synonyms: 'nitpicker, perfectionist, scholar',
            hint: 'Someone who focuses on details too much.',
            positivity: 'Negative',
            sentence: 'He was a pedant, always correcting people\'s grammar in conversations.',
            image: './assets/images/flashcards/Set6/pedant.gif'
        },
        {
            word: 'allege',
            mnemonic: 'To claim or assert without proof.',
            synonyms: 'claim, assert, declare',
            hint: 'Stating something without evidence.',
            positivity: 'Neutral',
            sentence: 'The reporter alleged that the politician was involved in the scandal.',
            image: './assets/images/flashcards/Set6/allege.gif'
        },
        {
            word: 'progenitor',
            mnemonic: 'A person or thing from which others are descended.',
            synonyms: 'ancestor, forefather, originator',
            hint: 'Someone who started something.',
            positivity: 'Neutral',
            sentence: 'He is considered the progenitor of modern physics.',
            image: './assets/images/flashcards/Set6/progenitor.gif'
        },
        {
            word: 'obviate',
            mnemonic: 'To remove or avoid a need or difficulty.',
            synonyms: 'prevent, eliminate, preclude',
            hint: 'To make something unnecessary.',
            positivity: 'Positive',
            sentence: 'The new medical procedure obviates the need for surgery.',
            image: './assets/images/flashcards/Set6/obviate.jpeg'
        },
        {
            word: 'quaff',
            mnemonic: 'To drink something heartily.',
            synonyms: 'gulp, swig, chug',
            hint: 'To drink quickly and in large amounts.',
            positivity: 'Neutral',
            sentence: 'After the long hike, they quaffed the cold water.',
            image: './assets/images/flashcards/Set6/quaff.jpeg'
        },
        {
            word: 'bacchanal',
            mnemonic: 'A wild and drunken celebration.',
            synonyms: 'orgy, revelry, debauchery',
            hint: 'A wild party.',
            positivity: 'Negative',
            sentence: 'The bacchanal lasted all night, with loud music and dancing.',
            image: './assets/images/flashcards/Set6/bacchanal.jpeg'
        },
        {
            word: 'pretension',
            mnemonic: 'A claim or assertion of something.',
            synonyms: 'affectation, pretend, claim',
            hint: 'Claiming to be something, often falsely.',
            positivity: 'Negative',
            sentence: 'His pretension to be an expert on the subject was easily disproved.',
            image: './assets/images/flashcards/Set6/pretension.gif'
        },
        {
            word: 'oblique',
            mnemonic: 'Not explicit or direct in addressing a point.',
            synonyms: 'indirect, vague, roundabout',
            hint: 'Not straightforward.',
            positivity: 'Neutral',
            sentence: 'Her oblique remarks left everyone confused about her true intentions.',
            image: './assets/images/flashcards/Set6/oblique.jpeg'
        },
        {
            word: 'parchment',
            mnemonic: 'A stiff, flat, thin material made from animal skin used as a writing surface.',
            synonyms: 'vellum, paper, scroll',
            hint: 'An ancient writing material.',
            positivity: 'Neutral',
            sentence: 'The old manuscript was written on faded parchment.',
            image: './assets/images/flashcards/Set6/parchment.jpg'
        },
        {
            word: 'miniature',
            mnemonic: 'A smaller version of something.',
            synonyms: 'small-scale, tiny, mini',
            hint: 'A tiny version of something.',
            positivity: 'Neutral',
            sentence: 'The artist created a beautiful miniature replica of the building.',
            image: './assets/images/flashcards/Set6/miniature.jpg'
        },
        {
            word: 'glean',
            mnemonic: 'To collect information or resources bit by bit.',
            synonyms: 'gather, collect, extract',
            hint: 'To slowly collect or gather.',
            positivity: 'Neutral',
            sentence: 'She managed to glean valuable insights from the research.',
            image: './assets/images/flashcards/Set6/glean.gif'
        },
        {
            word: 'mealymouthed',
            mnemonic: 'Hesitant to speak plainly or directly.',
            synonyms: 'evasive, indirect, vague',
            hint: 'Avoiding direct speech.',
            positivity: 'Negative',
            sentence: 'He gave a mealymouthed response, avoiding the real issue.',
            image: './assets/images/flashcards/Set6/mealymouthed.jpg'
        },
        {
            word: 'tryst',
            mnemonic: 'A private romantic meeting between lovers.',
            synonyms: 'rendezvous, assignation, meeting',
            hint: 'A secret romantic meeting.',
            positivity: 'Neutral',
            sentence: 'The couple arranged a tryst at a secluded cafe.',
            image: './assets/images/flashcards/Set6/tryst.jpg'
        },
            {
                word: 'jabber',
                mnemonic: 'To talk rapidly and excitedly but with little sense.',
                synonyms: 'babble, ramble, chatter',
                hint: 'Talking too fast without clarity.',
                positivity: 'Negative',
                sentence: 'The children jabbered excitedly about their new toys.',
                image: './assets/images/flashcards/Set6/jabber.jpg'
            },
            {
                word: 'divulge',
                mnemonic: 'To make known (something private or secret).',
                synonyms: 'reveal, disclose, expose',
                hint: 'Sharing something private.',
                positivity: 'Neutral',
                sentence: 'She refused to divulge the details of their conversation.',
                image: './assets/images/flashcards/Set6/divulge.jpeg'
            },
            {
                word: 'engaging',
                mnemonic: 'Attractive or charming.',
                synonyms: 'charming, appealing, captivating',
                hint: 'Something that holds your attention.',
                positivity: 'Positive',
                sentence: 'His engaging smile made everyone feel welcome.',
                image: './assets/images/flashcards/Set6/engaging.jpeg'
            },
            {
                word: 'efficacy',
                mnemonic: 'The ability to produce a desired result.',
                synonyms: 'effectiveness, success, potency',
                hint: 'A measure of how effective something is.',
                positivity: 'Positive',
                sentence: 'The efficacy of the new drug was proven in clinical trials.',
                image: './assets/images/flashcards/Set6/efficacy.webp'
            },
            {
                word: 'crypt',
                mnemonic: 'An underground room or vault.',
                synonyms: 'tomb, vault, catacomb',
                hint: 'An underground burial place.',
                positivity: 'Neutral',
                sentence: 'The ancient king was buried in a crypt beneath the cathedral.',
                image: './assets/images/flashcards/Set6/crypt.webp'
            },
            {
                word: 'embrace',
                mnemonic: 'Hold someone closely in one\'s arms.',
                synonyms: 'hug, accept, welcome',
                hint: 'To accept warmly.',
                positivity: 'Positive',
                sentence: 'She embraced her friend tightly after years of separation.',
                image: './assets/images/flashcards/Set6/embrace.jpeg'
            },
            {
                word: 'mollify',
                mnemonic: 'To calm or soothe someone\'s anger or anxiety.',
                synonyms: 'pacify, appease, placate',
                hint: 'To reduce someone\'s anger.',
                positivity: 'Positive',
                sentence: 'He tried to mollify the angry customer with a discount.',
                image: './assets/images/flashcards/Set6/mollify.jpeg'
            },
            {
                word: 'pandemic',
                mnemonic: 'A disease prevalent over a whole country or the world.',
                synonyms: 'epidemic, outbreak, plague',
                hint: 'A large-scale disease outbreak.',
                positivity: 'Neutral',
                sentence: 'The COVID-19 pandemic affected people all over the globe.',
                image: './assets/images/flashcards/Set6/pandemic.jpeg'
            },
            {
                word: 'analogous',
                mnemonic: 'Comparable in certain respects.',
                synonyms: 'similar, comparable, parallel',
                hint: 'Two things that have something in common.',
                positivity: 'Neutral',
                sentence: 'The wings of a bird and the wings of an airplane are analogous.',
                image: './assets/images/flashcards/Set6/analogous.gif'
            },
            {
                word: 'objective',
                mnemonic: 'Not influenced by personal feelings or opinions.',
                synonyms: 'impartial, unbiased, neutral',
                hint: 'Not subjective.',
                positivity: 'Neutral',
                sentence: 'The judge remained objective throughout the trial.',
                image: './assets/images/flashcards/Set6/objective.gif'
            },
            {
                word: 'poseur',
                mnemonic: 'A person who pretends to be what they are not.',
                synonyms: 'pretender, impostor, phony',
                hint: 'Someone who acts falsely to impress others.',
                positivity: 'Negative',
                sentence: 'He was a poseur, always pretending to be more cultured than he was.',
                image: './assets/images/flashcards/Set6/poseur.jpg'
            },
            {
                word: 'tribunal',
                mnemonic: 'A court of justice.',
                synonyms: 'court, panel, judiciary',
                hint: 'A legal body or group making decisions.',
                positivity: 'Neutral',
                sentence: 'The tribunal ruled in favor of the defendant after hearing all evidence.',
                image: './assets/images/flashcards/Set6/tribunal.jpeg'
            },
            {
                word: 'lineaments',
                mnemonic: 'A distinctive feature or characteristic, especially of the face.',
                synonyms: 'features, contours, outlines',
                hint: 'The specific shape or detail of something.',
                positivity: 'Neutral',
                sentence: 'The artist captured the lineaments of her face with precision.',
                image: './assets/images/flashcards/Set6/lineaments.webp'
            },
            {
                word: 'hiatus',
                mnemonic: 'A pause or break in activity.',
                synonyms: 'break, gap, interruption',
                hint: 'A temporary stop.',
                positivity: 'Neutral',
                sentence: 'The band announced a hiatus, leaving fans eagerly awaiting their return.',
                image: './assets/images/flashcards/Set6/hiatus.jpeg'
            },
            {
                word: 'unrequited',
                mnemonic: 'Not returned or reciprocated.',
                synonyms: 'unreciprocated, unreturned, unfulfilled',
                hint: 'Love that is not returned.',
                positivity: 'Negative',
                sentence: 'Her unrequited love for him left her heartbroken.',
                image: './assets/images/flashcards/Set6/unrequited.jpg'
            },
            {
                word: 'sleek',
                mnemonic: 'Smooth and glossy.',
                synonyms: 'smooth, glossy, shiny',
                hint: 'Something shiny and well-groomed.',
                positivity: 'Positive',
                sentence: 'The car\'s sleek design caught everyone\'s attention.',
                image: './assets/images/flashcards/Set6/sleek.jpeg'
            },
            {
                word: 'indenture',
                mnemonic: 'A formal legal agreement.',
                synonyms: 'contract, agreement, deed',
                hint: 'A formal binding document.',
                positivity: 'Neutral',
                sentence: 'The employee signed the indenture upon starting the new job.',
                image: './assets/images/flashcards/Set6/indenture.jpeg'
            },
            {
                word: 'odious',
                mnemonic: 'Extremely unpleasant.',
                synonyms: 'repulsive, disgusting, abhorrent',
                hint: 'Something very offensive.',
                positivity: 'Negative',
                sentence: 'The odious smell from the trash made everyone leave the room.',
                image: './assets/images/flashcards/Set6/odious.gif'
            },
            {
                word: 'excessive',
                mnemonic: 'More than necessary or reasonable.',
                synonyms: 'overabundant, unnecessary, extreme',
                hint: 'Too much of something.',
                positivity: 'Negative',
                sentence: 'His excessive spending led to financial problems.',
                image: './assets/images/flashcards/Set6/excessive.gif'
            },
            {
                word: 'amulet',
                mnemonic: 'An ornament or small piece of jewelry thought to give protection.',
                synonyms: 'charm, talisman, lucky piece',
                hint: 'Something worn for protection.',
                positivity: 'Neutral',
                sentence: 'She wore an amulet around her neck, believing it would protect her.',
                image: './assets/images/flashcards/Set6/amulet.gif'
            },

            
                {
                    word: 'consign',
                    mnemonic: 'Deliver something to someone\'s custody.',
                    synonyms: 'entrust, assign, send',
                    hint: 'To hand over for safekeeping.',
                    positivity: 'Neutral',
                    sentence: 'They consigned the valuable paintings to a secure gallery.',
                    image: './assets/images/flashcards/Set6/consign.jpg'
                },
                {
                    word: 'reprimand',
                    mnemonic: 'To scold or criticize severely.',
                    synonyms: 'rebuke, scold, admonish',
                    hint: 'To tell someone off.',
                    positivity: 'Negative',
                    sentence: 'The manager reprimanded the employee for arriving late.',
                    image: './assets/images/flashcards/Set6/reprimand.webp'
                },
                {
                    word: 'camaraderie',
                    mnemonic: 'Mutual trust and friendship among people.',
                    synonyms: 'companionship, friendship, fellowship',
                    hint: 'A bond between friends or colleagues.',
                    positivity: 'Positive',
                    sentence: 'The camaraderie among the team members made work enjoyable.',
                    image: './assets/images/flashcards/Set6/camaraderie.jpeg'
                },
                {
                    word: 'dismay',
                    mnemonic: 'A feeling of distress or disappointment.',
                    synonyms: 'alarm, shock, disappointment',
                    hint: 'A feeling of upset or worry.',
                    positivity: 'Negative',
                    sentence: 'She expressed her dismay when she heard the bad news.',
                    image: './assets/images/flashcards/Set6/dismay.gif'
                },
                {
                    word: 'nova',
                    mnemonic: 'A star that suddenly becomes much brighter.',
                    synonyms: 'explosion, supernova, bright star',
                    hint: 'A bright star.',
                    positivity: 'Neutral',
                    sentence: 'The astronomers were excited to witness the appearance of a nova.',
                    image: './assets/images/flashcards/Set6/nova.gif'
                },
                {
                    word: 'abominate',
                    mnemonic: 'To detest or loathe.',
                    synonyms: 'hate, despise, detest',
                    hint: 'A strong dislike.',
                    positivity: 'Negative',
                    sentence: 'She abominated the idea of cheating in any form.',
                    image: './assets/images/flashcards/Set6/abominate.gif'
                },
                {
                    word: 'effrontery',
                    mnemonic: 'Insolent or impertinent behavior.',
                    synonyms: 'audacity, nerve, boldness',
                    hint: 'Rude boldness.',
                    positivity: 'Negative',
                    sentence: 'His effrontery during the meeting shocked everyone present.',
                    image: './assets/images/flashcards/Set6/effrontery.gif'
                },
                {
                    word: 'credulity',
                    mnemonic: 'A tendency to believe things too readily.',
                    synonyms: 'gullibility, naivety, trust',
                    hint: 'Being too easily convinced.',
                    positivity: 'Negative',
                    sentence: 'His credulity made him an easy target for scams.',
                    image: './assets/images/flashcards/Set6/credulity.webp'
                },
                {
                    word: 'ineffectual',
                    mnemonic: 'Not producing any or the desired effect.',
                    synonyms: 'useless, ineffective, futile',
                    hint: 'Something that does not work.',
                    positivity: 'Negative',
                    sentence: 'Their attempts to resolve the issue were ineffectual.',
                    image: './assets/images/flashcards/Set6/ineffectual.webp'
                },
                {
                    word: 'rumble',
                    mnemonic: 'A continuous deep sound.',
                    synonyms: 'growl, roar, thunder',
                    hint: 'A low, rolling noise.',
                    positivity: 'Neutral',
                    sentence: 'The rumble of thunder echoed through the valley.',
                    image: './assets/images/flashcards/Set6/rumble.webp'
                },
                {
                    word: 'prologue',
                    mnemonic: 'An introduction to a book or event.',
                    synonyms: 'introduction, preface, foreword',
                    hint: 'The opening to a story.',
                    positivity: 'Neutral',
                    sentence: 'The prologue of the novel set the tone for the entire story.',
                    image: './assets/images/flashcards/Set6/prologue.jpeg'
                },
                {
                    word: 'diversion',
                    mnemonic: 'An activity that diverts the mind.',
                    synonyms: 'distraction, amusement, entertainment',
                    hint: 'Something that takes your attention away.',
                    positivity: 'Neutral',
                    sentence: 'Reading a good book is his favorite diversion during his breaks.',
                    image: './assets/images/flashcards/Set6/diversion.gif'
                },
                {
                    word: 'proximity',
                    mnemonic: 'Nearness in space, time, or relationship.',
                    synonyms: 'closeness, nearness, vicinity',
                    hint: 'Something that is close by.',
                    positivity: 'Neutral',
                    sentence: 'The proximity of the airport made travel convenient.',
                    image: './assets/images/flashcards/Set6/proximity.jpg'
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

