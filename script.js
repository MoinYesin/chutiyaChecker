document.getElementById('nameForm').addEventListener('submit', function(event){
    event.preventDefault();
    var inputValue = document.getElementById('name').value.trim();
    var result = document.getElementById('result');

    //using split function to ignore everyhting after a space.
    var name = inputValue.split(' ')[0].toLowerCase();
    
    // result.textContent = "Hello " + name
    if(name === "moin"){
        result.textContent = "Hello Legend, happy to see you.";

    }
    else if(name === "deepjyoti" || name === "deep" || name === "deepsir" || name === "dhiraj" || name === "dhirubhai" || name === "dhiru")
        result.textContent = "Sir, How are you sir?";
    else if(name === "nikita" || name === "niki" || name === "dola")
        result.textContent = "Whoa! Dola........ Tum v chutiya hi ho thodi si."
    else if(name === "sabnam" || name === "hobnom" || name === "gahori")
        result.textContent = "Sabnammm... Quack Quack... Cm'on, you're not chutiya, you are their queen."
    else if(name === "minhaj" || name === "irfan" || name === "brajen" || name === "brojen")
        result.textContent = "Yo bro! Toiu Chutiya a de."
    else{
        result.textContent = "Chutiya hi ho tum.";

    }
});