import { CREATE_NEW_DOCUMENT, UPADTE_DOCUMENT, REMOVE_DOCUMENT } from '../constants/document.constants';

export const createDocument = (document) => {
    return {
        type: CREATE_NEW_DOCUMENT,
        document: document
    }
};
export const updateDocument = (document) => {
    return {
        type: UPADTE_DOCUMENT,
        document: document
    }
};

export const deleteDocument = (idx) => {
    return {
        type: REMOVE_DOCUMENT,
        idx: idx
    }
}