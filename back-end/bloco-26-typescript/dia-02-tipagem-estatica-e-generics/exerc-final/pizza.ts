type slices = (4 | 6 | 8)

interface pizza {
    flavour: string,
    slices: slices
}

const pepperoniPizza:pizza = {
    flavour: 'calabresa',
    slices: 8
}

const margheritaPizza:pizza = {
    flavour: 'margherita',
    slices: 6
}

const nutellaPizza:pizza = {
    flavour: 'nutella',
    slices: 4
}