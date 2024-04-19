export const hasNotMoved = (
    sourceIndex: number,
    destinationIndex: number,
    sourceDroppableId: string,
    destinationDroppableId: string,
) => {
    return (
        sourceIndex === destinationIndex &&
        sourceDroppableId === destinationDroppableId
    );
};
