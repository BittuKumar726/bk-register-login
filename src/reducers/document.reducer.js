// import * as actionTypes from '../actions/actionTypes';
import { CREATE_NEW_DOCUMENT, UPADTE_DOCUMENT, REMOVE_DOCUMENT } from '../constants/document.constants';

function createData(_id, fullName, email, phoneNumber, age, gender, dob) {
  return { _id, fullName, email, phoneNumber, age, gender, dob };
}
const rows = [
  createData("0", 'Bittu Kumar', 'abc@sdev.in', '9988776655', 22, "Male", "13/08/1999"),
  createData("1", 'Aditya Raj', 'abc@sdev.in', '9988776655', 23, "Male", "29/10/2000"),
  createData("2", 'Varsha Kumari', 'abc@sdev.in', '9988776655', 21, "Female", "19/08/1999"),
  createData("3", 'Sunil Kumar', 'abc@sdev.in', '9988776655', 26, "Male", "20/06/1999"),
  createData("4", 'Balgopal', 'abc@sdev.in', '9988776655', 22, "Male", "02/04/2000"),
];

export default (state = [...rows], action) => {
    let index = state.findIndex(el => el?._id == action?.document?._id);
    switch (action.type){
      case CREATE_NEW_DOCUMENT:
        if(index == -1)
            return [...state, Object.assign({}, action.document)];
        return state;
      case UPADTE_DOCUMENT:
        if(index !== -1)
            state[index] = Object.assign({}, action.document)
            return state;
        return state;
    
      case REMOVE_DOCUMENT:
      return state.filter((data, i) => i !== action.idx);
      default:
            return state;
    }
  };