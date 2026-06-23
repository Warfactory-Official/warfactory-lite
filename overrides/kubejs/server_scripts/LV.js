// priority: 0

// Visit the wiki for more info - https://kubejs.com/


ServerEvents.recipes(event => {


//missile stuff 

 event.recipes.gtceu.chemical_reactor("kubejs:solid_fuel")
     .itemInputs(Item.of('gtceu:steel_fluid_cell', 10), Item.of('minecraft:charcoal', 20))
        .inputFluids('gtceu:oxygen 3000')
        .inputFluids('gtceu:hydrogen 3000')
        .itemOutputs(Item.of('ballistix:chemical', 1))
        .duration(200)
        .EUt(32)

event.remove({ output: 'ballistix:missiletier1' })
         event.recipes.gtceu.assembler("kubejs:missile1")
     .itemInputs(Item.of('gtceu:steel_fluid_cell', 2), Item.of('kubejs:solid_rocket_fuel', 2), Item.of('gtceu:steel_plate', 16), 'gtceu:basic_electronic_circuit' )
        .itemOutputs(Item.of('ballistix:missiletier1', 1))
        .duration(200)
        .EUt(32)

  //chemical explosive
//gets rid of all recipes for item

event.remove({ output: 'ballistix:chemical' })
event.remove({ id: "kubejs:chemical" })
//adds recipe
 event.recipes.gtceu.chemical_reactor("kubejs:chemical")
     .itemInputs(Item.of('minecraft:gunpowder', 5))
        .inputFluids('gtceu:chlorine 3000')
        .itemOutputs(Item.of('ballistix:chemical', 1))
        .duration(200)
        .EUt(32)

//shrapnel explosive
        event.remove({ output: 'ballistix:shrapnel' })

//adds recipe
 event.recipes.gtceu.assembler("kubejs:shrapnel_explosive")
     .itemInputs(Item.of('minecraft:gunpowder', 5), '64x gtceu:steel_nugget')
        .itemOutputs(Item.of('ballistix:shrapnel', 1))
        .duration(200)
        .EUt(32)


        
//condensed explosive

        event.remove({ output: 'ballistix:condensive' })
event.remove({ id: "kubejs:bigexplosive" })

//adds recipe
 event.recipes.gtceu.assembler("kubejs:bigexplosive")
     .itemInputs(Item.of('minecraft:gunpowder', 15), 'minecraft:white_wool' )
        .itemOutputs(Item.of('ballistix:condensive', 1))
        .duration(200)
        .EUt(32)


        // other missile stuff
event.remove({ output: 'ballistix:launchercontrolpaneltier1' })
        event.shaped(Item.of('ballistix:launchercontrolpaneltier1'), [
  'WWW',
  'BBA',
  'WWW'
], {
  A: 'gtceu:basic_electronic_circuit',
  W: 'gtceu:steel_ingot',
  B: 'gtceu:fine_electrum_wire',
})

event.remove({ output: 'ballistix:launcherplatformtier1' })
        event.shaped(Item.of('ballistix:launcherplatformtier1'), [
  'WWW',
  'ABA',
  'WWW'
], {
  A: 'gtceu:basic_electronic_circuit',
  B: 'gtceu:steel_block',
  W: '#forge:concretes',
})


//guns 
event.remove({ output: 'pointblank:mid_dp27' })

event.recipes.gtceu.assembler("kubejs:dp27")
     .itemInputs(Item.of('gtceu:steel_gear'), '2x gtceu:treated_wood_plate', '5x gtceu:steel_plate')
        
        .itemOutputs(Item.of('pointblank:mid_dp27', 1))
        .duration(400)
        .EUt(32)


        //smgs

        event.remove({ output: 'pointblank:mid_mp40'})
event.recipes.gtceu.assembler("kubejs:mp40")
     .itemInputs(Item.of('gtceu:small_steel_gear'), '2x gtceu:treated_wood_plate', '5x gtceu:steel_plate')
       .circuit(1)
        .itemOutputs(Item.of('pointblank:mid_mp40', 1))
        .duration(400)
        .EUt(32)

       
 event.remove({ output: 'pointblank:ppsh41early'})

event.recipes.gtceu.assembler('kubejs:ppsh41early')
     .itemInputs(Item.of('gtceu:small_steel_gear'), '2x gtceu:treated_wood_plate', '5x gtceu:steel_plate')
       .circuit(2)
        .itemOutputs(Item.of('pointblank:ppsh41early'))
        .duration(400)
        .EUt(32)

// Anti tank
        
event.recipes.gtceu.assembler('kubejs:rpg')
     .itemInputs(Item.of('3x kubejs:heavy_barrel_steel'), '2x gtceu:treated_wood_plate', 'gtceu:small_steel_spring')
       .circuit(1)
        .itemOutputs(Item.of('superbwarfare:rpg'))
        .duration(400)
        .EUt(16)


//MLRS

event.recipes.gtceu.assembler('kubejs:mlrs')
     .itemInputs(Item.of('3x kubejs:heavy_barrel_steel'), '2x gtceu:treated_wood_plate', 'gtceu:small_steel_spring')
       .circuit(2)
        .itemOutputs(Item.of('superbwarfare:container', {BlockEntityTag:{EntityType:"superbwarfare:type_63"}}))
        .duration(400)
        .EUt(16)

        //mortar stuff
event.remove({ output: 'superbwarfare:mortar_deployer'})
event.remove({ output: 'superbwarfare:mortar_barrel'})
event.remove({ output: 'superbwarfare:mortar_base_plate'})
event.remove({ output: 'superbwarfare:mortar_bipod'})

        event.recipes.gtceu.assembler('kubejs:mortard')
     .itemInputs(Item.of('superbwarfare:mortar_bipod'), 'superbwarfare:mortar_base_plate', 'superbwarfare:mortar_barrel')
        .itemOutputs(Item.of('superbwarfare:mortar_deployer'))
        .duration(400)
        .EUt(16)

         event.recipes.gtceu.arc_furnace('kubejs:mortar_barrel')
     .itemInputs(Item.of('2x kubejs:barrel_steel'), Item.of('#forge:dyes/green'))
        .itemOutputs(Item.of('superbwarfare:mortar_barrel'))
        .inputFluids('gtceu:oxygen 250')
        .duration(400)
        .EUt(30)

        event.recipes.gtceu.arc_furnace('kubejs:mortar_base')
     .itemInputs(Item.of('1x gtceu:double_steel_plate'), Item.of('#forge:dyes/green'))
        .itemOutputs(Item.of('superbwarfare:mortar_base_plate'))
        .inputFluids('gtceu:oxygen 250')
        .duration(400)
        .EUt(30)

        event.recipes.gtceu.arc_furnace('kubejs:mortar_bipod')
     .itemInputs(Item.of('2x gtceu:steel_rod'), Item.of('gtceu:small_steel_gear'), Item.of('#forge:dyes/green'))
        .itemOutputs(Item.of('superbwarfare:mortar_bipod'))
        .inputFluids('gtceu:oxygen 250')
        .duration(400)
        .EUt(30)

        event.recipes.gtceu.ammo_press('kubejs:mortar')
        .itemInputs(Item.of('minecraft:gunpowder'), Item.of('gtceu:steel_plate'))
        .itemOutputs(Item.of('4x superbwarfare:mortar_bipod'))
        .duration(40)
        .EUt(30)
        
})