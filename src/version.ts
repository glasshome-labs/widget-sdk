/**
 * SDK version constant for runtime version compatibility checking.
 * The host can compare this against widget manifest sdkVersion fields.
 * Injected at build time from package.json via Vite define.
 */
declare const __SDK_VERSION__: string;
export const SDK_VERSION: string = __SDK_VERSION__;
