const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for(let i =0; i<collisions.length;i+=70){
    collisionsMap.push(collisions.slice(i,70 + i))
}

const battleZonesMap = []
for(let i=0;i< battleZonesData.length;i+=70){
    battleZonesMap.push(battleZonesData.slice(i,70+i))
}

const charactersMap = []
for(let i=0;i<charactersMapData.length;i+=70){
    charactersMap.push(charactersMapData.slice(i,70+i))
}
console.log(charactersMap)

const boundaries = []
const offset = {
    x: -735,
    y: -650
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const battleZones = []

battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const characters = []
const villagerImg = new Image()
villagerImg.src = './img/villager/Idle.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle.png'

charactersMap.forEach((row,i)=>{
    row.forEach((symbol,j)=>{
        //1026 === villager
        if(symbol === 1026){
            characters.push(
                new CharacterData({
                    position:{
                        x:j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image:villagerImg,
                    frames:{
                        max: 4,
                        hold: 60
                    },
                    scale: 3,
                    animate: true,
                    dialogue: ['...','Hey mister,have you seen my Doggochu?']
                })
            )
        }
        //1031 ===oldMan
        else if(symbol === 1031){
            characters.push(
                new CharacterData({
                    position:{
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    },
                    image: oldManImg,
                })
            )
        }
    })
})