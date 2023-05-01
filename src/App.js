import "./App.css";
import React, { useState } from "react";
import {marked} from "marked";
import useLocalStorage from "./hooks/useLocalStorage";
import Docs from "./components/Docs";
import basicSyntax from "./data/data";

const App = () => {
  const [code, setCode] = useLocalStorage("markdown", "## Hello");
  const [compiled, setCompiled] = useLocalStorage("preview",'<h2 id="hello">Hello</h2>');
  const [activeTab, setActiveTab] = useState("code");


  const toggleTab = (tab) => setActiveTab(tab);

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>

      <div className="container">
        <div className="btns">
          <button
            onClick={() => toggleTab("code")}
            className={activeTab === "code" ? "btn" : ""}
          >
            MarkDown
          </button>

          <button
            onClick={() => toggleTab("preview")}
            className={activeTab === "preview" ? "btn2" : ""}
          >
            Preview
          </button>

          <button
            onClick={() => toggleTab("docs")}
            className={activeTab === "docs" ? "btn3" : ""}
          >
            Docs
          </button>
        </div>
        {activeTab === "code" && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {activeTab === "preview" && (
          <div>
            <textarea value={compiled} readOnly />
          </div>
        )}

        {activeTab === "docs" && (
          <div className="area">
            <Docs basicSyntax={basicSyntax}/>
          </div>
        )}
        
      </div>
    </>
  );
};

export default App;
