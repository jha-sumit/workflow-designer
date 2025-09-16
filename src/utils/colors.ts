function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function darkenRgb(r: number, g: number, b: number, percentage: number): { r: number; g: number; b: number } {
    const factor = 1 - percentage;
    return {
        r: Math.max(0, Math.round(r * factor)),
        g: Math.max(0, Math.round(g * factor)),
        b: Math.max(0, Math.round(b * factor))
    };
}

function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (c: number) => `00${c.toString(16)}`.slice(-2);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getDarkerColor(hexColor: string, percentage: number): string | undefined {
    const rgb = hexToRgb(hexColor);
    if (!rgb) {
        return undefined; // Invalid hex color
    }
    const darkerRgb = darkenRgb(rgb.r, rgb.g, rgb.b, percentage);
    return rgbToHex(darkerRgb.r, darkerRgb.g, darkerRgb.b);
}

export { hexToRgb, getDarkerColor, darkenRgb, rgbToHex };