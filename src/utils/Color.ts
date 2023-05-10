export const isLightColor = (color: string) => {
    // Chuyển đổi màu hex thành giá trị RGB
    const hexToRGB = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    };

    // Tính toán độ sáng của màu
    const [r, g, b] = hexToRGB(color);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Kiểm tra nếu độ sáng lớn hơn một ngưỡng nào đó (ví dụ: 128) thì màu được coi là màu sáng
    return brightness > 128;
};
