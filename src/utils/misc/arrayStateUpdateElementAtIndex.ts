export default function updateElementAtIndex(
    setStateFunction: any,
    index: number,
    newValue: any
) {
    setStateFunction((prev: any) =>
        prev.map((item: any, i: number) => (i === index ? newValue : item))
    );
}
