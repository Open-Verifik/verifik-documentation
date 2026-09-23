---
id: "en-docs-api-tags-preview-tag-response-3"
title: "Preview Tag — Response"
sourcePath: "docs/api/tags/preview-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/preview"
sourceAnchor: "Response"
---

# Preview Tag
**API path(s):** /api/tags/preview

Preview a tag to see if it exists or check pricing information before leasing it.

## Response

```json
{
  "data": {
    "preview": {
      "passwordLayer": "WithPassword",
      "publicData": {
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "zelfName": "myname.zelf",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "leaseExpiresAt": "2026-01-15 01:31:07",
        "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA"
      },
      "requireLiveness": true
    },
    "tagObject": {
      "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "owner": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk",
      "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "publicData": {
        "Content-Type": "image/png",
        "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS/y9ZGt9QZyj4xEa5lMrkqPsxuwZNwtXWvuTg57CxLntanbn8e+qFpmw90WMlFcmDOekci3U3ikALMUBRnk0/JL/6vswvvFfNp5txDiXOpeSO19hFsfKjA0cNVpWUti2xZVbH9NjPnMnUMMHP2jeQxVKeVDgdz9FNaUjmKs0UFZYEMhEQW8uDeyHTruY+rIfEY0nbCUCz+FFcVjo2Lz7odNSYEaazCPdNO/NHcSL/gTeBo/uqi/Q1czCWDqgOFkOgHJ9TPrVkCDMJsdJcXf0ndTdshkwWKY2vui7yD5/tNG7yIGQsOfIQY/c0bPGScOGhS7WsIPNmEYM8KOQnJZ17OoOMlLariQkXmpvm+9IkbS68suG4BRJ/2EFKW8aScHxi/yyUL1wWq5Ajyu7Xg5PccVQzl7gb0ivZeMzhWj70D8xNlTQaSxYLLB+PkmsYN+33Dny9WA1rWUgEUZMN1jYPZjZ8MEPjVbhzgQdzPxJEaCUTm0eWVVmnlRSXrpEXFXY7Vgz2nwz5ISbM+1xyb3+oIhAdhHuu5nuizA8f6CstjThtPP/feqMMpj4l0Y1IHD2RVHYE5h56QzNu+Vw38no4AWpiDsZIMODG0ALZ4MAbPNfdhv4G+U21YxHlsMqExTGwefoIO9/7vLaPP73yPdODSXxSX7TWuFqt/IaVOFRvIAIlQ39vCemQKbCH5AC+AxCl6HvdBu5gGv/369w4mvrFC5b1wfDFJl4petOmuBsBGqQcjtVMcBnWj/h3dxkCG7hElWYQkZLAtjLYiYN/XbM7MNfQtcjx8Jxq0gkCyBnUKM+25cFujNu0NZVLznQgBWSDBpxGDJLk3gS55ZSbiWPMcewYzHDBDnzqI3y8CxeAUWVY+Vu6yf2aDr1ikfy9KK3OFYyrTjUxdMLf5cn4pcJUgCGGSvEHeHOmQVP08JCo2ouPdrb3Q+739cI/1VAOGXvhqH5GNmwA7vYyTCILaD3I1jTJJTfj4FneTkT9aKdxe0nIobJbHMo8PU4TzsK09G9PBaz2Fq0BUMVhfPCoVRRqNkj2C5it8QtLnW3CW+ymA40fcCAbWsg259VZ3xhUx8nJlNz7poCbbci4X09hfBEMo4STf4T13/soR9E2Sw8g2KIp4waCoK1BHOYcKPKnoBAruUJlCexD67Kme5nBPxSF0rT/cw7uGJds4zdcA3dMHL1cFQDeL7T2xmPDTHraMPtfVHTAIWjSYJnT8gB/NCdmedq/kRUl9TT4mxeicsqVrBs=",
        "hasPassword": "true",
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "zelfName": "myname.zelf",
        "leaseExpiresAt": "2026-01-15 01:31:07"
      },
      "size": "20443",
      "zelfProofQRCode": "data:image/png;base64,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",
      "zelfProof": "Avgl3a9BDAg1LhTQnmszezf/Xm0bePHAs4JikXQFuspbwWXu0VOKMPe9YE0Rf2++3w1ofqnLdcTJufX99HiLHtPS//eIkOsZJkXf3otci+sdrswpXb+WcOy/S/+/PI+wBQdUCJa728fOXLx62j7lpt0onxFfMwNP5K5Lp+aEkxI0WfzQwOuKVH3nppMMlG/FIpaHST5ocuuFo3xkvVLdT4OeJMfmHAF+PfdoUMR+EreNs8R7JJ9eTXuFYh+/phZ/iB76dvvSEUy8ecB/ZaZX77U/whSWtmqCSXWwkoWpQBeLXGeEb4M4vaTvxhYDXx1Q8MnlryZc8NT7LKhLiK6ghobEG1/QAc1/W8ClHVTxz4EYXl2m0+P8MnC91X+v1xWcw7cU0GmJHHS1SGkRlisKY3fHoCfE0FS6UBsUlUDVTl7WaulJ1Hdgap0Dl8cCZtsFKrdrDkW1LVcqS8qjQO4eqcDjSwOIlAkKnrHfAp3HgGQ0V5r7o7CCQps6WHdV10VXdCGRFwoZJWPbkMWKv6vuqJiOK9Pf501EtXwQR1m7SgeoqSZhgt9dXCVSeRQkkaVKbvjhnZ3vcYnSGNBagP4TOL8HRgfBRPmfM90TX6jW7BIXA8erBROBXpmROGlvnSC86HKzeC9hNWK4f3Sr/RVd0awAPahAXzW02JaSyYghnBNy2LoqOtC3dGn1fi61gkTR4ZJ0ZGTyhlFcUqNV+3zz6IqYUJzTVywfTE7BT5Lm++F8BwcvjU7wfpQ408sJWSzOXFow6mF7jaJtd9li93rZMm2rjvhXReqom1Lo2WFe7y0RtMwLUTEYBRtMtjZQCGLW0ulOrKKSeQM+iSe4G8uluR2+ZAVf+GBi73NO/JqgaMPBchYMS6ojDwCClz4w+JQnIA9NzYsgAftjJi/r19iUo7m26xCpWrzlslfy7kno9R1Ndf0Eh2gEcJAQlrlMF90O7fYGKaNKYqj54CEPu6B34pNZUFWGlaXpdNeQDKAg0OopECvnw2KeFYmAbVhCddG158H5OgoQPtLuW36UbqgHjeSHusCjERF+KW9C4iHS5eBr3+4PSlTBvuDF7ClXcqxtvy7+jn4yy9y+VGd3peecIRwrmLjCJF1gXRPSLTC9nvWdCcvvC2GSPhYFr4B+tTArmScmJ7U7QXgJAfc0KHfuK8WcOJ/EwDseOGKqQ2497sV6YMybXzVhMm2YoLTzxHEeRzYZS1ThpHG6q2OpSG+ClFTpjkT6MJBtzdrmb/GZFxHxOkSGMej1RxO308zqL3CTGGlYs1iTFTk="
    }
  }
}
```
