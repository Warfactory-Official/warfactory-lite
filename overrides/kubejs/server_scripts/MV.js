ServerEvents.recipes(event => {


//missile stuff 
//rocket fuel for MV 

event.remove({ id: "kubejs:rocketfuel" })

// adds recipe
event.recipes.gtceu.chemical_reactor("kubejs:rocketfuel")
    .inputFluids(Fluid.of('gtceu:ethanol', 800))
    .inputFluids(Fluid.of('gtceu:oxygen', 200))
    .outputFluids(Fluid.of('gtceu:early_rocket_fuel', 1000))
    .duration(200)
    .EUt(100)

    event.remove({ output: 'ballistix:missiletier2' })

    event.recipes.gtceu.rocket_factory("kubejs:rocket2")
    .inputFluids(Fluid.of('gtceu:early_rocket_fuel', 10000))
 .itemInputs(Item.of('gtceu:microchip_processor'),'4x gtceu:silver_single_wire', '10x gtceu:aircraft_grade_metal_plate')
     .itemOutputs(Item.of('ballistix:missiletier2'))
 .duration(2000)
    .EUt(100)

})