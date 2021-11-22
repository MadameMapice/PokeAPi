

$("#berries").click(function() {
    $.get("https://pokeapi.co/api/v2/berry",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }

        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")


    })

    
})




$("#contests").click(function() {
    $.get("https://pokeapi.co/api/v2/contest-type",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }

        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
        
    })
})

$("#encounters").click(function() {
    $.get("https://pokeapi.co/api/v2/encounter-method",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }
        
        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
    })
})

$("#evolutions").click(function() {
    $.get("https://pokeapi.co/api/v2/evolution-chain",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }

        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
        
    })
})

$("#games").click(function() {
    $.get("https://pokeapi.co/api/v2/generation",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }

        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
        
    })
})


$("#items").click(function() {
    $.get("https://pokeapi.co/api/v2/item",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }

        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
        
    })
})

    

$("#locations").click(function() {
        $.get("https://pokeapi.co/api/v2/location",(data)=>{
            $(".data").html("")
            $(".data").css("display","block")
            for(let i=0; i<data.results.length;i++){
                $(".data").html($(".data").html()+data.results[i].name+"<br>")
            }

            $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

            $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
            
        })
    })
    


$("#machines").click(function() {
    $.get("https://pokeapi.co/api/v2/machine",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }
        
        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
    })
})
    

$("#moves").click(function() {
    $.get("https://pokeapi.co/api/v2/move",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }
        
        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
    })
})

$("#pokemon").click(function() {
    $.get("https://pokeapi.co/api/v2/ability",(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }
        
        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
    })
})



function next(url){
    $.get(url,(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }

        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
    })
}


function previous(url){
    $.get(url,(data)=>{
        $(".data").html("")
        $(".data").css("display","block")
        for(let i=0; i<data.results.length;i++){
            $(".data").html($(".data").html()+data.results[i].name+"<br>")
        }

        $(".previous").html("<button onclick='previous(\""+data.previous+"\")'>previous</button>")

        $(".next").html("<button onclick='next(\""+data.next+"\")'>next</button>")
    })
}
