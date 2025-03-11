import{ag as j,b as n,m as E,j as e,C as c,H as b,p as s,Q as k,y as w}from"./index-6iWKD2A3.js";const P=()=>{const[p]=j(),r=p.get("numeroCommande"),[h,d]=n.useState(!0),[m,i]=n.useState(null),[v,x]=n.useState(!1),[f,g]=n.useState(null),y=E();return n.useEffect(()=>{(async()=>{if(!r){console.error("Erreur: Numéro de commande manquant."),i("Numéro de commande manquant."),d(!1);return}try{console.log("Envoi de la requête de validation pour la commande:",r);const a=await fetch(`https://cl-back.onrender.com/commande/validate/${r}`,{method:"PATCH"});if(console.log("Réponse de validation:",{status:a.status,ok:a.ok}),!a.ok)throw new Error("Erreur lors de la validation de la commande.");console.log("Envoi de la requête pour récupérer la commande:",r);const t=await fetch(`https://cl-back.onrender.com/commande/${r}`);if(console.log("Réponse de récupération de la commande:",{status:t.status,ok:t.ok}),!t.ok)throw new Error("Erreur lors de la récupération de la commande.");const o=await t.json();console.log("Données de la commande reçues:",o),g(o);const u={nom:o.nom,adresseMail:o.adresseMail,cle:o.cle,prix:parseFloat(o.prix),telephone:o.telephone,shippingMethod:o.shippingMethod,typeLivraison:o.typeLivraison};console.log("Envoi de l'email avec le body suivant:",u);const l=await fetch("https://cl-back.onrender.com/mail/confirmation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(console.log("Réponse de l'envoi de l'email:",{status:l.status,ok:l.ok}),!l.ok)throw new Error("Erreur lors de l'envoi de l'email.");console.log("La commande est validée et l'email a été envoyé avec succès."),x(!0)}catch(a){console.error("Erreur dans processOrder:",a),a.message&&a.message.includes("envoi de l'email")?i("Le mail n'a pas pu être envoyé à cause d'un problème dans nos services. Veuillez appeler le 01 42 67 48 61 pour obtenir des informations sur votre commande."):i(a.message)}finally{d(!1)}})()},[r]),h?e.jsxs(c,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(b,{}),e.jsx(s,{variant:"h6",sx:{mt:2},children:"Veuillez patienter, confirmation de la commande en cours..."})]}):m?e.jsx(c,{sx:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"h6",color:"error",children:m})}):e.jsx(c,{maxWidth:"sm",sx:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",px:2},children:e.jsx(k,{elevation:3,sx:{p:{xs:3,sm:4},textAlign:"center",borderRadius:2,width:"100%"},children:v?e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h5",sx:{color:"success.main",mb:2,fontWeight:"bold"},children:"Paiement accepté !"}),e.jsx(s,{variant:"body1",sx:{color:"success.main",mb:4},children:"Votre paiement a été accepté et la commande est validée. Un email contenant les informations de livraison vous a été envoyé."}),f&&e.jsx(w,{variant:"contained",color:"primary",onClick:()=>y("/"),children:"Retour à l'accueil"})]}):e.jsx(s,{variant:"h5",color:"error",children:"Erreur lors de la validation de la commande."})})})};export{P as default};
