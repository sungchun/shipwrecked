import items from './items.js'
import end from '../images/end.gif'

class State {
  constructor(name, text, connectedTo, next = null, solution = null, items = [], image, music = null, playerCanWalk) {
    this.name = name
    this.text = text
    this.solution = solution
    this.items = items
    this.next = next
    this.connectedTo = connectedTo
    this.image = image
    this.music = music
    this.playerCanWalk = playerCanWalk
  }
}

export const epilogue = new State(
  'epilogue',
  'S-O-S and ... Rescue! You made it!',
  ['summitone'],
  null,
  null,
  null,
  end,
  null,
  null,
)

// export const summitFour = new State(
//   'summit',
//   'The sun is shining incredibly brightly now. If you get this flare in the air, there\'s no-way it won\'t be seen.',
//   null,
//   null,
//   'USE litflare ON stand',
//   [items['stand'], items['litflare']],
//   'https://i.imgur.com/I9AtcrR.jpg',
//   null,
//   ['hut']
// )

// export const summitThree = new State(
//   'summit',
//   'You stoop to fill your bottle up with water. As you do so, you notice the curve of the base of the bottle catching the bright sun rays. The rays concentrate on the concaved container and create something like a magnifying glass.',
//   null,
//   epilogue,
//   'USE magnifying glass',
//   [items['bamboo']],
//   'https://i.imgur.com/I9AtcrR.jpg',
//   null,
//   ['hut']
// )

export const summitTwo = new State(
  'summit',
  'The stream continues to trickle down the mountainside. Your makeshift flare stand is ready.',
  null,
  epilogue,
  'USE litflare on bamboo',
  [items['bamboo']],
  'https://i.imgur.com/I9AtcrR.jpg',
  null,
  ['hut']
)

export const summitOne = new State(
  'summit',
  'It\'s been quite the morning. You climb to the top of the mountain and gaze all around you. The island is surrounded on all sides by calm blue water. You can see what looks like a ship far off in the distance - the lit flare will surely grab their attention. \nA small trickling stream runs through the rocks, the water pure and clear. The sun is hot and direct and it\'s not been an easy climb. A small patch of bamboo pushes through cracks in the hard granite of the mountain.',
  ['mountainhutone'],
  summitTwo,
  'PICKUP water',
  [items['water'], items['bamboo']],
  'https://i.imgur.com/I9AtcrR.jpg',
  null,
  ['hut']
)

export const mountainHutThree = new State(
  'hut',
  'It\'s beautifully peaceful here. You can see the summit up ahead of you. It looks like quite the climb.',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/EwKYBa2.jpg',
  null,
  ['summit']
)

export const mountainHutTwo = new State(
  'hut',
  'The woman has gone inside her hut now having left the flare outside. It\'s beautifully peaceful here. You can see the summit up ahead of you. It looks like quite the climb.',
  null,
  mountainHutThree,
  'PICKUP flare',
  [items['flare']],
  'https://i.imgur.com/EwKYBa2.jpg',
  null,
  ['summit']
)

export const mountainHutOne = new State(
  'hut',
  'There\'s no turning back now. Your makeshift shoes transport you across the quagmire, and you get to the other side just in time as the tennis racket sinks from sight. \nThe mountain rises steeply in front of you, and you begin to climb. Up ahead is a hut. A woman sits outside, settled by the fire, staring intently at something out of your sight. \nWhat would you like to do?',
  null,
  mountainHutTwo,
  'Robinson Crusoe',
  [items['woman']],
  'https://i.imgur.com/EwKYBa2.jpg',
  null,
  ['boggy ground']
)

export const boggyGroundTwo = new State(
  'boggyground',
  'As you prepare to cross the ground, your eyes focus on the mountain again and you see what looks like some flames flickering outside a hut. Perhaps that might be a good place to head to?',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/nFiNUlM.jpg',
  null,
  ['track', 'trees', 'camp', 'hut']
)

export const boggyGroundOne = new State(
  'boggyground',
  'Up ahead the mountain looms. Nearly there now. \nAt the foot of the mountain, there is a huge area of boggy ground. You gingerly step forward and put your foot down. Your shoe disappears into the bog. The ground is spongy and there is some resistance there but it won\'t take your weight as things stand. \nYou look around. To your right is a grove of coconut trees to your left is a camp. No-one is obviously around and you wonder whether that could be the dancing man\'s base.',
  ['trackone', 'treesone', 'campone', 'mountainhutone'],
  boggyGroundTwo,
  'USE bogshoes',
  null,
  'https://i.imgur.com/nFiNUlM.jpg',
  null,
  ['track', 'trees', 'camp']
)

export const treesThree = new State(
  'trees',
  'The place is quiet now. Pretty soon the monkey will be back though I\'m sure.',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/nFiNUlM.jpg',
  null,
  ['boggyground']
)

export const treesTwo = new State(
  'trees',
  'There\'s not much else to see. The coconut lies on the ground beneath your feet. It split slightly as it hit the ground, so coconut water is dripping out of it.',
  null,
  treesThree,
  'PICKUP splitcoconut',
  [items['splitcoconut']],
  'https://i.imgur.com/nFiNUlM.jpg',
  null,
  ['boggyground']
)

export const treesOne = new State(
  'trees',
  'You head to the coconut trees in the hope of getting something to drink but the trees look pretty much unclimbable. At the base of one of the trees a monkey is wrestling with a bottle of water, trying to get the lid off it. The monkey stares at you trying to ascertain your next move.',
  null,
  treesTwo,
  'PICKUP bottle',
  [items['monkey'], items['bottle']],
  'https://i.imgur.com/nFiNUlM.jpg',
  null,
  ['boggyground']
)

export const campThree = new State(
  'camp',
  'The camp feels pretty empty now. The embers have cooled down. Even the rustling from the bushes has stopped.',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/nFiNUlM.jpg',
  null,
  ['boggyground']
)

export const campTwo = new State(
  'camp',
  'The coconut water has cooled the embers and the grill quickly.',
  null,
  campThree,
  'PICKUP coolgrill',
  [items['coolgrill']],
  'https://i.imgur.com/nFiNUlM.jpg',
  null,
  ['boggyground']
)

export const campOne = new State(
  'camp',
  'A round grill rack sits on the burning embers of the fire. There\'s no food left on it unfortunately but it\'s clean. \nYou hear an excited muffling sound in the bushes nearby and spot a sequinned jacket being thrown off. \'Leave them to it.\' you think, and you focus on the camp.',
  null,
  campTwo,
  'USE splitcoconut ON hotgrill',
  [items['hotgrill']],
  'https://i.imgur.com/nFiNUlM.jpg',
  null,
  ['boggyground']
)

export const clearing = new State(
  'clearing',
  'You arrive at a large clearing in the trees. The sounds of nature surround you and a duck guards her nest in the undergrowth. At the far side of the clearing a track leads to the mountain, a track which seems to be blocked by a rather odd looking man who can\'t seem to stop dancing. \nWhere would you like to go?',
  ['treeone', 'duckone', 'trackone'],
  null,
  null,
  null,
  'https://i.imgur.com/hRsFzTB.jpg',
  null,
  ['duck', 'track', 'tree']
)

export const trackTwo = new State(
  'track',
  'The man runs off delightedly muttering his thank yous and excitedly chattering about there being some glue somewhere near the duck\'s toolbox. He manages to think for long enough to yell \'Head for the boggy ground!\'at you',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/hRsFzTB.jpg',
  null,
  ['clearing', 'boggyground']
)

export const trackOne = new State(
  'track',
  'You wander, with some trepidation, to the edge of the clearing and the path that leads to the mountain. The man is energetically dancing and singing to himself. There\'s also a slight melancholy there, he can\'t seem to stop moving but seems to be fighting back the tears as he sings \'Heartbreak Hotel\'. As he dances your eye can\'t help but be drawn to his sequinned jacket which has seen better days and is a little patchy in parts.',
  null,
  trackTwo,
  'GIVE scales TO dancingman',
  [items['dancingman']],
  'https://i.imgur.com/hRsFzTB.jpg',
  null,
  ['clearing']
)

export const duckThree = new State(
  'duck',
  'The duck is now contentedly quacking to herself. Evidently, the tennis ball is nice and comfy.',
  null,
  null,
  null,
  [items['duck']],
  'https://i.imgur.com/hRsFzTB.jpg',
  null,
  ['clearing']
)

export const duckTwo = new State(
  'duck',
  'The duck is happy as anything nesting in her toolbox.',
  null,
  duckThree,
  'PICKUP ducktape',
  [items['duck'], items['ducktape']],
  'https://i.imgur.com/hRsFzTB.jpg',
  null,
  ['clearing']
)

export const duckOne = new State(
  'duck',
  'The duck sits in a makeshift nest which seems to be made out of some sort of old tool-box. She seems very content, sporadically shifting herself around as she warms the contents of the nest.',
  null,
  duckTwo,
  'GIVE ball TO duck',
  [items['duck']],
  'https://i.imgur.com/hRsFzTB.jpg',
  null,
  ['clearing']
)


export const riverTwo = new State(
  'river',
  'The river is still flowing treacherously quickly. The cloth is no longer on the ground.',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['tree', 'pool', 'shadowyman']
)

export const riverOne = new State(
  'river',
  'The man was right, there is a river up ahead. What he didn\'t tell you was that there was no way to cross and that the river was flowing far too quickly to swim. Besides, for a sailor, you\'ve always been embarrassingly bad in the water. \nOver the water, there\'s a clearing up ahead which looks like it should lead to the mountain. The undergrowth and the canopy is less suffocating here and it looks you\'re going to need to get across if you want to get there. \nDown river slightly it looks like there\'s an overhanging tree, whilst a just up the bank there are a couple of pools clustered together that might make a good fishing spot. Other than that, there\'s not a lot around apart from a tattered cloth that lies on the ground. \nWhere would you like to go?',
  ['treeone', 'poolone', 'shadowymanone'],
  riverTwo,
  'PICKUP cloth',
  [items['cloth']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['tree', 'pool', 'shadowyman']
)

export const poolSix = new State(
  'pool',
  'The fish have all become wise to your tricks and now hide in the shadows. There is nothing left on the bank.',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river']
)

export const poolFive = new State(
  'pool',
  'The fish leaps up as you use the knife on it and it\'s back in the pool. All you have managed to do is get a handful of shiny scales. In a strange way, you\'re relieved.',
  null,
  poolSix,
  'PICKUP scales',
  [items['scales']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river']
)

export const poolFour = new State(
  'pool',
  'You catch the fish and it flops onto the bank. It doesn\'t look like it\'s in great shape to be honest - it might be best to put it out of its misery.',
  null,
  poolFive,
  'USE knife on FISH',
  [items['fish'], items['river']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river']
)

export const poolThree = new State(
  'pool',
  'The calm pools are still there, fish swimming around. The beer cans are still on the bank.',
  null,
  poolFour,
  'USE fishingrod ON RIVER',
  [items['river']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river']
)

export const poolTwo = new State(
  'pool',
  'One of the cans wasn\'t empty so you decide to risk it and have a beer. In the process of opening the beer, the ringpull comes off the can and a hook-like object drops to the floor.',
  null,
  poolThree,
  'PICKUP hook',
  [items['hook'], items['river']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river']
)

export const poolOne = new State(
  'pool',
  'It all feels pretty calm over here. There are a couple of pools, just away from the rushing river with fish in them, their beautiful scales glimmering in the dappled light. \nThe spot is idyllic. Evidently someone else also thought so as there is a pile of (presumably empty) cans of beer on the bank as well as a red cloth. At least someone\'s been enjoying themselves.',
  null,
  poolTwo,
  'EXAMINE canpile',
  [items['canpile'], items['river']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river']
)

export const treeThree = new State(
  'tree',
  'You nervously hold out the red cloth. The boar takes one look at it and charges at you. At the last moment, you channel your inner matador and yank the cloth out of the way and smartly step to one side. The boar crashes into the overhanging tree and it falls across the river. You throw the cloth away hurriedly and hide in some bushes until you\'re sure the boar is staying down.',
  null,
  null,
  null,
  [items['bridge']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river', 'clearing']
)

export const treeTwo = new State(
  'tree',
  'The tree is still disappointingly upright - the stripping of one of the branches hasn\'t really changed that. The boar is still looking like it wants to charge at you.',
  null,
  treeThree,
  'USE cloth ON boar',
  [items['boar']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river']
)

export const treeOne = new State(
  'tree',
  'You walk over to the overhanging tree and glance up at it. It\'s easily tall enough to create a bridge across the river but it won\'t budge. A branch strips off which might come in handy. You decide to take a run at the tree and turn... \n...an angry boar faces you, gnashing its teeth. It\'s incisors look frighteningly sharp and it looks pretty hungry. Time to get out of here.',
  null,
  treeTwo,
  'PICKUP branch',
  [items['branch'], items['boar']],
  'https://i.imgur.com/i3SH9nB.jpg',
  null,
  ['river']
)

const pathTwo = new State(
  'path',
  'Turns out, that machete you made was just about good enough for getting through the undergrowth. The metal was quickly snatched up by a particularly vain crested gibbon who has long since escaped to the canopy to preen himself. \nThe path is less trodden now and the undergrowth is much higher. The high trees and lack of light are disorienting and it\'s not long before you realise that you\'re hopelessly lost. \nYou stop to look around. Just to your left, behind some creepers, you can see what looks like a cave. Somewhere ahead - and it could be that your mind is playing tricks on you - there seems to be a shadowy figure. Your eye is also drawn to a pile of rubbish behind some bushes, maybe it contains something useful?',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['jungle', 'cave', 'rubbish', 'shadowyman']
)

export const pathOne = new State(
  'path',
  'Turns out, that machete you made was just about good enough for getting through the undergrowth. The metal was quickly snatched up by a particularly vain crested gibbon who has long since escaped to the canopy to preen himself leaving only a piece of twine that it had previously been playing with behind. \nThe path is less trodden now and the undergrowth is much higher. The high trees and lack of light are disorienting and it\'s not long before you realise that you\'re hopelessly lost. \nYou stop to look around. Just to your left, behind some creepers, you can see what looks like a cave. Somewhere ahead - and it could be that your mind is playing tricks on you - there seems to be a shadowy figure. Your eye is also drawn to a pile of rubbish behind some bushes, maybe it contains something useful?',
  ['jungleone', 'caveone', 'rubbishone', 'shadowymanone'],
  pathTwo,
  'PICKUP twine',
  [items['twine']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['jungle', 'cave', 'rubbish', 'shadowyman']
)

export const shadowyManFour = new State(
  'shadowyman',
  'There is nothing left in the area now. The man has wandered off, presumably to start his new found hobby.',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path', 'river']
)

export const shadowyManThree = new State(
  'shadowyman',
  'You pick up the racket and notice that the man has also dropped a ball behind him as he left.',
  null,
  shadowyManFour,
  'PICKUP ball',
  [items['ball']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path', 'river']
)

export const shadowyManTwo = new State(
  'shadowyman',
  'The man wanders off into the undergrowth but not before leaving the tennis racket on the ground in front of you. You crane your neck slightly and can see the river up ahead that he was talking about.',
  null,
  shadowyManThree,
  'PICKUP racket',
  [items['racket']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path', 'river']
)

export const shadowyManOne = new State(
  'shadowyman',
  'The figure seems to come out from nowhere. You are confronted by a bearded man, his long, shaggy hair demonstrating that he has been here for quite some time. Rather confusingly, he\'s dressed in what seems to be tennis gear. He stares expectantly at you.',
  null,
  shadowyManTwo,
  'GIVE inflatedvolleyball TO shadowyman',
  [items['shadowyman']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path']
)

export const rubbishThree = new State(
  'rubbish',
  'There\'s still all this rubbish strewn around, but nothing that looks useful.',
  null,
  null,
  null,
  null,
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path']
)

export const rubbishTwo = new State(
  'rubbish',
  'There\'s still all this rubbish strewn around.  You notice a plastic straw sticking up out of the rubbish pile.',
  null,
  rubbishThree,
  'PICKUP straw',
  [items['straw']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path']
)

export const rubbishOne = new State(
  'rubbish',
  'Turns out there\'s heaps of rubbish strewn on the ground - maybe that shadowy figure is real after all? Your eye is drawn to what looks like a flat volleyball with a rudimentary reddish face drawn on it.',
  null,
  rubbishTwo,
  'PICKUP flatvolleyball',
  [items['flatvolleyball']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path']
)

export const caveFour = new State(
  'cave',
  'The cave looks pretty empty now. There\'s nothing here apart from the food scraps scattered all over the floor.',
  null,
  null,
  null,
  [items['scraps']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path']
)

export const caveThree = new State(
  'cave',
  'The food scraps are littered all over the cave. The knife lies gleaming on the floor.',
  null,
  caveFour,
  'PICKUP knife',
  [items['knife'], items['scraps']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path']
)

export const caveTwo = new State(
  'cave',
  'Now looking inside the cave, there isn\'t much going on but for a pile of food scraps in an alcove.',
  null,
  caveThree,
  'EXAMINE scraps',
  [items['scraps']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path']
)

export const caveOne = new State(
  'cave',
  'The cave looks like it might have been occupied once but a long time ago. Whoever did live here clearly left a while back - there\'s not much here. At the entrance of the cave is a huge inflated puffer fish.',
  null,
  caveTwo,
  'PICKUP pufferfish',
  [items['pufferfish']],
  'https://i.imgur.com/OALJy1v.jpg',
  null,
  ['path']
)

export const beach = new State(
  'beach',
  'Washed up on the beach your eyes open and you groggily get to your feet so you can take in your surroundings. \n Up ahead, beyond the swaying fronds of lush jungle vegetation, a mountain towers over the island, surveying the land and the ocean around it. To your left, a rockpool glistens in the sun, to your right, piles of driftwood are washed up on the shore - the last vestiges of The Inferno. \nThe sun beats down on you and you check your satchel. A few swigs of water in a flask but nothing else. You need to move.',
  ['rockpoolone', 'driftwoodone', 'jungleone'],
  null,
  null,
  null,
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['rockpool', 'driftwood', 'jungle']
)

export const driftwoodFour = new State(
  'driftwood',
  'There is still driftwood strewn over a portion of the beach. The Inferno, well, much of what\'s left of it, still lies across the sand.The empty chest is empty.',
  null,
  null,
  null,
  [items['emptychest']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)

export const driftwoodThree = new State(
  'driftwood',
  'The sharp end of the stick works perfectly as a jimmy to open the chest. The open chest is largely empty, but for a glimmering coin.',
  null,
  driftwoodFour,
  'PICKUP coin',
  [items['openchest'], items['coin']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)
export const driftwoodTwo = new State(
  'driftwood',
  'There is still driftwood strewn over the beach. The closed chest from The Inferno is obstinately shut in front of you.',
  null,
  driftwoodThree,
  'USE Stick ON closedchest',
  [items['closedchest']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)
export const driftwoodOne = new State(
  'driftwood',
  'The driftwood is strewn over a portion of the beach. Broken pieces of The Inferno lie across the sand. Most of the planks are too big to carry. A closed chest has washed up on the shore with the wood. A sturdy stick with a pointed end juts out of the foreshore.',
  null,
  driftwoodTwo,
  'PICKUP Stick',
  [items['stick'], items['closedchest']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)

export const jungleThree = new State(
  'jungle',
  'The machete has worked on the vegetation. Ahead of you there is a path of sorts. It\'s barely visible, but it does look like it leads to the mountain.',
  null,
  null,
  null,
  [],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['path', 'beach']
)

export const jungleTwo = new State(
  'jungle',
  'The tangled vegetation still blocks the way.',
  null,
  jungleThree,
  'USE machete ON vegetation',
  [items['vegetation']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)

export const jungleOne = new State(
  'jungle',
  'You trudge to the far end of the beach. Thick vegetation blocks your way. It looks like there was a path here years ago but it\'s long since been enveloped by swathes of tangled green locked in an eternal battle for light. The odd vine pokes out of the mass of green in front of you.\n There\'s no way through here.',
  null,
  jungleTwo,
  'PICKUP vine',
  [items['vine'], items['vegetation']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)

export const rockpoolThree = new State(
  'rockpool',
  'The metal is gone and the crab is happily guarding her coin.',
  null,
  null,
  null,
  [items['happycrab']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)

export const rockpoolTwo = new State(
  'rockpool',
  'The crab\'s attention is drawn to a new bright shiny thing. She scuttles over to the coin to give it a closer look. \nThe rockpool lies calm and still, anenome still waving. The crab is delightedly guarding her new coin.',
  null,
  rockpoolThree,
  'PICKUP exposedMetal',
  [items['happycrab'], items['exposedmetal']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)

export const rockpoolOne = new State(
  'rockpool',
  'The rockpool reflects the morning light. An anenome waves in the pool of water drawing your eye towards a set of pincers hidden in the shadows. The crab, sits atop a gleaming piece of metal unrusted and sharp, guarding the shimmering object.',
  null,
  rockpoolTwo,
  'GIVE Coin TO Crab',
  [items['crab'], items['metal']],
  'https://i.imgur.com/NDTADSx.jpg',
  '../audio/Beach.wav',
  ['beach']
)

export const zones = {
  'driftwoodone': driftwoodOne,
  'driftwoodtwo': driftwoodTwo,
  'driftwoodthree': driftwoodThree,
  'driftwoodfour': driftwoodFour,
  'rockpoolone': rockpoolOne,
  'rockpooltwo': rockpoolTwo,
  'rockpoolthree': rockpoolThree,
  'beach': beach,
  'jungleone': jungleOne,
  'jungletwo': jungleTwo,
  'junglethree': jungleThree,
  'caveone': caveOne,
  'cavetwo': caveTwo,
  'cavethree': caveThree,
  'cavefour': caveFour,
  'rubbishone': rubbishOne,
  'rubbishtwo': rubbishTwo,
  'rubbishthree': rubbishThree,
  'pathone': pathOne,
  'pathtwo': pathTwo,
  'shadowymanone': shadowyManOne,
  'shadowymantwo': shadowyManTwo,
  'shadowymanthree': shadowyManThree,
  'shadowymanfour': shadowyManFour,
  'treeone': treeOne,
  'treetwo': treeTwo,
  'treethree': treeThree,
  'poolone': poolOne,
  'pooltwo': poolTwo,
  'poolthree': poolThree,
  'poolfour': poolFour,
  'poolfive': poolFive,
  'poolsix': poolSix,
  'rivertwo': riverTwo,
  'riverone': riverOne,
  'clearing': clearing,
  'trackone': trackOne,
  'tracktwo': trackTwo,
  'duckone': duckOne,
  'ducktwo': duckTwo,
  'duckthree': duckThree,
  'boggygroundone': boggyGroundOne,
  'boggygroundtwo': boggyGroundTwo,
  'campone': campOne,
  'camptwo': campTwo,
  'campthree': campThree,
  'treesone': treesOne,
  'treestwo': treesTwo,
  'treesthree': treesThree,
  'mountainhutone': mountainHutOne,
  'mountainhuttwo': mountainHutTwo,
  'mountainhutThree': mountainHutThree,
  'summitone': summitOne,
  'summittwo': summitTwo,
  // 'summitthree': summitThree,
  // 'summitfour': summitFour,
  'epilogue': epilogue

}

export const levelOne = ['beach', 'jungleone', 'rockpoolone', 'driftwoodone']
export const levelTwo = ['pathone', 'shadowymanone', 'caveone', 'rubbishone']
export const levelThree = ['riverone', 'treeone', 'poolone']
export const levelFour = ['clearing', 'duckone', 'trackone']
export const levelFive = ['boggygroundone', 'treesone', 'campone']
export const levelSix = ['mountainhutone']
export const levelSeven = ['summitone']
export const levelEight = ['epilogue']
export const levels = [levelOne, levelTwo, levelThree, levelFour, levelFive, levelSix, levelSeven, levelEight]