function createUserProfile(username, age = 25, country = "unknown"){
    const user = {
        "UserName" : username,
        "Age" : age,
        "Country" : country
    }

    console.log(user);

}

createUserProfile("Sparsh", 21, "India");
