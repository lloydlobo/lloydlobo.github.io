// Astro component rendering helpers
//
// Ref: https://docs.astro.build/en/guides/testing/#vitest-and-container-api
//
import { experimental_AstroContainer as AstroContainer, type ContainerRenderOptions } from "astro/container"
import { JSDOM } from "jsdom"

type AstroComponentFactory = Parameters<AstroContainer["renderToString"]>[0]

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

  async renderWithProps(component: AstroComponentFactory, props: ContainerRenderOptions["props"]): Promise<string> {
    return this.renderComponent(component, { props })
  }
}

// --- Convenience functions ---

export async function renderAstroComponentString(
  component: AstroComponentFactory,
  props: ContainerRenderOptions["props"] = {},
  slots: ContainerRenderOptions["slots"] = {}
): Promise<string> {
  const renderer = await TestRenderer.create()
  return renderer.renderComponent(component, { props, slots })
}

// NOTE: Initially, I tried setting the global environment to jsdom, but this caused
//       conflicts with esbuild (TextEncoder invariant violation). By keeping the
//       environment as node and only using JSDOM locally in the helper, we avoid
//       these global conflicts while still being able to test DOM interactions.
// See also: https://angelika.me/2025/02/01/astro-component-unit-tests/#step-2-render-component
export async function renderAstroComponentDocumentFragment(
  component: AstroComponentFactory,
  props: ContainerRenderOptions["props"] = {},
  slots: ContainerRenderOptions["slots"] = {}
): Promise<HTMLElement> {
  const renderer = await TestRenderer.create()
  const result = await renderer.renderComponent(component, { props, slots })
  const dom = new JSDOM(result)
  return dom.window.document.body
}
