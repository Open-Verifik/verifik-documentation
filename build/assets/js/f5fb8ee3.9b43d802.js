"use strict";(self.webpackChunkverifik_documentation=self.webpackChunkverifik_documentation||[]).push([["96026"],{57250(e,r,t){t.d(r,{A:()=>s});var a=t(74848);t(96540);var o=t(34164),i=t(57663);function n({children:e,className:r,hidden:t}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)("tabItem_Ymn6",r),hidden:t,children:e})}function s({children:e,className:r,value:t}){let{selectedValue:o,lazy:l}=(0,i.uc)(),d=t===o;return!d&&l?null:(0,a.jsx)(n,{className:r,hidden:!d,children:e})}},50773(e,r,t){t.d(r,{A:()=>h});var a=t(74848);t(96540);var o=t(34164),i=t(88287),n=t(57663),s=t(28584),l=t(19863);function d({className:e}){let{selectedValue:r,selectValue:t,tabValues:i,block:l}=(0,n.uc)(),c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),h=e=>{let a=e.currentTarget,o=i[c.indexOf(a)].value;o!==r&&(u(a),t(o))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":l},e),children:i.map(({value:e,label:t,attributes:i})=>(0,a.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>{c.push(e)},onKeyDown:p,onClick:h,...i,className:(0,o.A)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":r===e}),children:t??e},e))})}function c({children:e}){return(0,a.jsx)("div",{className:"margin-top--md",children:e})}function u({className:e,children:r}){return(0,a.jsxs)("div",{className:(0,o.A)(i.G.tabs.container,"tabs-container","tabList__CuJ"),children:[(0,a.jsx)(d,{className:e}),(0,a.jsx)(c,{children:r})]})}function h(e){let r=(0,l.A)(),t=(0,n.OC)(e);return(0,a.jsx)(n.O_,{value:t,children:(0,a.jsx)(u,{className:e.className,children:(0,n.vT)(e.children)})},String(r))}},57663(e,r,t){t.d(r,{OC:()=>h,O_:()=>f,uc:()=>x,vT:()=>c});var a=t(74848),o=t(96540),i=t(56347),n=t(99989),s=t(96629),l=t(80618),d=t(41367);function c(e){return o.Children.toArray(e).filter(e=>"\n"!==e)}function u({value:e,tabValues:r}){return r.some(r=>r.value===e)}function h(e){let r,{defaultValue:t,queryString:a=!1,groupId:c}=e,h=function(e){let{values:r,children:t}=e;return(0,o.useMemo)(()=>{let e=r??o.Children.toArray(t).flatMap(e=>{if(!e)return[];if((0,o.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return[e];let r="string"==typeof e.type?e.type:e.type.name;throw Error(`Docusaurus error: Bad <Tabs> child <${r}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`)}).map(({props:{value:e,label:r,attributes:t,default:a}})=>({value:e,label:r,attributes:t,default:a})),a=(0,l.XI)(e,(e,r)=>e.value===r.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>`'${e.value}'`).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,t])}(e),[p,x]=(0,o.useState)(()=>(function({defaultValue:e,tabValues:r}){if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:t,tabValues:h})),[f,m]=function({queryString:e=!1,groupId:r}){let t=(0,i.W6)(),a=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,s.aZ)(a),(0,o.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(t.location.search);r.set(a,e),t.replace({...t.location,search:r.toString()})},[a,t])]}({queryString:a,groupId:c}),[b,v]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[t,a]=(0,d.Dv)(r);return[t,(0,o.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:c}),j=u({value:r=f??b,tabValues:h})?r:null;return(0,n.A)(()=>{j&&x(j)},[j]),{selectedValue:p,selectValue:(0,o.useCallback)(e=>{if(!u({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);x(e),m(e),v(e)},[m,v,h]),tabValues:h,lazy:e.lazy??!1,block:e.block??!1}}let p=(0,o.createContext)(null);function x(){let e=o.useContext(p);if(!e)throw Error("useTabsContext() must be used within a Tabs component");return e}function f(e){return(0,a.jsx)(p.Provider,{value:e.value,children:e.children})}},88810(e,r,t){t.r(r),t.d(r,{default:()=>d});var a=t(74848),o=t(96540),i=t(58388),n=t(56347),s=t(50773),l=t(57250);function d(){let[e,r]=(0,o.useState)(60),t=(0,n.W6)(),d="/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt";return(0,o.useEffect)(()=>{let e=setInterval(()=>{r(r=>r<=1?(clearInterval(e),t.push(d),0):r-1)},1e3);return()=>clearInterval(e)},[t,d]),(0,a.jsx)(i.A,{title:"Informaci\xf3n de Veh\xedculo por N\xfamero de VIN RUNT",description:"Consulta informaci\xf3n completa de veh\xedculos en Colombia mediante VIN",children:(0,a.jsxs)("div",{style:{padding:"2rem",maxWidth:"1200px",margin:"0 auto"},children:[(0,a.jsxs)("div",{style:{padding:"1.5rem",backgroundColor:"#fff3cd",border:"1px solid #ffc107",borderRadius:"8px",marginBottom:"2rem",textAlign:"center"},children:[(0,a.jsx)("h2",{style:{marginTop:0},children:"\u26A0\uFE0F Esta p\xe1gina ha sido movida"}),(0,a.jsx)("p",{children:"Esta URL pertenec\xeda a la documentaci\xf3n antigua de GitBook y ahora se encuentra en una nueva ubicaci\xf3n."}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Nueva URL:"})," ",(0,a.jsx)("a",{href:d,children:d})]}),(0,a.jsxs)("p",{children:["Ser\xe1s redirigido autom\xe1ticamente en ",(0,a.jsx)("strong",{children:e})," segundos..."]}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:d,style:{display:"inline-block",padding:"12px 24px",backgroundColor:"#2563eb",color:"white",textDecoration:"none",borderRadius:"6px",fontWeight:"bold"},children:"Ir a la Nueva Documentaci\xf3n"})})]}),(0,a.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,a.jsx)("h1",{children:"Informaci\xf3n de Veh\xedculo por N\xfamero de VIN RUNT"}),(0,a.jsx)("h3",{children:"Endpoint"}),(0,a.jsx)("pre",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"4px",overflow:"auto"},children:(0,a.jsx)("code",{children:"https://api.verifik.co/v2/co/runt/vehicle-by-vin"})}),(0,a.jsx)("p",{children:"El servicio de Consulta de Veh\xedculos te permite obtener datos completos sobre un automotor inscrito en Colombia utilizando su VIN (N\xfamero de Identificaci\xf3n del Veh\xedculo). Este servicio ofrece informaci\xf3n exhaustiva incluyendo el estado del automotor, tipo de servicio, clase, marca, modelo, color y especificaciones t\xe9cnicas como peso y capacidad de asientos."}),(0,a.jsx)("h3",{children:"Headers"}),(0,a.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"1.5rem"},children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{style:{backgroundColor:"#f5f5f5"},children:[(0,a.jsx)("th",{style:{padding:"0.75rem",border:"1px solid #ddd",textAlign:"left"},children:"Name"}),(0,a.jsx)("th",{style:{padding:"0.75rem",border:"1px solid #ddd",textAlign:"left"},children:"Value"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #ddd"},children:"Accept"}),(0,a.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #ddd"},children:(0,a.jsx)("code",{children:"application/json"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #ddd"},children:"Authorization"}),(0,a.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #ddd"},children:(0,a.jsxs)("code",{children:["Bearer ","<token>"]})})]})]})]}),(0,a.jsx)("h3",{children:"Par\xe1metros"}),(0,a.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:"1.5rem"},children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{style:{backgroundColor:"#f5f5f5"},children:[(0,a.jsx)("th",{style:{padding:"0.75rem",border:"1px solid #ddd",textAlign:"left"},children:"Name"}),(0,a.jsx)("th",{style:{padding:"0.75rem",border:"1px solid #ddd",textAlign:"left"},children:"Type"}),(0,a.jsx)("th",{style:{padding:"0.75rem",border:"1px solid #ddd",textAlign:"left"},children:"Required"}),(0,a.jsx)("th",{style:{padding:"0.75rem",border:"1px solid #ddd",textAlign:"left"},children:"Description"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #ddd"},children:(0,a.jsx)("code",{children:"vin"})}),(0,a.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #ddd"},children:"string"}),(0,a.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #ddd"},children:"Yes"}),(0,a.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #ddd"},children:"VIN del automotor del que deseas consultar informaci\xf3n."})]})})]}),(0,a.jsx)("h3",{children:"Solicitud"}),(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"node",label:"Node.js",children:(0,a.jsx)("pre",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"4px",overflow:"auto"},children:(0,a.jsx)("code",{children:`import axios from "axios";

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehicle-by-vin", {
  params: { vin: "3MVDM2WLAML234946" },
  headers: { 
    Accept: "application/json", 
    Authorization: \`Bearer \${process.env.VERIFIK_TOKEN}\` 
  },
});
console.log(data);`})})}),(0,a.jsx)(l.A,{value:"python",label:"Python",children:(0,a.jsx)("pre",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"4px",overflow:"auto"},children:(0,a.jsx)("code",{children:`import os, requests

url = "https://api.verifik.co/v2/co/runt/vehicle-by-vin"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"vin": "3MVDM2WLAML234946"}
r = requests.get(url, headers=headers, params=params)
print(r.json())`})})}),(0,a.jsx)(l.A,{value:"php",label:"PHP",children:(0,a.jsx)("pre",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"4px",overflow:"auto"},children:(0,a.jsx)("code",{children:`<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=3MVDM2WLAML234946');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Accept' => 'application/json',
  'Authorization' => 'Bearer <tu_token>'
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
?>`})})})]}),(0,a.jsx)("h3",{children:"Respuesta"}),(0,a.jsx)("p",{children:"La respuesta incluye informaci\xf3n exhaustiva del veh\xedculo, incluyendo datos t\xe9cnicos, informaci\xf3n general, estado del automotor, p\xf3lizas de responsabilidad civil, seguros SOAT, solicitudes, tarjeta de operaci\xf3n y revisiones t\xe9cnico-mec\xe1nicas."}),(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"200",label:"200",children:(0,a.jsx)("pre",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"4px",overflow:"auto",maxHeight:"400px"},children:(0,a.jsx)("code",{children:`{
  "data": {
    "datosTecnicos": {
      "noEjes": "2",
      "pasajerosSentados": "7",
      "pesoBrutoVehicular": "2990"
    },
    "informacionGeneral": {
      "cilindraje": "2982",
      "claseVehiculo": "CAMPERO",
      "color": "PLATA METALICO",
      "estadoDelVehiculo": "ACTIVO",
      "fechaMatricula": "07/03/2013",
      "linea": "PRADO",
      "marca": "TOYOTA",
      "modelo": "2013",
      "noPlaca": "NET603",
      "tipoServicio": "Particular"
    },
    "soat": [...],
    "tecnoMecanica": [...]
  },
  "signature": {
    "dateTime": "October 10, 2025 8:12 PM",
    "message": "Certified by Verifik.co"
  }
}`})})}),(0,a.jsx)(l.A,{value:"404",label:"404",children:(0,a.jsx)("pre",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"4px",overflow:"auto"},children:(0,a.jsx)("code",{children:`{
    "code": "NotFound",
    "message": "Record not found."
}`})})}),(0,a.jsx)(l.A,{value:"409",label:"409",children:(0,a.jsx)("pre",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"4px",overflow:"auto"},children:(0,a.jsx)("code",{children:`{
  "code": "MissingParameter",
  "message": "missing vin"
}`})})})]}),(0,a.jsx)("h3",{children:"Notas"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"VIN (N\xfamero de Identificaci\xf3n del Veh\xedculo) es un identificador \xfanico de 17 caracteres para automotores."}),(0,a.jsx)("li",{children:"Este servicio ofrece la misma informaci\xf3n exhaustiva que el servicio basado en placa."}),(0,a.jsx)("li",{children:'El estado del veh\xedculo "ACTIVO" indica que el automotor est\xe1 actualmente inscrito y operativo.'}),(0,a.jsx)("li",{children:"Los datos del seguro SOAT se incluyen cuando est\xe1n disponibles."})]}),(0,a.jsx)("div",{style:{marginTop:"3rem",padding:"1.5rem",backgroundColor:"#e7f3ff",border:"1px solid #2563eb",borderRadius:"8px",textAlign:"center"},children:(0,a.jsxs)("p",{style:{margin:0,fontWeight:"bold"},children:["Para ver la documentaci\xf3n completa y actualizada, visita:"," ",(0,a.jsx)("a",{href:d,style:{color:"#2563eb"},children:d})]})})]})]})})}}}]);