async function fetchResources(resource_1, resource_2) {
    try {
        const attempt_1 = await fetchDataWithTryCatch(resource_1);
        return { attempt_1 };
    } catch (error) {
        console.warn('Resource 1 failed:', error.message, ', Trying resource 2:');
        const attempt_2 = await fetchDataWithTryCatch(resource_2);
        return { attempt_2 };
    }
};

async function fetchDataWithTryCatch(resource) {
    try {
        const response = await fetch(resource);
        if (!response.ok) {
            throw new Error(`fetch failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Fetch failed for ${resource}: ${error.message}`);
    }
};

const resource_1 = 'https://api.github.com/users/hadley/orgs_1';
const resource_2 = 'https://api.github.com/users/hadley/orgs';
const result = await fetchResources(resource_1, resource_2);
console.log(result);
