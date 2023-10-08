/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {  
    name: 'Chad Carpenter',
    photo: 'images/photo.jpg',
    favoriteFoods: ['Pizza', 'Rice', 'Chicken', 'Burgers'],
    hobbies: ['Games', 'Coding', 'Movies'],
    placesLived: []
    };

/* Populate Profile Object with placesLive objects */
    
myProfile.placesLived.push({
    place: 'Yuma, AZ',
    length: '10 years'
});
myProfile.placesLived.push({
    place: 'Safford, AZ',
    length: '7 years'
});


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(dd);
});
