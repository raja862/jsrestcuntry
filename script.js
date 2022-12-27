
let rak= fetch("https://restcountries.com/v2/all")

rak.then((data)=>data.json()).then((data1)=>foo(data1))

function foo(happy){
    for(let i=0;i<happy.length;i++){
        console.log(happy[i].name)

        let impl=document.createElement("h4")
        impl.innerHTML=`Country Name:${happy[i].name}`
        document.body.append(impl)
       
        
    }

}

