// Naval research — category('naval') content.
//   Three boats deployed from the wfcore Naval Vehicle Deployer (boat dock):
//     - naval_inflatable (MV) : ashvehicle:rubber_boat  — rubber-heavy entry raft (a LOT of rubber)
//     - naval_speedboat  (HV) : superbwarfare:speedboat — the armed, fast flagship boat
//     - naval_gunboat    (MV) : superbwarfare:tiny_speedboat — gated behind EITHER of the two entries
// Boats reuse the GROUND-vehicle component parts (no bespoke naval components); recipes live in
// vehicle_factory.js (naval_vehicle_deployer factory), gated on these nodes.
// Runs in ServerEvents.recipes (fires on server start AND /reload).

var NAVY  = 0xFF2F8FD8
var EU_MV = 128
var EU_HV = 512

var pv = e => Item.of('wfcore:packaged_vehicle', '{entity:"' + e + '"}')

ServerEvents.recipes(event => {

    // ---- Inflatable Boat — MV entry, defined by its heavy rubber cost ----
    WFResearch.builder('naval_inflatable')
        .category('naval').pos(-1, 0)
        .nodeColor(NAVY)
        .name('Inflatable Boat')
        .description('A rubber assault raft with a small outboard motor — cheap, fast to field, and built almost entirely from rubber.')
        .runs(20).ticksPerRun(600).eut(EU_MV).cwuPerRun(38400)
        .itemPerRun(Item.of('gtceu:rubber_plate', 12))
        .itemPerRun(Item.of('gtceu:mv_electric_motor', 1))
        .itemTagPerRun('gtceu:circuits/mv', 1)
        .unlock(pv('ashvehicle:rubber_boat'))
        .icon(pv('ashvehicle:rubber_boat'))
        .register()

    // ---- Speedboat — HV flagship, the armed fast boat ----
    WFResearch.builder('naval_speedboat')
        .category('naval').pos(1, 0)
        .nodeColor(NAVY)
        .name('Speedboat')
        .description('A fast patrol speedboat with a pintle-mounted .50 cal and room for a five-man crew — the HV flagship of the naval line.')
        .runs(40).ticksPerRun(600).eut(EU_HV).cwuPerRun(153600)
        .itemPerRun(Item.of('gtceu:stainless_steel_plate', 6))
        .itemPerRun(Item.of('gtceu:hv_electric_motor', 2))
        .itemTagPerRun('gtceu:circuits/hv', 1)
        .unlock(pv('superbwarfare:speedboat'))
        .icon(pv('superbwarfare:speedboat'))
        .register()

    // ---- Gunboat — MV, unlocked by EITHER the speedboat or the inflatable ----
    WFResearch.builder('naval_gunboat')
        .category('naval').pos(0, 1)
        .nodeColor(NAVY)
        .name('Gunboat')
        .description('A light armed gunboat. Either the speedboat OR the inflatable programme leads here.')
        .anyOf('naval_speedboat', 'naval_inflatable')
        .runs(26).ticksPerRun(600).eut(EU_MV).cwuPerRun(38400)
        .itemPerRun(Item.of('gtceu:aluminium_plate', 6))
        .itemPerRun(Item.of('gtceu:mv_electric_motor', 2))
        .itemTagPerRun('gtceu:circuits/mv', 2)
        .unlock(pv('superbwarfare:tiny_speedboat'))
        .icon(pv('superbwarfare:tiny_speedboat'))
        .register()

})
