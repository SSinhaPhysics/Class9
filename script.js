L = [

    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],
    //["Title" , "Description" , "Filename"],

]






for (i=0; i<L.length; i++) {
    notes = document.getElementById("notes")
    note = document.createElement("div")
    note.setAttribute("class", "note-item")
    a = document.createElement("div")
    a1 = document.createElement("h3")
    a1.innerHTML = L[i][0]
    a2 = document.createElement("p")
    a2.innerHTML = L[i][1]
    a.appendChild(a1)
    a.appendChild(a2)
    b = document.createElement("a")
    b.href = L[i][2]
    b.setAttribute("class", "download-button")
    b.setAttribute("download","")
    b1 = document.createElement("p")
    b1.style = "text-align: center;"
    b1.innerHTML = "Download ⬇️"
    b.appendChild(b1)
    note.appendChild(a)
    note.appendChild(b)
    notes.appendChild(note)
}

if (L.length == 0) {
    notes = document.getElementById("notes")
    note = document.createElement("div")
    note.setAttribute("class", "note-item")
    a = document.createElement("h3")
    a.innerHTML = "N/A"
    note.appendChild(a)
    notes.appendChild(note)
}