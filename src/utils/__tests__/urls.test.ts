import { describe, it, expect } from "vitest";
import { isGitHubUrL } from "../urls";

describe("isGitHubUrL", () => {
    it("should return true for valid GitHub repository URLs", () => {
        const validUrls = [
            "https://github.com/username/repo",
            "http://github.com/username/repo",
            "https://www.github.com/username/repo",
            "https://github.com/username/repo-name",
            "https://github.com/username/repo.name",
            "https://github.com/username/repo_name",
            "https://github.com/username/repo/" // Trailing slash
        ];

        validUrls.forEach(url => {
            expect(isGitHubUrL(url)).toBe(true);
        });
    });

    it("should return false for invalid GitHub URLs", () => {
        const invalidUrls = [
            "https://google.com",
            "https://github.com",
            "https://github.com/username", // Missing repo
            "https://github.com/username/", // Missing repo with slash
            "ftp://github.com/username/repo",
            "github.com/username/repo", // Missing protocol
            "https://github.com/username/repo/extra", // Too long (based on regex)
            "random string"
        ];

        invalidUrls.forEach(url => {
            expect(isGitHubUrL(url)).toBe(false);
        });
    });
});
