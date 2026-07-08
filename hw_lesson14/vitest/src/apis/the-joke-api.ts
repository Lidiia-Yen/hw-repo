import { GetJokeResponseDto } from '../models';
import { IApiService } from '../services/i-api-service';

export class TheJokeApi {

    public constructor (private readonly apiService: IApiService<Response>) {}

    public async getRandomJokeAsync(): Promise<[Response, GetJokeResponseDto]> {
        const response = await this.apiService.getAsync('/random_joke');
        const responseBody = await response.json() as GetJokeResponseDto;

        return [response, responseBody];
    }

    public async getTenRandomJokesAsync(): Promise<[Response, GetJokeResponseDto[]]> {
        const response = await this.apiService.getAsync('/random_ten');
        const responseBody = await response.json() as GetJokeResponseDto[];

        return [response, responseBody];
    }

    public async getJokeByIdAsync(jokeId: string): Promise<[Response, GetJokeResponseDto]> {
        const response = await this.apiService.getAsync(`/jokes/${jokeId}`);
        const responseBody = await response.json() as GetJokeResponseDto;

        return [response, responseBody];
    }

    public async getJokeTypesAsync(): Promise<[Response, string[]]> {
        const response = await this.apiService.getAsync('/random_ten');
        const responseBody = await response.json() as GetJokeResponseDto[];
        const types = Array.from(new Set(responseBody.map(j => j.type)));

        return [response, types];
    }

    public async getRandomNumberOfJokesAsync(): Promise<[Response, GetJokeResponseDto[]]> {
        const random_number = String(Math.floor(Math.random() * 10) + 1);
        const response = await this.apiService.getAsync(`/jokes/random/${random_number}`);
        const responseBody = await response.json() as GetJokeResponseDto[];

        return [response, responseBody];
    }
}
