// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {
//removes unwanted stuff

  event.replaceInput({}, 'superbwarfare:steel_ingot', 'gtceu:steel_ingot')


event.shaped(Item.of('pointblank:carcano1891'), [
  'WWW',
  'BBA',
  'XXT'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'superbwarfare:steel_trigger',
  X: ''
})

event.shaped(Item.of('pointblank:gewehr98'), [
  'WWW',
  'BBA',
  'XXT'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'superbwarfare:steel_trigger',
  X: ''
})

event.shaped(Item.of('pointblank:lebel'), [
  'WWW',
  'BBA',
  'XXT'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'superbwarfare:steel_trigger',
  X: ''
})

event.shaped(Item.of('pointblank:lee_enfield'), [
  'WWW',
  'BBA',
  'XXT'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'superbwarfare:steel_trigger',
  X: ''
})

event.shaped(Item.of('pointblank:m1903'), [
  'WWW',
  'BBA',
  'XXT'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'superbwarfare:steel_trigger',
  X: ''
})

event.shaped(Item.of('pointblank:mid_kar98k'), [
  'WWW',
  'BBA',
  'XXT'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'superbwarfare:steel_trigger',
  X: ''
})

event.shaped(Item.of('pointblank:mosin189130'), [
  'WWW',
  'BBA',
  'XXT'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'superbwarfare:steel_trigger',
  X: ''
})

event.shaped(Item.of('pointblank:type38'), [
  'WWW',
  'BBA',
  'XXT'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'superbwarfare:steel_trigger',
  X: ''
})
//bolt action rifle with scope,
event.shapeless(Item.of('pointblank:mosin189130pu'), [
  Item.of('pointblank:mosin1891'),
  Item.of('pointblank:pu_scope', '{id:"pointblank:pu_scope",rmv:1b}'),
])

event.shapeless(Item.of('pointblank:mid_kar98k_prewar',), [
  Item.of('pointblank:mid_kar98k'),
  Item.of('pointblank:mid_zf39', '{id:"pointblank:mid_zf39",rmv:1b}'),
])

 event.remove({ output: 'superbwarfare:homemade_shotgun'})
event.shaped(Item.of('superbwarfare:homemade_shotgun'), [
  'XTX',
  'BBA',
  'XAX'
], {
  A: 'superbwarfare:steel_action',
  W: 'gtceu:treated_wood_plate',
  B: 'superbwarfare:steel_barrel',
  T: 'gtceu:basic_tape',
  X: ''
})
})

  
