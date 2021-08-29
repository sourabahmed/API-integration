const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
const displayBuddies = (data) => {
    const myBuddy = document.getElementById('buddies')
    const buddies = data.results;
    for(buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first}${buddy.name.last} Email:${buddy.email}`;
        myBuddy.appendChild(p);
    }
}