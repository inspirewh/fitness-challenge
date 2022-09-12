const progressBtn = document.getElementById("progressBtn")

progressBtn.addEventListener("click",function (event){
    event.preventDefault()
    let pushups = document.getElementById("exercise-pushups").value
    let burpees = document.getElementById("exercise-burpees").value
    let situps = document.getElementById("exercise-situps").value
    console.log(pushups)
    console.log(burpees)
    console.log(situps)

    if(pushups && burpees && situps){
        fetch("/api/progress", {
            method: "POST",
            body: JSON.stringify({pushups, burpees, situps}),
            headers: {"Content-Type": "application/json"}
        })
        .then(function(res){
            if (res.ok){
                document.location.replace("/progress");
            }
        })
    }
})

