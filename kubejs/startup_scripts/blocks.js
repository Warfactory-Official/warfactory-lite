StartupEvents.registry('block', event => {
    event.create('clay_ore')
    .material('stone')
    .hardness(3)
    .resistance(3)
    .requiresTool(true)
})
