import Tabs from "./ui/Tabs";
import React, { useState } from "react";
import "./loanInformation.css";
import "./businessInfo.css";
import "./personalInfo.scss";
function BusinessInformation(props) {
  const [selected, setSelected] = useState(props.getValues()["companyType"]);
  function getcompanySubField(field) {
    switch (field) {
      case "נותני שירותים":
        return [
          "עריכת דין",
          "משפטים",
          "ראיית חשבון",
          "ייעוץ מס",
          "שירותים פיננסים",
          "שירותים עסקיים",
          "ביטוח",
          "שירותי מטבע",
          "שירותי ניהול",
          "אדמיניסטרציה",
          "שמירה",
          "אבטחה",
          "הנדסה",
          "תכנון",
          "ניקיון",
          "הדברה",
          "ספורט - סטודיו",
          'חד"כ',
          "הדרכה",
          "קוסמטיקה",
          "איפור",
          "עיצוב שיער",
          "יופי",
          "ייעוץ",
          "מתן שירותי דת",
          "מורים פרטיים ומרצים",
        ];
      case "מסחר קמעונאי וסיטונאי":
        return [
          "חומרי בניין",
          "מזון",
          "משקאות",
          "דלק",
          "גז",
          "תכשיטים",
          "טקסטיל ( בדים, בגדים, טקסטיל לבית )",
          "סחורות שונות",
        ];
      case "פנאי , רווחה וסעד":
        return [
          "סוכנות נסיעות",
          "ארגון טיולים",
          "פעילויות בילוי ופנאי כולל חוגים",
          "מתקני ספורט",
          "פעילויות יצירה",
          "אומנות",
          "בידור כולל חוגים",
        ];
      case "חינוך ובריאות":
        return [
          "הפעלת קייטנות",
          "רופאים",
          "נותני שירותי עזר רפואיים",
          "שירותי רווחה וסעד ( אח/ות, מטפל/ת, עובד/ת רווחה )",
          "הפעלת גני ילדים",
        ];
      case "מידע ותקשורת":
        return [
          "תחזוקה ותיקון",
          "ייעוץ בתחום המחשבים",
          "עיצוב",
          "צילום",
          "תרגום",
          "טלפוניה ואינטרנט",
          "הפקה והפצת סרטים וספרים",
          "מידע ועיבוד נתונים",
          "שיווק דיגיטאלי",
          "שירותים דיגיטאליים",
          "פרסום",
        ];
      case "שירותי אירוח ומזון":
        return [
          "מסעדה",
          "בר",
          "בית קפה",
          "אולם אירועים",
          "קייטרינג",
          "קיוסקים",
          "דוכנים",
          "מזנונים",
          "מלוניות",
          "צימר",
          "אכסניה",
        ];
      case "תחבורה, אחסנה, דואר ובלדרות":
        return ["הסעות נוסעים", "אחסנה", "שליחויות", "הובלות כללי"];
      case 'נדל"ן':
        return [
          "שיפוץ",
          "עבודות בניין",
          "קבלנות בניין, ביצוע, גמר",
          'יזמות בנדל"ן ( ללא בנייה )',
          'נדל"ן - שמאות',
          'נדל"ן - תיווך',
          'נדל"ן - אחר',
          "התקנת תשתיות חשמל",
          "תקשרות",
          "מיזוג אוויר",
          "טיפול במים",
          "ביוב",
          "פסולת ואשפה",
          "עבודות תשתית",
          "עפר וסלילה",
          "הנדסיות אחרות",
          "עבודות נגרות",
          "מוצרי ברזל",
          "גמר לבניין",
        ];
      case "מסחר ותיקון כלי רכב מנועיים":
        return [
          "מסחר ברכבים יד שניה",
          "תיקון כלי רכב מנועיים ( כולל אופנועים )",
          "מסחר בחלקי חילוף לכלי רעב מנועיים",
          "ליסינג והשכרת רכב",
        ];
      case "ייצור ותעשיה":
        return [
          "מזון",
          "משקאות",
          "רהיטים",
          "נגרות",
          "מוצרי פלסטיק",
          "תכשיטים",
          "צורפות",
          "מסגריה",
          "עיבוד מתכת",
          "צעצועים",
          "משחקים",
          "בגדים",
          "פרטי טקסטיל שאינם לבוש",
        ];
      case "חקלאות, כריה וחציבה":
        return [
          "גידול בעלי חיים",
          "דייג",
          "גידול צמחים",
          "גידול פרחים",
          "גידול פירות",
          "כריה",
          "חציבה",
          "הפקת גז",
          "נפט טבעי",
        ];
    }
  }
  console.log(selected);

  return (
    <div className="grid-information--container">
      <form className="form">
        <h2 className="page-title"> פרטי העסק</h2>
        <h5 className="sub-title">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח
          איבן איף, ברומץ כלרשט מיחוצים.
        </h5>
        <div className="form-group-radio">
          <div className="radio-input-wrapper">
            <div className="type">
              <input
                onChange={(event) => {
                  setSelected("ltd");
                  props.resetField("ADC");
                  props.resetField("companyType");
                  props.register("companyType", { value: event.target.id });
                  props.setHasWorkers(true);
                }}
                checked={selected == "ltd"}
                className="form-check-input inpt"
                type="radio"
                name="companyType"
                id="ltd"
              />
              <label className="form-check-label" htmlFor="ltd">
                חברה בע"מ
              </label>{" "}
            </div>
            <div className="type">
              <input
                className="form-check-input inpt"
                type="radio"
                name="companyType"
                id="cld"
                onChange={(event) => {
                  setSelected("cld");
                  props.resetField("companyType");
                  props.register("companyType", { value: event.target.id });
                  props.resetField("DRAFT");
                  props.resetField("CIN");
                }}
                checked={selected == "cld"}
              />
              <label className="form-check-label" htmlFor="cld">
                עוסק מורשה
              </label>{" "}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="year" className="inpt">
            שנת הקמה
          </label>
          <input
            value={props.getValues()["cyear"]}
            onChange={(event) => {
              props.resetField("cyear");
              props.register("cyear", { value: event.target.value });
            }}
            required={true}
            type="number"
            className="form-control"
            placeholder=""
            name="year"
            id="year"
          />
        </div>

        {selected === "cld" && (
          <>
            <div className="form-group">
              <label htmlFor="businessName" className="inpt">
                שם העסק
              </label>
              <input
                value={props.getValues()["companyName"]}
                onChange={(event) => {
                  props.resetField("companyName");
                  props.register("companyName", { value: event.target.value });
                }}
                required={true}
                type="text"
                className="form-control"
                placeholder=""
                name="businessName"
                id="businessName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bussinesStreet" className="inpt">
                רחוב
              </label>
              <input
                value={props.getValues()["companyAddress"]}
                onChange={(event) => {
                  props.resetField("companyAddress");
                  props.register("companyAddress", {
                    value: event.target.value,
                  });
                }}
                required={true}
                type="text"
                className="form-control"
                placeholder=""
                name="bussinesStreet"
                id="bussinesStreet"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bussinesCity" className="inpt">
                עיר{" "}
              </label>
              <input
                value={props.getValues()["companyCity"]}
                onChange={(event) => {
                  props.resetField("companyCity");
                  props.register("companyCity", {
                    value: event.target.value,
                  });
                }}
                required={true}
                type="text"
                className="form-control"
                placeholder=""
                name="bussinesCity"
                id="bussinesCity"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bussinesPcode" className="inpt">
                מיקוד{" "}
              </label>
              <input
                value={props.getValues()["companyPcode"]}
                onChange={(event) => {
                  props.resetField("companyPcode");
                  props.register("companyPcode", {
                    value: event.target.value,
                  });
                }}
                required={true}
                type="text"
                className="form-control"
                placeholder=""
                name="bussinesPcode"
                id="bussinesPcode"
              />
            </div>
            <div className="form-group-radio">
              <div className="radio-input-wrapper">
                <div className="type">
                  <label className="inpt">האם יש עובדים? </label>
                  <input
                    onChange={() => {
                      props.setHasWorkers(true);
                    }}
                    checked={props.hasWorkers && props.hasWorkers}
                    className="form-check-input inpt"
                    type="radio"
                    name="hasWorkers"
                    id="hasWorkers"
                  />
                  <label className="form-check-label" htmlFor="hasWorkers">
                    יש עובדים{" "}
                  </label>{" "}
                </div>
                <div className="type">
                  <input
                    className="form-check-input inpt"
                    type="radio"
                    name="hasWorkersFalse"
                    id="cld"
                    onChange={() => {
                      props.setHasWorkers(false);
                    }}
                    checked={!props.hasWorkers}
                  />
                  <label className="form-check-label" htmlFor="hasWorkersFalse">
                    אין עובדים{" "}
                  </label>{" "}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="first" className="inpt">
            תחום פעילות העסק
          </label>
          <select
            value={props.getValues()["field"]}
            className="form-select"
            required={true}
            onChange={(event) => {
              props.resetField("companyField");
              props.register("companyField", { value: event.target.value });
            }}
            id="field"
            name="field"
          >
            <option value="נותני שירותים">נותני שירותים</option>
            <option value="מסחר קמעונאי וסיטונאי">מסחר קמעונאי וסיטונאי</option>
            <option value="פנאי , רווחה וסעד"> פנאי , רווחה וסעד</option>
            <option value="חינוך ובריאות">חינוך ובריאות</option>
            <option value="מידע ותקשורת">מידע ותקשורת</option>
            <option value="שירותי אירוח ומזון">שירותי אירוח ומזון</option>
            <option value="תחבורה, אחסנה, דואר ובלדרות">
              תחבורה, אחסנה, דואר ובלדרות
            </option>
            <option value='נדל"ן'>נדל"ן</option>
            <option value="מסחר ותיקון כלי רכב מנועיים">
              מסחר ותיקון כלי רכב מנועיים
            </option>
            <option value="ייצור ותעשיה">ייצור ותעשיה</option>
            <option value="חקלאות, כריה וחציבה">חקלאות, כריה וחציבה</option>
          </select>
        </div>

        {props.getValues()["companyField"] ? (
          <div className="form-group">
            <label htmlFor="first" className="inpt">
              תת תחום
            </label>
            <select
              value={props.getValues()["companySubField"]}
              className="form-select"
              required={true}
              onChange={(event) => {
                props.resetField("companySubField");
                props.register("companySubField", {
                  value: event.target.value,
                });
              }}
              id="field"
              name="field"
            >
              {getcompanySubField(props.getValues()["companyField"]).map(
                (sub, id) => (
                  <option key={id} value={sub}>
                    {sub}
                  </option>
                )
              )}
            </select>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <br />
      </form>
    </div>
  );
}

export default BusinessInformation;
