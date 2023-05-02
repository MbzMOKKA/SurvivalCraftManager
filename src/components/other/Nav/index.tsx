//Imports
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { StyledBackButton, StyledNav, StyledPageInfos } from "./style";
import backArrow from "../../../assets/images/icons/back_arrow.png";

//Component of the navigation on the left
export default function Nav() {
    const location = useLocation();
    const [xmlData, setXmlData] = useState<Document | null>(null);
    const fileLocation = `C:/Users/dylan/AppData/Local/Packages/20961CandyRufusGames.Survivalcraft2_c7jxg4av36ap6/LocalState/Settings.xml`;
    useEffect(() => {
        fetch(fileLocation)
            .then((response) => response.text())
            .then((text) => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");
                setXmlData(xmlDoc);
            })
            .catch((error) => {
                console.error("Error fetching XML:", error);
            });
    }, []);

    console.log(xmlData);

    return (
        <StyledNav>
            <StyledBackButton route="back">
                <img src={backArrow} alt="Go back" draggable={false} />
            </StyledBackButton>
            <StyledPageInfos>{location.pathname}</StyledPageInfos>
        </StyledNav>
    );
}
