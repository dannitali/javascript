const request = require('request')


const url = 'http://universities.hipolabs.com/search?country=United+States'

let r = request(url ,
    {json : true} ,
    (error , respuest, body)=> {
        let Universidades = body
        Universidades.forEach((universidad)=>{
                    console.log(universidad.name)
                    console.log('------------------------------------------------------')
                })

            })