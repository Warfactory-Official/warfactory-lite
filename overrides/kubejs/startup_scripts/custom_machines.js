// Load classes
const $RecipeLogic = Java.loadClass('com.gregtechceu.gtceu.api.machine.trait.RecipeLogic')
const $List = Java.loadClass('java.util.List')
const $Vector3f = Java.loadClass('org.joml.Vector3f')

// =====================================================
// RECIPE TYPE REGISTRATION
// =====================================================

// Ammo Press recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('ammo_press')
    .category('ammo_press')
    .setEUIO('in')
    .setMaxIOSize(4, 2, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FORGE_HAMMER)
})

// Ammo Factory recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('ammo_factory')
    .category('ammo_factory')
    .setEUIO('in')
    .setMaxIOSize(4, 2, 1, 0)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FORGE_HAMMER)
})

// Rocket Factory recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rocket_factory')
    .category('rocket_factory')
    .setEUIO('in')
    .setMaxIOSize(4, 2, 2, 0)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FORGE_HAMMER)
})

// Vehicle Factory recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('vehicle_factory')
    .category('vehicle_factory')
    .setEUIO('in')
    .setMaxIOSize(5, 1, 2, 0)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FORGE_HAMMER)
})

// =====================================================
// SIMPLE MACHINE REGISTRATION
// =====================================================

// Fent Reactor recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('fent_reactor')
    .category('fent_reactor')
    .setEUIO('out')
    .setMaxIOSize(1, 0, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FORGE_HAMMER)
})

// Electric Ammo Press (single block machine)
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('electric_ammo_press', 'simple')
    .tiers(
        GTValues.ULV, GTValues.LV, GTValues.MV, GTValues.HV,
        GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM,
        GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV
    )
    .definition((tier, builder) => builder
    .langValue(GTValues.VLVH[tier] + " Ammo Press")
    .recipeType('ammo_press')
    .workableTieredHullModel('gtceu:block/machines/ammo_press')
    )
})

// =====================================================
// MULTIBLOCK MACHINE REGISTRATION
// =====================================================

// Rocket Factory Multiblock Machine
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('rocket_factory', 'multiblock')
    .rotationState(RotationState.ALL)
    .recipeTypes('rocket_factory')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .pattern(definition => FactoryBlockPattern.start()
    .aisle('OOOOO', '#####', '#####', '#####', '#####')
    .aisle('OCCCO', '#G#G#', '#G#G#', '#G#G#', '#####')
    .aisle('OCCCO', '#G#G#', '#G#G#', '#G#G#', '#G#G#')
    .aisle('OCCCO', '#G#G#', '#G#G#', '#G#G#', '#####')
    .aisle('OOKOO', '#####', '#####', '#####', '#####')
    .where('K', Predicates.controller(Predicates.blocks(definition.get())))
    .where('O', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
    .or(Predicates.autoAbilities('import'))
    )
    .where('G', Predicates.blocks('gtceu:tempered_glass'))
    .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
    .or(Predicates.autoAbilities())
    )
    .where('#', Predicates.air())
    .build()
    )
    .modelProperty(GTModelProperties.RECIPE_LOGIC_STATUS, $RecipeLogic.Status.IDLE)
    .model(GTMachineModels.createWorkableCasingMachineModel(
        GTCEu.id("block/casings/solid/machine_casing_solid_steel"),
                                                            GTCEu.id("block/multiblock/implosion_compressor")
    ))
})

// Ammo Factory Multiblock Machine
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ammo_factory', 'multiblock')
    .rotationState(RotationState.ALL)
    .recipeTypes('ammo_factory')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .pattern(definition => FactoryBlockPattern.start()
    .aisle('OOOOO', '#####', '#####', '#####', '#####')
    .aisle('OCCCO', '#G#G#', '#G#G#', '#G#G#', '#####')
    .aisle('OCCCO', '#G#G#', '#G#G#', '#G#G#', '#G#G#')
    .aisle('OCCCO', '#G#G#', '#G#G#', '#G#G#', '#####')
    .aisle('OOKOO', '#####', '#####', '#####', '#####')
    .where('K', Predicates.controller(Predicates.blocks(definition.get())))
    .where('G', Predicates.blocks('gtceu:tempered_glass'))
    .where('O', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
    .or(Predicates.autoAbilities('import'))
    )
    .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
    .or(Predicates.autoAbilities())
    )
    .where('#', Predicates.air())
    .build()
    )
    .modelProperty(GTModelProperties.RECIPE_LOGIC_STATUS, $RecipeLogic.Status.IDLE)
    .model(GTMachineModels.createWorkableCasingMachineModel(
        GTCEu.id("block/casings/solid/machine_casing_solid_steel"),
                                                            GTCEu.id("block/multiblock/implosion_compressor")
    ))
})

// Vehicle Factory Multiblock Machine
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('vehicle_factory', 'multiblock')
    .rotationState(RotationState.ALL)
    .recipeTypes('vehicle_factory')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .pattern(definition => FactoryBlockPattern.start()
    .aisle('OOOOO', '#####', '#####', '#####', '#####')
    .aisle('OCCCO', '#G#G#', '#G#G#', '#G#G#', '#####')
    .aisle('OCCCO', '#G#G#', '#GGG#', '#G#G#', '#G#G#')
    .aisle('OCCCO', '#G#G#', '#G#G#', '#G#G#', '#####')
    .aisle('OOKOO', '#####', '#####', '#####', '#####')
    .where('K', Predicates.controller(Predicates.blocks(definition.get())))
    .where('O', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
    .or(Predicates.autoAbilities('import'))
    )
    .where('G', Predicates.blocks('gtceu:tempered_glass'))
    .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
    .or(Predicates.autoAbilities())
    )
    .where('#', Predicates.air())
    .build()
    )
    .modelProperty(GTModelProperties.RECIPE_LOGIC_STATUS, $RecipeLogic.Status.IDLE)
    .model(GTMachineModels.createWorkableCasingMachineModel(
        GTCEu.id("block/casings/solid/machine_casing_solid_steel"),
                                                            GTCEu.id("block/multiblock/implosion_compressor")
    ))
})



