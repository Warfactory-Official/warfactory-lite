ServerEvents.recipes(event => {
const shitItems = [
        { id: 'mm_armor:titaniumingot'},
        { id: 'mm_armor:ilmenite_ingot'},
        { id: 'mm_armor:rawilmenite'},
        { id: 'superbwarfare:tungsten_ingot'},
        { id: 'superbwarfare:copper_plate'},
        { id: 'superbwarfare:tungsten_rod'},
        { id: 'mm_armor:forgingiron'},
        { id: 'superbwarfare:steel_ingot'},
        { id: 'superbwarfare:lead_ingot'},
        { id: 'superbwarfare:silver_ingot'},
        { id: 'superbwarfare:galena'},
        { id: 'mm_armor:ilmenite_ore'},
        { id: 'superbwarfare:deepslate_galena_ore'},
        { id: 'superbwarfare:galena_ore'},
        { id: 'superbwarfare:deepslate_scheelite_ore'},
        { id: 'superbwarfare:scheelite_ore'},
        { id: 'superbwarfare:deepslate_silver_ore'},
        { id: 'superbwarfare:silver_ore'},
    ];

    shitItems.forEach(item => {
        // Remove existing recipes
        event.remove({ output: item.id })
        event.remove({ input: item.id })
})
})