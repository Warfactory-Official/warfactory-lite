ServerEvents.recipes(event => {

event.remove({ output: 'superbwarfare:track' })
event.remove({ id: 'kubejs:track' })
//adds recipe
 event.recipes.gtceu.assembler("kubejs:track")
     .itemInputs(Item.of('gtceu:steel_plate', 4), Item.of('gtceu:steel_rod', 8))
        .inputFluids('gtceu:rubber 3000')
        .itemOutputs(Item.of('superbwarfare:track', 2))
        .duration(200)
        .EUt(32)

        // wheel
event.remove({ output: 'superbwarfare:wheel' })
event.remove({ id: 'kubejs:wheel' })

        event.recipes.gtceu.assembler("kubejs:wheel")
     .itemInputs(Item.of('gtceu:steel_plate', 2) )
        .inputFluids('gtceu:rubber 1000')
        .itemOutputs(Item.of('superbwarfare:wheel', 2))
        .duration(200)
        .EUt(32)

                // motor
event.remove({ output: 'superbwarfare:motor' })
event.remove({ id: 'kubejs:motor' })

        event.recipes.gtceu.assembler("kubejs:motor")
     .itemInputs(Item.of('gtceu:mv_electric_motor', 1), Item.of('gtceu:magnetic_steel_rod', 4), Item.of('gtceu:annealed_copper_octal_wire', 4))
        .itemOutputs(Item.of('superbwarfare:motor'))
        .duration(200)
        .EUt(128)
//big motor
        event.remove({ output: 'superbwarfare:large_motor' })
event.remove({ id: 'kubejs:big_motor' })


        event.recipes.gtceu.assembler("kubejs:big_motor")
     .itemInputs(Item.of('gtceu:hv_electric_motor', 1), Item.of('gtceu:long_stainless_steel_rod', 4), Item.of('gtceu:kanthal_double_wire', 4))
        .itemOutputs(Item.of('superbwarfare:large_motor'))
        .duration(200)
        .EUt(512)
//propellers

event.recipes.gtceu.cutter("kubejs:small_propeller")
     .itemInputs(Item.of('gtceu:polytetrafluoroethylene_plate'))
        .itemOutputs(Item.of('superbwarfare:propeller', 2))
        .duration(200)
        .EUt(500)

        event.recipes.gtceu.assembler('kubejs:large_propeller')
     .itemInputs(Item.of('gtceu:aluminium_turbine_blade', 4), Item.of('gtceu:aluminium_ring'))
        .itemOutputs(Item.of('superbwarfare:large_propeller'))
        .duration(200)
        .EUt(512)

        // vehicle alloys

        event.recipes.gtceu.alloy_smelter('kubejs:tank_alloy')
     .itemInputs(Item.of('gtceu:steel_ingot'), Item.of('gtceu:cobalt_ingot') )
        .itemOutputs(Item.of('2x gtceu:tank_grade_metal_ingot'))
        .duration(200)
        .EUt(100)

        event.recipes.gtceu.chemical_reactor('kubejs:plane_alloy')
     .itemInputs(Item.of('gtceu:steel_dust'), Item.of('gtceu:aluminium_dust') )
        .itemOutputs(Item.of('gtceu:aircraft_grade_metal_dust'))
        .duration(200)
        .EUt(100)

          event.recipes.gtceu.chemical_reactor('kubejs:plane_alloy_cool')
     .itemInputs(Item.of('gtceu:hot_aircraft_grade_metal_ingot'))
      .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs(Item.of('gtceu:aircraft_grade_metal_ingot'))
        .duration(200)
        .EUt(100)


})





