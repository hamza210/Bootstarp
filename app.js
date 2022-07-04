class Movie {
    async getmovie() {
        const response = await fetch(`https://demo.tech2edge.co/samples/data-sg`,)
        const data = await response.json()
        console.log(data);
        return data
    }
}

class UI {
    constructor(){
        this.image = document.getElementById('img')   
        this.name= document.getElementById('name')   
        this.desc= document.getElementById('desc')   
        this.ott= document.getElementById('ott')   
    }   

    showmovie(data){
        this.image.setAttribute('src',`https://demo.tech2edge.co/samples/assets/images/sacred-games/sacred-games-netflix.jpg`)
        this.name.textContent= `Name: ${data.series.title}`
        this.desc.textContent= `Description: ${data.series.desc}`
        this.ott.textContent= `Platform: ${data.series.ott}`
    }
    
    
    showcast(data){
        const names=['sartaj-singh.jpg','ganesh-gaitonde.jpg','anjali-mathur.jpg','guruji.jpg','dilip-parulkar.jpg']
        let output = '';
        data.characters.forEach(function(character){
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-3">                    
                       <img src=https://demo.tech2edge.co/samples/assets/images/sacred-games/${names[0]} alt='img' width="150px" height="120px" class="bg-light">
                    </div>
                    <div class="col-md-9">
                        <h3 class=" text-info">Name: ${character.name}</h3>
                        <h5 class=" text-info">Profession: ${character.profession}</h5>
                        <p class="text-info">Age: ${character.age}</p>
                    </div>
                </div>
            </div>`
        })

        document.getElementById('cast').innerHTML= output
    }
}

const ui = new UI
const movie = new Movie

document.addEventListener('DOMContentLoaded', display)

function display(){
    movie.getmovie()
     .then(data => {
         ui.showmovie(data);
         ui.showcast(data)
     })
     .catch(err => console.log(err))
}
