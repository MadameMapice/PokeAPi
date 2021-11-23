

$("#berries").click(function() {
    $.get("https://pokeapi.co/api/v2/berry",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".pokedex").css("display","none")
        $(".data_detail").css('display', 'none')
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+"<div onclick='detail_berrie(\""+data.results[i].url+"\")'>"+data.results[i].name+"<br>")
                                            
        }

        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_berrie\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_berrie\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
    })

    
})




$("#contests").click(function() {
    


    $.get("https://pokeapi.co/api/v2/contest-type",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".data_detail").html("")
        $(".data_detail").css('display', 'none')
        $(".pokedex").css("display","none")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+"<div onclick='detail_contest(\""+data.results[i].url+"\")'>"+data.results[i].name+"<br>")
        }

        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_contest\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_contest\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
           
    })
})

$("#encounters").click(function() {
       
    $.get("https://pokeapi.co/api/v2/encounter-method",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".data_detail").css('display', 'none')
        $(".pokedex").css("display","none")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+"<div onclick='detail_encounter(\""+data.results[i].url+"\")'>"+data.results[i].name+"<br>")
        }
        
        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_encounter\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_encounter\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
    })
})

$("#evolutions").click(function() {
    $.get("https://pokeapi.co/api/v2/evolution-chain",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".data_detail").css('display', 'none')
        $(".pokedex").css("display","none")
        for(let i=0; i<data.results.length;i++){
        
            $(".data").html($(".data").html()+"<div onclick='detail_evolution(\""+data.results[i].url+"\")'>"+(i+1)+"<br>")
           
           
            
        }

        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_evolution\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_evolution\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
    })
})

$("#games").click(function() {
    $.get("https://pokeapi.co/api/v2/generation",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".data_detail").css('display', 'none')
        $(".pokedex").css("display","none")
        for(let i=0; i<data.results.length;i++){
            
            $(".data").html($(".data").html()+"<div onclick='detail_games(\""+data.results[i].url+"\")'>"+data.results[i].name+"<br>")
        }

        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_games\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_games\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
        
    })
})


$("#items").click(function() {
    $.get("https://pokeapi.co/api/v2/item",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".data_detail").css('display', 'none')
        $(".pokedex").css("display","none")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+"<div onclick='detail_items(\""+data.results[i].url+"\")'>"+data.results[i].name+"<br>")
        }

        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_items\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_items\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
    })
})

    

$("#locations").click(function() {
        $.get("https://pokeapi.co/api/v2/location",(data)=>{
            $(".data").html("")
            $(".data").css("display","block")
            $(".data_detail").css('display', 'none')
            $(".pokedex").css("display","none")
            for(let i=0; i<data.results.length;i++){
                $(".data").html($(".data").html()+"<div onclick='detail_locations(\""+data.results[i].url+"\")'>"+data.results[i].name+"<br>")
            }

            if(data.next!=null){
                $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_locations\")'>next</button>")
                $(".next").css('display', 'flex')
                }
                else {
                    $(".next").css('display', 'none')
                }
    
            if(data.previous!=null){
                $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_locations\")'>previous</button>")
                $(".previous").css('display', 'flex')
                }
                else {
    
                    $(".previous").css('display', 'none')
    
                }
                
            
        })
    })
    


$("#machines").click(function() {
    $.get("https://pokeapi.co/api/v2/machine",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".data_detail").css('display', 'none')
        $(".pokedex").css("display","none")
        for(let i=0; i<data.results.length;i++){
            // $(".data").html($(".data").html()+(i+1)+"<br>")
            $(".data").html($(".data").html()+"<div onclick='detail_machine(\""+data.results[i].url+"\")'>"+(i+1)+"<br>")
        }
        
        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_machine\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_machine\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
    })
})
    

$("#moves").click(function() {
    $.get("https://pokeapi.co/api/v2/move",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".data_detail").css('display', 'none')
        $(".pokedex").css("display","none")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+"<div onclick='detail_moves(\""+data.results[i].url+"\")'>"+data.results[i].name+"<br>")
        }
        
        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_moves\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_moves\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
    })
})

$("#pokemon").click(function() {
    $.get("https://pokeapi.co/api/v2/pokemon",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        $(".data_detail").css('display', 'none')
        
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+"<div onclick='detail_pokemon(\""+data.results[i].url+"\")'>"+data.results[i].name+"<br>")
        }
        
        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\"detail_pokemon\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\"detail_pokemon\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
    })
})

function detail_berrie(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.name+"<br>")
            $(".data_detail").html($(".data_detail").html()+"temps de croissance :"+data.growth_time+"<br>")
            $(".data_detail").html($(".data_detail").html()+"récolte maximale :"+data.max_harvest+"<br>")
            $(".data_detail").html($(".data_detail").html()+"puissance :"+data.natural_gift_power+"<br>")
            $(".data_detail").html($(".data_detail").html()+"taille  :"+data.size+"<br>")
            $(".data_detail").html($(".data_detail").html()+"douceur :"+data.smoothness+"<br>")
            $(".data_detail").html($(".data_detail").html()+"sécheresse du sol :"+data.soil_dryness+"<br>")

    
    })
}

function detail_contest(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.name+"<br>")
            $(".data_detail").html($(".data_detail").html()+"saveur de baies :"+data.berry_flavor.name+"<br>")
     

    })
}

function detail_encounter(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.name+"<br>")
            $(".data_detail").html($(".data_detail").html()+"order: :"+data.order+"<br>")
     

    })
}


function detail_evolution(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.chain.species.name+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.chain.evolves_to[0].species.name+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.chain.evolves_to[0].evolves_to[0].species.name+"<br>")

     

    })
}

function detail_games(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.name+"<br>")
            

    })
}

function detail_items(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.name+"<br>")
     

    })
}

function detail_locations(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.name+"<br>")
     

    })
}

function detail_machine(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.move.name+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.version_group.name+"<br>")
     

    })
}


function detail_moves(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","block")
    
            $(".data_detail").html($(".data_detail").html()+"id :"+data.id+"<br>")
            $(".data_detail").html($(".data_detail").html()+"nom :"+data.name+"<br>")
     

    })
}

function detail_pokemon(url){
    $.get(url,(data)=>{
        console.log(data);
        $(".data_detail").html("")
        $(".data_detail").css("display","none")
        $(".pokedex").css("display","block")
        $(".pokedex").html("")
        $(".pokedex").html($(".pokedex").html()+"<img class='poke' src='"+data.sprites.front_default+"'><br>")
        $(".pokedex").html($(".pokedex").html()+"<div class='info'> name :"+data.name+"<br>height :"+data.height+"<br>weight :"+data.weight+"<br>order :"+data.order+"<br>base experience :"+data.base_experience+"</div>")
        
            
     

    })
}


function next(url,nomFonction){

    console.log(url)

    let new_url = new URL(url)  

    let change_url = new_url.searchParams

    let url_limit = change_url.get('limit')

    if ( url_limit < 20 ) {

        change_url.set('limit', 20)

        new_url.toString()

    }

    $.get(new_url.toString(),(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+"<div onclick='"+nomFonction+"(\""+data.results[i].url+"\")'>"+(data.results[i].name||(i+1))+"<br>")
                                            
        }
        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\""+nomFonction+"\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\""+nomFonction+"\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
        })
}


function previous(url,nomFonction){

    console.log(url)

    let new_url = new URL(url)  

    let change_url = new_url.searchParams

    let url_limit = change_url.get('limit')

    if ( url_limit < 20 ) {

        change_url.set('limit', 20)

        new_url.toString()
    }

    $.get(url,(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+"<div onclick='"+nomFonction+"(\""+data.results[i].url+"\")'>"+(data.results[i].name||(i+1))+"<br>")
                                            
        }
        
        if(data.next!=null){
            $(".next").html("<button onclick='next(\""+data.next+"\",\""+nomFonction+"\")'>next</button>")
            $(".next").css('display', 'flex')
            }
            else {
                $(".next").css('display', 'none')
            }

        if(data.previous!=null){
            $(".previous").html("<button onclick='previous(\""+data.previous+"\",\""+nomFonction+"\")'>previous</button>")
            $(".previous").css('display', 'flex')
            }
            else {

                $(".previous").css('display', 'none')

            }
            
        
    })
}
