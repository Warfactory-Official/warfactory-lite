// priority: 0
// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {
  // Removes unwanted stuff
  event.replaceInput({}, 'superbwarfare:steel_ingot', 'gtceu:steel_ingot')
  event.shapeless(
    Item.of('gtceu:programmed_circuit', '{Configuration:0}'),
                  ['gtceu:vacuum_tube']
  )

  // WW Bolt-Action Rifles
  const ww1rifles = [
    Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"ww:m1903",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"ww:type99",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"ww:lee",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"ww:m91",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"ww:kar98k",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"ww:type38",HasBulletInBarrel:1b}'),
  ]
  ww1rifles.forEach(gun => {
    event.shaped(gun, [
      'III',
      'SIS',
      'SSS'
    ], {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    })
  })

  // WW Pistols
  const ww1pistols = [
    Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"ww:m712",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:8,GunFireMode:"SEMI",GunId:"ww:p08",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:8,GunFireMode:"SEMI",GunId:"ww:p08",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:7,GunFireMode:"SEMI",GunId:"ww:cph",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"ww:c96",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:7,GunFireMode:"SEMI",GunId:"ww:m1911a1",HasBulletInBarrel:1b}'),
                     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:8,GunFireMode:"SEMI",GunId:"ww:p38",HasBulletInBarrel:1b}'),
  ]
  ww1pistols.forEach(gun => {
    event.shaped(gun, [
      'III',
      'SIS',
      'SSS'
    ], {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    })
  })

  // WW LMGs
  const ww1lmgs = [
    Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"ww:m1918",HasBulletInBarrel:1b}'),
  ]
  ww1lmgs.forEach(gun => {
    event.shaped(gun, [
      'III',
      'SIS',
      'SSS'
    ], {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:stick'
    })
  })


})
