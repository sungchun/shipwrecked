class Item {
    constructor(name, examine, canPickUp, pickUp, combinesWith = [], creates = null, talkTo, use) {
        this.name = name
        this.examine = examine
        this.combinesWith = combinesWith
        this.canPickUp = canPickUp
        this.pickUp = pickUp
        this.creates = creates
        this.talkTo = talkTo
        this.use = use
    }
}

const woman = new Item(
    'woman',
    'The woman hears you approach and looks up at you from what looks like a crossword. She waits for you to catch your breath.',
    false,
    'That\'s an odd thing to want to do.',
    null,
    null,
    'The woman looks up at you. \n\'Rescued you say? You\'re a castaway then? \nWell, you\'ll need to send an SOS signal from up there I would think. I might have something you can use. You\'ll just need to help me solve this clue though. \nHis work was done by Friday (8,6).\'',
    'Doing crosswords all day is fun but you need to get rescued.'
)

const bridge = new Item(
    'bridge',
    'The overhanging tree has made a fine bridge (as long as you keep your balance!)',
    false,
    'You can\'t pick that up.',
    null,
    null,
    'You can\'t talk to that.',
    'You cross the bridge with barely a wobble. The boar is still out for the count.'
)

const redCloth = new Item(
    'cloth',
    'A tattered red rag. I guess it might be useful for something.',
    true,
    'No idea what this is useful for. You don\'t think there are bull fights in this part of the world.',
    null,
    null,
    'No.',
    'Your nose isn\'t running.'
)

const dancingMan = new Item(
    'dancingman',
    'You try as hard as you can to get past the dancing man so that you continue on your way to the mountain, but each time you try to pass him he seems to dance across your path, blocking your way.',
    false,
    'You can\'t pick him up (although, you would like to lift his mood).',
    null,
    null,
    'The man won\'t stop singing. \n\'And I am so lonely baby, I am so lonely, I am so lonely, I could die.\' \n\'This afternoon was my big chance you see. My chance to avert loneliness. I\'m supposed to have a date but look at me! My best jacket, my only chance to make a good first impression and the sequins have come off! Just look at it now! Please think of something so I don\'t look like a patchwork pacu! I promise I\'ll leave you be if you can!\'',
    'He just needs your help to be honest.'
)

const shadowyMan = new Item(
    'shadowyman',
    'The man looms into view. His tennis gear is slightly perplexing. His unkempt hair and beard make it look like he has been here a while.',
    false,
    'You can\'t pick him up.',
    null,
    null,
    'The man addresses you in a strangely affected upper-class English accent. \n\'It\'s directions I suppose you want, isn\'t? Well, I didn\'t get to the All England Club in \'48 to just show people the way without getting anything in return! \n No, no, no! You can do something for me if you want to find your way out of here and to the river! I\'m sick of tennis and I fancy trying a new sport. I\'ll show you the way and throw in this racket and ball if you can help me.\'',
    'I don\'t think he\'s in the mood for games.'
)

const water = new Item(
    'water',
    'It\'s beautiful and clear.',
    true,
    'Somehow you manage to scoop up some water in your palm.',
    ['bottle'],
    'magnifyingglass',
    'Why?',
    'You\'ve drunk enough already.',
)

const magnifyingGlass = new Item(
    'magnifyingglass',
    'It looks like it will be pretty useful for concentrating the sun\'s rays on something.',
    true,
    'It\s pretty rudimentary, but it will definitely do a job.',
    ['flare'],
    'litflare',
    'Why?',
    'You\'ll need to use if with something.'
)

const flareStand = new Item(
    'stand',
    'Really tough this stand. It\'s going to make a great launch for the flare when you can get it lit.',
    false,
    'The roots are pretty entrenched.',
    null,
    null,
    'Why?',
    'It\'s wedged into the ground pretty tightly.'
)

const bamboo = new Item(
    'bamboo',
    'Really tough this stuff. Leaves are shooting out of all of the shoots except for one which is a perfectly formed tube pointing towards the sky. This stuff is quite something. You\'ve heard they use it for scaffolding in some places, it\'s got loads of other used too.',
    false,
    'The roots are pretty entrenched.',
    null,
    null,
    'Why?',
    'It\'s wedged into the ground pretty tightly.'
)

const litFlare = new Item(
    'litflare',
    'This thing\'s alight! You\'d better find a way to launch it pretty quickly!',
    true,
    'Seriously, you need to launch this thing, fast!',
    null,
    null,
    'Don\'t talk to it! Launch it!',
    'If you just throw it, it will shoot down the mountain and be no use to anyone.'
)

const flare = new Item(
    'flare',
    'It\'s one of those maritime flares. The fuse is relatively long, but it does look like it will need to be fired from some sort of stand.',
    true,
    'Well, if this doesn\'t get you rescued, nothing will.',
    ['magnifyingglass'],
    'litflare',
    'You\'re not going to talk to that.',
    'You don\'t have anything to light it with. Besides, even if you did - you\'re not crazy enough to hold a lit flare at he base until the last second.'
)

const splitCoconut = new Item(
    'splitcoconut',
    'The split coconut provides you with a gulp of refreshing water. You make sure to save some for later.',
    true,
    'It\'s a massive coconut. Someone, somewhere, must have written a song about coconuts this good.',
    null,
    null,
    'You can\'t talk to the coconut, you haven\'t even drawn a face on it.',
    'You\'ll need to use it with something.'
)

const coconut = new Item(
    'coconut',
    'That\'s one big and juicy coconut.',
    true,
    'You pick up the brown fruit and bow to the monkey to convey your thanks. The monkey swears in Monkey.',
    null,
    null,
    'You can\'t talk to the coconut, you haven\'t even drawn a face on it.',
    'You\'ll have to open it first.'
)

const monkey = new Item(
    'monkey',
    'The monkey is scampering all over the place. He seems pretty excitable.',
    false,
    'I think you\’ll end up with a few too many scratches if you try and pick him up.',
    null,
    null,
    'You don\'t speak Monkey',
    '???'
    
)

const bogShoes = new Item(
    'bogshoes',
    'These look like pretty decent snow shoes. I guess you\'ll have to call them bog shoes for today.',
    true,
    'You\'ve got a right sturdy pair of bog shoes there.',
    null,
    null,
    'No.',
    'Well, they\'ll certainly increase your chances of crossing the boggy ground.'
)

const coolGrill = new Item(
    'coolgrill',
    'The grill is round and made up of light weight latticed metal. It\'s a similar size to your tennis racket.',
    true,
    'It\'s a lot cooler now. That criss-cross pattern on it does make it look like the head of a tennis racket.',
    ['racket', 'ducktape'],
    'bogshoes',
    'Why would you talk to a grill?',
    'Use it with what exactly?'
)

const hotGrill = new Item(
    'hotgrill',
    'The grill is round and made up of light weight latticed metal. It\'s a similar size to your tennis racket.',
    false,
    'You can\'t pick that up, it\'s far too hot. You\'ll need to cool it down.',
    null,
    null,
    'Why would you talk to a grill?',
    'You\'re not that hungry.'
)

const bottle = new Item(
    'bottle',
    'It\'s one of those clear glass bottles. Disappointingly, there\'s no water in it. What was the point?',
    true,
    'The monkey loosens its grip on the bottle and you dart forward and grab the bottle from its paws. Furious, the monkey climbs the nearest tree and hurls a coconut down at you.',
    ['water'],
    'magnifyingglass',
    'You decide not to talk to the bottle but purse your lips and whistle a tune in the lid instead.',
    'What would you like to use it for?'
)

const scales = new Item(
    'scales',
    'Those are really shiny and pretty.',
    true,
    'You now have lots of bright shiny discs.',
    null,
    null,
    'No.',
    'What are you going to use them for?'
)

const duckTape = new Item(
    'ducktape',
    'The duck tape (yes, it was called duck tape before it was called duct tape - look it up), will be really useful stuff. It\'s very strong and very sticky.',
    true,
    'The duck tape will forever be a reminder of you tricking a poor, tool-obsessed duck.',
    ['racket', 'coolgrill'],
    'bogshoes',
    'Quack.',
    'What could you use that for?'
)

const duck = new Item(
    'duck',
    'You\'d assumed that the duck was warming an egg, but a quick waggle of her tail feathers reveals that she seems to be sitting on a slightly squashed roll of duck tape. It looks like it could be pretty useful. If only you could work out a way to trick the duck into thinking it was still sitting on a makeshift egg.',
    false,
    'That duck isn\'t moving. She\'s far too protective of the contents of her nest.',
    null,
    null,
    'The duck is not on the same wavelength as you.',
    'What could you use that for?'
)

const boar = new Item(
    'boar',
    'The boar looks particularly big, particularly angry, and particularly hungry.',
    false,
    'You can\'t pick that up.',
    null,
    null,
    'You don\'t have a death wish.',
    'No.'
)

const fish = new Item(
    'fish',
    'The fish do look pretty good, it must be said. Their scales really do catch the light beautifully.',
    false,
    'It\'s moving about a bit too much to pick up.',
    null,
    null,
    'Who do you think you are? Aquaman?!',
    'Use it with what?'
)

const fishingRod = new Item(
    'fishingrod',
    'It\'s not bad, if you do say so yourself. It certainly looks like it could catch some fish.',
    true,
    'What a rod!',
    null,
    null,
    'You can\t really talk to fishing rods.',
    'What would you like to use that with?'
)

const hook = new Item(
    'hook',
    'The broken ringpull has changed into a pretty sharp looking hook',
    true,
    'The hook could be useful if combined with the right things.',
    ['twine', 'branch'],
    'fishingrod',
    'Who talks to a hook?',
    'It would me more useful combined with something.'
)

const canPile = new Item(
    'canpile',
    'You sift through the pile of empty beer cans.',
    false,
    'You probably don\'t need that many',
    null,
    null,
    'Were you the one who drank all these?',
    'Most of them are empty and not particularly useful',
)

const beerCan = new Item(
    'can',
    'It\'s just your standard beer can really.',
    true,
    'What a great find!',
    null,
    null,
    'To be fair, lots of people do talk to their beer. You\'re not one of them (yet).',
    'Really you should use the verb \'open\' but nevermind. You pull the ringpull and it breaks with your finger around it, becoming a hook shaped piece of metal. Luckily, the ringpull has partly done its job and you drink the (slightly warm but perfectly passable) beer.',
)

const branch = new Item(
    'branch',
    'It\'s a fairly long, straight branch. It feels pretty strong.',
    true,
    'You\'re not sure what to use it for yet but it might be useful.',
    ['twine', 'hook'],
    'fishingrod',
    'You don\'t need to talk to the branch.',
    'You swing the branch around a bit but can\'t help but feel it might be more useful elsewhere.'
)

const river = new Item(
    'river',
    'The river is fast flowing and runs right across the island. you can\'t tell how deep it is.',
    false,
    'Uhm...',
    null,
    null,
    'You don\'t speak water.',
    'You\'re not going in there.'
)

const twine = new Item(
    'twine',
    'There\'s enough strong string here to do something useful with.',
    true,
    'The twine feels pretty strong to be honest.',
    ['branch', 'hook'],
    'fishingrod',
    'Hey, I\'ll show you a good twine.',
    'It would be far more useful combined with some other things.'
)

const tennisBall = new Item(
    'ball',
    'It\'s a bit mis-shapen to be honest, a little squashed and ovular. Probably not great for a game.',
    true,
    'It might come in handy.',
    null,
    null,
    'Why would you want to talk to a tennis ball?',
    'You don\'t fancy a game right now.'
)

const tennisRacket = new Item(
    'racket',
    'A run-of-the-mill racket. It\'s a bit battered but you could still play with it.',
    true,
    'Well, you might want a game at some point I guess.',
    ['coolgrill', 'ducktape'],
    'bogshoes',
    'Not possible I\'m afraid.',
    'You don\'t really fancy a game.'
)

const pump = new Item(
    'pump',
    'The pufferfish and the straw have made a pretty decent looking pump!',
    true,
    'You might find something that needs to be inflated I guess.',
    ['flatvolleyball'],
    'inflatedvolleyball',
    'Who talks to a pump?',
    'What would you like to pump up?'
)

const knife = new Item(
    'knife',
    'It\'s a really good knife you\'ve got there.',
    true,
    'That is definitely going to come in useful. A decent blade.',
    null,
    null,
    'You can\'t talk to that, it\'s a knife.',
    'Things haven\'t got that desperate.'
)

const foodScraps = new Item(
    'scraps',
    'You push the scraps around a little and notice a handle. Excited, you push around some more - there\'s a knife there!',
    false,
    'I don\'t think so',
    null,
    null,
    'You can\'t talk to those.',
    'There\'s not much nutrition in those.'
)

const pufferFish = new Item(
    'pufferfish',
    'That thing\'s enormous! There\'s a lot of air in that body!',
    true,
    'Make sure you don\'t eat that thing.',
    ['straw'],
    'pump',
    'Last time I checked, you don\'t speak fish.',
    'Use it for what? You can\'t eat that thing. Do you know how poisonous they are?!'
)

const inflatedVolleyball = new Item(
    'inflatedvolleyball',
    'A beautiful, pumped up volleyball. The face painted on it is still just as weird even now it\'s inflated.',
    true,
    'It\'s more useful like this than it was before.',
    null,
    null,
    'Who do you think you are? Tom Hanks?!',
    'You do a few half-hearted spikes but volleyball was never particularly your thing.'
)

const flatVolleyball = new Item(
    'flatvolleyball',
    'It feels pretty flat to be honest. That face drawn on it isn\'t particularly artistic either. It seems to be called Wilson.',
    true,
    'Well, I guess it might be useful.',
    ['pump'],
    'inflatedvolleyball',
    'Who do you think you are? Tom Hanks?!',
    'It doesn\'t look like you\'ll have much fun playing with that.'
)

const straw = new Item(
    'straw',
    'This plastic material does seem pretty sturdy. You\'re a bit confused as to what was wrong with reusable stuff though.',
    true,
    'Well, I guess it might be useful. It\'s certainly better than something coming along and choking on it.',
    ['pufferfish'],
    'pump',
    'That\'s a ridiculous suggestion.',
    'There\'s not really anything around to use it with.'
)

const machete = new Item(
    'machete',
    'A pretty passable looking machete. It will certainly hack through some undergrowth.',
    true,
    'That\'s a good machete you have.',
    null,
    null,
    'You decide to call your machete \'Destroyer\' and murmur affectionate words to it.',
    'You swish the machete wildly through the air. Now to use it on something!'
)

const vegetation = new Item(
    'vegetation',
    'This vegetation is very thick',
    false,
    'You can\'t pick that up.',
    null,
    null,
    'You can\'t talk to that.',
    'You pull at the vegetation to try and part it but it\'s too thick.'
)

const vine = new Item(
    'vine',
    'The vine\'s pretty strong by the looks of things. It could prove useful to bind something together.',
    true,
    'You\'ve got yourself a strong vine there.',
    ['exposedmetal', 'stick'],
    'machete',
    'Even a creeper like Tarzan didn\'t talk to vines.',
    'You do your best Indiana Jones whip action with the vine.'
)

const chestClosed = new Item(
    'closedchest',
    'The chest looks like your standard, \'might contain something useful\', maritime box. It\'s not locked, but it is jammed shut pretty tightly.',
    false,
    'That\'s too big to carry',
    null,
    null,
    'You don\'t make a habit of talking to chests as a rule.',
    'Use it for what exactly? It\'s too big to carry and it doesn\'t look that easy to open.'
)

const chestOpen = new Item(
    'openchest',
    'The chest is open now. Unfortunately, there doesn\'t seem to be any treasure in there, but there is one shining coin.',
    false,
    'That\'s too big to carry.',
    null,
    null,
    'You don\'t make a habit of talking to chests as a rule.',
    'Use it for what exactly? It\'s too big to carry.'
)

const chestEmpty = new Item(
    'emptychest',
    'The chest is empty',
    false,
    'That\'s too big to carry',
    null,
    null,
    'You don\'t make a habit of talking to chests as a rule.',
    'Use it for what exactly? It\'s too big to carry.'
)

const coin = new Item(
    'coin',
    'Wow, this thing is really bright and shiny! It\'s not actually worth much, but you sure can see your face in it!',
    true,
    'Well, a full treasure chest would have been better, but at least this coin\'s a start.\n The chest is now empty.',
    [],
    null,
    'Who talks to coins?!',
    'I can\'t see that many shops around to be honest.',
)

const stick = new Item(
    'stick',
    'This is one tough-looking stick. It\'s pretty easy to grip and has a sharp, flat point at one end.',
    true,
    'That\'s a strong choice of stick you\'ve got there.',
    ['exposedmetal', 'vine'],
    'machete',
    'You can\'t talk to that, it\'s a stick.',
    'You swing the stick around in the air pretending to be a pirate.'
)

const metal = new Item(
    'metal',
    'The metal looks pretty sharp. It\'s not attached to a handle but it looks like it could cut through things.',
    false,
    'Ouch! The crab is guarding that piece of metal pretty jealously. Man, those pincers are sharp!',
    [],
    null,
    'You look at yourself in the shining metal and decide you\'d rather not talk to your reflection.',
    'Ouch! The crab is guarding that piece of metal pretty jealously. Man, those pincers are sharp',
)

const exposedMetal = new Item(
    'exposedmetal',
    'The metal looks pretty sharp. It\'s not attached to a handle but it looks like it could cut through things.',
    true,
    'You carefully pick up the sharp piece of metal and pocket it',
    ['stick', 'vine'],
    'machete',
    'You look at yourself in the shining metal and decide you\'d rather not talk to your reflection.',
    'The metal reflects your face back at you'
)

const crab = new Item(
    'crab',
    'The crab has a beautiful, mottled shell and seems to like shiny things given his attachment to the metal. Those pincers look pretty sharp though.',
    false,
    'You could see those pincers looked sharp! You\'ll not be trying that one again!',
    null,
    null,
    'You don\'t speak Crab.',
    'What exactly, do you want to use it for? You don\'t have the rest of the ingredients for a decent linguine.'
)

const happyCrab = new Item(
    'happycrab',
    'The crab is fascinated with its new shiny toy',
    false,
    'You could see those pincers looked sharp! You\'ll not be trying that one again!',
    null,
    null,
    'You don\'t speak Crab.',
    'What exactly, do you want to use it for? You don\'t have the rest of the ingredients for a decent linguine.'
)

export const items = {
    'closedchest': chestClosed,
    'openchest': chestOpen,
    'emptychest': chestEmpty,
    'coin': coin,
    'stick': stick,
    'metal': metal,
    'exposedmetal': exposedMetal,
    'crab': crab,
    'happycrab': happyCrab,
    'vine': vine,
    'vegetation': vegetation,
    'machete': machete,
    'straw': straw,
    'flatvolleyball': flatVolleyball,
    'inflatedvolleyball': inflatedVolleyball,
    'pufferfish': pufferFish,
    'scraps': foodScraps,
    'knife': knife,
    'pump': pump,
    'racket': tennisRacket,
    'ball': tennisBall,
    'twine': twine,
    'branch': branch,
    'can': beerCan,
    'canpile': canPile,
    'hook': hook,
    'fishingrod': fishingRod,
    'fish': fish,
    'boar': boar,
    'duck': duck,
    'ducktape': duckTape,
    'scales': scales,
    'bottle': bottle,
    'river': river,
    'hotgrill': hotGrill,
    'coolgrill': coolGrill,
    'bogshoes': bogShoes,
    'monkey': monkey,
    'coconut': coconut,
    'splitcoconut': splitCoconut,
    'flare': flare,
    'litflare': litFlare,
    'bamboo': bamboo,
    'stand': flareStand,
    'magnifyingglass': magnifyingGlass,
    'water': water,
    'shadowyman': shadowyMan,
    'cloth': redCloth,
    'bridge': bridge,
    'dancingman': dancingMan,
    'woman': woman
}

export default items