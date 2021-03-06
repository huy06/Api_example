define({ "api": [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/index.js",
    "group": "_home_noexception_Documents_Apidoc_example_api_index_js",
    "groupTitle": "_home_noexception_Documents_Apidoc_example_api_index_js",
    "name": "GetUserId"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>Optional Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Mandatory Lastname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "defaultValue": "DE",
            "description": "<p>Mandatory with default value &quot;DE&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "18",
            "description": "<p>Optional Age with default 18.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/index.js",
    "group": "_home_noexception_Documents_Apidoc_example_api_index_js",
    "groupTitle": "_home_noexception_Documents_Apidoc_example_api_index_js",
    "name": "PostUser"
  }
] });
