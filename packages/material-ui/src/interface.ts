
import React from 'react';
import { ReactElement, ReducerAction } from 'react';
export interface UIInterface {

}


export type InternalNamePath = (string | number)[];
export type NamePath = string | number | InternalNamePath;



export interface Meta {
    touched?: boolean;
    validating: boolean;
    errors: string[];
    name?: InternalNamePath;
    submitting?: boolean;
}

export interface InternalFieldData extends Meta {
    value: any;

}
// field interface
export interface FieldData extends Partial<Omit<InternalFieldData, 'name'>> {
    name: NamePath;
}
export interface FieldEntity {

    isFieldTouched: () => boolean;
    isFieldDirty: () => boolean;
    isFieldValidating: () => boolean;
    isListField: () => boolean;
    isList: () => boolean;
    validateRules: (options?: ValidateOptions) => Promise<string[]>;
    getMeta: () => Meta;
    getNamePath: () => InternalNamePath;
    getErrors: () => string[];
    props: {
        name?: NamePath;
        rules?: Rule[];
        dependencies?: NamePath[];
        initialValue?: any;
    };
}

export interface FieldError {
    name: string;
    errors: string[];
}
type RecursivePartial<T> = T extends object
    ? {
        [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
    }
    : any;
export interface Callbacks<Values = any> {
    onValuesChange?: (changedValues: any, values: Values) => void;
    onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
    onFinish?: (values: Values) => void;
    onFinishFailed?: (errorInfo: ValidateErrorEntity<Values>) => void;
}

export interface FormInstance<Values = any> {

    getFieldValue: (name: NamePath) => any;
    getFieldsValue(): Values;
    getFieldsValue(nameList: NamePath[] | true, filterFunc?: (meta: Meta) => boolean): any;
    getFieldError: (name: NamePath) => string[];
    getFieldsError: (nameList?: NamePath[]) => FieldError[];
    isFieldsTouched(nameList?: NamePath[], allFieldsTouched?: boolean): boolean;
    isFieldsTouched(allFieldsTouched?: boolean): boolean;
    isFieldTouched: (name: NamePath) => boolean;
    isFieldValidating: (name: NamePath) => boolean;
    isFieldsValidating: (nameList: NamePath[]) => boolean;
    resetFields: (fields?: NamePath[]) => void;
    setFields: (fields: FieldData[]) => void;
    setFieldsValue: (value: RecursivePartial<Values>) => void;
    validateFields: ValidateFields<Values>;

    submit: () => void;
}

export interface InternalHooks {
    dispatch: (action: any) => void;
    initEntityValue: (entity: FieldEntity) => void;
    registerField: (entity: FieldEntity) => () => void;
    useSubscribe: (subscribable: boolean) => void;

    setCallbacks: (callbacks: Callbacks) => void;
    getFields: (namePathList?: InternalNamePath[]) => FieldData[];
    setValidateMessages: (validateMessages: ValidateMessages) => void;
    setPreserve: (preserve?: boolean) => void;
}


export type InternalFormInstance = Omit<FormInstance, 'validateFields'> & {
    validateFields: InternalValidateFields;

    /**
     * Passed by field context props
     */
    prefixName?: InternalNamePath;

    validateTrigger?: string | string[] | false;

    getInternalHooks: (secret: string) => InternalHooks | null;
};


//-------------------------------------------------------------------------------------------------------------
//                                                  RULE INTERFACE
//-------------------------------------------------------------------------------------------------------------
//basic rule for validating field
interface BaseRule {
    enum?: any[];
    len?: number;
    max?: number;
    message?: string | ReactElement;
    min?: number;
    pattern?: RegExp;
    required?: boolean;
    transform?: (value: any) => any;
    type?: RuleType;
    whitespace?: boolean;
    validateTrigger?: string | string[];
}

export interface ValidatorRule {
    message?: string | ReactElement;
    validator: Validator;
}

type AggregationRule = BaseRule & Partial<ValidatorRule>;


interface ArrayRule extends Omit<AggregationRule, 'type'> {
    type: 'array';
    defaultField?: RuleObject;
}

export type RuleObject = AggregationRule | ArrayRule;



export type Rule = RuleObject;
type Validator = (
    rule: RuleObject,
    value: any,
    callback: (error?: string) => void,
) => Promise<void | any> | void;


export interface ValidateErrorEntity<Values = any> {
    values: Values;
    errorFields: { name: InternalNamePath; errors: string[] }[];
    outOfDate: boolean;
}

export type RuleType =
    | 'string'
    | 'number'
    | 'array'
    | 'boolean'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'object'
    | 'enum'
    | 'date'
    | 'url'
    | 'hex'
    | 'email';


export type InternalValidateFields<Values = any> = (
    nameList?: NamePath[],
    options?: ValidateOptions,
) => Promise<Values>;
export type ValidateFields<Values = any> = (nameList?: NamePath[]) => Promise<Values>;
export interface ValidateOptions {
    triggerName?: string;
    validateMessages?: ValidateMessages;
    /**
     * Recursive validate. It will validate all the name path that contains the provided one.
     * e.g. ['a'] will validate ['a'] , ['a', 'b'] and ['a', 1].
     */
    recursive?: boolean;
}



//-------------------------------------------------------------------------------------------------------------
//                                                  VALIDATING INTERFACE
//-------------------------------------------------------------------------------------------------------------
type ValidateMessage = string | (() => string);
export interface ValidateMessages {
    default?: ValidateMessage;
    required?: ValidateMessage;
    enum?: ValidateMessage;
    whitespace?: ValidateMessage;
    date?: {
        format?: ValidateMessage;
        parse?: ValidateMessage;
        invalid?: ValidateMessage;
    };
    types?: {
        string?: ValidateMessage;
        method?: ValidateMessage;
        array?: ValidateMessage;
        object?: ValidateMessage;
        number?: ValidateMessage;
        date?: ValidateMessage;
        boolean?: ValidateMessage;
        integer?: ValidateMessage;
        float?: ValidateMessage;
        regexp?: ValidateMessage;
        email?: ValidateMessage;
        url?: ValidateMessage;
        hex?: ValidateMessage;
    };
    string?: {
        len?: ValidateMessage;
        min?: ValidateMessage;
        max?: ValidateMessage;
        range?: ValidateMessage;
    };
    number?: {
        len?: ValidateMessage;
        min?: ValidateMessage;
        max?: ValidateMessage;
        range?: ValidateMessage;
    };
    array?: {
        len?: ValidateMessage;
        min?: ValidateMessage;
        max?: ValidateMessage;
        range?: ValidateMessage;
    };
    pattern?: {
        mismatch?: ValidateMessage;
    };
}

export type ValidateTriggerType = 'onChange' | 'onBlur'


export interface IFieldStore {
    name: string
    value: string
    defaultValue?: string
    error?: boolean
    validating?: boolean
    dependencies?: string[]

}

export interface SchemaField {
    title: string
    name: string
    help?: string
    type: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'list'
    widget?: string
    componentprops: {

        type: 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'password' | 'url' |'time'|
        'file' | 'month' | 'number' | 'radio' | 'range' | 'week' | 'text' | 'select' | 'pinInput' | 'textarea' | 'switch'|'customized'
        trigger?: string
        valueProps?: string
        select?: {
            valueSet: { [name: string]: string }
            multiple?: boolean
        },
        checkbox?: {
            valueSet: { [name: string]: string },
            disabled?: string[]
            direction?: 'column' | 'row'
        }

        // used in range and number
        range?: {
            min?: number
            max?: number
            step?: number
            orientation?: 'vertical' | 'horizontal'
        },
        number?: {
            min?: number
            max?: number
            step?: number
            precision?: number
        },
        textarea?: {
            resize?: 'horizontal' | 'vertical' | 'none'
        }
        radio?: {
            valueSet: { [name: string]: string }
        },
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
        file?: {
            accept?: string
        },

        list?: {
            showAdd?: boolean
            addText?: string
            showRemove?: boolean
            defaultValue?: any
        },
        input?:{
            addAfter?:string
            addBefore?:string
            prefix?:string
            postfix?:string
        },
        

    },

    uistyle?: UIInterface
    
    isListChild?: boolean
    listChildren?: { [name: string]: SchemaField }
    isRequired?: boolean 
    isDisable?:boolean
    isReadOnly?:boolean,
    hidden?:boolean
    placeholder?: string,
    defaultValue?: any,
    // list of dependencies
    dependencies?: string[],
    // used for handle dependencies
    actions?: string
    rules?: RuleObject
}

export interface SchemaType {
    name: string
    displayType?: 'column' | 'row' |'inline'
    properties: {
        [name: string]: SchemaField
    }

    uistyle?: UIInterface

}


export interface ComponentBaseProps {
    required?: boolean
    disabled?: boolean

    error?: boolean
    onChange?: any
    value?: any
    checked?: any
    placeholder?:string
    label?:string
}




export type ComponentUnionProps = ComponentBaseProps