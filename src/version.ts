/**
 * SDK version constant for runtime version compatibility checking.
 * The host can compare this against widget manifest sdkVersion fields.
 * Read directly from package.json — single source of truth.
 */
import pkg from "../package.json" with { type: "json" };
export const SDK_VERSION: string = pkg.version;
