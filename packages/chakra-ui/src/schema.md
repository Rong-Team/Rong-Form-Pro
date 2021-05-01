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

## Functional Attributes

There are some properties that handles business logic

#### Object
`componentprops` is used for describing the detailed setting for field component

```ts
 componentprops: {
        
        type: 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'password' | 'url' |
        'file' | 'month' | 'number' | 'radio' | 'range' | 'week' | 'text' | 'select' | 'pinInput' | 'textarea' | 'switch'
        // trigger sets the function that invokes the value change
        trigger?: string
        // valueProps sets the value of field
        valueProps?: string

        // detail setting for select component
        select?: {
            valueSet: { [name: string]: string }
            multiple?: boolean  // enable multiple choice
        },
        // set checkbox component
        checkbox?: {
            valueSet: { [name: string]: string },
            disabled?: string[]
            direction?: 'column' | 'row'
        }

        // detail setting for range component
        range?: {
            min?: number
            max?: number
            step?: number
            orientation?: 'vertical' | 'horizontal'
        },
        //detail setting for number input component
        number?: {
            min?: number
            max?: number
            step?: number
            precision?: number
        },
        //detail setting for textarea component
        textarea?: {
            resize?: 'horizontal' | 'vertical' | 'none'
        }
        //detail setting for radio component
        radio?: {
            valueSet: { [name: string]: string }
        },
        // detail setting for pin input component
        pinInput?: {
            length: number
            type?: 'alphanumeric' | 'number'
            opt?: boolean
            mask?: boolean
        }
        //used in date related
        date?: {
            min?: string,
            max?: string
        },
        // detail setting for file component
        file?: {
            accept?: string
        },
        // detail setting for list form
        list?: {
            showAdd?: boolean
            addText?: string
            showRemove?: boolean
            defaultValue?: any
        },
        //detail setting for input component
        input?:{
            addAfter?:string
            addBefore?:string
            prefix?:string
            postfix?:string
        },
        

    }
```

#### listChildren
`listChildren` is used for describing the list form

```ts
listChildren?: { [name: string]: SchemaField }
```
The value of listChildren is the SchemaField which used for describing the field.


#### Rules
- Rong form supports async validation, and [async-validator](https://www.npmjs.com/package/async-validator) is the dependency for both rong-form and @rong-form-pro

```ts
    password:{
        name:"password",
        title:"password",
        componentprops:{
            type:"passsword"
        },
        rules:{type:"string",len:8}
    }
```