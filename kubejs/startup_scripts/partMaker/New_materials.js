GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('gun_metal')
        .ingot()
        .liquid()
        .components('1x steel', '1x carbon')
        .color(0x0F0F0F).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD,  GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.GENERATE_SPRING )
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('aircraft_grade_metal')
        .ingot()
        .liquid()
        .components('1x steel', '1x aluminum')
        .blastTemp(1776, "low", GTValues.VA[GTValues.LV], 1600)
        .color(0x68DEDB).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD)
})
      




GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('tank_grade_metal')
        .ingot()
        .liquid()
        .components('1x steel', '1x cobalt')
        .color(0x3F3F3F).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('tung_tung_tungsten')
        .ingot()
        .liquid()
        .components('3x tungsten')
        .color(0x7D683C).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('vehicle_metal')
        .ingot()
        .liquid()
        .components('1x steel', '1x red_alloy')
        .color(0x4d3939).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD,  GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.GENERATE_SPRING )
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('advanced_aircraft_metal')
    .ingot()
    .liquid()
    .components('1x aluminium', '1x stainless_steel')
    .color(0x7ff5e9).iconSet(GTMaterialIconSet.DULL)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD,  GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.GENERATE_SPRING )
})
