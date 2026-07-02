export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theJokeApi: TheJokeApiAuthConfigDto;
}

export interface TheJokeApiAuthConfigDto {
    apiKey: string;
}

export interface ApiConfigDto {
    theJokeApi: ApiConfig;
}

interface ApiConfig {
    baseUrl: string;
}
