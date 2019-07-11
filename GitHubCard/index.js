/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/pj-wise')
  .then(data => {
    console.log('response:', data);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardComponent(myObj) {
  //elements of component w/ classes added
  const myCard = document.createElement('div');
  myCard.classList.add('card');

  const myImg = document.createElement('img');
  myImg.src = `${myObj.avatar_url}`;

  const myInfo = document.createElement('div');
  myInfo.classList.add('card-info');

  const myName = document.createElement('h3');
  myName.classList.add('name');
  myName.textContent = `${myObj.name}`;

  const myUser = document.createElement('p');
  myUser.classList.add('username');
  myUser.textContent = `${myObj.login}`;

  const myLocation = document.createElement('p');
  myLocation.textContent = `${myObj.location}`;

  const myProfile = document.createElement('p')
  myProfile.textContent = 'Profile:';

  const myProfileLink = document.createElement('a');
  myProfileLink.textContent = `${myObj.html_url}`;
  myProfileLink.href = `${myObj.html_url}`;

  const myFollowers = document.createElement('p');
  myFollowers.textContent = `${myObj.followers}`;

  const myfollowing = document.createElement('p');
  myfollowing.textContent = `${myObj.following}`;

  const myBio = document.createElement('p')
  myBio.textContent = `${myObj.bio}`;

  //appending content

  return cardComponent
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
