export type localGithubUser = {
    login: string,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    repos: string,
    followers: number,
    following: number,
    created: string
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: string,
    followers: number,
    following: number,
    created_at: string
}

export type GithubError = {
    message: string,
    documentation_url: string,

}