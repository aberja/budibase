exports.tableId = {
  in: "path",
  name: "tableId",
  required: true,
  description: "The ID of the table which this request is targeting.",
  schema: {
    type: "string",
  },
}

exports.rowId = {
  in: "path",
  name: "rowId",
  required: true,
  description: "The ID of the row which this request is targeting.",
  schema: {
    type: "string",
  },
}

exports.appId = {
  in: "header",
  name: "x-budibase-app-id",
  required: true,
  description: "The ID of the app which this request is targeting.",
  schema: {
    type: "string",
  },
}
