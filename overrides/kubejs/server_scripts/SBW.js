// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

    // makes sure recipeID is clear
event.remove({ id: "kubejs:plane" })

//adds recipe
 event.recipes.gtceu.assembler("kubejs:plane")
        .itemInputs(Item.of('pointblank:m134minigun'),'64x gtceu:aluminium_plate')   
        .itemOutputs(Item.of('superbwarfare:container', '{BlockEntityTag:{EntityType:"ashvehicle:f-35",id:"superbwarfare:container"}}'))
        .duration(200)
        .EUt(32)

        })