import React, { Component, isValidElement, useEffect } from "react";
import { useState } from "react";
// import Slider from "rc-slider";
import { Slider } from "@mui/material";
import "./loanInformation.css";
import "rc-slider/assets/index.css";
function LoanInformation(props) {
  const values = props.getValues();
  const defaultreason = "שיפוץ";
  const [volume, setVolume] = useState(values["loanVolume"]);
  const [formValues, setFormValues] = useState(values["reasons"]);

  const [sum, setSum] = useState(0);

  function sumValues() {
    var sum = 0;
    if (formValues) {
      formValues.forEach((element) => {
        sum += parseInt(element.volume);
      });
    }

    return sum;
  }

  function handleChange(i, e) {
    let newFormValues = [...formValues];

    if (e.target.name == "volume") {
      newFormValues[i][e.target.name] = e.target.value;

      props.resetField("loanVolume");
      props.register("loanVolume", { value: sumValues() });

      setVolume(sumValues());
    }

    newFormValues[i][e.target.name] = e.target.value;
    props.resetField("reasons");
    props.register("reasons", { value: newFormValues });

    setFormValues(newFormValues);
  }

  function addFormreasons() {
    setFormValues([...formValues, { reason: defaultreason, volume: "" }]);
  }

  function whichRemoveBtns(index) {
    if (values["loanType"] === "combined") {
      if (index !== 0 && index !== 1) {
        return (
          <td>
            <button
              type="button"
              className="remove"
              onClick={() => removeFormreasons(index)}
            ></button>
          </td>
        );
      }
    } else {
      if (index !== 0) {
        return (
          <td>
            <button
              type="button"
              className="remove"
              onClick={() => removeFormreasons(index)}
            ></button>
          </td>
        );
      }
    }
  }

  function removeFormreasons(i) {
    let newFormValues = [...formValues];
    setSum(sum - newFormValues[i].volume);

    newFormValues.splice(i, 1);
    props.resetField("reasons");
    props.register("reasons", { value: newFormValues });

    setFormValues(newFormValues);
  }

  return (
    <div className="grid-information--container--loans">
      <form className="form-loans">
        <h2 className="page-title-loan"> סכום ההלוואה ומטרתה</h2>
        <h5 className="sub-title-loan">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח
          איבן איף, ברומץ כלרשט מיחוצים.
        </h5>

        <div className="form-group-radio">
          <label className="invest-type-title">מטרת ההלוואה המבוקשת: </label>
          <div className="radio-input-wrapper">
            <div className="type">
              <input
                onChange={() => {
                  props.resetField("loanType");
                  props.register("loanType", { value: "invest" });
                  setFormValues([{ reason: defaultreason, volume: "" }]);
                  props.resetField("reasons");
                  props.register("reasons", {
                    value: [{ reason: defaultreason, volume: "" }],
                  });

                  setVolume(0);
                  props.resetField("loanVolume");
                  props.register("loanVolume", { value: 0 });
                }}
                checked={values["loanType"] == "invest"}
                className="form-check-input inpt"
                type="radio"
                name="type"
                id="invest"
              />
              <label className="form-check-label" htmlFor="invest">
                השקעה
              </label>{" "}
            </div>
            <div className="type">
              <input
                className="form-check-input inpt"
                type="radio"
                name="type"
                id="flow"
                onChange={() => {
                  props.resetField("loanType");
                  props.register("loanType", { value: "flow" });
                  setFormValues([{ reason: defaultreason, volume: "" }]);
                  props.resetField("reasons");
                  props.register("reasons", { value: [] });

                  setVolume(0);
                  props.resetField("loanVolume");
                  props.register("loanVolume", { value: 0 });
                }}
                checked={values["loanType"] == "flow"}
              />
              <label className="form-check-label" htmlFor="flow">
                הון חוזר
              </label>
            </div>
            <div className="type">
              <input
                className="form-check-input inpt"
                type="radio"
                name="type"
                id="combined"
                onChange={() => {
                  props.resetField("loanType");
                  props.register("loanType", { value: "combined" });
                  setFormValues([
                    { reason: "הון חוזר", volume: "" },
                    { reason: "הון חוזר", volume: "" },
                  ]);
                  props.resetField("reasons");
                  props.register("reasons", {
                    value: [
                      { reason: "הון חוזר", volume: "" },
                      { reason: "הון חוזר", volume: "" },
                    ],
                  });
                  setVolume(0);
                  props.resetField("loanVolume");
                  props.register("loanVolume", { value: 0 });
                }}
                checked={values["loanType"] == "combined"}
              />
              <label className="form-check-label" htmlFor="combined">
                משולב (הון חוזר+השקעה)
              </label>{" "}
            </div>
          </div>
        </div>
        <div className="table-container">
          {values["loanType"] == "flow" ? (
            // <Slider
            //   aria-label="loanVolume"
            //   defaultValue={0}
            //   valueLabelDisplay="auto"
            //   value={values["loanVolume"]}
            //   // getAriaValueText={(value) => value}
            //   onChange={(value) => {
            //     props.resetField("loanVolume");
            //     props.register("loanVolume", { value: value });
            //   }}
            //   // step={14}
            //   name="loanVolume"
            //   id="loanVolume"
            //   marks
            //   min={0}
            //   max={1000000}
            // />
            <Slider
              value={values["loanVolume"]}
              // orientation="vertical"
              min={0}
              max={1000000}
              step={1000}
              onChange={(event) => {
                props.resetField("loanVolume");
                props.register("loanVolume", { value: event.target.value });
              }}
            />
          ) : (
            <div className="table-subcontainer">
              <table>
                <thead>
                  <th className="sub-title-table" id="th-1">
                    אחוז מסה"כ{" "}
                  </th>
                  <th className="sub-title-table" id="th-2">
                    סעיף ההשקעה
                  </th>
                  <th className="sub-title-table" id="th-3">
                    סכום בש"ח
                  </th>
                  <th className="sub-title-table" id="th-4">
                    {values["loanType"] !== "flow" && (
                      <button
                        className="button-add"
                        type="button"
                        onClick={() => addFormreasons()}
                      >
                        הוספה
                      </button>
                    )}
                  </th>
                </thead>
                {formValues.map((element, index) => {
                  const renderRemoveBtns = whichRemoveBtns(index);
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>
                          {isNaN((100 * element.volume) / volume)
                            ? 0
                            : ((100 * element.volume) / volume).toFixed(1)}
                          %
                        </td>
                        {/* here */}
                        <td className="form-group-financial">
                          <select
                            disabled={
                              values["loanType"] == "combined" && index == 0
                            }
                            className="form-select"
                            required={true}
                            value={element.reason || ""}
                            onChange={(e) => handleChange(index, e)}
                            id="reason"
                            name="reason"
                          >
                            {values["loanType"] == "combined" ? (
                              <option value="הון חוזר">הון חוזר</option>
                            ) : (
                              <React.Fragment></React.Fragment>
                            )}
                            <option value="שיפוץ">שיפוץ</option>
                            <option value="רכישת מכונה">רכישת מכונה</option>
                            <option value="רכישת ציוד">רכישת ציוד</option>
                            <option value="רכישת מלאי">רכישת מלאי</option>
                            <option value="פרסום ושיווק">פרסום ושיווק</option>
                            <option value="פיתוח עסקי">פיתוח עסקי</option>
                            <option value="מחשוב">מחשוב</option>
                            <option value="כוח אדם"> כוח אדם</option>
                            <option value="אחר"> אחר </option>
                          </select>
                        </td>
                        <td className="form-group-financial">
                          <input
                            value={element.volume || ""}
                            onChange={(e) => handleChange(index, e)}
                            required={true}
                            step={1000}
                            min={0}
                            type="number"
                            className="form-control"
                            placeholder=""
                            name="volume"
                            id="volume"
                          />
                        </td>
                        {renderRemoveBtns}
                      </tr>

                      {/* from here */}
                    </tbody>
                  );
                })}
              </table>
            </div>
          )}
          <div className="total">
            <div className="form-group-financial">
              <label htmlFor="first" className="inpt">
                סה"כ הלוואה מבוקשת:
              </label>
              <input
                onChange={(event) => {
                  props.resetField("loanVolume");
                  props.register("loanVolume", { value: event.target.value });

                  setVolume(event.target.value);
                }}
                disabled={values["loanType"] != "flow"}
                required={true}
                step={1000}
                min={0}
                max={1000000}
                type="number"
                className="form-control"
                value={values["loanVolume"]}
                name="volume"
                id="volume"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoanInformation;
