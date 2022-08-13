
import earn from '../images/earn.png'
import shops from '../images/shops.png'
import fruits from '../images/fruits.jpg'
import vegis from '../images/vegis.jpg'


const homeTopList = [
    {
        id: 1,
        image: fruits,
        title: 'Fruits',
    },
    {
        id: 2,
        image: vegis,
        title: 'Vegitables',
    },
    {
        id: 3,
        image: shops,
        title: 'Shops',
    },
    {
        id: 4,
        image: earn,
        title: 'Earn',
    },
]

function TopList(){
    let newlist = homeTopList.filter((itm)=> itm.id !== 4)

    return newlist
}

const ProductTopList = TopList()


export {homeTopList, ProductTopList}