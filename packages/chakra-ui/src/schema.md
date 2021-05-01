---
order: 3
title: JSON Schema
---

# JSON Schema

## Introduction

- schema is the required props for SchemaForm component, and it is used for describing the structure, validation, and dependencies of form. For example:

```ts

    {
        title:"exampleform",
        properties:{
            // a basic input field which records username
            username:{
                title:"username",
                name:"username",
                type:"string"
                componentprops:{
                    type:"text"
                }
            },
            // a basic form list
            list:{
                title:"An example list",
                name:"example",
                listChildren:{
                    username:{
                        title:"username",
                        name:"username",
                        type:"string"
                        componentprops:{
                        type:"text"
                    }
            },
                }
            }
        }

    }

```
<br/>

## Common Attributes
The attributes that shared among all kinds of fields
- `title`,`help`,`uistyle`, `widget`,and `placeholder` are used for describing the style of a field
-  `isRequired`,`rules`, and `dependencies` are used for describing the functionality of a field
- `componentprops` provides detailed options to render a field
<br/>

###### title
- type:`string`
- detail: used for describing the label of field

###### help
- type:`string`
- detail: add extra infomration for field

###### type
- type: `string` | `number` | `boolean` | `array` | `object` | `list`
- detail: the basic type of field

###### widegt
- type:`string`
- detail:customized widget name, and schemaform require another property called `widget` which is a map of widget name and components

###### isRequired
- type: `boolean`
- detail: set the field as required

###### placeholder
- type:`string`
- detail: set thew placeholder for field

###### defaultValue
- type: `any`
- detail: The default value for field regarding the data type of your field

###### dependencies
- type:`string[]`
- detail: set a list of dependent fields' name for current field

###### isReadOnly
- type: `boolean`
- detail: set field readonly

###### isDisabled
- type:`boolean`
- detail: disab;e the field