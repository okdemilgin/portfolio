import { createContext, useEffect, useState } from "react";
import { textDataTr } from "../data/textDataTr";
import { textDataEn } from "../data/textDataEn";

export const Contexts = createContext();

const ContextsProvider = ({ children }) => {
    const [ lang, setLang ] = useState("tr"); 
    const [textData, setTextData ] = useState(textDataTr);
    const langHandler = () => {
        lang === "tr" ? setLang("en") : setLang("tr")
    }

    useEffect(() => {
        console.log(lang);
        console.log(textData);
    }, [lang]);

    useEffect(() => {
        if (lang === "tr") {
            setTextData(textDataTr);
        } else if (lang === "en") {
            setTextData(textDataEn);
        }
    }, [lang]);

    const ContextVars = {
        lang, 
        setLang, 
        textData,
        setTextData,
        langHandler
    };

    return (
        <Contexts.Provider value={ContextVars}>{children}</Contexts.Provider>
    )
}

export default ContextsProvider;