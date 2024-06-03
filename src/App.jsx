import React, { useState } from "react";
import QRCode from "qrcode.react"; // Default import

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "sans-serif",
    backgroundColor: "#f0f0f0",
    margin: 0
  },
  qrcodeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  },
  qrcode: {
    width: 256,
    height: 256
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333"
  },
  inputContainer: {
    marginBottom: "20px"
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
    "::placeholder": {
      color: "#999"
    },
    ":focus": {
      borderColor: "#007bff"
    }
  }
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setQrValue(event.target.value);
  };

  return (
    <div style={styles.root}>
      <div style={styles.qrcodeContainer}>
        <div style={styles.title}>Scan this QR Code</div>
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter JSON data, link, or string"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        {qrValue && (
          <QRCode
            level="Q"
            style={styles.qrcode}
            value={qrValue}
          />
        )}
      </div>
    </div>
  );
};

export default App; // Default export
