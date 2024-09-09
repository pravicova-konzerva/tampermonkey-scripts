// @name         Copy MarkDown link
// @version      2024-09-07
// @description  Copy text with current URL link for MarkDown
// @author       ministerstvopravdy
// @icon64       data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPk1hcmtkb3duIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0yMi4yNjkgMTkuMzg1SDEuNzMxYTEuNzMgMS43MyAwIDAgMS0xLjczLTEuNzNWNi4zNDVhMS43MyAxLjczIDAgMCAxIDEuNzMtMS43M2gyMC41MzhhMS43MyAxLjczIDAgMCAxIDEuNzMgMS43M3YxMS4zMDhhMS43MyAxLjczIDAgMCAxLTEuNzMgMS43MzF6bS0xNi41LTMuNDYydi00LjVsMi4zMDggMi44ODUgMi4zMDctMi44ODV2NC41aDIuMzA4VjguMDc4aC0yLjMwOGwtMi4zMDcgMi44ODUtMi4zMDgtMi44ODVIMy40NjF2Ny44NDd6TTIxLjIzMSAxMmgtMi4zMDhWOC4wNzdoLTIuMzA3VjEyaC0yLjMwOGwzLjQ2MSA0LjAzOXoiLz48L3N2Zz4=
// @match       *://*/*
// @grant       GM_registerMenuCommand
// ==/UserScript==

GM_registerMenuCommand('Copy for github', function() {
    let selectedText = window.getSelection().toString();
    if(!selectedText) {
        console.log("Text couldn't be copied!");
        return;
    }
    let url = window.location.href;
    copyToClipboard(`[${selectedText}](${url})`);
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied');
    }, function(err) {
        console.error('Text copy error: ', err);
    });
}
