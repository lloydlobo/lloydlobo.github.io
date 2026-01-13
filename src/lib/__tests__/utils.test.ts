import { describe, it, expect } from "vitest"
import { cn } from "../utils"

describe("utils", () => {
    describe("cn (className merger)", () => {
        it("merges class names correctly", () => {
            expect(cn("w-full", "h-full")).toBe("w-full h-full")
        })

        it("resolves tailwindcss conflicts", () => {
            expect(cn("p-4", "p-8")).toBe("p-8")
            expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
        })

        it("handles conditional classes", () => {
            expect(cn("base", true && "active", false && "hidden")).toBe("base active")
            expect(cn("base", false && "active", true && "hidden")).toBe("base hidden")
            expect(cn("base", false && "active", false && "hidden")).toBe("base")
            expect(cn("base", true && "active", true && "hidden")).toBe("base active hidden")
            expect(cn("base", true && "active", true && "hidden", false && "hidden")).toBe("base active hidden")
            expect(cn("base", true && "active", true && "hidden", true && "hidden")).toBe("base active hidden")
        })
    })
})