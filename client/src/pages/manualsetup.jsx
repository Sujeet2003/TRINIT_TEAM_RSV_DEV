import { useRef } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export const Manual = () => {
  const [question, setQuestion] = useState([
    {
      question: "",
      option: [{ Option: "" }],
    },
  ]);

  const ques = useRef();
  const opt = useRef();

  const AddQuestion = () => {
    setQuestion((prev) => [
      ...prev,
      {
        question: "",
        option: [{ Option: "" }],
      },
    ]);
  };

  const questionHandle = (ev) => {
    console.log(ev.target.id);
    console.log(ques.current.value);
    const index = ev.target.id;
    setQuestion((prev) => {
      const newArray = [...prev];
      newArray[index] = {
        ...newArray[index],
        question: ques.current.value,
      };
      return newArray;
    });
  };

  const optionHandle = (ev) => {
    const Data = ev.target.id.split("..");
    const newOption = question[Data[0]].option;
    newOption[Data[1]].Option = opt.current.value;
    setQuestion((prev) => {
      const newArray = [...prev];
      newArray[Data[0]] = {
        ...newArray[Data[0]],
        option: newOption,
      };
      return newArray;
    });
  };

  const AddOption = (ev) => {
    console.log(ev.target.value);
    const index = ev.target.value;

    setQuestion((prev) => {
      const newArray = [...prev];
      newArray[index] = {
        ...newArray[index],
        option: [...newArray[index].option, { Option: "" }],
      };
      return newArray;
    });

    console.log(question);
  };

  console.log(question);

  return (
    <div className="flex flex-row items-center justify-center w-full">
      <div className="w-3/4 mt-5 mb-5">
        {question &&
          question.map((questions, index) => {
            return (
              <>
              <div className="flex flex-col items-center justify-center">
                <TextField
                  className="w-full"
                  label="Multiline"
                  inputRef={ques}
                  id={index}
                  multiline
                  onChange={questionHandle}
                  key={index}
                  maxRows={4}
                />

                <div className="flex flex-row flex-wrap items-center justify-around w-11/12 mt-5">
                  {questions.option.map((option, optionindex) => {
                    return (
                      <>
                        <TextField
                          className="w-2/6"
                          required
                          id={`${index}..${optionindex}`}
                          inputRef={opt}
                          onChange={optionHandle}
                          label={`Option ${optionindex + 1}`}
                        />
                      </>
                    );
                  })}
                  <button
                    className="pt-2 pb-2 pl-5 pr-5 border border-gray-500 rounded-lg"
                    value={index}
                    onClick={AddOption}
                  >
                    {" "}
                    Add Options
                  </button>
                </div>
              </div>
              </>
            );
          })}
        <div
          className="flex flex-row items-center justify-center w-full mt-5 mb-5"
          onClick={AddQuestion}
        >
          <button>Add Question</button>
        </div>
      </div>
    </div>
  );
};
