import $ from "jquery";
import { executeRequest } from "./execute";

const CX = "008879908602287688075:uiry3e9gwqa";
const ACCESS_KEY = "AIzaSyBtbi_ELCSvK8Pzne3hc_EFUepTCoW8MYk";

export function getImage(term) {
    let images = [];
    const params = {
        q: term,
        key: ACCESS_KEY,
        cx: CX,
        searchType: "image"
    };
    const url =
        "https://www.googleapis.com/customsearch/v1?" + new URLSearchParams(params).toString();
    $.ajax({ type: "GET", url: url, async: false }).done((data) => {
        images = data["items"];
    });
    return images[Math.floor(Math.random() * images.length)];
}
