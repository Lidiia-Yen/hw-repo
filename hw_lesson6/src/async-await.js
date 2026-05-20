async function getResult() {
    try {
        const response = await fetch('https://api.github.com/users/hadley/orgs');
        const progs = await response.json();
        return progs;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function getResultById(id) {
    try {
        const progs = await getResult();
        const prog = progs.find(p => p.id === id);
        return prog;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const id = 34165516;
const response = await getResultById(id);
console.log(response);

