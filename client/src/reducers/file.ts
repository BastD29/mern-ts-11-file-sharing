import { SET_FILE, SET_UPLOADED_FILE } from "../constants/actions";
import { FileActionType, FileStateType } from "../models/file";

const initialState: FileStateType = {
  file: null,
  uploadedFile: null,
};

const reducer = (
  state: FileStateType,
  action: FileActionType
): FileStateType => {
  switch (action.type) {
    case SET_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case SET_UPLOADED_FILE:
      return {
        ...state,
        uploadedFile: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
