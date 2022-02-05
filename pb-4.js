function oddFriend(myFriends) {
    if (typeof myFriends == 'string') {
        return 'Please give an array';
    }

    for (const friend of myFriends) {
        if (friend.length % 2 != 0) {
            return friend;
        }
    }
}

let myFriends = ['Razu', 'Sadee', 'Misbah', 'Rahabul', 'Razib', 'Tashfia', 'Rashid'];
const getMyOddFriend = oddFriend(myFriends);
console.log(getMyOddFriend);