export function manipulateState(constState) {
    if (!constState) {
        return true;
    }
    else if (constState) {
        return false;
    }
    else {
        return null;
    }
}