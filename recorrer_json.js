const jsonCompleto=
{
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
              "color": "gg"
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
 for(rol of jsonCompleto.roles){ //recorrer json en la posicion Roles con el nombre o como ROL
   console.log("Categoria :", rol.category)
   for(user of rol.users){
      console.log('Los Usuarios de la categoria :', user.name, ' color:', user.color)
   }
   
 }
//  console.log(jsonOriginal)