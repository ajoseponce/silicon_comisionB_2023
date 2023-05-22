const json_pelis =
{
    "info": 
    {
        "_postman_id": "a2f917c8-995e-4cb8-9e9b-e434a6dad781",
        "name": "api-movies-series",
        "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
    },
    "item": [
        {
            "name": "Users",
            "item": [
                {
                    "name": "GetUsers",
                    "id": "11babc8a-6c5b-42d0-b16c-2cbc318dd79d",
                    "request": {
                        "method": "GET",
                        "header": [],
                        "url": "https://api-movie-series.herokuapp.com/users"
                    },
                    "response": []
                },
                {
                    "name": "PostUser",
                    "id": "8d8ff618-b1e5-4ac5-b5df-d67bc40c211e",
                    "request": {
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": "https://api-movie-series.herokuapp.com/users"
                    },
                    "response": []
                },
                {
                    "name": "LoginUser",
                    "id": "7b904407-af20-424d-ae73-579761066a87",
                    "request": {
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": "https://api-movie-series.herokuapp.com/users/login"
                    },
                    "response": []
                },
                {
                    "name": "GetUserId",
                    "id": "048279a1-591e-45b2-a28b-084ff4ca6493",
                    "request": {
                        "method": "GET",
                        "header": [],
                        "url": "https://api-movie-series.herokuapp.com/users/5fff99fc484bed1ce4789fb1"
                    },
                    "response": []
                },
                {
                    "name": "PutUser",
                    "id": "befc5ffd-9f95-4f6a-90e1-5f237d3e31c1",
                    "request": {
                        "method": "PUT",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": "https://api-movie-series.herokuapp.com/users/edit/60034eb4ac9e0b002243a346"
                    },
                    "response": []
                },
                {
                    "name": "DeleteUser",
                    "id": "b00e6990-e865-4044-a938-57b667bece5a",
                    "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": "https://api-movie-series.herokuapp.com/users/delete/60034eb4ac9e0b002243a346"
                    },
                    "response": []
                }
            ],
            "id": "9adec014-a76a-429d-a770-9b8b3136c058"
        },
        {
            "name": "Movies",
            "item": [
                {
                    "name": "GetMovies",
                    "id": "cee14265-4efc-4bee-bb72-d1fa9bb08c3e",
                    "request": {
                        "method": "GET",
                        "header": [],
                        "url": "https://api-movie-series.herokuapp.com/movies"
                    },
                    "response": []
                },
                {
                    "name": "PostMovie",
                    "id": "61a1b8b4-9c81-4cda-b781-875c456d40be",
                    "request": {
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "formdata",
                            "formdata": []
                        },
                        "url": "https://api-movie-series.herokuapp.com/movies"
                    },
                    "response": []
                },
                {
                    "name": "GetMovieId",
                    "id": "425e70f7-89a5-4ec1-9c58-9f75f7c783a6",
                    "request": {
                        "method": "GET",
                        "header": [],
                        "url": "https://api-movie-series.herokuapp.com/movies/5fff9e3a484bed1ce4789fb5"
                    },
                    "response": []
                },
                {
                    "name": "GetMoviesType",
                    "id": "78eff502-7700-455e-a81a-500241af5898",
                    "request": {
                        "method": "GET",
                        "header": [],
                        "url": "https://api-movie-series.herokuapp.com/movies/type/serie"
                    },
                    "response": []
                },
                {
                    "name": "GetMoviesCategory",
                    "id": "3eb568d2-96a4-4898-a48d-15b0dcf505f0",
                    "request": {
                        "method": "GET",
                        "header": [],
                        "url": "https://api-movie-series.herokuapp.com/movies/category/animation"
                    },
                    "response": []
                },
                {
                    "name": "PutMovie",
                    "id": "a33fc59a-6809-492b-9588-eb90906081de",
                    "request": {
                        "method": "PUT",
                        "header": [],
                        "body": {
                            "mode": "formdata",
                            "formdata": []
                        },
                        "url": "https://api-movie-series.herokuapp.com/movies/edit/600351a8ac9e0b002243a347"
                    },
                    "response": []
                },
                {
                    "name": "DeleteMovie",
                    "id": "5f8821db-9899-41be-ac16-774a8fde7726",
                    "request": {
                        "method": "DELETE",
                        "header": [],
                        "url": "https://api-movie-series.herokuapp.com/movies/delete/600351a8ac9e0b002243a347"
                    },
                    "response": []
                }
            ],
            "id": "81f518b0-7ed6-4b81-a08e-849e271c8ba8"
        }
    ]
}
// console.log(json_pelis.info)
 for(it of json_pelis.item){ 
    console.log("Nombre: ", it.name)
    for (i of it.item){
        console.log("Items: ", i.name, "y el request es ", i.request.url)
    }
}