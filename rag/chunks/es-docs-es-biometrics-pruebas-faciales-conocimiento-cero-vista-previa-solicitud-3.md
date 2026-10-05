---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-vista-previa-solicitud-3"
title: "Vista Previa HumanID — Solicitud"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-vista-previa.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/preview"
sourceAnchor: "Solicitud"
slug: "/biometrics/humanID-vista-previa"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-vista-previa"
---

# Vista Previa HumanID
**API path(s):** /v2/human-id/preview

## Solicitud

func main() {
    payload := map[string]interface{}{
        "os": "DESKTOP",
        "humanID": "AudwN6Jmxms3tEOYQg5fyZCEYLwiDuFFheQfYTmKQCUAJ99y4MWI/7A6ouXW1VIR8fAVCL4rgbNKYR/cjZpS085JPq4vedbB08ZIansX2cW+XPyJjFKRnY5qxRgwUfyzLMrCpu83qdORwfdX3YOXo4Poff0eYNtqho3h+bJB1uaMvK9QHN8uYWR9rxafMqFtNWJWSuC/V3yKeG3eRYSaoNcW6mHycjQMxvVcpDn1fMWK+93/8h12/iyBBbwH3JSlki4LlgaOeP/S8o1CRSrFpmysSpJDoh+pesDIpuTxlK7WMeNvv33n+nj+1oUZ51ijyV/m9CMvY+VjvuMzAZJogHh+dNEi57YWAVZTBBiwu/M02mPXCQcSYNyNCD1EPyFcEEGqVXRZb5fghdi0qpxN57YZ3dspMlmXnlv0Bq6nbnO4/KmuWtZqx/1riFK3ejb+EJu23p281IeXxAMet1+rHgPgQZYs4j7CSIHeGnY9YL1A53Ozb2/bYddQoAdwRx6M6BdtLbUG4XbUB3uZT3azQvf86Um0SnWrsJ1GejiIrlAXliOKqLc/sHY8XNWaDen0WzPB1R5dFi7Sn+egQSf2TA1oN0AhCxlBcJ85yHSnIYMOfLk+NnLgt3ImOcku9dZIWkhpvAcvAPqNx5437kBmo9bWchzZ5idfNhtCpgCkRyz8/yImGYnQH5YFBrsap0/ZeW5ISVOCooxEXFonWrUTjO5hqm/lfWiw16Lq8uvOi8CszvwuSQUN4O7gCdzUzgLoeDBv8XHXRkrTuKkfSPB2slZ3J1xHysMLW/o2Hv6v6e99rDwaL7UaMa/zZ5o1zr87/sz9SBWpQ/t8vGHjk68KmvMnnk3vQOOcrogrDN5fwKPqSwEQp7WnvKhm8ShBYt+T",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/human-id/preview", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
