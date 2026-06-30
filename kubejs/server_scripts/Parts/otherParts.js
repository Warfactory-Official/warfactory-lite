 ServerEvents.recipes(event => {
 event.recipes.gtceu.chemical_reactor('kubejs:sold_rocket_fuel')
     .itemInputs(Item.of('gtceu:aluminium_dust'), Item.of('gtceu:rubber_dust'))
      .inputFluids(Fluid.of('gtceu:hydrogen_peroxide', 1000))
       .inputFluids(Fluid.of('gtceu:ethanol', 1000))
        .itemOutputs(Item.of('kubejs:solid_rocket_fuel'))
        .duration(200)
        .EUt(30)


        // peroxide avalible in LV
        event.remove({ output: Fluid.of('gtceu:hydrogen_peroxide')})

event.recipes.gtceu.chemical_reactor('kubejs:lv_peroxide')
      .inputFluids(Fluid.of('gtceu:hydrogen', 1000))
      .inputFluids(Fluid.of('gtceu:oxygen', 1000))
        .outputFluids(Fluid.of('gtceu:hydrogen_peroxide', 2000))
        .duration(200)
        .EUt(30)

        //Ethanol avalible in LV

event.remove({ id: 'kubejs:lv_ethanol' })

        event.recipes.gtceu.distillery('kubejs:lv_ethanol')
      .inputFluids(Fluid.of('gtceu:biomass', 1000))
        .outputFluids(Fluid.of('gtceu:ethanol', 100))
        .itemOutputs(Item.of('gtceu:wood_dust', 4))
        .circuit(2)
        .duration(600)
        .EUt(30)

        //light module but FUN

        event.remove({ output: 'superbwarfare:raw_cemented_carbide_powder'})

         event.recipes.gtceu.assembler('kubejs:light_module') 
         .itemInputs(Item.of('kubejs:heavy_barrel_damascus', 5), Item.of('gtceu:small_tank_grade_metal_gear', 2), Item.of('gtceu:basic_electronic_circuit'))
        .itemOutputs(Item.of('superbwarfare:light_armament_module'))
        .duration(600)
        .EUt(100)
 })   
