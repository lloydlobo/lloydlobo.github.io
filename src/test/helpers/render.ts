// Astro component rendering helpers
// Ref: https://docs.astro.build/en/guides/testing/#vitest-and-container-api

import { experimental_AstroContainer as AstroContainer, type ContainerRenderOptions } from "astro/container"
import type { AstroComponentFactory } from "astro/runtime/server/index.js"

export class TestRenderer {
    private container: AstroContainer

    constructor(container: AstroContainer) {
        this.container = container
    }

    static async create(): Promise<TestRenderer> {
        return new TestRenderer(await AstroContainer.create())
    }

    async renderComponent(component: AstroComponentFactory, options: ContainerRenderOptions = {}): Promise<string> {
        const { props = {}, slots = {} } = options
        return await this.container.renderToString(component, { props, slots })
    }

    async renderWithProps(component: AstroComponentFactory, props: ContainerRenderOptions['props']): Promise<string> {
        return this.renderComponent(component, { props })
    }
}

// Convenience function
export async function renderAstroComponent(
    component: AstroComponentFactory,
    props: ContainerRenderOptions['props'] = {},
    slots: ContainerRenderOptions['slots'] = {},
): Promise<string> {
    const renderer = await TestRenderer.create()
    return renderer.renderComponent(component, { props, slots })
}