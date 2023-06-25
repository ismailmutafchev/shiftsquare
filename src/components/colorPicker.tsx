import { colors } from "../utils/tailwindColors";

export default function ColorPicker() {
    const colorArr = Object.keys(colors)

    return (
        <div className="flex flex-wrap">
            {colorArr.map((color, index) => {
                console.log(color, 'color')
                return (
                    <div
                        key={index}
                        className={`w-8 h-8 rounded-full bg-${color}`}
                    />
                )
            }
            )}
        </div>
    )
}