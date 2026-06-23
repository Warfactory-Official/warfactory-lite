ServerEvents.recipes(event => {
//ammo
    const rifleAmmo = [
        { id: 'pointblank:7_92_57mm_mauser',    circuit: 4 },
        { id: 'pointblank:30_06_springfield',   circuit: 5 },
        { id: 'pointblank:7_62_54mmr',          circuit: 6 },
        { id: 'pointblank:ammo762x51',          circuit: 7 },
        { id: 'pointblank:ammo762',             circuit: 8 },
        { id: 'pointblank:6_5_50mmsr_arisaka',  circuit: 9 },
        { id: 'pointblank:ammo556',             circuit: 10 },
        { id: 'pointblank:ammo545',             circuit: 11 },
        { id: 'superbwarfare:rifle_ammo_box',             circuit: 11 }
    ];

    rifleAmmo.forEach(ammo => {
        // Remove existing recipes
        event.remove({ output: ammo.id });

        // Add the GTCEU Ammo Press recipe using the specific circuit
        event.recipes.gtceu.ammo_press(ammo.id)
            .itemInputs(Item.of('kubejs:bullet_casing_medium'), 'gtceu:lead_nugget','gtceu:small_gunpowder_dust' )
            .itemOutputs(Item.of(ammo.id, 1))
            .duration(20)
  .     circuit(ammo.circuit)
            .EUt(4);
    });



        const pistolAmmo = [
        { id: 'pointblank:ammo9mm',    circuit: 1 },
        { id: 'pointblank:7_62_25mm_tokarev',   circuit: 2 },
        { id: 'pointblank:ammo45acp',          circuit: 3 },
        { id: 'pointblank:ammo50ae',          circuit: 4 },
  
    ];

    pistolAmmo.forEach(ammo => {
        // Remove the default recipe
        event.remove({ output: ammo.id });

        // Build the recipe
        let recipe = event.recipes.gtceu.ammo_press(ammo.id)
            .itemInputs(Item.of('kubejs:bullet_casing_small'),'gtceu:tiny_gunpowder_dust','gtceu:lead_nugget')
            .itemOutputs(Item.of(ammo.id))
            .duration(20)
            .EUt(4);

        
        if (ammo.circuit) {
            recipe.circuit(ammo.circuit);
        }
    });
//early modern rifle


       const earlyModernRifle = [
    { id: 'pointblank:g3',    circuit: 3 },
    { id: 'pointblank:m16a1',    circuit: 4 },
];

earlyModernRifle.forEach(rifle => {
    event.remove({ output: rifle.id });
    let recipe = event.recipes.gtceu.assembler(rifle.id)
        .itemInputs(Item.of('5x gtceu:polyethylene_ingot'), 'kubejs:barrel_steel', 'kubejs:stock_plastic', 'kubejs:rifle_complicated', 'kubejs:grip_wooden')
        .itemOutputs(Item.of(rifle.id))
        .duration(100)
        .EUt(120);
    
    if (rifle.circuit) {
        recipe.circuit(rifle.circuit);
    }
});
const earlyRuskiRifle = [
    { id: 'pointblank:ak47',    circuit: 1 },
    { id: 'pointblank:ak74',    circuit: 2 },
];

earlyRuskiRifle.forEach(rifle => {
    event.remove({ output: rifle.id });
    let recipe = event.recipes.gtceu.assembler(rifle.id)
        .itemInputs(Item.of('kubejs:barrel_steel'), 'kubejs:stock_wooden', 'kubejs:rifle_complicated','kubejs:grip_wooden')
        .itemOutputs(Item.of(rifle.id))
        .duration(100)
        .EUt(120);
    
    if (rifle.circuit) {
        recipe.circuit(rifle.circuit);
    }
});

const ModernRifle = [
    { id: 'pointblank:m4a1',        circuit: 1 },
    { id: 'pointblank:m4a1mod1',    circuit: 2 },
    { id: 'pointblank:ar57',        circuit: 3 },
    { id: 'pointblank:ro635',       circuit: 4 },
    { id: 'pointblank:m4sopmodii',  circuit: 5 },
    { id: 'pointblank:hk416',       circuit: 6 },
    { id: 'pointblank:scarl',       circuit: 7 },
    { id: 'pointblank:g41',         circuit: 8 },
    { id: 'pointblank:ak12',    circuit: 9 },
    { id: 'pointblank:g36c',    circuit: 10 },
    { id: 'pointblank:g36k',    circuit: 11 },
    { id: 'pointblank:aughbar', circuit: 15 },
];

ModernRifle.forEach(rifle => {
    event.remove({ output: rifle.id });
    let recipe = event.recipes.gtceu.assembler(rifle.id)
        .itemInputs(Item.of('5x gtceu:polytetrafluoroethylene_ingot'), 'kubejs:barrel_steel', 'kubejs:stock_plastic', 'kubejs:rifle_modern', 'kubejs:grip_plastic')
        .itemOutputs(Item.of(rifle.id))
        .duration(100)
        .EUt(120);
    
    if (rifle.circuit) {
        recipe.circuit(rifle.circuit);
    }
});
//modern rifle specials
event.recipes.gtceu.assembler('pointblank:aug')
        .itemInputs(Item.of('5x gtceu:polytetrafluoroethylene_ingot'), 'kubejs:barrel_steel', 'kubejs:stock_plastic', 'kubejs:rifle_modern', 'kubejs:grip_plastic', '2x gtceu:glass_lens')
        .itemOutputs(Item.of('pointblank:aug'))
        .duration(100)
        .EUt(240);
})