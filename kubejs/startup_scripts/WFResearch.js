import com.norwood.wfcore.integration.kubejs
// categories
WFResearch.category('infantry')
.name('Infantry Equipment')                       // optional lang key; defaults to wfcore.research.category.logistics
.icon(Item.of('superbwarfare:k_98'))           // optional tab icon
// optional tiled background texture
.backgroundColor(0xFF101814)                // optional solid background (used if no texture)
.connectorColor(0xFF60C060)      // colour of the connector lines

.register()

WFResearch.category('armor')
.name('Armored Vehicles')                       // optional lang key; defaults to wfcore.research.category.logistics
.icon(Item.of('kubejs:tank_icon'))           // optional tab icon
// optional tiled background texture
.backgroundColor(0xFF101814)                // optional solid background (used if no texture)
.connectorColor(0xFF60C060)      // colour of the connector lines

.register()

WFResearch.category('air')
.name('Air Vehicles')                       // optional lang key; defaults to wfcore.research.category.logistics
.icon(Item.of('kubejs:plane_icon'))           // optional tab icon
// optional tiled background texture
.backgroundColor(0xFF101814)                // optional solid background (used if no texture)
.connectorColor(0xFF60C060)      // colour of the connector lines

.register()


WFResearch.category('Industry')
.name('Industry')                       // optional lang key; defaults to wfcore.research.category.logistics
.icon(Item.of('wfcore:research_unit'))           // optional tab icon
// optional tiled background texture
.backgroundColor(0xFF101814)                // optional solid background (used if no texture)
.connectorColor(0xFF60C060)      // colour of the connector lines

.register()

WFResearch.category('Defenses')
.name('Base Defenses')                       // optional lang key; defaults to wfcore.research.category.logistics
.icon(Item.of('superbwarfare:barbed_wire'))           // optional tab icon
// optional tiled background texture
.backgroundColor(0xFF101814)                // optional solid background (used if no texture)
.connectorColor(0xFF60C060)      // colour of the connector lines

.register()

//research guns
WFResearch.builder('guns1')
.category('infantry').pos(0, 0)
.nodeColor(0xFF2F6BD8)                       // optional tile tint when the node is available
.runs(4).cwuPerRun(64).itemPerRun(Item.of('gtceu:basic_electronic_circuit'))
.unlocks(Item.of('minecraft:dirt'))
.register()
//ww2 guns
WFResearch.builder('guns2')
.category('infantry').pos(1, 0)
.nodeColor(0xFF2F6BD8)                       // optional tile tint when the node is available
.runs(8).cwuPerRun(64).itemPerRun(Item.of('gtceu:basic_electronic_circuit'))
.unlocks(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"ww:m1t",HasBulletInBarrel:1b}'))
.register()
//ww2 heavy guns
WFResearch.builder('guns2heavy')
.category('infantry').pos(2, 0)
.nodeColor(0xFF2F6BD8)                // optional tile tint when the node is available
.runs(8).cwuPerRun(64).itemPerRun(Item.of('gtceu:basic_electronic_circuit'))
.unlocks(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"ww:mg42",HasBulletInBarrel:1b}'))
.register()
//ww2 advanced guns
WFResearch.builder('guns3')
.category('infantry').pos(3, 0)
.nodeColor(0xFF2F6BD8)                       // optional tile tint when the node is available
.runs(8).cwuPerRun(64).itemPerRun(Item.of('gtceu:basic_electronic_circuit'))
.unlocks(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"ww:stg44",HasBulletInBarrel:1b}'))
.register()
//Early Modern advanced
WFResearch.builder('guns4')
.category('infantry').pos(4, 0)
.nodeColor(0xFF2F6BD8)                       // optional tile tint when the node is available
.runs(16).cwuPerRun(64).itemPerRun(Item.of('gtceu:basic_electronic_circuit'))
.unlocks(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:0b}'))
.register()

WFResearch.builder('guns4heavy')
.category('infantry').pos(5, 0)
.nodeColor(0xFF2F6BD8)                       // optional tile tint when the node is available
.runs(16).cwuPerRun(64).itemPerRun(Item.of('gtceu:basic_electronic_circuit'))
.unlocks(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:rpk",HasBulletInBarrel:0b}'))
.register()

WFResearch.builder('guns5')
.category('infantry').pos(6, 0)
.nodeColor(0xFF2F6BD8)                       // optional tile tint when the node is available
.runs(16).cwuPerRun(64).itemPerRun(Item.of('gtceu:basic_electronic_circuit'))
.unlocks(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:m16a1",HasBulletInBarrel:0b}'))
.register()

WFResearch.builder('guns6')
.category('infantry').pos(7, 0)
.nodeColor(0xFF2F6BD8)                       // optional tile tint when the node is available
.runs(16).cwuPerRun(64).itemPerRun(Item.of('gtceu:basic_electronic_circuit'))
.unlocks(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:scar",HasBulletInBarrel:0b}'))
.register()
