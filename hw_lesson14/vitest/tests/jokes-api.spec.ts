import { describe, it, expect } from 'vitest';
import { ConfigService } from '../src/services/config-service';
import { FetchApiService } from '../src/services/fetch-api-service';
import { TheJokeApi } from '../src/apis/the-joke-api';


describe ('Test the JokeApi endpoints', () => {
    const config = new ConfigService().getConfig();
    const TheJokeApiService = new FetchApiService(config.api.theJokeApi.baseUrl, config.auth.theJokeApi);
    const jokeApi = new TheJokeApi(TheJokeApiService);

    it('should get a random joke', async () => {
        const [response, joke] = await jokeApi.getRandomJokeAsync();

        expect(response.ok).toBe(true);
        expect(joke).toHaveProperty('id');
        expect(joke).toHaveProperty('type');
        expect(joke).toHaveProperty('setup');
        expect(joke).toHaveProperty('punchline');
    });

    it('should get ten random jokes', async () => {
        const [response, jokes] = await jokeApi.getTenRandomJokesAsync();

        expect(response.ok).toBe(true);
        expect(jokes.length).toBe(10);
    });
    it('should get a joke by ID', async () => {
        const jokeId = 1;
        const [response, joke] = await jokeApi.getJokeByIdAsync(jokeId);

        expect(response.ok).toBe(true);
        expect(joke.id).toBe(jokeId);
    });

    it('should get joke types', async () => {
        const [response, jokeTypes] = await jokeApi.getJokeTypesAsync();

        expect(response.ok).toBe(true);
        expect(jokeTypes.length).toBeGreaterThan(0);
    });

    it('should get a random number of jokes', async () => {
        const [response, jokes] = await jokeApi.getRandomNumberOfJokesAsync();

        expect(response.ok).toBe(true);
        expect(jokes).toBeInstanceOf(Array);
        expect(jokes.length).toBeLessThanOrEqual(10);
    });
});
