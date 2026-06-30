 ServerEvents.recipes(event => {
 event.recipes.gtceu.chemical_reactor('kubejs:gunmetal')
     .itemInputs(Item.of('gtceu:carbon_fiber_mesh'), Item.of('gtceu:fine_borosilicate_glass_wire'))
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1000))
        .itemOutputs(Item.of('gtceu:gun_metal_ingot'))
        .duration(200)
        .EUt(480)


        

 })   