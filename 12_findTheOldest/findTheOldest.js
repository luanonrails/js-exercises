const getAge = function(person) {
    if (!person.yearOfDeath)
        person.yearOfDeath = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        if (getAge(current) > getAge(oldest))
            return current;
        return oldest;
    });
};

module.exports = findTheOldest;