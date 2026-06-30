ServerEvents.loaded(event => {
    let items = Item.getTypeList().filter(id => id.startsWith('tacz:'))
    items.forEach(id => console.log(id))
})
