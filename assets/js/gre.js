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
        }
        
        


    ],
    // Set 2
    [
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
