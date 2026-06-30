GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:clay_pipe_material_vein', vein => {
        vein.weight(100)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)

        vein.layer('stone')
        vein.dimensions('minecraft:overworld')
        vein.biomes('minecraft:swamp', 'minecraft:river')

        vein.heightRangeUniform(-32, 64)

        vein.dikeVeinGenerator(generator => generator
        .withBlock(GTMaterials.ClayPipeMaterial, 1, 0, 100)
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.ClayPipeMaterial)
        .placement('above')
        .density(0.4)
        .radius(5)
        )
    })
})
