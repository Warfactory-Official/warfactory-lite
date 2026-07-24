// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {
    const id = name => `wfcore:${name}`;

    const HVAssemblerRecipes = (item, mod, output, count, fluid, eutick, circuit, dur) => {
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
    HVAssemblerRecipes(['2x gtceu:hv_assembler', '2x gtceu:industrial_steam_casing', '6x gtceu:hv_robot_arm', '6x gtceu:hv_conveyor_module', '6x gtceu:hv_electric_motor', '16x gtceu:electrum_quadruple_cable', '2x #gtceu:circuits/iv', '4x #gtceu:circuits/ev', '8x #gtceu:circuits/hv'], 'wfcore', 'missile_factory', 1, 'gtceu:polytetrafluoroethylene 1152', 480, null, 1800);
    HVAssemblerRecipes(['3x gtceu:hv_robot_arm', '4x #gtceu:circuits/iv', '6x wfcore:galvanized_steel_frame', '2x wfcore:machine_casing_turbine_titanium', '3x gtceu:stainless_steel_gearbox', '2x gtceu:titanium_gear'], 'wfcore', 'tank_assembly', 1, 'gtceu:polytetrafluoroethylene 864', 480, null, 900);
    HVAssemblerRecipes(['3x gtceu:hv_field_generator', '2x gtceu:hv_conveyor_module', '2x gtceu:hv_emitter', '2x gtceu:hv_sensor', '4x gtceu:industrial_steam_casing', '4x gtceu:black_steel_frame', '2x gtceu:data_stick', '2x #gtceu:circuits/iv'], 'wfcore', 'missile_launcher', 1, 'gtceu:polytetrafluoroethylene 1152', 480, null, 1800);
    HVAssemblerRecipes(['2x gtceu:mv_robot_arm', '2x #gtceu:circuits/ev', '2x wfcore:aluminium_sheet_casing', '2x gtceu:stainless_steel_gear', '2x gtceu:mv_conveyor_module', '3x gtceu:black_steel_frame', '3x gtceu:black_large_metal_sheet'], 'wfcore', 'heavy_vehicle_depot', 1, 'gtceu:polyethylene 576', 120, null, 600);
})



ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor("kubejs:advanced_aircraft_metal")
        .inputFluids('gtceu:oxygen 3000')
        .inputFluids('gtceu:hydrogen 3000')
        .outputFluids('gtceu:advanced_aircraft_metal 2000')
        .duration(200)
        .EUt(256)

    event.recipes.gtceu.large_chemical_reactor("kubejs:nether_star_dust")
        .itemInputs('15x gtceu:lapotron_dust', '32x minecraft:glowstone_dust', '5x gtceu:ender_pearl_dust')
        .inputFluids('gtceu:aqua_regia 3000')
        .itemOutputs('1x gtceu:nether_star_dust')
        .duration(1800)
        .EUt(1920)


    // =========================
    // GUNS - progression brief implementation (warfactory-lite-gun-progression-notes.md)
    // HV = cutting-edge modern era.
    // =========================

    // Modern pistols (1990s-2020s designs)
    const modernPistols2 = [
        { nbt: '{GunCurrentAmmoCount:12,GunFireMode:"SEMI",GunId:"tacz:hk_mk23",HasBulletInBarrel:1b}', circuit: 1 },
        { nbt: '{GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"tacz:m9a4",HasBulletInBarrel:1b}', circuit: 2 },
        { nbt: '{GunCurrentAmmoCount:6,GunFireMode:"SEMI",GunId:"tacz:rhino357",HasBulletInBarrel:1b}', circuit: 3 },
        { nbt: '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"tacz:taurus500",HasBulletInBarrel:1b}', circuit: 4 },
        { nbt: '{GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"ronmc:509",HasBulletInBarrel:1b}', circuit: 5 },
        { nbt: '{GunCurrentAmmoCount:12,GunFireMode:"SEMI",GunId:"ronmc:p99",HasBulletInBarrel:1b}', circuit: 6 },
    ];
    modernPistols2.forEach(g => {
        event.remove({ output: Item.of('tacz:modern_kinetic_gun', g.nbt) });
        event.recipes.gtceu.assembler(`modern_pistol2_${g.circuit}`)
            .itemInputs(
                Item.of('gtceu:gun_metal_ingot', 1),
                Item.of('gtceu:polytetrafluoroethylene_plate', 1),
                Item.of('gtceu:stainless_steel_gear', 1)
            )
            .itemOutputs(Item.of('tacz:modern_kinetic_gun', 1, g.nbt))
            .circuit(g.circuit)
            .duration(200)
            .EUt(512);
    });

    // Modern SMGs
    const modernSmgs = [
        { nbt: '{GunCurrentAmmoCount:25,GunFireMode:"AUTO",GunId:"tacz:ump45",HasBulletInBarrel:1b}', circuit: 1 },
        { nbt: '{GunCurrentAmmoCount:20,GunFireMode:"SEMI",GunId:"tacz:vector45",HasBulletInBarrel:1b}', circuit: 2 },
        { nbt: '{GunCurrentAmmoCount:40,GunFireMode:"SEMI",GunId:"ronmc:mp7",HasBulletInBarrel:1b}', circuit: 3 },
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"ronmc:mp9",HasBulletInBarrel:1b}', circuit: 4 },
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"ronmc:mpx",HasBulletInBarrel:1b}', circuit: 5 },
    ];
    modernSmgs.forEach(g => {
        event.remove({ output: Item.of('tacz:modern_kinetic_gun', g.nbt) });
        event.recipes.gtceu.assembler(`modern_smg_${g.circuit}`)
            .itemInputs(
                Item.of('gtceu:gun_metal_ingot', 1),
                Item.of('gtceu:polytetrafluoroethylene_plate', 2),
                Item.of('gtceu:stainless_steel_gear', 1)
            )
            .itemOutputs(Item.of('tacz:modern_kinetic_gun', 1, g.nbt))
            .circuit(g.circuit)
            .duration(200)
            .EUt(512);
    });

    // Modern rifles - this is where gun_metal_ingot finally gets consumed at scale
    const modernRifles2 = [
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"ronmc:g36c",HasBulletInBarrel:1b}', circuit: 1 },
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"ronmc:mcx",HasBulletInBarrel:1b}', circuit: 2 },
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"tacz:qbz_191",HasBulletInBarrel:1b}', circuit: 3 },
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"tacz:qbz_95",HasBulletInBarrel:1b}', circuit: 4 },
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"tacz:hk416d",HasBulletInBarrel:1b}', circuit: 5 },
        { nbt: '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"tacz:mk14",HasBulletInBarrel:1b}', circuit: 6 },
        { nbt: '{GunCurrentAmmoCount:20,GunFireMode:"SEMI",GunId:"tacz:scar_h",HasBulletInBarrel:1b}', circuit: 7 },
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"tacz:scar_l",HasBulletInBarrel:1b}', circuit: 8 },
        { nbt: '{GunCurrentAmmoCount:15,GunFireMode:"SEMI",GunId:"tacz:spr15hb",HasBulletInBarrel:1b}', circuit: 9 },
        { nbt: '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"ronmc:lvar",HasBulletInBarrel:1b}', circuit: 10 },
        { nbt: '{GunCurrentAmmoCount:20,GunFireMode:"SEMI",GunId:"ronmc:rtwc",HasBulletInBarrel:1b}', circuit: 11 },
    ];
    modernRifles2.forEach(g => {
        event.remove({ output: Item.of('tacz:modern_kinetic_gun', g.nbt) });
        event.recipes.gtceu.assembler(`modern_rifle2_${g.circuit}`)
            .itemInputs(
                Item.of('gtceu:gun_metal_ingot', 2),
                Item.of('gtceu:polytetrafluoroethylene_plate', 2),
                Item.of('gtceu:stainless_steel_gear', 1),
                'kubejs:heavy_barrel_steel'
            )
            .itemOutputs(Item.of('tacz:modern_kinetic_gun', 1, g.nbt))
            .circuit(g.circuit)
            .duration(400)
            .EUt(512);
    });

    // Modern shotguns
    const modernShotguns = [
        { nbt: '{GunCurrentAmmoCount:8,GunFireMode:"SEMI",GunId:"ronmc:b1301",HasBulletInBarrel:1b}', circuit: 1 },
        { nbt: '{GunCurrentAmmoCount:7,GunFireMode:"SEMI",GunId:"ronmc:supernova",HasBulletInBarrel:1b}', circuit: 2 },
    ];
    modernShotguns.forEach(g => {
        event.remove({ output: Item.of('tacz:modern_kinetic_gun', g.nbt) });
        event.recipes.gtceu.assembler(`modern_shotgun_${g.circuit}`)
            .itemInputs(
                Item.of('gtceu:gun_metal_ingot', 1),
                Item.of('gtceu:polytetrafluoroethylene_plate', 2),
                Item.of('gtceu:stainless_steel_gear', 1)
            )
            .itemOutputs(Item.of('tacz:modern_kinetic_gun', 1, g.nbt))
            .circuit(g.circuit)
            .duration(200)
            .EUt(512);
    });

    // Modern MG / launchers - fn_evolys is a true belt-fed MG (no explosive input);
    // m320/m32a1 are grenade launchers and get a dynamite input since a launcher with
    // no explosive-chain component in its recipe felt wrong.
    const modernMg = [
        { nbt: '{GunCurrentAmmoCount:75,GunFireMode:"AUTO",GunId:"tacz:fn_evolys",HasBulletInBarrel:1b}', circuit: 1 },
    ];
    modernMg.forEach(g => {
        event.remove({ output: Item.of('tacz:modern_kinetic_gun', g.nbt) });
        event.recipes.gtceu.assembler(`modern_mg_${g.circuit}`)
            .itemInputs(
                Item.of('gtceu:gun_metal_ingot', 3),
                Item.of('gtceu:polytetrafluoroethylene_plate', 2),
                Item.of('gtceu:stainless_steel_gear', 2),
                'kubejs:heavy_barrel_damascus'
            )
            .itemOutputs(Item.of('tacz:modern_kinetic_gun', 1, g.nbt))
            .circuit(g.circuit)
            .duration(600)
            .EUt(512);
    });

    const modernLaunchers = [
        { nbt: '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"tacz:m320",HasBulletInBarrel:1b}', circuit: 1 },
        { nbt: '{GunCurrentAmmoCount:6,GunFireMode:"SEMI",GunId:"ronmc:m32a1",HasBulletInBarrel:1b}', circuit: 2 },
    ];
    modernLaunchers.forEach(g => {
        event.remove({ output: Item.of('tacz:modern_kinetic_gun', g.nbt) });
        event.recipes.gtceu.assembler(`modern_launcher_${g.circuit}`)
            .itemInputs(
                Item.of('gtceu:gun_metal_ingot', 2),
                Item.of('gtceu:polytetrafluoroethylene_plate', 1),
                Item.of('gtceu:stainless_steel_gear', 1),
                Item.of('gtceu:dynamite', 2)
            )
            .itemOutputs(Item.of('tacz:modern_kinetic_gun', 1, g.nbt))
            .circuit(g.circuit)
            .duration(400)
            .EUt(512);
    });

});