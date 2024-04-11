/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zpmigq9fzbdz6bv",
    "created": "2024-04-11 16:35:04.548Z",
    "updated": "2024-04-11 16:35:04.548Z",
    "name": "todo_card",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bzfzuk3s",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "muitnmtd",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zpmigq9fzbdz6bv");

  return dao.deleteCollection(collection);
})
