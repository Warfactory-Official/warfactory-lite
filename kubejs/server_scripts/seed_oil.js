
ServerEvents.recipes(event => {

    const MULTIPLIER = 10

    const SEED_OIL = [
        ['seed_oil_from_wheat_seeds', 'minecraft:wheat_seeds', 10],
        ['seed_oil_from_beetroot', 'minecraft:beetroot_seeds', 10],
        ['seed_oil_from_melon', 'minecraft:melon_seeds', 3],
        ['seed_oil_from_pumpkin', 'minecraft:pumpkin_seeds', 6],
        ['seed_oil_from_torchflower', 'minecraft:torchflower_seeds', 8]
    ]

    SEED_OIL.forEach(entry => {
        const name = entry[0], seed = entry[1], mb = entry[2]

        event.remove({ id: 'gtceu:extractor/' + name })

        event.recipes.gtceu.extractor('kubejs:' + name)
            .itemInputs(seed)
            .outputFluids(Fluid.of('gtceu:seed_oil', mb * MULTIPLIER))
            .duration(32)
            .EUt(2)
    })
})
