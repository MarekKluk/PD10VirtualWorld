export default function getOrganismRotation (howXChanged, howYChanged) {
    if (howXChanged === -1 && howYChanged === 0) {
        return 'rotate(-0.5turn)';
    } else if (howXChanged === 0 && howYChanged <= -1) {
        return 'rotate(0.25turn)';
    } else if (howXChanged >= 1 && howYChanged === 0) {
        return 'rotate(0turn)';
    } else if (howXChanged === 0 && howYChanged >= 1) {
        return 'rotate(0.75turn)';
    } else if (howXChanged <= -1 && howYChanged <= -1) {
        return 'rotate(0.375turn)';
    } else if (howXChanged <= -1 && howYChanged >= 1) {
        return 'rotate(-0.375turn)';
    } else if (howXChanged >= 1 && howYChanged <= -1) {
        return 'rotate(0.125turn)';
    } else if (howXChanged >= 1 && howYChanged >= 1) {
        return 'rotate(-0.125turn)';
    }
}