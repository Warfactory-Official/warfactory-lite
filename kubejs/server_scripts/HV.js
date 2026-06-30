// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {

event.recipes.gtceu.chemical_reactor("kubejs:advanced_aircraft_metal")
.inputFluids('gtceu:oxygen 3000')
.inputFluids('gtceu:hydrogen 3000')
.outputFluids('gtceu:advanced_aircraft_metal 2000')
.duration(200)
.EUt(256)

})
