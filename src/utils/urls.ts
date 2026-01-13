export function isGitHubUrL(url: string): boolean {
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9._-]+(\/)?$/;
    return githubRegex.test(url);
}
