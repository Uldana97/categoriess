const dataAlt = [

    {
        name: 'Super burger',
        img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
        price: 100,
        category: 'burgers'
    },
    {
        name: 'pro burger',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
        price: 150,
        category: 'burgers'
    },
    {
        name: 'extra burger',
        img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
        price: 180,
        category: 'burgers'
    },
    {
        name: 'italian pizza',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
        price: 300,
        category: 'pizzas'
    },
    {
        name: 'meat pizza',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
        price: 400,
        category: 'pizzas'
    },
    {
        name: 'pivo',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
        price: 500,
        category: 'drinks'
    },
    {
        name: 'vino',
        img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
        price: 1000,
        category: 'drinks'
    },
    {
        name: 'vodka',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
        price: 2000,
        category: 'drinks'
    },
    {
        name: 'tequila',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
        price: 3000,
        category: 'drinks'
    },
]




const output = document.querySelector('.output')
const categoriesRender = (data) => {
   
    output.innerHTML = ''

    console.log(data);
    data.forEach(el => {
        const image = document.createElement('img')
        const title = document.createElement('h2')
        const price = document.createElement('p')
        const myCategory = document.createElement('p')
        const wrapCategories = document.createElement ('div')
        const button = document.createElement('button')
        


         button.textContent = 'show content'
         price.textContent = el.price
         image.src = el.img
         title.textContent = el.name
         myCategory.textContent= el.category
         wrapCategories.className = 'wrapCategory'


         myCategory.className = 'show'
         price.className = 'show'

        



        wrapCategories.append(myCategory,image,button )
        output.append(wrapCategories)

    })
}
categoriesRender(dataAlt)




const renderButtons = () => {
    const categoryItems = ['all', 'burgers', 'pizzas', 'drinks']
    const buttonWrap = document.querySelector('.categories__choise')

    categoryItems.forEach(el => {
        console.log(el);
        const button = document.createElement('button')
        button.className = 'btns'
        button.textContent = el
        console.log(button);

        button.addEventListener('click', () => {

            if (el === 'all') {
                categoriesRender(dataAlt)
            } else {
                const result = dataAlt.filter(item => {
                    return item.category === el
                })
                categoriesRender(result)
            }
        })

        buttonWrap.append(button)
    })

}
renderButtons()


const searchItems = () => {
    const input = document.querySelector('#search')
    const form = document.querySelector('#form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const filteredItems = dataAlt.filter(el => {
            return el.name.toLowerCase().includes(input.value.toLowerCase())
        })
        if (filteredItems.length>0) {
            categoriesRender(filteredItems);
          } else {
            output.textContent='No items like this'

          }
        })
      }
searchItems();



