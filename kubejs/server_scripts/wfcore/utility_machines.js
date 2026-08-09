ServerEvents.recipes(event => {
    const g = event.recipes.gtceu

    g.assembler('wfcore:solaris')
        .itemInputs('4x gtceu:sterling_silver_plate', '2x #gtceu:circuits/mv',
             '1x gtceu:black_steel_frame',
            )
        .itemOutputs('wfcore:solaris_furnace')
        .duration(200).EUt(32)


    g.assembler('wfcore:solar_panel_casing')
        .itemInputs('4x gtceu:sterling_silver_plate', 'gtceu:solar_panel',
             '1x gtceu:black_steel_frame',
            )
        .itemOutputs('wfcore:solar_panel_casing')
        .duration(200).EUt(32)


    event.shaped("wfcore:crafting_station", ["GPG", "PGP", "GPG"], {
    G: "minecraft:stick",
    P: "gtceu:treated_wood_planks",
  });


    
})
