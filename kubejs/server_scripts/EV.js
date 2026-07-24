ServerEvents.recipes(event => {
    const id = name => `wfcore:${name}`;

    const EVAssemblerRecipes = (item, mod, output, count, fluid, eutick, circuit, dur) => {
        count = count || 1;
        fluid = fluid || null;

        let recipe = event.recipes.gtceu.assembler(id(`${output}`))
            .itemInputs(item)
            .itemOutputs(`${count}x ${mod}:${output}`)
            .duration(dur)
            .EUt(eutick);

        if (circuit) {
            recipe.circuit(circuit);
        }

        if (fluid) {
            recipe.inputFluids(`${fluid}`);
        }
    };

    EVAssemblerRecipes(['4x gtceu:ev_robot_arm', '2x #gtceu:circuits/luv', '3x gtceu:data_orb', '4x gtceu:titanium_gear', '2x wfcore:machine_casing_turbine_titanium', '2x wfcore:double_galvanized_steel_plate', '2x gtceu:beryllium_plate', '48x gtceu:platinum_bolt'], 'wfcore', 'heavy_plane_assembler', 1, 'gtceu:epoxy 1152', 1920, null, 1800);
})