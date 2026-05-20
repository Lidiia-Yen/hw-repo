fetch('https://api.github.com/users/hadley/orgs')
    .then(response => {
        return response.json();
    })

    .then(progs => {
        console.log(getResultById(progs, id));
    })

    .catch(error => {
        console.error('Error fetching data:', error);
    });

function getResultById(progs, id) {
    const prog = progs.find(p => p.id === id);
    return prog;
}

const id = 34165516;
