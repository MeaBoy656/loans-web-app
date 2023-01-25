import React, { useEffect, useState } from "react";
import "./loanInformation.css";
import swal from "sweetalert";
import Dropzone from "./ui/Dropzone";
import "./personalInfo.scss";
import "./financialInformation.scss";

function FinancialInformation(props) {
  const year = new Date().getFullYear();
  const reader = new FileReader();
  const defaultbank = "לאומי";

  const [formValues, setFormValues] = useState(props.getValues()["banks"]);
  const [currectUploadIndex, setCurrectUploadIndex] = useState(0);
  const [fileName, setFileName] = useState([]);
  const [uploadFieldsList, setUploadFieldsList] = useState(
    props.getValues().companyType === "ltd"
      ? [
          {
            title: "צילום תעודת הזהות והנספח",
            fieldName: "ID",
          },
          {
            title: "נסח חברה",
            fieldName: "DRAFT",
          },
          {
            title: "תעודת התאגדות",
            fieldName: "CIN",
          },
          {
            title: `דוח רווח והפסד לשנת ${year - 3}`,
            fieldName: "PAL3",
            year: year - 3,
          },
          {
            title: `דוח רווח והפסד לשנת ${year - 2}`,
            fieldName: "PAL2",
            year: year - 2,
          },
          {
            title: `דוח רווח והפסד לשנת ${year - 1}`,
            fieldName: "PAL1",
            year: year - 1,
          },
          {
            title: `דוח רווח והפסד לשנת ${year}`,
            fieldName: "PAL",
            year: year,
          },
          {
            title: `דוח מע"מ ${year - 1}`,
            fieldName: "ESNA1",
            year: year - 1,
          },
          {
            title: `דוח מע"מ ${year}`,
            fieldName: "ESNA",
            year: year,
          },
          {
            title: `מאזן ${year - 2}`,
            fieldName: "MAZ",
            year: year - 3,
          },
          {
            title: `דוח עובדים מביטוח לאומי לשנת ${year}`,
            fieldName: "BTL1",
            workers: true,
            year: year,
          },
          {
            title: `דוח עובדים מביטוח לאומי לשנת ${year - 1}`,
            fieldName: "BTL",
            workers: true,
            year: year - 1,
          },
        ]
      : [
          {
            title: "צילום תעודת הזהות והנספח",
            fieldName: "ID",
          },
          {
            title: "תעודת עוסק מורשה",
            fieldName: "ADC",
          },
          {
            title: `דוח רווח והפסד לשנת ${year - 3}`,
            fieldName: "PAL3",
            year: year - 3,
          },
          {
            title: `דוח רווח והפסד לשנת ${year - 2}`,
            fieldName: "PAL2",
            year: year - 2,
          },
          {
            title: `דוח רווח והפסד לשנת ${year - 1}`,
            fieldName: "PAL1",
            year: year - 1,
          },
          {
            title: `דוח רווח והפסד לשנת ${year}`,
            fieldName: "PAL",
            year: year,
          },
          {
            title: `דוח מע"מ ${year - 1}`,
            fieldName: "ESNA1",
            year: year - 1,
          },
          {
            title: `דוח מע"מ ${year}`,
            fieldName: "ESNA",
            year: year,
          },
          {
            title: `דוח עובדים מביטוח לאומי לשנת ${year}`,
            fieldName: "BTL1",
            workers: true,
            year: year,
          },
          {
            title: `דוח עובדים מביטוח לאומי לשנת ${year - 1}`,
            fieldName: "BTL",
            workers: true,
            year: year - 1,
          },
        ]
  );

  useEffect(() => {
    setUploadFieldsList((prevList) => {
      return prevList.filter((prevItem) => {
        if (props.hasWorkers === true) {
          return true;
        } else if (props.hasWorkers === false) {
          if (prevItem.workers) {
            return false;
          } else {
            return true;
          }
        }
      });
    });
    setUploadFieldsList((prevList) => {
      return prevList.filter((prevItem) => {
        if (prevItem.year) {
          console.log(props.getValues()["cyear"]);
          console.log(prevItem.year);
          if (prevItem.year >= props.getValues()["cyear"]) {
            return true;
          } else {
            return false;
          }
        } else {
          return true
        }
      });
    });
    setUploadFieldsList((prevList) => {
      return prevList.filter((prevItem) => {
        if (prevItem.fieldName === "MAZ") {
          console.log("there is MAZ");
          if (props.getValues()["cyear"] <= prevItem.year) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      });
    });
  }, []);


  const updateDropzoneValues = (newFile) => {
    props.resetField(uploadFieldsList[currectUploadIndex].fieldName);
    props.register(uploadFieldsList[currectUploadIndex].fieldName, {
      value: newFile[0],
    });
    setCurrectUploadIndex((prevIndex) => {
      if (prevIndex + 1 === uploadFieldsList.length) {
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };
  // const [files, setFiles] = useState([{fileName: "צילום תעודת זהות"}]);

  function handleChange(i, e) {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    props.resetField("banks");
    props.register("banks", { value: newFormValues });

    setFormValues(newFormValues);
  }
  function handleChangeFile(i, e) {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.files[0];
    props.resetField("banks");
    props.register("banks", { value: newFormValues });

    setFormValues(newFormValues);
  }
  function addFormreasons() {
    if (
      !formValues[formValues.length - 1][
        "LD" + (formValues.length - 1).toString()
      ] ||
      !formValues[formValues.length - 1][
        "BS" + (formValues.length - 1).toString()
      ] ||
      !formValues[formValues.length - 1][
        "BAL" + (formValues.length - 1).toString()
      ]
    ) {
      swal(
        "!אופס",
        "כדי להוסיף  רשומת בנק נוספת יש להזין את כל הפרטים הנדרשים",
        "error"
      );
      return;
    } else
      setFormValues([
        ...formValues,
        {
          bank: defaultbank,
          ["LD" + formValues.length.toString()]: "",
          ["BAL" + formValues.length.toString()]: "",
          ["BS" + formValues.length.toString()]: "",
        },
      ]);
  }

  function removeFormreasons(i) {
    let newFormValues = [...formValues];

    newFormValues.splice(i, 1);
    props.resetField("banks");
    props.register("banks", { value: newFormValues });
    setFormValues(newFormValues);
  }

  const filterUploadList = () => {
    // ltd=חברה בע"מ vs cld=עוסק מורשה
    return (
      <>
        {uploadFieldsList.map((field, index) => {
          const currentFieldBackground = {
            backgroundColor: "var(--light-blue)",
            border: "2px solid var(--blue)",
          };

          const apply_color_to_current_index = () => {
            if (index === currectUploadIndex) {
              return currentFieldBackground;
            }
          };

          const is_item_checked = (field) => {
            const propertyNames = Object.keys(props.getValues());
            if (propertyNames.includes(field.fieldName)) {
              return "checked";
            }
          };

          // shalev handle - fix this function:
          const element = () => {
            const propertyNames = Object.keys(props.getValues());
            const currentField = propertyNames.filter((item) => {
              return item === field.fieldName;
            });
            return currentField !== undefined
              ? props.getValues()[currentField[0]]?.name
              : "";
            // return ""
          };

          return (
            <li
              className="upload-list--item"
              key={index}
              style={apply_color_to_current_index()}
              onClick={() => setCurrectUploadIndex(index)}
            >
              <p className={`document-name ${is_item_checked(field)}`}>
                <div className={`checkbox ${is_item_checked(field)}`}></div>
                <p>{field.title}</p>
              </p>
              <div className="upload-list--CTA">
                <p className="">{element()}</p>
              </div>
            </li>
          );
        })}
      </>
    );
    // }
  };

  const renderUploadList = filterUploadList();

  return (
    <div className="grid-information--container">
      <form className="form">
        <h2 className="page-title">העלאת מסמכים</h2>
        <h5 className="sub-title">בשלב זה על הבנקאי להעלות את מסמכי העסק</h5>
        <div className="upload-files--container">
          <div className="dropzone-container">
            <label className="task-title">
              העלו את {uploadFieldsList[currectUploadIndex]?.title} של הלקוח:{" "}
            </label>
            <Dropzone
              currectUploadIndex={currectUploadIndex}
              setFileName={setFileName}
              isDisabled={false}
              updateDropzoneValues={updateDropzoneValues}
            />
          </div>
          <div className="lists-container">
            <label className="task-title">מסמכי העסק: </label>
            <ul className="upload-list--container">{renderUploadList}</ul>
            {console.log(formValues)}
            <table className="table-subcontainer">
              <thead>
                <th className="sub-title-table" id="th-a">
                  {" "}
                  בנק{" "}
                </th>
                <th className="sub-title-table" id="th-b">
                  {" "}
                  דפי חשבון 3 חודשים אחרונים{" "}
                </th>
                <th className="sub-title-table" id="th-c">
                  {" "}
                  פירוט הלוואות
                </th>
                <th className="sub-title-table" id="th-d">
                  ריכוז יתרות עדכני{" "}
                </th>
                <th className="sub-title-table" id="th-e">
                  <button
                    className="button-add-finance"
                    type="button"
                    onClick={() => addFormreasons()}
                  >
                    הוספת בנק
                  </button>
                </th>
              </thead>

              {formValues.map((element, index) => (
                <tbody key={index}>
                  <td className="form-group-financial">
                    <select
                      className="form-select"
                      required={true}
                      value={element.bank || ""}
                      onChange={(e) => handleChange(index, e)}
                      id="bank"
                      name="bank"
                    >
                      <option value="לאומי">לאומי</option>
                      <option value="פועלים">פועלים</option>
                      <option value="מזרחי">מזרחי</option>
                      <option value="דיסקונט">דיסקונט</option>
                      <option value="הבינלאומי">הבינלאומי</option>
                    </select>
                  </td>
                  <td className="form-group-financial">
                    <label
                      style={{ marginTop: 0 }}
                      htmlFor={"BS" + index}
                      id="filelabel"
                    >
                      {" "}
                      דפי חשבון
                    </label>

                    <input
                      required={true}
                      type="file"
                      onChange={(event) => handleChangeFile(index, event)}
                      className="form-control "
                      placeholder=""
                      id={"BS" + index}
                      name={"BS" + index}
                    />
                    <p>{props.getValues().banks[index][`BS${index}`]?.name}</p>
                  </td>
                  <td className="form-group-financial">
                    <label
                      htmlFor={"LD" + index}
                      style={{ marginTop: 0 }}
                      id="filelabel"
                    >
                      {" "}
                      פירוט הלוואות
                    </label>
                    <input
                      required={true}
                      type="file"
                      onChange={(event) => handleChangeFile(index, event)}
                      className="form-control"
                      placeholder=""
                      id={"LD" + index}
                      name={"LD" + index}
                    />
                    <p>{props.getValues().banks[index][`LD${index}`]?.name}</p>
                  </td>
                  <td className="form-group-financial">
                    <label
                      htmlFor={"BAL" + index}
                      style={{ marginTop: 0 }}
                      id="filelabel"
                    >
                      {" "}
                      ריכוז יתרות
                    </label>
                    <input
                      required={true}
                      type="file"
                      onChange={(event) => handleChangeFile(index, event)}
                      className="form-control"
                      placeholder=""
                      id={"BAL" + index}
                      name={"BAL" + index}
                    />
                    <p>{props.getValues().banks[index][`BAL${index}`]?.name}</p>
                  </td>
                  <div className="form-group-financial">
                    {index ? (
                      <button
                        type="button"
                        className="button remove"
                        onClick={() => removeFormreasons(index)}
                      ></button>
                    ) : null}
                  </div>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FinancialInformation;
