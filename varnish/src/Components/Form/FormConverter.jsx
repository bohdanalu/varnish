import React, { useEffect, useState } from "react";
import styles from "./FormConverter.module.css";
import { percents, inputsCurrency, inputsValidation } from "../../constants";
import SelectCurrency from "./SelectCurrency/SelectCurrency";
import Tooltip from "./Tooltip/Tooltip";
import Percents from "./Percents/Percents";

function FormConverter() {
  const [valuesCurrency, setValuesCurrency] = useState(inputsCurrency);
  const [formValues, setFormValues] = useState({
    amount: inputsValidation[0].value,
    recipientWallet: inputsValidation[1].value,
  });

  const [formErrors, setFormErrors] = useState({
    amount: "",
    recipientWallet: "",
  });

  const [avaliable, setAvaliable] = useState(100);
  const [fee, setFee] = useState(0.002);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    setTotal(formValues.amount - formValues.amount * fee);
  }, [formValues.amount, fee]);

  const handelGetPercent = (percent) => {
    const selectedPercent = percents.find((item) => item === percent);
    const amount = (selectedPercent * parseFloat(avaliable)) / 100;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      amount: amount,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(formValues);
    setFormValues({ ...formValues, [name]: value });
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { amount, recipientWallet } = formValues;
    const errors = {};

    if (!amount) {
      errors.amount = "Amount is required";
    } else if (parseFloat(amount) < 0.00001) {
      errors.amount = `Amount should be greater than or equal to 0.00001`;
    } else if (parseFloat(amount) > avaliable) {
      errors.amount = `Amount should not exceed ${avaliable}`;
    }

    if (!recipientWallet) {
      errors.recipientWallet = "Recipient Wallet is required";
    } else if (recipientWallet.length < 25) {
      errors.recipientWallet = `Recipient Wallet is too short`;
    } else if (recipientWallet.length > 36) {
      errors.recipientWallet = `Recipient Wallet is too long`;
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(recipientWallet);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="headerForm">
        <span className="title">You send</span>
        <img src="/images/logo-small.png" alt="Logo" />
      </div>
      <SelectCurrency
        values={valuesCurrency[0]}
        setValuesCurrency={setValuesCurrency}
      />
      <div
        className="inputBlock"
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "25px",
        }}
      >
        <div>
          <div className={styles.flex}>
            <label htmlFor={inputsValidation[0].name} className="label">
              {inputsValidation[0].label}
            </label>
            <span className="label">
              Avaliable: <span className={styles.span}>{avaliable}</span>{" "}
            </span>
          </div>
        </div>
        <input
          id={inputsValidation[0].id}
          name={inputsValidation[0].name}
          className="input"
          type={inputsValidation[0].type}
          value={formValues.amount}
          onChange={handleInputChange}
        />
        {formErrors.amount && (
          <span className="error">{formErrors.amount}</span>
        )}
        <div
          className={styles.btnMax}
          onClick={() =>
            setFormValues((prevFormValues) => ({
              ...prevFormValues,
              amount: avaliable,
            }))
          }
        >
          Max
        </div>
        <ul className={styles.listPer}>
          {percents.map((per) => (
            <Percents percent={per} onGetPercent={handelGetPercent} key={per} />
          ))}
        </ul>
      </div>
      <span
        className="title"
        style={{ display: "inline-block", marginBottom: "15px" }}
      >
        You Get
      </span>

      <SelectCurrency
        values={valuesCurrency[1]}
        setValuesCurrency={setValuesCurrency}
      />
      <div className="inputBlock">
        <input
          id={inputsValidation[1].id}
          name={inputsValidation[1].name}
          className="input"
          type={inputsValidation[1].type}
          placeholder={inputsValidation[1].placeholder}
          value={formValues.recipientWallet}
          onChange={handleInputChange}
        />
        {formErrors.recipientWallet && (
          <span className="error">{formErrors.recipientWallet}</span>
        )}

        <label htmlFor={inputsValidation[1].name} className="label">
          {inputsValidation[1].label}
        </label>
      </div>

      <div className="inputBlock">
        <div className={styles.flex}>
          <div className={styles.flex} style={{ gap: "17px" }}>
            <label className="label" style={{ textTransform: "uppercase" }}>
              Fee
            </label>
            <Tooltip />
          </div>
          <span className={styles.span}>
            {fee} <span className={styles.span}> ETH</span>{" "}
          </span>
        </div>
        <div
          className="input"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span className="label">Total</span>
          <span>{total}</span>
        </div>
      </div>
      <button className="btn" type="submit">
        Transfer now
      </button>
    </form>
  );
}

export default FormConverter;
