import axios from "axios";
import { setRecordIdAction } from "../globalVariables";

function UploadFirst1To7(input, dispatch) {
  let url = "https://respekt-backend.herokuapp.com/create";
  let data = {
    record_id: input.record_id,
    video_id: "",
    timestamp_start: "",
    timestamp_end: "",
    survey_duration: "",
    question_1: input.question_1,
    question_2: input.question_2,
    question_3: input.question_3,
    question_4: input.question_4,
    question_5: input.question_5,
    question_6: input.question_6,
    question_7: input.question_7,
    question_8: "",
    question_9: "",
    question_10: "",
    question_11: "",
    question_12: "",
    question_13: "",
    question_14: "",
    question_15: "",
    question_16: "",
    question_17: "",
    question_18: "",
    question_19: "",
    question_20: "",
    question_21: "",
    question_22: "",
    question_23: "",
    question_24: "",
    question_25: "",
    question_26: "",
    question_27: "",
    question_28: "",
    question_29: "",
    question_30: "",
    question_31: "",
    question_32: "",
    question_33: "",
    question_34: "",
    question_35: "",
    question_36: "",
    question_37: "",
    question_38: "",
    question_39: "",
    question_40: "",
    question_41: "",
    question_42: "",
    question_43: "",
    question_44: "",
    question_45: "",
    question_46: "",
    question_47: "",
    question_48: "",
    question_49: "",
    question_50: "",
    question_51: "",
    question_52: "",
    question_53: "",
    question_54: "",
    question_55: "",
    question_56: "",
    question_57: "",
    answers_complete: 0,
  };

  console.log("UploadFirst1To7 - REQUEST:");
  console.log(data);
  console.log("UploadFirst1To7 - RESPONSE:");
  AxiosCall(url, data, dispatch);
}

function UploadSecond8To26(input) {
  let url = "https://respekt-backend.herokuapp.com/update";
  let data = {
    record_id: input.record_id,
    video_id: "",
    timestamp_start: "",
    timestamp_end: "",
    survey_duration: "",
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    question_7: "",
    question_8: input.question_8,
    question_9: input.question_9,
    question_10: input.question_10,
    question_11: input.question_11,
    question_12: input.question_12,
    question_13: input.question_13,
    question_14: input.question_14,
    question_15: input.question_15,
    question_16: input.question_16,
    question_17: input.question_17,
    question_18: input.question_18,
    question_19: input.question_19,
    question_20: input.question_20,
    question_21: input.question_21,
    question_22: input.question_22,
    question_23: input.question_23,
    question_24: input.question_24,
    question_25: input.question_25,
    question_26: input.question_26,
    question_27: "",
    question_28: "",
    question_29: "",
    question_30: "",
    question_31: "",
    question_32: "",
    question_33: "",
    question_34: "",
    question_35: "",
    question_36: "",
    question_37: "",
    question_38: "",
    question_39: "",
    question_40: "",
    question_41: "",
    question_42: "",
    question_43: "",
    question_44: "",
    question_45: "",
    question_46: "",
    question_47: "",
    question_48: "",
    question_49: "",
    question_50: "",
    question_51: "",
    question_52: "",
    question_53: "",
    question_54: "",
    question_55: "",
    question_56: "",
    question_57: "",
    answers_complete: 0,
  };

  console.log("UploadSecond8To26 - REQUEST:");
  console.log(data);
  console.log("UploadSecond8To26 - RESPONSE:");
  AxiosCall(url, data);
}

function UploadThird27To34(input) {
  let url = "https://respekt-backend.herokuapp.com/update";
  let data = {
    record_id: input.record_id,
    video_id: "",
    timestamp_start: "",
    timestamp_end: "",
    survey_duration: "",
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    question_7: "",
    question_8: "",
    question_9: "",
    question_10: "",
    question_11: "",
    question_12: "",
    question_13: "",
    question_14: "",
    question_15: "",
    question_16: "",
    question_17: "",
    question_18: "",
    question_19: "",
    question_20: "",
    question_21: "",
    question_22: "",
    question_23: "",
    question_24: "",
    question_25: "",
    question_26: "",
    question_27: input.question_27,
    question_28: input.question_28,
    question_29: input.question_29,
    question_30: input.question_30,
    question_31: input.question_31,
    question_32: input.question_32,
    question_33: input.question_33,
    question_34: input.question_34,
    question_35: "",
    question_36: "",
    question_37: "",
    question_38: "",
    question_39: "",
    question_40: "",
    question_41: "",
    question_42: "",
    question_43: "",
    question_44: "",
    question_45: "",
    question_46: "",
    question_47: "",
    question_48: "",
    question_49: "",
    question_50: "",
    question_51: "",
    question_52: "",
    question_53: "",
    question_54: "",
    question_55: "",
    question_56: "",
    question_57: "",
    answers_complete: 0,
  };

  console.log("UploadThird27To34 - REQUEST:");
  console.log(data);
  console.log("UploadThird27To34 - RESPONSE:");
  AxiosCall(url, data);
}

function UploadVideoId(input) {
  let url = "https://respekt-backend.herokuapp.com/update";
  let data = {
    record_id: input.record_id,
    video_id: input.video_id,
    timestamp_start: "",
    timestamp_end: "",
    survey_duration: "",
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    question_7: "",
    question_8: "",
    question_9: "",
    question_10: "",
    question_11: "",
    question_12: "",
    question_13: "",
    question_14: "",
    question_15: "",
    question_16: "",
    question_17: "",
    question_18: "",
    question_19: "",
    question_20: "",
    question_21: "",
    question_22: "",
    question_23: "",
    question_24: "",
    question_25: "",
    question_26: "",
    question_27: "",
    question_28: "",
    question_29: "",
    question_30: "",
    question_31: "",
    question_32: "",
    question_33: "",
    question_34: "",
    question_35: "",
    question_36: "",
    question_37: "",
    question_38: "",
    question_39: "",
    question_40: "",
    question_41: "",
    question_42: "",
    question_43: "",
    question_44: "",
    question_45: "",
    question_46: "",
    question_47: "",
    question_48: "",
    question_49: "",
    question_50: "",
    question_51: "",
    question_52: "",
    question_53: "",
    question_54: "",
    question_55: "",
    question_56: "",
    question_57: "",
    answers_complete: 0,
  };

  console.log("UploadVideoId - REQUEST:");
  console.log(data);
  console.log("UploadVideoId - RESPONSE:");
  AxiosCall(url, data);
}

function UploadFourth35To49(input) {
  let url = "https://respekt-backend.herokuapp.com/update";
  let data = {
    record_id: input.record_id,
    video_id: "",
    timestamp_start: input.timestamp_start,
    timestamp_end: input.timestamp_end,
    survey_duration: input.survey_duration,
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    question_7: "",
    question_8: "",
    question_9: "",
    question_10: "",
    question_11: "",
    question_12: "",
    question_13: "",
    question_14: "",
    question_15: "",
    question_16: "",
    question_17: "",
    question_18: "",
    question_19: "",
    question_20: "",
    question_21: "",
    question_22: "",
    question_23: "",
    question_24: "",
    question_25: "",
    question_26: "",
    question_27: "",
    question_28: "",
    question_29: "",
    question_30: "",
    question_31: "",
    question_32: "",
    question_33: "",
    question_34: "",
    question_35: input.question_35,
    question_36: input.question_36,
    question_37: input.question_37,
    question_38: input.question_38,
    question_39: input.question_39,
    question_40: input.question_40,
    question_41: input.question_41,
    question_42: input.question_42,
    question_43: input.question_43,
    question_44: input.question_44,
    question_45: input.question_45,
    question_46: input.question_46,
    question_47: input.question_47,
    question_48: input.question_48,
    question_49: input.question_49,
    question_50: "",
    question_51: "",
    question_52: "",
    question_53: "",
    question_54: "",
    question_55: "",
    question_56: "",
    question_57: "",
    answers_complete: input.answers_complete,
  };

  console.log("UploadFourth35To49 - REQUEST:");
  console.log(data);
  console.log("UploadFourth35To49 - RESPONSE:");
  AxiosCall(url, data);
}

function UploadFifth50To57(input) {
  let url = "https://respekt-backend.herokuapp.com/update";
  let data = {
    record_id: input.record_id,
    video_id: "",
    timestamp_start: input.timestamp_start,
    timestamp_end: input.timestamp_end,
    survey_duration: input.survey_duration,
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    question_7: "",
    question_8: "",
    question_9: "",
    question_10: "",
    question_11: "",
    question_12: "",
    question_13: "",
    question_14: "",
    question_15: "",
    question_16: "",
    question_17: "",
    question_18: "",
    question_19: "",
    question_20: "",
    question_21: "",
    question_22: "",
    question_23: "",
    question_24: "",
    question_25: "",
    question_26: "",
    question_27: "",
    question_28: "",
    question_29: "",
    question_30: "",
    question_31: "",
    question_32: "",
    question_33: "",
    question_34: "",
    question_35: "",
    question_36: "",
    question_37: "",
    question_38: "",
    question_39: "",
    question_40: "",
    question_41: "",
    question_42: "",
    question_43: "",
    question_44: "",
    question_45: "",
    question_46: "",
    question_47: "",
    question_48: "",
    question_49: "",
    question_50: input.question_50,
    question_51: input.question_51,
    question_52: input.question_52,
    question_53: input.question_53,
    question_54: input.question_54,
    question_55: input.question_55,
    question_56: input.question_56,
    question_57: input.question_57,
    answers_complete: 2,
  };

  console.log("UploadFifth50To57 - REQUEST:");
  console.log(data);
  console.log("UploadFifth50To57 - RESPONSE:");
  AxiosCall(url, data);
}

function UploadSixth58(input) {
  let url = "https://respekt-backend.herokuapp.com/create";
  let data = {
    record_id: "null",
    question_58: input.question_58,
    emails_complete: 2,
  };

  console.log("UploadSixth58 - REQUEST:");
  console.log(data);
  console.log("UploadSixth58 - RESPONSE:");
  AxiosCall(url, data);
}

function AxiosCall(url, data, dispatch) {
  axios
    .post(url, data)
    .then(function (response) {
      throw "nooo!";
      console.log(response.data.responseData);
      if (url.includes("create") && data.emails_complete == null) {
        dispatch(
          setRecordIdAction(response.data.responseData[0].split(",")[0])
        );
      } else if (data.emails_complete != null && data.emails_complete == 2) {
        window.open("https://alkohologsamfund.dk/", "_self");
      }
    })
    .catch(function (error) {
      // TODO: Indsæt email
      alert(
        "Kunne ikke forbinde til server. Tjek din internetforbindelse og prøv igen. Kontakt @ hvis fejlen genopstår. \n\nError: " +
          error
      );
    });
}

export {
  UploadFirst1To7,
  UploadSecond8To26,
  UploadThird27To34,
  UploadVideoId,
  UploadFourth35To49,
  UploadFifth50To57,
  UploadSixth58,
};
