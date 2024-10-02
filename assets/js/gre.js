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
