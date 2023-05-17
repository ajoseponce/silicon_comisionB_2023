const jsonCompleto={
  "roles":[
     {
        "category":"MOD",
        "users":[
           {
              "name":"Mod",
              "color":"ORANGE"
           },
           {
              "name":"Staff",
              "color":null
           }
        ]
     },
     {
        "category":"ADMINISTRATOR",
        "users":[
           {
              "name":"ADMIN",
              "color":"RED"
           },
           {
              "name":"CO-ADMIN",
              "color":"BLUE"
           },
           {
              "name":"MANAGER",
              "color":"SKYBLUE"
           }
        ]
     }
  ]
 }
 for(rol of jsonCompleto.roles){
   console.log("Categoria :", rol.category)
   for(pepita of rol.users){
      console.log('Usuario  :', pepita.name, ' color:', pepita.color)
   }
   
 }
//  console.log(jsonOriginal)