/**
 * Configuration port - interface for accessing extension configuration
 * Part of hexagonal architecture - allows different config implementations
 */
export interface Config {
    filesGlobs(): string[]
    templateGlobs(): string[]
    previewLayout(): string
    showLabels(): boolean
}

